
import { cn } from "@/lib/utils";

interface ThemeProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const S_Theme = ({ title, children, className }: ThemeProps) => {
  return (
    <div className={cn("p-0", className)}>
      <p className="px-2 font-bold border-l-8 border-b border-accent">
        {title}
      </p>
      <p className="py-2">
        {children}
      </p>
    </div>

  );
};

