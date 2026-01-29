import {
  Award,
  Zap,
  TrendingUp,
  Headphones,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";

const features = [
  {
    icon: Award,
    title: "Decade of Excellence",
    subtitle: "10+ Years Experience",
    description:
      "Over 10 years of specialized experience in Qatar visa processing with thousands of successful applications",
  },
  {
    icon: Zap,
    title: "Quick Turnaround",
    subtitle: "Fast Processing",
    description:
      "Express processing available - get your visa approved in as little as 24 hours with our priority service",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    subtitle: "98% Success Rate",
    description:
      "Exceptional approval rate with thousands of satisfied clients from over 150 countries worldwide",
  },
  {
    icon: Headphones,
    title: "Always Available",
    subtitle: "24/7 Expert Support",
    description:
      "Round-the-clock assistance from our dedicated visa specialists via phone, email, and WhatsApp",
  },
  {
    icon: ShieldCheck,
    title: "Complete Security",
    subtitle: "Secure & Transparent",
    description:
      "Bank-level encryption for your data and transparent process with no hidden fees",
  },
  {
    icon: BadgeCheck,
    title: "Official Partner",
    subtitle: "Government Approved",
    description:
      "Authorized visa processing center working directly with Qatar government authorities",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Why Choose Fast Qatar Visa?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Your trusted partner for hassle-free visa processing
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={feature.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group h-full rounded-xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-qatar-gold hover:shadow-lg">
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-qatar-gold/10 text-qatar-gold transition-colors group-hover:bg-qatar-gold group-hover:text-white">
                  <feature.icon className="h-7 w-7" />
                </div>

                {/* Subtitle */}
                <p className="text-sm font-semibold text-qatar-maroon uppercase tracking-wide">
                  {feature.subtitle}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
