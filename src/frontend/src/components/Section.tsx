import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  alternate?: boolean;
  variant?: "hero" | "content" | "cta";
  containerClassName?: string;
}

export function Section({
  alternate = false,
  variant = "content",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const padding =
    variant === "hero"
      ? "section-hero"
      : variant === "cta"
        ? "section-cta"
        : "section-content";

  return (
    <section
      className={cn(
        padding,
        alternate ? "bg-muted" : "bg-background",
        className,
      )}
      {...props}
    >
      <div className={cn("container", containerClassName)}>{children}</div>
    </section>
  );
}
