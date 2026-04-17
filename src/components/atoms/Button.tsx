
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "outline" | "fill";
}

export const Button = ({
  children, 
  className, 
  variant = "outline",
  ...props
}: ButtonProps) => {

  const variants = {
    outline: "bg-bg-main text-text-main border border-bg-border hover:bg-bg-hover",
    fill:    "bg-accent-main text-accent-text hover:bg-accent-hover",
  };

  return (
    
    <button className={cn(
      "m-1 px-1 cursor-pointer rounded-md overflow-hidden",
      variants[variant],
      className
      )}
      {...props}
    >
      {children}
    </button>
    
    
  );
};


