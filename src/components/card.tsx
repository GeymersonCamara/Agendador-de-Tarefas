import { ChartAreaDefault } from "./chart/chart-area-default";

export function Card({
  title,
  subtitle,
  value,
  icon,
  colorClasses,
}: {
  title: string;
  subtitle: string;
  value: number;
  icon: React.ReactNode;
  colorClasses: string;
}) {
  return (
    <div
      className={`flex flex-col p-6 rounded-xl shadow-lg max-w-sm min-w-[280px] ${colorClasses} relative`}
      style={{
        boxShadow: `0 4px 15px ${colorClasses.includes("blue") ? "#3b82f6aa" : colorClasses.includes("green") ? "#10b981aa" : "#d946fdaa"}`,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-white/80">{title}</div>
        <div className="text-white/70">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        <ChartAreaDefault />
        {value}
        </div>
      <div className="text-xs text-white/70">
        {subtitle.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-white/20 h-8 w-full opacity-50" />
    </div>
  );
}