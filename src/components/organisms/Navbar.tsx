
import Link from "next/link";
import {NavItem} from "@/components/NavItem";

export const Navbar = () => {
  return (

    <nav className="sticky top-0">
      
      <div className="px-4 items-center flex justify-between">

        <NavItem label="ホーム" href="/" icon="file.svg" />
        <NavItem label="テスト" href="/test" icon="file.svg" />
        <NavItem label="コンポーネント" href="/test2" icon="icon/logo_dark.svg" />
        <NavItem label="スタイルテスト" href="/StyleTest" icon="icon/tailwindcss-mark.96ee6a5a.svg" />
        <NavItem label="デザインテスト" href="/DesignTest" icon="file.svg" />

      </div>
        
    </nav>
  );
}