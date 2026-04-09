
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full
     p-2 bg-sub/70 text-sub-text backdrop-blur-md
     sticky top-0 z-50">
        
        <div className="space-x-6">
            <Link href="/" className="hover:text-accent-text transition-colors">
            ホーム
            </Link>
            <Link href="/test" className="hover:text-accent-text transition-colors">
            テスト
            </Link>
      </div>
    </nav>
  );
}