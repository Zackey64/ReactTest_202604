
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
      group flex  justify-between items-center rounded-full transition-all duration-300 whitespace-nowrap
      bg-base hover:bg-acnt hover:text-main
    ">   
        
      <Icon src={icon} color="base" className="bg-main"/>
      <span className="text-xs font-medium  px-2">
        {label}
      </span>

    </Link>

  );
};

