
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "none" | "outline" | "fill" ;
  rounded?:"none"|"normal"|"full" ;
}

export const Button = ({
  children, 
  className, 
  variant = "outline",
  rounded = "normal",
  ...props
}: ButtonProps) => {

  const variants = {
    none:    "hover:bg-base text-text",
    outline: "hover:bg-base text-text border border-border ",
    fill:    "hover:bg-acnt/80 bg-acnt text-main",

  };

  const roundeds = {
    none:"",
    normal:"rounded-md",
    full:"rounded-full",
  }



  return (
    
    <button className={cn(
      " p-1 cursor-pointer overflow-hidden text-sm",
      roundeds[rounded],
      variants[variant],
      className
      )}
      {...props}
    >
      {children}
    </button>
    
    
  );
};


