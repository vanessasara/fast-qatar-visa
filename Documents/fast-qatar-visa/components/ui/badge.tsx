import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "gold" | "maroon";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-muted text-foreground",
      success: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
      warning: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400",
      error: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
      gold: "bg-qatar-gold/20 dark:bg-qatar-gold/30 text-qatar-gold-700 dark:text-qatar-gold-300",
      maroon: "bg-qatar-maroon/10 dark:bg-qatar-maroon/20 text-qatar-maroon dark:text-qatar-maroon-300",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
