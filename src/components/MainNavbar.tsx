
import Link from "next/link";

import {NavItem} from "@/components/NavItem";

export default function MainNavbar() {
  return (

    <nav>
      
      {/* 全域：指定幅内で均等割付 */}
      <div className="px-4 items-center flex justify-between">

        <NavItem label="ホーム" href="/" icon="file.svg" />
        <NavItem label="テスト" href="/test" icon="file.svg" />
        <NavItem label="コンポーネント" href="/test2" icon="icon/logo_dark.svg" />
        <NavItem label="スタイルテスト" href="/StyleTest" icon="icon/tailwindcss-mark.96ee6a5a.svg" />
        <NavItem label="自分のプロフィール" href="/" icon="file.svg" />
        <NavItem label="自分のプロフィール" href="/" icon="file.svg" />

      </div>
        
    </nav>
  );
}