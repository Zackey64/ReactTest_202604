
import { cn } from "@/lib/utils";

interface FrameProps {
  children: React.ReactNode;
  className?: string;
}



export const Frame = ({ children, className }: FrameProps) => {
  return (
    <div>
      <div className={cn("bg-bg-main border-bg-border border rounded-xl overflow-hidden", className)}>
        {children}
      </div>
    </div>
    
  );
};


