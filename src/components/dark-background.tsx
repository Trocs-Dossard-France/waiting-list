import { cn } from "@/lib/utils";

type DarkBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

export function DarkBackground({ children, className }: DarkBackgroundProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black pointer-events-none" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(100,0,20,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
} 