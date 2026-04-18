
import Link from "next/link";


export const Header = () => {
  return (

    <header>
      
      <div className="p-4 justify-between items-center flex">

        {/* 左端要素 */}
        <div className="text-3xl font-bold text-acnt">
          <Link href="/">
            Zackey64
          </Link>
        </div>

        {/* 右端要素 */}
        <div className="text-xl font-bold text-acnt">
          
          Zackey Game Studio

        </div>

      </div>
        
    </header>
  );
}