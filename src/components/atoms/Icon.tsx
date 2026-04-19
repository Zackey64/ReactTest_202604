import Image from "next/image";
import { cn } from "@/lib/utils";

interface IconProps {
  src: string;
  className?: string;
  size?: "sm" | "md" | "lg" ;
  color?: "text"|"base"|"main"|"accent";
}

export const Icon = ({ 

  src,
  className,
  size = "md",
  color ="text"

}: IconProps) => {

  const sizes = {
    sm: "p-1 size-6 ",
    md: "p-1.5 size-8",
    lg: "p-2 size-10",
  };

  const colors = {
    text:   "bg-text",
    base:   "bg-base",
    main:   "bg-main",
    accent: "bg-acnt",
  };
  
  return (
    <div className={cn("flex justify-between items-center bg-base rounded-full",sizes[size], className)}>
    <div 
      className={cn("size-full relative inline-block",colors[color])}
      style={{
        // SVGファイルをマスクとして使用
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    >
      {/* 
        next/image を使うことで、画像の最適化や 
        LCP (Prioritize loading) などの恩恵を受けられるように配置
      */}
      <Image
        src={src}
        alt=""
        fill
        priority
        className="opacity-0" // 実体は見せず、マスクとしてのみ利用
      />
    </div>    
    </div>
    
    
  );
};