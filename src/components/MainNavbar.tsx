
import Link from "next/link";

export default function MainNavbar() {
  return (

    <nav className="sticky top-0 z-50 w-full">
      
      {/* 全域：指定幅内で均等割付 */}
      <div className="max-w-7xl mx-auto items-center flex justify-center ">

        

        {/* ナビゲーション要素 */}
        <div className="mx-auto items-center flex">
            <Link href="/" className="hover:bg-sub transition-colors">
              <div className="p-2">
                ホーム
              </div>
            </Link>
            <Link href="/test" className="hover:bg-sub transition-colors">
              <div className="p-2">
                テスト
              </div>
            </Link>
      </div>


      </div>
        
    </nav>
  );
}