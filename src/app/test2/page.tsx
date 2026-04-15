import AdCard from "@/components/AdCard"; // エイリアスを使用！

export default function TestPage() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">リアクトの標準コンポーネント試験</h1>
      
      {/* 作った部品を表示 */}
      
      <div className="py-4">

        <div className="bg-gray-300">
          <p>インプット系</p>
        </div>

        <div className="grid grid-cols-1 gap-2">

          <label>
            Text input:
            <input name="myInput" />
          </label>
          
          <label>
            Checkbox:
            <input type="checkbox" name="myCheckbox" />
          </label>

          Radio buttons:
          <label>
            <input type="radio" name="myRadio" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="myRadio" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="myRadio" value="option3" />
            Option 3
          </label>


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