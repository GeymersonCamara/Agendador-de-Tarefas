export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export interface Discussion {
  title: string;
  description: string;
  replies: number;
  time: string;
}