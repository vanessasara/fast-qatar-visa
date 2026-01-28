import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Bike,
  Sparkles,
  HardHat,
  Calculator,
  Briefcase,
  Laptop,
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export const metadata = {
  title: "Work Visas - Fast Qatar Visa Center",
  description:
    "Professional Qatar work visa services including Bike Rider, Cleaner, Labour, Accountant, Work Permit, and Freelance visas. Competitive packages with full support.",
};

const workVisas = [
  {
    title: "Bike Rider Visa",
    slug: "bike-rider",
    image: IMAGES.work.bikeRider,
    icon: Bike,
    visaFee: "QAR 7,500",
    salary: "QAR 2,300/month",
    salaryPKR: "PKR 180,000/month",
    processingTime: "15-20 days",
    badge: "High Demand",
    description:
      "Join Qatar's growing delivery sector with competitive salary and full benefits. Perfect for food delivery and courier professionals.",
    includes: [
      "2-year work permit",
      "Residence permit",
      "Medical insurance",
      "Company accommodation",
      "Work equipment provided",
    ],
  },
  {
    title: "Cleaner Visa",
    slug: "cleaner",
    image: IMAGES.work.cleaner,
    icon: Sparkles,
    visaFee: "QAR 7,000",
    salary: "QAR 2,000/month",
    processingTime: "15-20 days",
    description:
      "Professional cleaning opportunities in Qatar's residential, commercial, and hospitality sectors with housing support.",
    includes: [
      "Work permit",
      "Residence permit",
      "Housing allowance QAR 500",
      "Food allowance QAR 300",
      "Medical insurance",
    ],
  },
  {
    title: "Labour Visa",
    slug: "labour",
    image: IMAGES.work.labour,
    icon: HardHat,
    visaFee: "QAR 7,000",
    salary: "QAR 2,000-4,000/month",
    processingTime: "15-20 days",
    description:
      "Construction and general labor opportunities with Qatar's major infrastructure projects. Skilled and unskilled positions available.",
    includes: [
      "Work permit",
      "Residence permit",
      "Company accommodation",
      "Meals provided",
      "Safety equipment",
    ],
  },
  {
    title: "Accountant Open Visa",
    slug: "accountant",
    image: IMAGES.work.accountant,
    icon: Calculator,
    visaFee: "QAR 8,000",
    salary: "QAR 25,000+/month",
    salaryPKR: "PKR 620,000+/month",
    processingTime: "20-25 days",
    badge: "Professional",
    popular: true,
    description:
      "Premium professional category for qualified accountants with high earning potential and family sponsorship options.",
    includes: [
      "Professional work permit",
      "Residence permit",
      "Family sponsorship eligible",
      "Housing allowance QAR 5,000-8,000",
      "Annual bonus",
    ],
  },
  {
    title: "Work Permit (2 Years)",
    slug: "work-permit",
    image: IMAGES.work.workPermit,
    icon: Briefcase,
    visaFee: "From QAR 7,500",
    salary: "Varies by position",
    processingTime: "20-30 days",
    description:
      "Extended employment authorization for various professional categories. Suitable for engineers, IT professionals, healthcare workers, and more.",
    includes: [
      "Extended work permit (2 years)",
      "Residence permit",
      "Renewable option",
      "Family sponsorship possible",
      "Job change flexibility",
    ],
  },
  {
    title: "Freelance Visa",
    slug: "freelance",
    image: IMAGES.work.freelance,
    icon: Laptop,
    visaFee: "From QAR 8,500",
    salary: "Self-determined",
    processingTime: "25-30 days",
    badge: "New",
    description:
      "Work independently in Qatar without traditional employer sponsorship. Perfect for consultants, digital professionals, and service providers.",
    includes: [
      "Self-sponsored permit",
      "Independent work authorization",
      "Multiple clients allowed",
      "Business setup support",
      "Multi-entry visa",
    ],
  },
];

export default function WorkVisasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.work.overview}
          alt="Qatar Work Visas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white font-medium transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
            <span className="text-qatar-gold font-medium">Work Visas</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Qatar Work Visa Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Professional employment visas with competitive packages. From delivery
            riders to accountants, we have the right visa for your career in Qatar.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-qatar-maroon py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-qatar-gold">6</div>
              <div className="text-white/80">Visa Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-qatar-gold">15-30</div>
              <div className="text-white/80">Days Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-qatar-gold">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-qatar-gold">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Visa Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-qatar-gold/10 text-qatar-gold border-qatar-gold mb-4">
              Choose Your Category
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-qatar-maroon mb-4">
              Available Work Visa Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the visa category that matches your skills and career goals.
              Each package includes comprehensive support and benefits.
            </p>
          </div>

          <div className="space-y-8">
            {workVisas.map((visa, index) => {
              const IconComponent = visa.icon;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={visa.slug}
                  className={`overflow-hidden ${
                    visa.popular ? "border-qatar-gold border-2 ring-2 ring-qatar-gold/20" : ""
                  }`}
                >
                  <div
                    className={`grid md:grid-cols-2 gap-0 ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-64 md:h-auto min-h-[300px] ${
                        isEven ? "" : "md:order-2"
                      }`}
                    >
                      <Image
                        src={visa.image}
                        alt={visa.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
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
                    </div>

                    {/* Content */}
                    <CardContent
                      className={`p-8 flex flex-col justify-center ${
                        isEven ? "" : "md:order-1"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-qatar-maroon/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-qatar-maroon" />
                        </div>
                        <h3 className="text-2xl font-bold text-qatar-maroon">
                          {visa.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground mb-6">{visa.description}</p>

                      {/* Pricing Row */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground">Visa Fee</div>
                          <div className="text-lg font-bold text-qatar-gold">
                            {visa.visaFee}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Salary</div>
                          <div className="text-lg font-bold text-qatar-maroon">
                            {visa.salary}
                          </div>
                          {visa.salaryPKR && (
                            <div className="text-xs text-muted-foreground">
                              {visa.salaryPKR}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Processing</div>
                          <div className="text-lg font-bold text-foreground">
                            {visa.processingTime}
                          </div>
                        </div>
                      </div>

                      {/* Includes */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-foreground mb-2">
                          Package Includes:
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {visa.includes.slice(0, 4).map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle className="w-4 h-4 text-qatar-gold flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4">
                        <Link href={`/work/${visa.slug}`}>
                          <Button className="bg-qatar-maroon hover:bg-qatar-maroon/90 text-white">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            className="border-qatar-gold text-qatar-gold hover:bg-qatar-gold hover:text-white"
                          >
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-qatar-maroon mb-4">
              Quick Comparison
            </h2>
            <p className="text-muted-foreground">
              Compare all work visa categories at a glance
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-qatar-maroon text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Visa Category</th>
                  <th className="px-6 py-4 text-center">Processing Fee</th>
                  <th className="px-6 py-4 text-center">Salary Range</th>
                  <th className="px-6 py-4 text-center">Processing Time</th>
                  <th className="px-6 py-4 text-center">Family Sponsorship</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted">
                  <td className="px-6 py-4 font-medium">Bike Rider</td>
                  <td className="px-6 py-4 text-center text-qatar-gold font-bold">
                    QAR 7,500
                  </td>
                  <td className="px-6 py-4 text-center">QAR 2,300/month</td>
                  <td className="px-6 py-4 text-center">15-20 days</td>
                  <td className="px-6 py-4 text-center">After 1 year</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/work/bike-rider">
                      <Button size="sm" className="bg-qatar-maroon">
                        Apply
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-6 py-4 font-medium">Cleaner</td>
                  <td className="px-6 py-4 text-center text-qatar-gold font-bold">
                    QAR 7,000
                  </td>
                  <td className="px-6 py-4 text-center">QAR 2,000/month</td>
                  <td className="px-6 py-4 text-center">15-20 days</td>
                  <td className="px-6 py-4 text-center">After 1 year</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/work/cleaner">
                      <Button size="sm" className="bg-qatar-maroon">
                        Apply
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-6 py-4 font-medium">Labour</td>
                  <td className="px-6 py-4 text-center text-qatar-gold font-bold">
                    QAR 7,000
                  </td>
                  <td className="px-6 py-4 text-center">QAR 2,000-4,000/month</td>
                  <td className="px-6 py-4 text-center">15-20 days</td>
                  <td className="px-6 py-4 text-center">After 1 year</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/work/labour">
                      <Button size="sm" className="bg-qatar-maroon">
                        Apply
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-muted bg-qatar-gold/5">
                  <td className="px-6 py-4 font-medium">
                    Accountant{" "}
                    <Badge className="ml-2 bg-qatar-gold text-white text-xs">
                      Popular
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center text-qatar-gold font-bold">
                    QAR 8,000
                  </td>
                  <td className="px-6 py-4 text-center">QAR 25,000+/month</td>
                  <td className="px-6 py-4 text-center">20-25 days</td>
                  <td className="px-6 py-4 text-center text-green-600 font-medium">
                    Eligible
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/work/accountant">
                      <Button size="sm" className="bg-qatar-maroon">
                        Apply
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-6 py-4 font-medium">Work Permit (2Y)</td>
                  <td className="px-6 py-4 text-center text-qatar-gold font-bold">
                    From QAR 7,500
                  </td>
                  <td className="px-6 py-4 text-center">Varies by job</td>
                  <td className="px-6 py-4 text-center">20-30 days</td>
                  <td className="px-6 py-4 text-center">Depends on salary</td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/work/work-permit">
                      <Button size="sm" className="bg-qatar-maroon">
                        Apply
                      </Button>
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-6 py-4 font-medium">
                    Freelance{" "}
                    <Badge className="ml-2 bg-qatar-maroon text-white text-xs">
                      New
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center text-qatar-gold font-bold">
                    From QAR 8,500
                  </td>
                  <td className="px-6 py-4 text-center">Self-determined</td>
                  <td className="px-6 py-4 text-center">25-30 days</td>
                  <td className="px-6 py-4 text-center">After 6 months</td>
                  <td className="px-6 py-4 text-center">
                          <Link href="/work/freelance">
                      <Button size="sm" className="bg-qatar-maroon">
                        Apply
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-muted-foreground text-sm mt-4">
            All fees include government charges and processing. Additional express
            processing available for urgent applications.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-qatar-maroon">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Career in Qatar?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our expert team is available 24/7 to guide you through the work visa
            application process. Contact us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background text-qatar-maroon hover:bg-muted"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
            </Link>
            <a
              href="https://wa.me/97412345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-background text-white hover:bg-background/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
