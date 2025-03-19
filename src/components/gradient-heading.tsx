import { cn } from "@/lib/utils";

type GradientHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <h1
      className={cn(
        "text-6xl sm:text-7xl font-bold tracking-tight text-gradient-heading",
        className
      )}
    >
      {children}
    </h1>
  );
} 