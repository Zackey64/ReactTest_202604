
import { cn } from "@/lib/utils";

interface MainTitleProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    type?: "normal" | "main" | "accent";
}

export const MainTitle = ({ 
    title,
    children,
    className,
    type = "normal"
}: MainTitleProps) => {

  const types = {
    normal:  "flex flex-col items-center justify-center text-center",
    main:    "bg-main text-base",
    accent:  "bg-acnt text-base",
  };
  
  return (

    <div className={cn("mx-4",types[type], className)}>
        
        <h1 className="px-8 py-2 text-main border-b border-main">{title}</h1>
        {children}
        
    </div>
    
  );
};
