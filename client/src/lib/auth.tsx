import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest, getQueryFn } from "./queryClient";
import type { User } from "@shared/schema";

type AuthUser = Omit<User, "password">;

interface AuthContextType {
  user: AuthUser | null;
  isGuest: boolean;
  isLoading: boolean;
  isAuthenticating: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, firstName: string, lastName: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  enterGuestMode: () => void;
  exitGuestMode: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isGuest, setIsGuest] = useState(false);

  const { data: user, isLoading } = useQuery<AuthUser | null>({
    queryKey: ["/api/auth/me"],
    queryFn: getQueryFn({ on401: "returnNull" }),
  });

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: { username: string; password: string }) => {
      const res = await apiRequest("POST", "/api/auth/login", { username, password });
      return await res.json();
    },
    onSuccess: (data) => {
      setIsGuest(false);
      queryClient.setQueryData(["/api/auth/me"], data);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async ({ username, firstName, lastName, password }: { username: string; firstName: string; lastName: string; password: string }) => {
      const res = await apiRequest("POST", "/api/auth/register", { username, firstName, lastName, password });
      return await res.json();
    },
    onSuccess: (data) => {
      setIsGuest(false);
      queryClient.setQueryData(["/api/auth/me"], data);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/auth/me"] });
    },
  });

  const enterGuestMode = useCallback(() => setIsGuest(true), []);
  const exitGuestMode = useCallback(() => setIsGuest(false), []);

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isGuest,
        isLoading,
        isAuthenticating: loginMutation.isPending || registerMutation.isPending,
        login: async (username, password) => {
          await loginMutation.mutateAsync({ username, password });
        },
        register: async (username, firstName, lastName, password) => {
          await registerMutation.mutateAsync({ username, firstName, lastName, password });
        },
        logout: async () => {
          await logoutMutation.mutateAsync();
        },
        enterGuestMode,
        exitGuestMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
