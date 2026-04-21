
import Link from "next/link";
import {NavItem} from "@/components/atoms/NavItem";

export const Navbar = () => {
  return (

    <nav className="p-2 sticky top-0 w-full bg-bg/0">
      
      <div className="p-2 w-full flex flex-wrap items-center gap-2 bg-base/90 rounded-xl shadow-md">

        <NavItem label="ホーム" href="/" icon="/file.svg" />
        <NavItem label="テスト" href="/test" icon="/file.svg" />
        <NavItem label="コンポーネント" href="/test2" icon="/icon/logo_dark.svg" />
        <NavItem label="スタイルテスト" href="/StyleTest" icon="/icon/tailwindcss-mark.96ee6a5a.svg" />
        <NavItem label="デザインテスト" href="/DesignTest" icon="/file.svg" />
        <NavItem label="ブログテスト" href="/TechblogTest" icon="/file.svg" />
      </div>
        
    </nav>
  );
}