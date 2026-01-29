import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { Badge } from "@/components/ui/badge";
import ScrollAnimation from "@/components/ui/scroll-animation";

const testimonials = [
  {
    name: "Ahmed K.",
    country: "Pakistan",
    flag: "🇵🇰",
    image: IMAGES.testimonials.person1,
    rating: 5,
    visaType: "Bike Rider Visa",
    text: "I got my bike rider visa through Fast Qatar Visa in just 5 days! The team was incredibly professional and guided me through every step. The salary package was exactly as promised. Highly recommend for anyone seeking work in Qatar!",
  },
  {
    name: "Priya S.",
    country: "India",
    flag: "🇮🇳",
    image: IMAGES.testimonials.person2,
    rating: 5,
    visaType: "Family Visa",
    text: "Fast Qatar Visa made my family visa process so smooth and stress-free. They handled all the documentation and kept me updated at every stage. Received my visa in just 4 days. Excellent service and very trustworthy!",
  },
  {
    name: "Michael O.",
    country: "Philippines",
    flag: "🇵🇭",
    image: IMAGES.testimonials.person3,
    rating: 5,
    visaType: "Accountant Visa",
    text: "I applied for accountant open visa and the process was incredibly efficient. The team explained all salary details, benefits, and requirements clearly. Got my visa approved and now working in Doha. Best visa service!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Real experiences from travelers worldwide
            </p>
          </div>
        </ScrollAnimation>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={testimonial.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group relative h-full rounded-xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-qatar-gold hover:shadow-lg">
                {/* Quote Icon */}
                <Quote className="absolute right-6 top-6 h-10 w-10 text-qatar-gold/20" />

                {/* Client Photo */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-qatar-gold/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.flag} {testimonial.country}
                    </p>
                  </div>
                </div>

                {/* Visa Type Badge */}
                <Badge className="mb-4 bg-qatar-maroon/10 text-qatar-maroon border-0">
                  {testimonial.visaType}
                </Badge>

                {/* Review Text */}
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-qatar-gold text-qatar-gold"
                    />
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
