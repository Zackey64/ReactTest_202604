
import Link from "next/link";


export const Header = () => {
  return (

    <header className="pb-1 rounded-b-xl shadow-md bg-acnt">
      <div className="rounded-b-xl shadow-md bg-main">


        <div className="p-4 justify-between items-end flex">

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


      </div>
    </header>

  );
}