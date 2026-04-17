import { Frame } from "@/components/atoms/Frame";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Frame className="p-4 mb-4">
        <h1>マイWebアプリ h1</h1>
        <h2>マイWebアプリ h2</h2>
        <h3>マイWebアプリ h3</h3>
        <p className="text-text-soft">目立たせない文章</p>
        <p className="text-text-main">通常の文章</p>
        <p className="text-text-bold">目立たせたい文章</p>
      </Frame>
      
      <p>
        私たちは毎日目に入る色によって刺激を受けています。空の青と木々の緑は清々しい気持ちにしてくれて、
        空が曇り灰色になると自分の気分までもが暗くなる人も多いのではないでしょうか。
        そんな日常の中だけでなく、ホームページを眺めているだけでも私たちは無意識に色の影響を受けています。
        ホームページデザインにおいて「色」は訪問者に強い印象を植え付ける大切な要素です。
        本記事では色が人に与える印象と色を使った実例を挙げながら、選び方のポイントや配色に役立つツールをご紹介します。
        ホームページデザインにおいて、「色」は訪問者の第一印象を決定づける重要な要素です。
        最後までお読みいただき、ぜひあなたのホームページ運営にお役立てください。
      </p>
      <div className="relative w-full h-80">
        <Image
          src="/bg1.png" // 画像のパスを指定
          alt="Description of the image"
          fill
          className="object-contain"
        />
      </div>
      

    </main>
  );
}
