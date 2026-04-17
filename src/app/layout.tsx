import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

 // 作ったコンポーネントをインポート
import Header from "@/components/MainHeader";
import Navbar from "@/components/MainNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test",
  description: "new app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>

        <Header />
        <Navbar />

        <main>

          {children}

        </main>

        <footer className="py-8">
          フッター
          © 2026 miho inc.
        </footer>

      </body>
    </html>
  );
}
