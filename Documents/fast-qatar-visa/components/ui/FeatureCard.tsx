import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './card'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: 'maroon' | 'gold'
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'maroon',
}: FeatureCardProps) {
  const iconColorClass =
    iconColor === 'gold' ? 'text-qatar-gold' : 'text-qatar-maroon'
  const bgColorClass =
    iconColor === 'gold' ? 'bg-qatar-gold/10' : 'bg-qatar-maroon/10'

  return (
    <Card className="border border-border hover-lift transition-all duration-300 group hover:border-qatar-gold/30">
      <CardHeader>
        {/* Icon */}
        <div
          className={`mb-4 inline-flex items-center justify-center rounded-xl ${bgColorClass} p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <Icon className={`h-8 w-8 ${iconColorClass}`} />
        </div>

        {/* Title */}
        <CardTitle className="text-xl font-heading text-qatar-maroon group-hover:text-qatar-maroon-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Decorative Bottom Border */}
        <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-qatar-maroon to-qatar-gold transition-all duration-500 group-hover:w-full" />
      </CardContent>
    </Card>
  )
}
