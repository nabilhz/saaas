import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[4px] border border-border bg-card p-6",
        hover && "card-accent-hover",
        className,
      )}
      {...props}
    />
  );
}
