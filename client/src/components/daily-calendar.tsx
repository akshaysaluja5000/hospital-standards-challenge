import { useMemo, useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, startOfWeek, endOfWeek } from "date-fns";
import { Zap, CheckCircle2, XCircle, HelpCircle, X } from "lucide-react";
import type { DailyActivity } from "@shared/schema";

interface DailyCalendarProps {
  activities: DailyActivity[];
  dailyGoal: number;
  currentMonth?: Date;
}

export function DailyCalendar({ activities, dailyGoal, currentMonth = new Date() }: DailyCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

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

  const selectedActivity = selectedDate ? activityMap.get(selectedDate) : null;

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
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={dateStr}
              type="button"
              onClick={() => {
                if (isCurrentMonth) {
                  setSelectedDate(isSelected ? null : dateStr);
                }
              }}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium relative transition-all ${
                !isCurrentMonth
                  ? "text-muted-foreground/30 cursor-default"
                  : "cursor-pointer hover:ring-2 hover:ring-primary/30"
              } ${
                isSelected
                  ? "ring-2 ring-primary bg-primary/10"
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
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-4 rounded-xl bg-muted/50 border border-card-border p-4" data-testid="calendar-day-detail">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-sm">
              {format(new Date(selectedDate + "T12:00:00"), "EEEE, MMMM d, yyyy")}
            </h4>
            <button
              type="button"
              onClick={() => setSelectedDate(null)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-close-day-detail"
            >
              <X size={16} />
            </button>
          </div>

          {selectedActivity && selectedActivity.questionsAnswered > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <Zap size={16} className="text-chart-4 flex-shrink-0" />
                <div>
                  <p className="text-lg font-black" data-testid="text-day-xp">{selectedActivity.xpEarned}</p>
                  <p className="text-xs text-muted-foreground">XP Earned</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <HelpCircle size={16} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-lg font-black" data-testid="text-day-total">{selectedActivity.questionsAnswered}</p>
                  <p className="text-xs text-muted-foreground">Total Questions</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <CheckCircle2 size={16} className="text-chart-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-black text-chart-1" data-testid="text-day-correct">{selectedActivity.correctAnswers}</p>
                  <p className="text-xs text-muted-foreground">Correct</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-card border border-card-border p-3">
                <XCircle size={16} className="text-destructive flex-shrink-0" />
                <div>
                  <p className="text-lg font-black text-destructive" data-testid="text-day-wrong">{selectedActivity.questionsAnswered - selectedActivity.correctAnswers}</p>
                  <p className="text-xs text-muted-foreground">Wrong</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground" data-testid="text-day-no-activity">No activity on this day.</p>
          )}
        </div>
      )}

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
