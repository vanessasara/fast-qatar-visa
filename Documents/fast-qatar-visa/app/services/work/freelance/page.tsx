import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Users,
  Phone,
  MessageCircle,
  Mail,
  Laptop,
  Building,
  Shield,
  Calendar,
  Globe,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Freelance Visa Qatar - Fast Qatar Visa Center",
  description:
    "Apply for Qatar Freelance Visa. From QAR 8,500. Work independently without employer sponsorship. Perfect for consultants, digital professionals, and service providers.",
};

export default function FreelanceVisaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.work.freelance}
          alt="Freelance Visa Qatar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Visa Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/work" className="hover:text-white">Work Visas</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Freelance Visa</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Laptop className="w-8 h-8 text-qatar-gold" />
            </div>
            <Badge className="bg-qatar-gold text-white border-0">New in Qatar</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Freelance Visa
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Work independently in Qatar without traditional employer sponsorship. Perfect for consultants and digital professionals.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-qatar-gold/50">
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700">
                <p>
                  The Freelance Visa enables independent professionals to work in Qatar without traditional employer sponsorship. Perfect for consultants, digital professionals, and service providers seeking flexibility and independence.
                </p>
                <p>
                  This relatively new visa category reflects Qatar&apos;s commitment to attracting global talent and supporting the gig economy. Freelancers can work with multiple clients, set their own rates, and enjoy the freedom of self-employment while living in one of the world&apos;s most dynamic cities.
                </p>
                <p>
                  With Qatar&apos;s tax-free environment, freelancers can maximize their earnings while enjoying world-class infrastructure and a high quality of life.
                </p>
              </CardContent>
            </Card>

            {/* Suitable Professions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <Laptop className="w-6 h-6" />
                  Suitable Professions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Freelance Visa is ideal for independent professionals in:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "IT Consultants",
                    "Software Developers",
                    "Graphic Designers",
                    "Marketing Professionals",
                    "Content Creators",
                    "Business Consultants",
                    "Trainers & Coaches",
                    "Photographers",
                    "Videographers",
                    "Event Planners",
                    "Translators",
                    "Writers & Editors",
                    "Web Developers",
                    "Digital Marketers",
                    "Financial Advisors",
                    "Legal Consultants",
                    "Architects",
                    "Interior Designers",
                  ].map((profession, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Zap className="w-4 h-4 text-qatar-gold flex-shrink-0" />
                      <span className="text-sm text-gray-700">{profession}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Package Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Package Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-br from-qatar-gold/10 to-qatar-gold/5 rounded-xl border border-qatar-gold/20">
                    <div className="text-sm text-gray-600 mb-1">Visa Processing Fee</div>
                    <div className="text-3xl font-bold text-qatar-gold">From QAR 8,500</div>
                    <div className="text-sm text-gray-500 mt-1">One-time payment</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-qatar-maroon/10 to-qatar-maroon/5 rounded-xl border border-qatar-maroon/20">
                    <div className="text-sm text-gray-600 mb-1">Income Potential</div>
                    <div className="text-3xl font-bold text-qatar-maroon">Unlimited</div>
                    <div className="text-sm text-gray-500 mt-1">Self-determined earnings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">1-2 Years</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Clients</div>
                    <div className="font-semibold">Multiple</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Sponsorship</div>
                    <div className="font-semibold">Self-Sponsored</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Family Visa</div>
                    <div className="font-semibold">After 6 months</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-qatar-maroon">What&apos;s Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Self-sponsored work permit",
                      "Residence permit (1-2 years)",
                      "Independent work authorization",
                      "Multiple clients allowed",
                      "Business setup support",
                      "Multi-entry visa",
                      "Qatar ID card processing",
                      "Bank account opening assistance",
                      "Renewable visa option",
                      "No employer dependency",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-qatar-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-gradient-to-br from-qatar-gold/5 to-white border-qatar-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon">Key Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Complete Independence", desc: "No employer sponsorship required - you are your own sponsor" },
                    { title: "Multiple Clients", desc: "Work with as many clients as you want, locally and internationally" },
                    { title: "Tax-Free Income", desc: "Keep 100% of your earnings with no income tax in Qatar" },
                    { title: "Flexibility", desc: "Set your own schedule, rates, and work arrangements" },
                    { title: "Business Growth", desc: "Build your brand and client base in the Middle East" },
                    { title: "Family Option", desc: "Sponsor family members after 6 months of residency" },
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="w-10 h-10 bg-qatar-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-qatar-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-qatar-maroon">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Minimum age: 25 years",
                    "Professional qualification or proven expertise",
                    "Portfolio demonstrating your work",
                    "Business plan or service offering description",
                    "Clean police clearance certificate",
                    "Medical fitness certificate",
                    "Proof of financial stability (bank statements)",
                    "Valid passport (6+ months validity)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-qatar-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Required Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Required Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Detailed business plan (services you will offer)",
                    "Portfolio of previous work/projects",
                    "Professional qualifications (attested)",
                    "Bank statements (proof of funds - minimum 6 months)",
                    "Passport copy (valid 6+ months)",
                    "Recent passport photos (white background)",
                    "Police clearance certificate (attested)",
                    "Medical fitness certificate",
                    "CV/Resume with complete work history",
                    "Client testimonials or references (if available)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-qatar-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Card className="border-qatar-gold">
                <CardHeader className="bg-gradient-to-r from-qatar-maroon to-qatar-maroon/90 text-white rounded-t-lg">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Laptop className="w-5 h-5" />
                    Freelance Package
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">Processing Time</span>
                    </div>
                    <p className="text-gray-700 font-medium">25-30 working days</p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm font-semibold">Visa Fee</span>
                    </div>
                    <p className="text-3xl font-bold text-qatar-gold">From QAR 8,500</p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-semibold">Duration</span>
                    </div>
                    <p className="text-2xl font-bold text-qatar-maroon">1-2 Years</p>
                    <p className="text-sm text-gray-500">Renewable</p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-semibold">Family Sponsorship</span>
                    </div>
                    <p className="text-gray-700 font-medium">After 6 months</p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <Link href="/contact" className="block">
                      <Button className="w-full bg-qatar-gold hover:bg-qatar-gold/90 text-white text-lg py-6">
                        Apply Now
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-qatar-maroon text-qatar-maroon hover:bg-qatar-maroon hover:text-white">
                      Free Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Questions?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">
                    Our freelance visa specialists are available 24/7
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+97412345678" className="block">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Phone className="w-4 h-4" />
                        +974 12345678
                      </Button>
                    </a>
                    <a href="https://wa.me/97412345678" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full justify-start gap-2 text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Chat
                      </Button>
                    </a>
                    <a href="mailto:info@fastqatarvisa.com" className="block">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Mail className="w-4 h-4" />
                        Email Us
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}