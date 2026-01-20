"use client";

import { FileCheck, Globe, Trophy, Clock } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const stats = [
  {
    icon: FileCheck,
    number: "50,000+",
    label: "Visas Successfully Processed",
  },
  {
    icon: Globe,
    number: "150+",
    label: "Countries Served Worldwide",
  },
  {
    icon: Trophy,
    number: "98%",
    label: "Visa Approval Success Rate",
  },
  {
    icon: Clock,
    number: "24-48",
    label: "Average Processing Hours",
  },
];

export default function Statistics() {
  return (
    <section className="py-16 bg-gradient-to-r from-qatar-maroon to-qatar-maroon/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <ScrollAnimation
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center group">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-qatar-gold/20 rounded-2xl mb-4 group-hover:bg-qatar-gold/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-qatar-gold" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
