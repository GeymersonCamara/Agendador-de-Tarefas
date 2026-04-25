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

export type Post = {
  id: string;
  title: string;
  content?: string;
  createdAt: string;
  authorId: string;
  author?: {
    id: string;
    name: string;
    username?: string;
    avatarUrl?: string;
    profilePicture?: string;
    photoUrl?: string;
  };
};