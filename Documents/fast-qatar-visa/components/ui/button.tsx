import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 rounded-lg";

    const variants = {
      primary:
        "bg-qatar-maroon text-white hover:bg-qatar-maroon-800 dark:hover:bg-qatar-maroon-600 focus:ring-qatar-maroon",
      secondary:
        "bg-muted text-foreground hover:bg-muted/80 dark:bg-muted dark:hover:bg-muted/60 focus:ring-ring",
      outline:
        "border-2 border-qatar-maroon text-qatar-maroon dark:border-qatar-gold dark:text-qatar-gold bg-transparent hover:bg-qatar-maroon hover:text-white dark:hover:bg-qatar-gold dark:hover:text-qatar-maroon-900 focus:ring-qatar-maroon dark:focus:ring-qatar-gold",
      ghost:
        "text-foreground hover:bg-muted dark:hover:bg-muted/50 focus:ring-ring",
      gold:
        "bg-qatar-gold text-white hover:bg-qatar-gold-500 dark:hover:bg-qatar-gold-300 focus:ring-qatar-gold",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-2",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
