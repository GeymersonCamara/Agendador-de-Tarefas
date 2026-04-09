import { ChartAreaDefault } from "./chart/chart-area-default";

export function Card({
  title,
  subtitle,
  value,
  icon,
  colorClasses,
  chartData
}: {
  title: string;
  subtitle: string;
  value: number;
  icon: React.ReactNode;
  colorClasses: string;
  chartData: { date?: string; month?: string; total: number }[];
}) {
  return (
    <div
      className={`flex flex-col p-6 rounded-xl shadow-lg max-w-sm min-w-[280px] ${colorClasses} relative`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-primary/80 font-semibold">{title}</div>
        <div className="text-primary/70">{icon}</div>
      </div>
      <div className="text-3xl font-bold text-primary mb-1">
        <ChartAreaDefault data={chartData} />
        {value}
        </div>
      <div className="text-xs text-primary/70">
        {subtitle.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}