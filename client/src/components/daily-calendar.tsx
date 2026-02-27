import { useMemo } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isToday, startOfWeek, endOfWeek } from "date-fns";
import type { DailyActivity } from "@shared/schema";

interface DailyCalendarProps {
  activities: DailyActivity[];
  dailyGoal: number;
  currentMonth?: Date;
}

export function DailyCalendar({ activities, dailyGoal, currentMonth = new Date() }: DailyCalendarProps) {
  const days = useMemo(() => {
    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    return eachDayOfInterval({ start, end });
  }, [currentMonth]);

  const activityMap = useMemo(() => {
    const map = new Map<string, DailyActivity>();
    activities.forEach((a) => {
      map.set(a.date, a);
    });
    return map;
  }, [activities]);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  return (
    <div className="w-full">
      <div className="text-center mb-4">
        <h3 className="font-bold text-lg" data-testid="text-calendar-month">
          {format(currentMonth, "MMMM yyyy")}
        </h3>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div key={i} className="text-center text-xs font-bold text-muted-foreground py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const activity = activityMap.get(dateStr);
          const isCurrentMonth = day >= monthStart && day <= monthEnd;
          const goalMet = activity && activity.questionsAnswered >= dailyGoal;
          const hasActivity = activity && activity.questionsAnswered > 0;
          const today = isToday(day);

          return (
            <div
              key={dateStr}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium relative ${
                !isCurrentMonth
                  ? "text-muted-foreground/30"
                  : today
                  ? "ring-2 ring-primary ring-offset-1 ring-offset-background"
                  : ""
              } ${
                goalMet
                  ? "bg-chart-1/20 text-chart-1 font-bold"
                  : hasActivity
                  ? "bg-chart-4/15 text-chart-4 font-bold"
                  : ""
              }`}
              data-testid={`calendar-day-${dateStr}`}
            >
              {format(day, "d")}
              {goalMet && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-chart-1" />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-4 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-chart-1/20" />
          <span className="text-xs text-muted-foreground">Goal met</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm bg-chart-4/15" />
          <span className="text-xs text-muted-foreground">Active</span>
        </div>
      </div>
    </div>
  );
}
