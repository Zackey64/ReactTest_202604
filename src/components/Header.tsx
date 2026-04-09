import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-sub text-sub-text px-0 py-0">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        
        <Link href="/" className="text-xl font-bold">
            <Image
                src="/image.png"
                alt="Logo"
                width={48}
                height={48}
                className="inline-block mr-2"
            />
            Zackey64 ポートフォリオ
        </Link>

      </div>
    </header>
  );
}