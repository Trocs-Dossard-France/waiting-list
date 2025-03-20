import { cn } from "@/lib/utils";

type GradientHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradientHeading({ children, className }: GradientHeadingProps) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground",
        className
      )}
    >
      {children}
    </h1>
  );
} 