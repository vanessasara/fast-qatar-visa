import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Users,
  Phone,
  MessageCircle,
  Mail,
  HardHat,
  Building,
  Shield,
  Calendar,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "Labour Visa Qatar - Fast Qatar Visa Center",
  description:
    "Apply for Qatar Labour Visa. QAR 7,000 visa fee, QAR 2,000-4,000/month salary. Construction and general labor opportunities with accommodation provided.",
};

export default function LabourVisaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.work.labour}
          alt="Labour Visa Qatar"
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
            <span className="text-white">Labour Visa</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <HardHat className="w-8 h-8 text-qatar-gold" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Labour Visa
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Construction and general labor opportunities with Qatar&apos;s major infrastructure projects
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700">
                <p>
                  The Labour Visa category serves Qatar&apos;s construction and general labor workforce. With major infrastructure projects and continuous development, skilled and unskilled laborers are in high demand across Qatar.
                </p>
                <p>
                  Qatar continues to invest heavily in infrastructure, real estate, and industrial development. This creates ongoing demand for construction workers, factory staff, warehouse workers, and general laborers.
                </p>
                <p>
                  This visa provides full accommodation and meals, allowing workers to save a significant portion of their salary.
                </p>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
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
                    "Age: 21-50 years",
                    "Valid passport (minimum 6 months validity)",
                    "Basic education",
                    "Clean police clearance certificate",
                    "Medical fitness and physically fit",
                    "Skills in specific trades (optional, higher salary)",
                    "Ability to work in outdoor conditions",
                    "Willingness to work in team environment",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-qatar-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Package Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Complete Package Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-br from-qatar-gold/10 to-qatar-gold/5 rounded-xl border border-qatar-gold/20">
                    <div className="text-sm text-gray-600 mb-1">Visa Processing Fee</div>
                    <div className="text-3xl font-bold text-qatar-gold">QAR 7,000</div>
                    <div className="text-sm text-gray-500 mt-1">One-time payment</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-qatar-maroon/10 to-qatar-maroon/5 rounded-xl border border-qatar-maroon/20">
                    <div className="text-sm text-gray-600 mb-1">Monthly Salary</div>
                    <div className="text-3xl font-bold text-qatar-maroon">QAR 2,000-4,000</div>
                    <div className="text-sm text-gray-500 mt-1">Based on skill level</div>
                  </div>
                </div>

                {/* Salary by Skill */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3 text-qatar-maroon">Salary Range by Skill Level:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Unskilled Labour</span>
                      <span className="font-semibold">QAR 2,000/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Semi-skilled Labour</span>
                      <span className="font-semibold">QAR 2,500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Skilled Labour (Electrician, Plumber, etc.)</span>
                      <span className="font-semibold">QAR 3,000-4,000/month</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Building className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Accommodation</div>
                    <div className="font-semibold">Company Camp</div>
                  </div>
                  <div className="text-center">
                    <Wrench className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Meals</div>
                    <div className="font-semibold">Provided</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Safety Gear</div>
                    <div className="font-semibold">Included</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Contract</div>
                    <div className="font-semibold">2 Years</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-qatar-maroon">What&apos;s Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Work permit processing",
                      "Residence permit (2 years)",
                      "Medical insurance coverage",
                      "Company accommodation (camp/housing)",
                      "Meals provided (3 times daily)",
                      "Transportation to/from work site",
                      "Safety equipment and uniform",
                      "End of service benefits",
                      "30 days annual leave",
                      "Overtime pay available",
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

            {/* Job Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon">Job Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Construction Labour",
                    "General Labour",
                    "Warehouse Workers",
                    "Factory Workers",
                    "Agricultural Workers",
                    "Maintenance Staff",
                    "Electricians",
                    "Plumbers",
                    "Carpenters",
                    "Welders",
                    "Painters",
                    "Mason/Tiler",
                  ].map((job, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <HardHat className="w-4 h-4 text-qatar-gold" />
                      <span className="text-sm text-gray-700">{job}</span>
                    </div>
                  ))}
                </div>
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
                    "Passport copy (valid 6+ months)",
                    "Recent passport-size photos (white background)",
                    "Educational certificates (attested)",
                    "Police clearance certificate (attested)",
                    "Medical fitness certificate",
                    "Trade certificates (for skilled workers)",
                    "Previous employment certificates",
                    "CV/Resume",
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
          <div className="lg:col-span-1 space-y-6">
            <Card className="sticky top-24">
              <CardHeader className="bg-qatar-maroon text-white rounded-t-lg">
                <CardTitle className="text-xl">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">Processing Time</span>
                  </div>
                  <p className="text-gray-700 font-medium">15-20 working days</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Visa Fee</span>
                  </div>
                  <p className="text-3xl font-bold text-qatar-gold">QAR 7,000</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Monthly Salary</span>
                  </div>
                  <p className="text-2xl font-bold text-qatar-maroon">QAR 2,000-4,000</p>
                  <p className="text-sm text-gray-500">Based on skill level</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">Contract Duration</span>
                  </div>
                  <p className="text-gray-700 font-medium">2 years (renewable)</p>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-qatar-maroon hover:bg-qatar-maroon/90 text-white text-lg py-6">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">Our visa experts are available 24/7</p>
                <div className="space-y-2">
                  <a href="tel:+97451049145" className="block">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Phone className="w-4 h-4" />
                      +974-5104 9145
                    </Button>
                  </a>
                  <a href="https://wa.me/97451049145" target="_blank" rel="noopener noreferrer" className="block">
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
    </Layout>
  );
}
