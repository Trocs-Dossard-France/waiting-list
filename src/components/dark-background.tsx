import { cn } from "@/lib/utils";

type DarkBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function DarkBackground({ children, className }: DarkBackgroundProps) {
  return (
    <div className={cn("relative bg-background", className)}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 