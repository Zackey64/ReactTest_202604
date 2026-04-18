import { Frame } from "@/components/atoms/Frame";
import { Button } from "@/components/atoms/Button";

export default function TestPage() {

  return (

    <div>
      <h1>デザインテスト</h1>
      <p>Tailwind CSS を使用したスタイルテスト</p>
      
      {/* 1 */}
      <Frame className="my-4 px-4">
        <div className="py-4 border-b border-base-line">
          <h1>マイWebアプリ h1</h1>
          <h2>マイWebアプリ h2</h2>
          <h3>マイWebアプリ h3</h3>
        </div>
        <div className="py-4">
          <p className="text-text-soft">目立たせない文章</p>
          <p className="text-text">通常の文章</p>
          <p className="text-text-hard">目立たせたい文章</p>
        </div>
      </Frame>

      <Frame className="my-4 grid grid-cols-3">
        <div className="m-4">
          <p className="p-2 bg-base text-text">ベースカラー</p>
          <p className="p-2 bg-base-fill text-text">塗潰し背景</p>
          <p className="p-2 bg-base-line text-text">罫線用</p>
        </div>
        <div className="m-4">
          <p className="p-2 bg-main text-main-text">メインカラー</p>
          <p className="p-2 bg-main-fill text-text">塗潰し背景</p>
        </div>
        <div className="m-4">
          <p className="p-2 bg-acnt text-acnt-text">アクセントカラー</p>
          <p className="p-2 bg-acnt-fill text-text">塗潰し背景</p>
        </div>
      </Frame>

      <Frame className="my-4 p-4 grid grid-cols-3 gap-4">

        <Frame className="p-2 flex justify-center items-center">
          Base(+line)
        </Frame>
        <Frame type="main" className="p-2 flex justify-center items-center">
          Main
        </Frame>
        <Frame type="accent" className="p-2 flex justify-center items-center">
          Accent
        </Frame>
        <Frame type="basefill" className="p-2 flex justify-center items-center">
          Base fill
        </Frame>
        <Frame type="mainfill" className="p-2 flex justify-center items-center">
          Main fill
        </Frame>  
        <Frame type="accentfill" className="p-2 flex justify-center items-center">
          Accent fill
        </Frame>  

      </Frame>

      <Frame className="my-4 p-4 grid grid-cols-2 gap-4">

        <Frame className="p-4 grid grid-cols-1">
          <p>ボタンの見た目</p>
          <p className="text-text-soft text-sm">ボタンの外観</p>
          <Button variant="none">none</Button>
          <Button variant="main">main</Button>
          <Button variant="accent">accent</Button>
          <Button variant="outline">main</Button>
          <Button variant="main_outline">main</Button>
          <Button variant="accent_outline">accent</Button>
        </Frame>
        <Frame className="p-4">
          <p>ボタンの見た目</p>
          <p className="text-text-soft text-sm">ボタンの形状</p>
          <Button className="w-full" rounded="none">none</Button>
          <Button className="w-full" rounded="normal">round</Button>
          <Button className="w-full" rounded="full">full</Button>

        </Frame>

      </Frame>















      {/* ここまで */}

      <div className="py-8">
        <a href="/" className="text-blue-500 underline">
        ← トップに戻る
        </a>
      </div>
      
    </div>
  )
}