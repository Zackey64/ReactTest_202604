import AdCard from "@/components/AdCard"; // エイリアスを使用！

export default function TestPage() {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">テストページ</h1>
      <p>コンポーネントを呼び出してみます：</p>
      
      {/* 作った部品を表示 */}
      <AdCard title="広告枠 A" />
      <AdCard title="広告枠 B" />
      <AdCard title="広告枠 B" />
      <AdCard title="広告枠 B" />
      <AdCard title="広告枠 B" />
      <AdCard title="広告枠 B" />
      <AdCard title="広告枠 B" />
      
      
      <a href="/" className="text-blue-500 underline block mt-4">
        ← トップに戻る
      </a>
    </div>
  )
}