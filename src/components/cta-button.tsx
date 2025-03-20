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
        "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-8 text-lg rounded-xl transition-all shadow-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
} 