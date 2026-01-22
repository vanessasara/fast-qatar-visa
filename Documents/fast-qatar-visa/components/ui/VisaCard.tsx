import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { Badge } from './badge'
import { LucideIcon } from 'lucide-react'

interface VisaCardProps {
  title: string
  description: string
  price: string
  salary?: string
  image: string
  badge?: string
  icon: LucideIcon
  href: string
  popular?: boolean
}

export function VisaCard({
  title,
  description,
  price,
  salary,
  image,
  badge,
  icon: Icon,
  href,
  popular = false,
}: VisaCardProps) {
  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl card-shine ${
        popular ? 'border-2 border-qatar-gold' : ''
      }`}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {popular && (
            <Badge className="bg-qatar-gold text-white border-0 font-semibold">
              Most Popular
            </Badge>
          )}
          {badge && (
            <Badge className="bg-qatar-maroon text-white border-0 font-semibold">
              {badge}
            </Badge>
          )}
        </div>

        {/* Icon Overlay */}
        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 p-3 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-qatar-maroon" />
        </div>
      </div>

      {/* Content Section */}
      <CardHeader>
        <CardTitle className="text-xl font-heading text-qatar-maroon line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3 min-h-[60px]">
          {description}
        </p>

        {/* Pricing */}
        <div className="space-y-2 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Visa Fee:</span>
            <span className="text-lg font-bold text-qatar-gold">{price}</span>
          </div>
          {salary && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Salary:</span>
              <span className="text-base font-semibold text-qatar-maroon">
                {salary}
              </span>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link href={href} className="block">
          <Button
            className="w-full bg-qatar-maroon hover:bg-qatar-maroon-800 text-white btn-transition"
          >
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
