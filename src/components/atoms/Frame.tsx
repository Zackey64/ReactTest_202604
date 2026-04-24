
import { cn } from "@/lib/utils";

interface FrameProps {
  children: React.ReactNode;
  className?: string;
  type?: "base" | "main" | "accent" | "base_outline" | "main_outline" | "accent_outline" ;
}

export const Frame = ({ 
  children,
  className,
  type = "base"
}: FrameProps) => {

  const types = {
    base:       "bg-main border border-border",
    main:           "bg-main text-base",
    accent:         "bg-acnt text-base",
    base_outline:   "bg-base border border-border text-text",
    main_outline:   "bg-base border border-main   text-main",
    accent_outline: "bg-base border border-acnt   text-acnt",

  };
  
  return (

    <div className={cn("rounded-xl overflow-hidden",types[type], className)}>
      {children}
    </div>
    
  );
};


