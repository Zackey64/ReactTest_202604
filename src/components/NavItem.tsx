
import Link from "next/link";
import Image from 'next/image';

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
        href={href}
        className="flex-1 flex flex-col items-center p-2 transition-all duration-300
         hover:bg-accent hover:text-accent-text"
    >   
        <div className="relative w-8 h-8 md:w-4 md:h-4">
            <Image
                src={icon} 
                alt={label}
                fill
                className="object-contain"
            />
        </div>
        
        <span className="hidden md:block text-xs font-medium">
            {label}
        </span>
    </Link>

  );
};

