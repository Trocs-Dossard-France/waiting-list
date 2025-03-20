import { cn } from "@/lib/utils";

type StatItemProps = {
  value: string;
  label: string;
  className?: string;
};

function StatItem({ value, label, className }: StatItemProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <span className="text-4xl font-bold text-primary">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function PlatformStats() {
  return (
    <div className="grid grid-cols-3 gap-10 w-full max-w-xl mx-auto my-10">
      <StatItem value="10,000+" label="Dossards Vendus" />
      <StatItem value="500+" label="Événements" />
      <StatItem value="5,000+" label="Utilisateurs" />
    </div>
  );
} 