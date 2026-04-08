// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-sub text-sub-text shadow-sm">
        <div className="font-bold text-xl">
            Zackey64
        </div>
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