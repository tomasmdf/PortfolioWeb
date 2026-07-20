
export default function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="w-max text-text-muted  text-skill uppercase tracking-wide">
      {category}
    </span>
  )
}
