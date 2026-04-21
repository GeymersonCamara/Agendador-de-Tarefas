import type { NavItemProps } from "@/domain/type";

export const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <div
  onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ${
      active
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </div>
);