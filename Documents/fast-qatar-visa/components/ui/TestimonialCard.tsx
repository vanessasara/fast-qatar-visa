import Image from 'next/image'
import { Card, CardContent } from './card'
import { Quote, Star } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  country: string
  countryFlag?: string
  visaType: string
  rating?: number
  photo: string
}

export function TestimonialCard({
  quote,
  name,
  country,
  countryFlag = '',
  visaType,
  rating = 5,
  photo,
}: TestimonialCardProps) {
  return (
    <Card className="border border-gray-100 hover-lift transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-6 flex flex-col flex-1">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="h-10 w-10 text-qatar-gold/30" />
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-5 w-5 ${
                index < rating
                  ? 'fill-qatar-gold text-qatar-gold'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Author Section */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          {/* Photo */}
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-qatar-gold/20">
            <Image
              src={photo}
              alt={name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-qatar-maroon truncate">
              {name}
            </div>
            <div className="text-sm text-gray-600 truncate">
              {countryFlag && <span className="mr-1">{countryFlag}</span>}
              {country}
            </div>
            <div className="text-xs text-qatar-gold font-medium truncate">
              {visaType}
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-qatar-gold/5 rounded-bl-full" />
      </CardContent>
    </Card>
  )
}
