import { Frame } from "@/components/atoms/Frame";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import {SetImage} from "@/components/atoms/Image";

import {MainTitle} from '@/components/molecules/MainTitle';

export default function TestPage() {

  return (

    <div>
      
      <MainTitle title="デザインテスト">
        <p>Tailwind CSS を使用したスタイルテスト</p>
      </MainTitle>

      

      <SetImage src="/bg1.png" alt="" />
      <SetImage src="/AAAAAAA.png" alt="" />
      
      




      
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



      <Frame className="my-4 grid grid-cols-1">

        <div className="p-4  grid grid-cols-4 gap-4 bg-base">
          <Frame className="
            p-2 flex justify-center items-center
          ">Standerd</Frame>
          <Frame className="
            p-2 flex justify-center items-center
            border-none bg-main text-base font-bold
          ">main</Frame>
          <Frame className="
            p-2 flex justify-center items-center
            border-none bg-main text-acnt font-bold
          ">Standerd</Frame>
          <Frame className="
            p-2 flex justify-center items-center
            border-none bg-acnt text-main font-bold
          ">Standerd</Frame>
        </div>
        
        <div className="p-4  grid grid-cols-3 gap-4 bg-base border-t border-border">
          <Frame className="
            p-2 flex justify-center items-center
          ">Standerd</Frame>
          <Frame className="
            p-2 flex justify-center items-center
            border-none bg-main text-base font-bold
          ">main</Frame>
          <Frame className="
            p-2 flex justify-center items-center
            border-none bg-main text-acnt font-bold
          ">Standerd</Frame>
          <Frame className="
            p-2 flex justify-center items-center
            border-none bg-acnt text-main font-bold
          ">Standerd</Frame>
        </div>

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



      <Frame className="p-4  flex flex-col items-center justify-center">
        <h2>グリットレイアウト</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          <div className=" flex flex-col gap-4">
            <div className="aspect-video bg-blue-200 rounded-lg"></div>
            <div>
              <h3>Sample01</h3>
              <p>
                レスポンシブデザインとは、画面サイズが異なるデバイス（スマホ、タブレット、PCなど）でも、見やすくデザインを調整する手法です。
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            <div className="aspect-video bg-blue-200 rounded-lg"></div>
            <div>
              <h3>Sample02</h3>
              <p>
                画面サイズによって文字の大きさやレイアウトが変わるようにすることで、ユーザーに最適な見た目を提供できます。
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            <div className="aspect-video bg-blue-200 rounded-lg"></div>
            <div>
              <h3>Sample03</h3>
              <p>
                レスポンシブデザインとは、画面サイズが異なるデバイス（スマホ、タブレット、PCなど）でも、見やすくデザインを調整する手法です。
              </p>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            <div className="aspect-video bg-blue-200 rounded-lg"></div>
            <div>
              <h3>Sample04</h3>
              <p>
                画面サイズによって文字の大きさやレイアウトが変わるようにすることで、ユーザーに最適な見た目を提供できます。
              </p>
            </div>
          </div>

        </div>
      </Frame>

      <Frame className="p-4">
        <h2>グリットレイアウト（リミット付）</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 justify-center justify-items-center">

          <div className=" bg-red-200  p-8  max-w-sm">01</div>
          <div className=" bg-red-200  p-8  max-w-sm">02</div>
          <div className=" bg-red-200  p-8  max-w-sm">03</div>
          <div className=" bg-red-200  p-8  max-w-sm">04</div>
          <div className=" bg-red-200  p-8  max-w-sm">05</div>
          <div className=" bg-red-200  p-8  max-w-sm">06</div>
          <div className=" bg-red-200  p-8  max-w-sm">07</div>
          <div className=" bg-red-200  p-8  max-w-sm">08</div>
          <div className=" bg-red-200  p-8  max-w-sm">09</div>
          <div className=" bg-red-200  p-8  max-w-sm">10</div>




        </div>
      </Frame>


      <Frame className="p-4 flex flex-col items-center justify-center">
        <h2>フレックスレイアウト</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 aspect-video bg-blue-200 rounded-lg"></div>
            <div className="flex-2">
              <h3>Sample01</h3>
              <p className="text-sm">
                レスポンシブデザインとは、画面サイズが異なるデバイス（スマホ、タブレット、PCなど）でも、見やすくデザインを調整する手法です。
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 aspect-video bg-blue-200 rounded-lg"></div>
            <div className="flex-2">
              <h3>Sample02</h3>
              <p className="text-sm">
                画面サイズによって文字の大きさやレイアウトが変わるようにすることで、ユーザーに最適な見た目を提供できます。
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 aspect-video bg-blue-200 rounded-lg"></div>
            <div className="flex-2">
              <h3>Sample03</h3>
              <p className="text-sm">
                レスポンシブデザインとは、画面サイズが異なるデバイス（スマホ、タブレット、PCなど）でも、見やすくデザインを調整する手法です。
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 aspect-video bg-blue-200 rounded-lg"></div>
            <div className="flex-2">
              <h3>Sample04</h3>
              <p className="text-sm">
                画面サイズによって文字の大きさやレイアウトが変わるようにすることで、ユーザーに最適な見た目を提供できます。
              </p>
            </div>
          </div>

        </div>
      </Frame>


      <Frame className="p-4 items-center justify-center">
        <h2>レスポンシブ</h2>
        <div className="flex flex-col md:flex-row gap-4 overflow-x-scroll">

          <div className="min-w-sm max-w-lg">
            <div className="aspect-video bg-blue-300 rounded-lg"></div>
            <p>sample01 - あいうえおかきくけこさしすせそたちつてとなにぬねの</p>
          </div>
          <div className="min-w-sm max-w-lg">
            <div className="aspect-video bg-blue-300 rounded-lg"></div>
            <p>sample01 - あいうえおかきくけこさしすせそたちつてとなにぬねの</p>
          </div>
          <div className="min-w-sm max-w-lg">
            <div className="aspect-video bg-blue-300 rounded-lg"></div>
            <p>sample01 - あいうえおかきくけこさしすせそたちつてとなにぬねの</p>
          </div>
          <div className="min-w-sm max-w-lg">
            <div className="aspect-video bg-blue-300 rounded-lg"></div>
            <p>sample01 - あいうえおかきくけこさしすせそたちつてとなにぬねの</p>
          </div>

        </div>

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