// src/components/AdCard.tsx
export default function AdCard({ title }: { title: string }) {
  return (
    <div className="border-2 border-dashed border-blue-400 p-6 rounded-lg bg-blue-50 text-center">
      <p className="text-blue-600 font-bold">{title}</p>
      <p className="text-sm text-gray-500">（ここに将来、広告やコンテンツが入ります）</p>
    </div>
  )
}