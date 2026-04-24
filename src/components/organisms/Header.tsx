
import Link from "next/link";


export const Header = () => {
  return (

    <header>

      <div className="px-8 py-2 justify-between items-end flex">

        {/* 左端要素 */}
        <div className="text-3xl font-bold">
          <Link href="/">
            Zackey64
          </Link>
        </div>

        {/* 右端要素 */}
        <div className="text-xl font-bold">
          
          Zackey Game Studio

        </div>

      </div> 


      
    </header>

  );
}