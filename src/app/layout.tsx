import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

 // 作ったコンポーネントをインポート
import {Header} from "@/components/organisms/Header";
import {Navbar} from "@/components/organisms/Navbar";
import {Sidebar} from "@/components/organisms/Sidebar";
import {Footer} from "@/components/organisms/Footer";

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
        
        <Footer />
      </body>
    </html>

  );
}
