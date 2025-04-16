interface FeatureItem {
  emoji: string
  text: string
}

interface FeatureListProps {
  items: FeatureItem[]
  className?: string
}

export default function FeatureList({ items, className = "" }: FeatureListProps) {
  return (
    <ul className={`space-y-4 my-8 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-2xl mr-4 flex-shrink-0">{item.emoji}</span>
          <span className="text-gray-700">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}
