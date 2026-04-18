
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "none" | "main" | "accent"| "outline" | "main_outline" | "accent_outline";
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
    none: "bg-base text-text hover:bg-base-fill",
    main:   "bg-main text-main-text font-bold",
    accent: "bg-acnt text-acnt-text font-bold",
    outline:   "bg-base text-text border border-base-line hover:bg-base-fill",
    main_outline:   "bg-base text-main border border-main hover:bg-main-fill",
    accent_outline: "bg-base text-acnt border border-acnt hover:bg-acnt-fill",
  };

  const roundeds = {
    none:"",
    normal:"rounded-md",
    full:"rounded-full",
  }



  return (
    
    <button className={cn(
      "m-1 p-1 cursor-pointer overflow-hidden",
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


