"use client";

import Image from "next/image";
import { Calendar, Users, Award, Globe, CheckCircle } from "lucide-react";
import { IMAGES } from "@/lib/images";

const stats = [
  {
    icon: Calendar,
    value: "10+",
    label: "Years Experience",
    suffix: "Years",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Visas Processed",
    suffix: "Visas",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    suffix: "Rate",
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries Served",
    suffix: "Countries",
  },
];

const highlights = [
  "Government-approved visa processing center",
  "Direct partnership with Qatar authorities",
  "Expert visa consultants available 24/7",
  "Transparent pricing with no hidden fees",
  "High success rate for all visa categories",
  "Secure document handling and data protection",
];

export default function CompanyStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={IMAGES.about.office}
                alt="Fast Qatar Visa Center modern office"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-qatar-maroon/20 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-qatar-gold/20" />

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-4 rounded-xl bg-white p-6 shadow-xl sm:-left-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-qatar-maroon text-white">
                  <Award className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-qatar-maroon">98%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            {/* Label */}
            <span className="inline-flex items-center gap-2 rounded-full bg-qatar-gold/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-qatar-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-qatar-gold" />
              Our Story
            </span>

            {/* Heading */}
            <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Your Trusted Partner for Qatar Visa Services
            </h2>

            {/* Story Paragraphs */}
            <div className="mt-8 space-y-5 text-gray-600">
              <p className="text-lg leading-relaxed">
                Fast Qatar Visa Center was established with a vision to simplify Qatar visa
                processing for travelers, workers, and families worldwide. With over 10 years
                of specialized experience in Qatar immigration services, we have successfully
                processed thousands of visa applications from over 150 countries.
              </p>
              <p className="leading-relaxed">
                Our team of expert visa consultants works directly with Qatar government
                authorities to ensure your application is handled professionally and efficiently.
                We understand the challenges and complexities of visa applications, which is why
                we provide personalized guidance throughout the entire process.
              </p>
              <p className="leading-relaxed">
                As an authorized and government-approved visa processing center, we maintain
                the highest standards of service quality, transparency, and security. Our success
                is measured by the thousands of satisfied clients who have successfully obtained
                their Qatar visas through our services.
              </p>
              <p className="leading-relaxed">
                Whether you&apos;re planning a leisure trip, business visit, or seeking employment
                opportunities in Qatar, Fast Qatar Visa Center is your trusted partner for a
                smooth and hassle-free visa experience.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-qatar-gold" />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-qatar-maroon to-qatar-maroon/90 p-8 shadow-xl sm:p-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <stat.icon className="h-7 w-7 text-qatar-gold" />
                </div>
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
