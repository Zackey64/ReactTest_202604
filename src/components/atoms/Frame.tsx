
import { cn } from "@/lib/utils";

interface FrameProps {
  children: React.ReactNode;
  className?: string;
  type?: "base" | "main" | "accent" | "basefill" | "mainfill" | "accentfill" ;
}

export const Frame = ({ 
  children,
  className,
  type = "base"
}: FrameProps) => {

  const types = {
    base:       "bg-base text-text  border border-base-line",
    main:       "bg-main text-main-text",
    accent:     "bg-acnt text-acnt-text",
    basefill:   "bg-base-fill text-text",
    mainfill:   "bg-main-fill text-text",
    accentfill: "bg-acnt-fill text-text",
  };
  
  return (

    <div className={cn("rounded-xl overflow-hidden",types[type], className)}>
      {children}
    </div>
    
  );
};


