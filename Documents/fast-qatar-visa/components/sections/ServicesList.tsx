"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock} from "lucide-react";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/lib/images";

const visaTypes = [
  {
    id: "work",
    label: "Work",
    image: IMAGES.services.work,
    title: "Work Visa",
    description: `The Qatar Work Visa is required for individuals who have secured employment in Qatar and wish to work legally in the country. This visa is sponsored by your employer and allows you to live and work in Qatar for the duration of your employment contract.

Qatar offers excellent career opportunities across various sectors including oil and gas, construction, healthcare, education, hospitality, and technology. With no income tax and a high standard of living, Qatar is an attractive destination for professionals from around the world.

The work visa process involves coordination between you, your employer, and the relevant government authorities. Our team ensures that all documentation is properly prepared to avoid delays.`,
    eligibility: [
      "Valid passport with at least 6 months validity",
      "Job offer from Qatar-based employer",
      "Educational certificates (attested)",
      "Professional experience certificates",
      "Medical fitness certificate",
      "Police clearance certificate",
      "Recent passport-sized photographs",
    ],
    processingTime: "7-14 Business Days",
    priceInUsd: "$ 200",
    priceInPkr: "PKR 30,000",
    priceInRiyad: "SAR 750",
  },
  {
    id: "tourist",
    label: "Tourist",
    image: IMAGES.services.tourist,
    title: "Tourist Visa",
    description: `The Qatar Tourist Visa is perfect for travelers looking to explore the rich culture, stunning architecture, and world-class attractions that Qatar has to offer. Whether you're visiting the iconic Museum of Islamic Art, exploring the traditional Souq Waqif, or enjoying the modern marvels of Doha, this visa gives you the freedom to experience it all.

This visa allows you to stay in Qatar for tourism purposes, including sightseeing, visiting friends and family, or attending cultural events. It's ideal for leisure travelers who want to discover the unique blend of traditional Arabian heritage and contemporary luxury that Qatar offers.

The tourist visa is typically valid for 30 days with options to extend. Multiple entry options are available for frequent visitors who want to explore Qatar across multiple trips.`,
    eligibility: [
      "Valid passport with at least 6 months validity",
      "Confirmed hotel booking or accommodation details",
      "Return flight ticket",
      "Proof of sufficient funds for the stay",
      "Recent passport-sized photograph",
    ],
    processingTime: "2-3 Business Days",
    priceInUsd: "$ 75",
    priceInPkr: "PKR 15,000",
    priceInRiyad: "SAR 250",
  },
  {
    id: "business",
    label: "Business",
    image: IMAGES.services.business,
    title: "Business Visa",
    description: `The Qatar Business Visa is designed for professionals who need to travel to Qatar for business-related activities. Whether you're attending conferences, meeting clients, negotiating contracts, or exploring investment opportunities, this visa provides the flexibility you need.

Business visitors can engage in a wide range of professional activities including attending trade shows, conducting market research, participating in training programs, and establishing business relationships. Qatar's growing economy and strategic location make it an ideal destination for business travelers from around the world.

The business visa offers various validity options to suit your travel frequency, from single-entry visas for one-time visits to multiple-entry visas for regular business travelers.`,
    eligibility: [
      "Valid passport with at least 6 months validity",
      "Invitation letter from Qatar-based company",
      "Company letter stating purpose of visit",
      "Proof of business registration",
      "Recent passport-sized photograph",
      "Hotel booking or accommodation confirmation",
    ],
    processingTime: "3-5 Business Days",
    priceInUsd: "$ 120",
    priceInPkr: "PKR 24,000",
    priceInRiyad: "SAR 450",
  },
  {
    id: "transit",
    label: "Transit",
    image: IMAGES.services.transit,
    title: "Transit Visa",
    description: `The Qatar Transit Visa is perfect for travelers passing through Doha's Hamad International Airport on their way to another destination. Make the most of your layover by exploring Qatar's attractions, enjoying world-class shopping, or experiencing authentic Arabian hospitality.

This visa allows you to leave the airport and explore Doha during your stopover. Visit the stunning Doha skyline, take a desert safari, or enjoy a meal at one of the many excellent restaurants. Qatar Airways passengers often take advantage of this visa to turn a simple layover into a mini-adventure.

Transit visas are typically valid for 96 hours (4 days), giving you plenty of time to experience the highlights of Qatar before continuing your journey.`,
    eligibility: [
      "Valid passport with at least 6 months validity",
      "Confirmed onward flight ticket",
      "Minimum layover of 5 hours",
      "Maximum layover of 96 hours",
      "Recent passport-sized photograph",
    ],
    processingTime: "1-2 Business Days",
    priceInUsd: "$ 35",
    priceInPkr: "PKR 6,000",
    priceInRiyad: "SAR 125",
  },
  {
    id: "family",
    label: "Family",
    image: IMAGES.services.family,
    title: "Family Visa",
    description: `The Qatar Family Visa enables residents of Qatar to bring their immediate family members to live with them in the country. This visa is essential for maintaining family unity and allows spouses, children, and parents to join their loved ones in Qatar.

Family visa holders can live in Qatar with their sponsoring family member, access healthcare services, enroll children in schools, and enjoy the high quality of life that Qatar offers. The visa can be renewed as long as the sponsor maintains their residency status.

We understand that family reunification is important, and our team works diligently to ensure smooth and fast processing of all family visa applications.`,
    eligibility: [
      "Valid passport for all family members",
      "Sponsor's valid Qatar residency permit",
      "Proof of relationship (marriage/birth certificates)",
      "Sponsor's salary certificate (minimum threshold applies)",
      "Accommodation proof in Qatar",
      "Medical fitness certificates",
      "Recent passport-sized photographs for all applicants",
    ],
    processingTime: "5-7 Business Days",
    priceInUsd: "$ 150",
    priceInPkr: "PKR 30,000",
    priceInRiyad: "SAR 600",
  },

];

export default function ServicesList() {
  const [activeTab, setActiveTab] = useState("tourist");

  const activeVisa = visaTypes.find((v) => v.id === activeTab) || visaTypes[0];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 border-b border-border pb-4">
          {visaTypes.map((visa) => (
            <button
              key={visa.id}
              onClick={() => setActiveTab(visa.id)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all sm:px-6 sm:py-3 sm:text-base",
                activeTab === visa.id
                  ? "bg-qatar-maroon text-white shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-qatar-maroon"
              )}
            >
              {visa.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Featured Image */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={activeVisa.image}
                alt={activeVisa.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Information Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-foreground">
              {activeVisa.title}
            </h2>

            {/* Description */}
            <div className="mt-6 space-y-4 text-muted-foreground">
              {activeVisa.description.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Eligibility */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">
                Eligibility Requirements
              </h3>
              <ul className="mt-4 space-y-3">
                {activeVisa.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Processing Time & Price */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="font-medium text-green-700">
                  {activeVisa.processingTime}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-qatar-gold/10 px-4 py-2">
              
                <span className="font-medium text-qatar-gold-700">
                  {activeVisa.priceInUsd}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-qatar-maroon/10 px-4 py-2">
                <span className="font-medium text-qatar-maroon-700">
                  {activeVisa.priceInPkr}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-qatar-maroon/10 px-4 py-2">
                <span className="font-medium text-qatar-gold-700">
                  {activeVisa.priceInRiyad}
                </span>
              </div>
            </div>

            {/* Apply Button */}
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-qatar-maroon px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-qatar-maroon-800 hover:shadow-xl"
              >
                Apply for {activeVisa.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
