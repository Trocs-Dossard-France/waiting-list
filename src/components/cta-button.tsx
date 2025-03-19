import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function CTAButton({ children, className, onClick }: CTAButtonProps) {
  return (
    <Button
      className={cn(
        "bg-white/90 hover:bg-white text-black font-semibold py-6 px-8 text-lg rounded-md transition-all shadow-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
} 