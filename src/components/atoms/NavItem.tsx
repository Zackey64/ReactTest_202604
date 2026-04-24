
import Link from "next/link";
import Image from 'next/image';
import {Icon} from "@/components/atoms/Icon";

interface NavItemProps {
  label: string;      // 表示するテキスト
  href: string;       // リンク先
  icon: string;   // アイコンコンポーネント
}

export const NavItem = ({ 
  label, 
  href, 
  icon
}: NavItemProps) => {
  return (

    <Link
      href={href} className="
      flex justify-between items-center rounded-full transition-all duration-300
      bg-main text-acnt hover:bg-acnt hover:text-main
    ">   
        
      <Icon src={icon} color="main" className="bg-acnt"/>
      <span className="text-xs px-2">
        {label}
      </span>

    </Link>

  );
};

