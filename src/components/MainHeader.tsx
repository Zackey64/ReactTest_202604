
import Link from "next/link";

export default function MainHeader() {
  return (

    <header className="w-full">
      
      {/* 全域：指定幅内で均等割付 */}
      <div className="max-w-7xl mx-auto p-4 justify-between items-center flex">

        {/* 左端要素 */}
        <div className="text-3xl font-bold">
            <Link href="/">
              Zackey64
            </Link>
        </div>

        {/* 右端要素 */}
        <div className="text-xl font-bold">
            
          □□□

        </div>


      </div>
        
    </header>
  );
}