"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Bike, Sparkles, HardHat, Calculator, Briefcase, Laptop } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const workVisas = [
  {
    title: "Bike Rider Visa",
    slug: "bike-rider",
    image: IMAGES.work.bikeRider,
    icon: Bike,
    visaFee: "QAR 7,500",
    salary: "QAR 2,300/month",
    salaryPKR: "PKR 180,000/month",
    duration: "2 years",
    badge: "High Demand",
    includes: [
      "Work permit (2 years)",
      "Residence permit",
      "Medical insurance",
      "Company accommodation",
    ],
    popular: false,
  },
  {
    title: "Cleaner Visa",
    slug: "cleaner",
    image: IMAGES.work.cleaner,
    icon: Sparkles,
    visaFee: "QAR 7,000",
    salary: "QAR 2,000/month",
    duration: "2 years",
    includes: [
      "Work permit",
      "Residence permit",
      "Housing allowance QAR 500",
      "Food allowance QAR 300",
    ],
    popular: false,
  },
  {
    title: "Labour Visa",
    slug: "labour",
    image: IMAGES.work.labour,
    icon: HardHat,
    visaFee: "QAR 7,000",
    salary: "QAR 2,000/month",
    duration: "2 years",
    includes: [
      "Work permit",
      "Residence permit",
      "Company accommodation",
      "Meals provided",
    ],
    popular: false,
  },
  {
    title: "Accountant Open Visa",
    slug: "accountant",
    image: IMAGES.work.accountant,
    icon: Calculator,
    visaFee: "QAR 8,000",
    salary: "QAR 25,000+/month",
    salaryPKR: "PKR 620,000+/month",
    duration: "2 years",
    badge: "Professional",
    includes: [
      "Professional work permit",
      "Residence permit",
      "Family sponsorship option",
      "Housing allowance QAR 5,000-8,000",
    ],
    popular: true,
  },
  {
    title: "Work Permit (2 Years)",
    slug: "work-permit",
    image: IMAGES.work.workPermit,
    icon: Briefcase,
    visaFee: "From QAR 7,500",
    salary: "Varies by position",
    duration: "2 years",
    includes: [
      "Extended work permit",
      "Residence permit",
      "Renewable option",
      "Multiple job categories",
    ],
    popular: false,
  },
  {
    title: "Freelance Visa",
    slug: "freelance",
    image: IMAGES.work.freelance,
    icon: Laptop,
    visaFee: "From QAR 8,500",
    salary: "Self-determined",
    duration: "1-2 years",
    badge: "New",
    includes: [
      "Self-sponsored permit",
      "Independent work authorization",
      "Multiple clients allowed",
      "Business setup support",
    ],
    popular: false,
  },
];

export default function WorkVisaCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <Badge className="bg-qatar-gold/10 text-qatar-gold border-qatar-gold mb-4">
              Employment Opportunities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-qatar-maroon mb-4">
              Qatar Work Visa Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional employment visas with competitive packages and comprehensive support
            </p>
          </div>
        </ScrollAnimation>

        {/* Work Visa Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workVisas.map((visa, index) => {
            const IconComponent = visa.icon;
            return (
              <ScrollAnimation
                key={visa.slug}
                animation="fade-up"
                delay={index * 100}
              >
                <Card
                  className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full ${
                    visa.popular ? "border-qatar-gold border-2 ring-2 ring-qatar-gold/20" : ""
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={visa.image}
                      alt={visa.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-qatar-maroon" />
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      {visa.popular && (
                        <Badge className="bg-qatar-gold text-white border-0">
                          Most Popular
                        </Badge>
                      )}
                      {visa.badge && (
                        <Badge className="bg-qatar-maroon text-white border-0">
                          {visa.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{visa.title}</h3>
                    </div>
                  </div>

                  <CardContent className="space-y-4 pt-6">
                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Visa Fee:</span>
                        <span className="text-xl font-bold text-qatar-gold">
                          {visa.visaFee}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Salary:</span>
                        <span className="text-lg font-semibold text-qatar-maroon">
                          {visa.salary}
                        </span>
                      </div>
                      {visa.salaryPKR && (
                        <div className="text-sm text-muted-foreground text-right">
                          {visa.salaryPKR}
                        </div>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-muted-foreground py-2 border-y border-border">
                      <Clock className="w-4 h-4 text-qatar-gold" />
                      <span>Duration: {visa.duration}</span>
                    </div>

                    {/* Includes */}
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-foreground">
                        Package Includes:
                      </p>
                      <ul className="space-y-1">
                        {visa.includes.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-qatar-gold mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/services/work/${visa.slug}`} className="block">
                      <Button
                        className="w-full bg-qatar-maroon hover:bg-qatar-maroon/90 text-white"
                        size="lg"
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Section Footer */}
        <ScrollAnimation animation="fade-up" delay={600}>
          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">
              All prices include government fees and processing charges
            </p>
            <Link href="/services/work">
              <Button
                variant="outline"
                className="border-qatar-gold text-qatar-gold hover:bg-qatar-gold hover:text-white"
              >
                Compare All Visa Categories
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
