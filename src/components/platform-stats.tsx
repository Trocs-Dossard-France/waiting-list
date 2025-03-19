type StatItemProps = {
  value: string;
  label: string;
};

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold text-white">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function PlatformStats() {
  return (
    <div className="grid grid-cols-3 gap-10 w-full max-w-xl mx-auto my-10">
      <StatItem value="10,000+" label="Bibs Sold" />
      <StatItem value="500+" label="Events" />
      <StatItem value="5,000+" label="Happy Users" />
    </div>
  );
} 