
import { S_Theme } from "@/components/S_Theme";
import {S_Card, S_TitleCard} from "@/components/S_Card";
import { S_Accordion, S_Summary, S_Details } from "@/components/S_Accordion";
import { S_CodeView } from "@/components/S_CodeView";

import {MainTitle} from '@/components/molecules/MainTitle';

export default function TestPage() {


  const sampleCode1 = `<div className="relative ...">
  <div className="absolute right-4 bottom-4 ...">
    ...
  </div>
</div>`;


  return (
    <div>

      <MainTitle title="スタイルテスト">
        <p>Tailwind CSS を使用したスタイルテスト</p>
      </MainTitle>

      
      
      
      {/* 1 */}
      <div className="p-4">

        <h1 className="px-4 bg-main text-main-text border-b-4 border-accent">余白</h1>

        {/* パディング */}
        <div className="p-4">

          <p className="px-2 font-bold border-l-8 border-accent">Padding（パディング）</p>
          <p>
            要素内の余白を設定できます。
            ボーダーとコンテンツに余白を持たせたい場合や、要素に背景色を付けつつテキストを読みやすくしたい場合などに使用します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            
            <div className="flex-col border-1 border-gray-200 shadow-md rounded-2xl p-4">
              全方向
              <div className="flex justify-center items-center h-30">
                <div className="border-2 border-gray-300 bg-gray-100 p-4">
                  <div className="border-2 border-dashed border-gray-300 px-1">
                    p-4
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col border-1 border-gray-200 shadow-md rounded-2xl p-4">
              水平方向
              <div className="flex justify-center items-center h-30">
                <div className="border-2 border-gray-300 bg-gray-100 px-4">
                  <div className="border-2 border-dashed border-gray-300 px-1">
                    px-4
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col border-1 border-gray-200 shadow-md rounded-2xl p-4">
              垂直方向
              <div className="flex justify-center items-center h-30">
                <div className="border-2 border-gray-300 bg-gray-100 py-4">
                  <div className="border-2 border-dashed border-gray-300 px-1">
                    py-4
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        
        {/* マージン */}
        <div className="p-4">

          <p className="px-2 font-bold border-l-8 border-accent">Margin（マージン）</p>
          <p>
            要素外の余白を設定できます。
            別の要素との余白を作りたい場合や、複数の要素を重ねたい場合などに使用します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

            <div className="flex-col border-1 border-gray-200 shadow-md rounded-2xl p-4">
              全方向
              <div className="flex justify-center items-center h-30">
                <div className="border-2 border-dashed border-gray-300">
                  <div className="bg-gray-100 m-4 border-2 border-gray-300 px-1">
                    m-4
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col border-1 border-gray-200 shadow-md rounded-2xl p-4">
              水平方向
              <div className="flex justify-center items-center h-30">
                <div className="border-2 border-dashed border-gray-300">
                  <div className="bg-gray-100 mx-4 border-2 border-gray-300 px-1">
                    mx-4
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col border-1 border-gray-200 shadow-md rounded-2xl p-4">
              垂直方向
              <div className="flex justify-center items-center h-30">
                <div className="border-2 border-dashed border-gray-300">
                  <div className="bg-gray-100 my-4 border-2 border-gray-300 px-1">
                    my-4
                  </div>
                </div>
              </div>
            </div>

          </div>
          
        </div>

      </div>



      {/* 2 */}
      <div className="py-4">

        <h1 className="px-4 bg-main text-main-text border-b-4 border-accent">配置</h1>

        {/* 配置１ */}
        <div className="py-4">

          <S_Theme title="absolute（絶対位置）">
            absolute を指定した要素の位置は、top（上からの位置）や left（左からの位置）などで指定します。
            位置の基準は、親要素が relative であればその親要素が基準になりますが、static であれば画面全体になります。
          </S_Theme>

          <div className="flex flex-wrap gap-4">
            
            <S_Accordion>
              <S_Card className="w-100">
                <S_Summary>
                  <div className="flex justify-center p-1 border-b border-gray-200 bg-gray-50">
                    無指定
                  </div>
                  <div className="p-2 text-sm">
                     無指定の場合、左上起点になります。
                  </div>
                  <div className="flex justify-center items-center p-2">
                    <div className="relative border-2 border-dashed border-gray-300 w-30 h-30 ">
                      <div className="absolute bg-gray-100 border-2 border-gray-300 px-1">
                        要素
                      </div>
                    </div>
                  </div>
                </S_Summary>
                <S_Details>
                  <S_CodeView title="Tailwind CSS (.tsx)" code={sampleCode1} />
                </S_Details>
              </S_Card>
            </S_Accordion>

            <S_Accordion>
              <S_Card className="w-100">
                <S_Summary>
                  <div className="flex justify-center p-1 border-b border-gray-200 bg-gray-50">
                    左上起点
                  </div>
                  <div className="p-2 text-sm">
                    top と left を指定している為、左上起点になります。
                  </div>
                  <div className="flex justify-center items-center p-2">
                    <div className="relative border-2 border-dashed border-gray-300 w-30 h-30 ">
                      <div className="absolute top-4 left-4 bg-gray-100 border-2 border-gray-300 px-1">
                        要素
                      </div>
                    </div>
                  </div>
                </S_Summary>
                <S_Details>
                  <S_CodeView title="Tailwind CSS (.tsx)" code={sampleCode1} />
                </S_Details>
              </S_Card>
            </S_Accordion>

            <S_Accordion>
              <S_Card className="w-100">
                <S_Summary>
                  <div className="flex justify-center p-1 border-b border-gray-200 bg-gray-50">
                    右下起点
                  </div>
                  <div className="p-2 text-sm">
                    right と bottom を指定している為、右下起点になります。
                  </div>
                  <div className="flex justify-center items-center p-2">
                    <div className="relative border-2 border-dashed border-gray-300 w-30 h-30 ">
                      <div className="absolute bottom-4 right-4 bg-gray-100 border-2 border-gray-300 px-1">
                        要素
                      </div>
                    </div>
                  </div>
                </S_Summary>
                <S_Details>
                  <S_CodeView title="Tailwind CSS (.tsx)" code={sampleCode1} />
                </S_Details>
              </S_Card>
            </S_Accordion>

          </div>
          
        </div>



        {/* 配置２ */}
        <div className="p-4">

          <S_Theme title="Flexbox（柔軟配置）">
            Flexbox を使用すると、要素を柔軟に配置できます。
            flex を指定した要素の子要素は、flex-direction（配置の方向）や justify-content（主軸の配置）などで配置を指定できます。
          </S_Theme>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">

            <S_Card>
              <S_Accordion>
                <S_Summary>
                  <div className="p-2">
                    <div className="mb-2 border-b border-gray-200 bg-gray-100">
                      右下起点
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="border-2 border-dashed border-gray-300 w-30 h-30">
                        <div className="bg-gray-100 border-2 border-gray-300 px-1">
                          要素
                        </div>
                      </div>
                    </div>
                  </div>
                </S_Summary>
                <S_Details>
                  <div className="p-2 bg-gray-300 min-w-200">
                    a
                  </div>
                </S_Details>
              </S_Accordion>
            </S_Card>





          </div>

        </div>



      </div>










      <div className="p-4">


        <S_CodeView title="Tailwind CSS (.tsx)" code={sampleCode1} />

        <p>配置</p>
        <div className="grid grid-cols-3 gap-2  bg-gray-100">

          <div className="flex justify-center items-center bg-gray-200">
            1
          </div>
          <div className="flex justify-center items-center bg-gray-200">
            2
          </div>
          <div className="flex justify-center items-center bg-gray-200">
            3
          </div>
          <div className="flex justify-center items-center bg-gray-200">
            4
          </div>
          
        </div>
      
      
      </div>
      

      {/* ここまで */}

      <div className="py-8">
        <a href="/" className="text-blue-500 underline">
        ← トップに戻る
        </a>
      </div>
      
    </div>
  )
}