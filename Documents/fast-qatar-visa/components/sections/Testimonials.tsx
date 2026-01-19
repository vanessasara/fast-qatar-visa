"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { IMAGES } from "@/lib/images";

const testimonials = [
  {
    name: "Sarah M.",
    country: "United States",
    flag: "🇺🇸",
    image: IMAGES.testimonials.person2,
    rating: 5,
    text: "Got my Qatar visa in just 24 hours! The process was incredibly smooth and the support team answered all my questions instantly. Highly recommend for anyone traveling to Qatar!",
  },
  {
    name: "Ahmed K.",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: IMAGES.testimonials.person3,
    rating: 5,
    text: "I was worried about the application process, but Fast Qatar Visa made everything so simple. Clear instructions, professional service, and my visa arrived earlier than expected.",
  },
  {
    name: "Maria L.",
    country: "Germany",
    flag: "🇩🇪",
    image: IMAGES.testimonials.person4,
    rating: 5,
    text: "Used this service twice now for business visas. Never had any issues, always approved on time. Very trustworthy and reliable! Will definitely use again for my next trip.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Real experiences from satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-qatar-gold/20" />

              {/* Client Photo */}
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-qatar-gold/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.flag} {testimonial.country}
                  </p>
                </div>
              </div>

              {/* Review Text */}
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
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
          ))}
        </div>
      </div>
    </section>
  );
}
