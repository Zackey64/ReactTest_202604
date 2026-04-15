
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface TitleCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const S_Card = ({ children, className }: CardProps) => {
  return (
    <div>
      <div className={cn("border-gray-200 border rounded-xl shadow-md overflow-hidden", className)}>
        {children}
      </div>
    </div>
    
  );
};

export const S_TitleCard = ({ title, children, className }: TitleCardProps) => {
  return (
    <div>
      <div className={cn("border-gray-200 border rounded-xl overflow-hidden shadow-md", className)}>
        <div className="px-2 border-b border-gray-200">
          {title}
        </div>
        {children}
      </div>
    </div>
    
  );
};

