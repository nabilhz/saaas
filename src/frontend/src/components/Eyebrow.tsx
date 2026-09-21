import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export function Eyebrow({ children, accent = false, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        accent ? "accent-label" : "eyebrow",
        "inline-block",
        className,
      )}
    >
      {children}
    </span>
  );
}
