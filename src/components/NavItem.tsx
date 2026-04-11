
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
        className="flex-1 flex flex-col items-center p-1 transition-all duration-300
         border-t-2 border-accent
         hover:bg-accent hover:text-accent-text"
    >   
        <div className="relative w-10 h-10 md:w-6 md:h-6">
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

