import type { ChannelRevenue } from "../domain/type";

export function ProgressBar({ channel, value, max }: ChannelRevenue) {
  const percent = (value / max) * 100;

  return (
    <div className="mb-4">
      <div className="flex justify-between text-white/80 mb-1 font-semibold text-sm">
        <span>{channel}</span>
        <span>R${value.toFixed(1)} Mi</span>
      </div>
      <div className="h-4 rounded-full bg-[#102A59] overflow-hidden">
        <div
          className="h-4 rounded-full bg-cyan-400 transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}