
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
    normal:  "flex flex-col items-start justify-center",
    main:    "bg-main text-base",
    accent:  "bg-acnt text-base",
  };
  
  return (

    <div className={cn("my-8",types[type], className)}>
        
        <h1 className="text-acnt">{title}</h1>
        {children}
        
    </div>
    
  );
};
