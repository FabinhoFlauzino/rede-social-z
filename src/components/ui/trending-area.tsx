import { TrendingItem, TrendingItemSkeleton } from "./trending-item";

export function TrendingArea() {
  return (
    <div className="bg-gray-700 rounded-3xl">
      <h2 className="text-xl p-6">O que está acontecendo?</h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <TrendingItem label="#Teste" count={100}/>
        <TrendingItem label="#Teste" count={100}/>
        <TrendingItemSkeleton />
        <TrendingItemSkeleton />
      </div>
    </div>
  )
}