import {
  BarChart2,
  Activity,
  Clock,
  Percent,
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-16 bg-[#0B1F44] flex flex-col items-center py-6 space-y-6 text-blue-400">
      <BarChart2 size={24} className="hover:text-white cursor-pointer" />
      <Activity size={24} className="hover:text-white cursor-pointer" />
      <Clock size={24} className="hover:text-white cursor-pointer" />
      <Percent size={24} className="hover:text-white cursor-pointer" />
    </aside>
  );
}