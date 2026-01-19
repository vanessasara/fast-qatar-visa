"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { IMAGES } from "@/lib/images";

const team = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    image: IMAGES.testimonials.person3,
    bio: "With over 15 years of experience in immigration services, Ahmed founded Fast Qatar Visa to simplify the visa process for travelers worldwide.",
  },
  {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: IMAGES.testimonials.person2,
    bio: "Sarah ensures smooth operations and maintains our high service standards. She leads our team of visa specialists with expertise and dedication.",
  },
  {
    name: "Mohammed Hassan",
    role: "Head of Customer Support",
    image: IMAGES.testimonials.person5,
    bio: "Mohammed and his team are available 24/7 to assist customers. His commitment to service excellence drives our customer satisfaction.",
  },
  {
    name: "Lisa Chen",
    role: "Senior Visa Consultant",
    image: IMAGES.testimonials.person4,
    bio: "Lisa specializes in complex visa cases and business immigration. Her attention to detail ensures high approval rates for our clients.",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Dedicated professionals committed to your visa success
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              {/* Photo */}
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full ring-4 ring-gray-100 transition-all duration-300 group-hover:ring-qatar-gold">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-qatar-maroon">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-qatar-maroon hover:text-white"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-qatar-maroon hover:text-white"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
