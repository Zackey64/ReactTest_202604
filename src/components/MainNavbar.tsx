
import Link from "next/link";

import {NavItem} from "@/components/NavItem";

export default function MainNavbar() {
  return (

    <nav className="sticky top-0 z-50 w-full">
      
      {/* 全域：指定幅内で均等割付 */}
      <div className="max-w-7xl mx-auto items-center flex justify-between">

        <NavItem label="ホーム" href="/" icon="file.svg" />
        <NavItem label="テスト" href="/test" icon="file.svg" />
        <NavItem label="自分のプロフィール" href="/" icon="file.svg" />
        <NavItem label="自分のプロフィール" href="/" icon="file.svg" />
        <NavItem label="自分のプロフィール" href="/" icon="file.svg" />
        <NavItem label="自分のプロフィール" href="/" icon="file.svg" />

      </div>
        
    </nav>
  );
}