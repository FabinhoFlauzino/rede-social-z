import Link from "next/link"

type Props = {
  label: string
  count: number
}

export function TrendingItem({ count, label }: Props) {
  return (
    <Link
      href={`/search?q=${encodeURIComponent(label)}`}
      className="group/item"
    >
      <div className="group-hover/item:underline font-bold">{label}</div>
      <div className="text-sm text-gray-400">{count}</div>
    </Link>
  )
}

export function TrendingItemSkeleton() {
  return (
    <div className="flex flex-col gap-1 animate-pulse">
      <div className="bg-gray-600 w-3/4 h-4 rounded-sm"></div>
      <div className="bg-gray-600 w-1/4 h-4 rounded-sm"></div>
    </div>
  )
}