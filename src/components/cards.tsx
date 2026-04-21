import type { CardProps } from "@/domain/type";

export const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-sm p-4">
    {title && (
      <h3 className="text-gray-700 font-semibold mb-3">{title}</h3>
    )}
    {children}
  </div>
);