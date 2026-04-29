import { ChevronDown, Hospital, Stethoscope, Activity } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type PathwayMenuProps = {
  triggerLabel?: string;
  triggerVariant?: "ghost" | "outline";
  triggerSize?: "default" | "sm";
  align?: "start" | "end" | "center";
};

const PATHWAYS = [
  {
    href: "/hospitals",
    icon: Hospital,
    title: "Hospitals",
    description: "Joint Commission readiness",
    testId: "link-pathway-hospitals",
  },
  {
    href: "/clinics",
    icon: Stethoscope,
    title: "Ambulatory Clinics",
    description: "Joint Commission AHC & AAAHC surveys",
    testId: "link-pathway-clinics",
  },
  {
    href: "/asc",
    icon: Activity,
    title: "Ambulatory Surgery Centers",
    description: "AAAHC, Joint Commission & CMS pathways",
    testId: "link-pathway-asc",
  },
];

export function PathwayMenu({
  triggerLabel = "For Your Facility",
  triggerVariant = "ghost",
  triggerSize = "default",
  align = "end",
}: PathwayMenuProps) {
  const [, setLocation] = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={triggerVariant}
          size={triggerSize}
          className="gap-1"
          data-testid="button-pathway-menu"
        >
          {triggerLabel}
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-72">
        {PATHWAYS.map(({ href, icon: Icon, title, description, testId }) => (
          <DropdownMenuItem
            key={href}
            onClick={() => setLocation(href)}
            data-testid={testId}
            className="py-2"
          >
            <Icon size={16} className="mr-2 mt-0.5 text-primary flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold">{title}</span>
              <span className="text-xs text-muted-foreground">
                {description}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
