import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from './card'

interface StatCardProps {
  number: string
  label: string
  icon: LucideIcon
  suffix?: string
  description?: string
}

export function StatCard({
  number,
  label,
  icon: Icon,
  suffix = '',
  description,
}: StatCardProps) {
  return (
    <Card className="border-0 bg-white shadow-lg hover-lift overflow-hidden group">
      <CardContent className="p-6 text-center">
        {/* Icon */}
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-qatar-gold/10 p-4 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8 text-qatar-gold" />
        </div>

        {/* Number */}
        <div className="mb-2">
          <span className="text-4xl font-bold text-qatar-maroon font-heading">
            {number}
          </span>
          {suffix && (
            <span className="text-3xl font-bold text-qatar-maroon/70 font-heading">
              {suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-1">
          {label}
        </h3>

        {/* Optional Description */}
        {description && (
          <p className="text-xs text-gray-500 mt-2">{description}</p>
        )}

        {/* Decorative Element */}
        <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-qatar-maroon to-qatar-gold opacity-50" />
      </CardContent>
    </Card>
  )
}
