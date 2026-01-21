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
  Bike,
  Building,
  Shield,
  Calendar,
} from "lucide-react";

export const metadata = {
  title: "Bike Rider Visa Qatar - Fast Qatar Visa Center",
  description:
    "Apply for Qatar Bike Rider Visa. QAR 7,500 visa fee, QAR 2,300/month salary, 2-year work permit with residence and medical insurance included.",
};

export default function BikeRiderVisaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.work.bikeRider}
          alt="Bike Rider Visa Qatar"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-white/70 text-sm mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Visa Services
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services/work" className="hover:text-white">
              Work Visas
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Bike Rider Visa</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Bike className="w-8 h-8 text-qatar-gold" />
            </div>
            <Badge className="bg-qatar-gold text-white border-0">High Demand</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Bike Rider Visa
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Join Qatar&apos;s rapidly growing delivery and logistics sector with competitive
            salary and full benefits package
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
                  The Bike Rider Visa is designed for delivery and courier professionals
                  seeking employment in Qatar&apos;s rapidly growing food delivery and
                  logistics sector. This visa category offers stable employment with
                  competitive salary and full residence benefits.
                </p>
                <p>
                  Qatar&apos;s e-commerce and food delivery industry is expanding rapidly,
                  creating thousands of job opportunities for bike riders. Major
                  companies like Talabat, Rafeeq, Snoonu, and various logistics firms
                  are actively hiring delivery professionals.
                </p>
                <p>
                  With the 2022 FIFA World Cup infrastructure and ongoing development
                  projects, Qatar has become one of the most sought-after destinations
                  for delivery professionals in the Middle East.
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
                    "Age: 21-45 years",
                    "Valid passport (minimum 6 months validity)",
                    "Basic education certificate",
                    "Clean police clearance certificate",
                    "Medical fitness certificate",
                    "Previous delivery experience preferred but not mandatory",
                    "Valid driving license (can be obtained in Qatar)",
                    "Good physical health and fitness",
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
                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-br from-qatar-gold/10 to-qatar-gold/5 rounded-xl border border-qatar-gold/20">
                    <div className="text-sm text-gray-600 mb-1">
                      Visa Processing Fee
                    </div>
                    <div className="text-3xl font-bold text-qatar-gold">
                      QAR 7,500
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      One-time payment
                    </div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-qatar-maroon/10 to-qatar-maroon/5 rounded-xl border border-qatar-maroon/20">
                    <div className="text-sm text-gray-600 mb-1">Monthly Salary</div>
                    <div className="text-3xl font-bold text-qatar-maroon">
                      QAR 2,300
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      PKR 180,000/month
                    </div>
                  </div>
                </div>

                {/* Contract Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Contract</div>
                    <div className="font-semibold">2 Years</div>
                  </div>
                  <div className="text-center">
                    <Building className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Accommodation</div>
                    <div className="font-semibold">Provided</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Insurance</div>
                    <div className="font-semibold">Included</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Working Hours</div>
                    <div className="font-semibold">8-10 hrs/day</div>
                  </div>
                </div>

                {/* What's Included */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-qatar-maroon">
                    What&apos;s Included in Your Package:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Work permit processing (2 years)",
                      "Residence permit (2 years)",
                      "Medical insurance coverage",
                      "Company accommodation or allowance",
                      "Food allowance or company meals",
                      "Company bike and equipment",
                      "Uniform and safety gear",
                      "End of service benefits",
                      "30 days annual leave",
                      "Air ticket allowance (annual)",
                      "Qatar ID card processing",
                      "Airport pickup on arrival",
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

            {/* Working Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon">
                  Working Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="font-semibold mb-2 text-gray-800">
                      Working Hours:
                    </div>
                    <p className="text-gray-600">
                      8-10 hours/day, 6 days/week with flexible scheduling
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-800">Rest Day:</div>
                    <p className="text-gray-600">
                      1 day off per week (typically Friday)
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-800">Overtime:</div>
                    <p className="text-gray-600">
                      Available with additional pay (1.5x hourly rate)
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-800">Tips:</div>
                    <p className="text-gray-600">
                      Customer tips allowed and encouraged (extra income)
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-800">
                      Annual Leave:
                    </div>
                    <p className="text-gray-600">30 days paid leave per year</p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 text-gray-800">
                      Sick Leave:
                    </div>
                    <p className="text-gray-600">
                      14 days paid sick leave per year
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon">
                  Career Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  As a bike rider in Qatar, you can work with leading companies in the
                  delivery and logistics sector:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Talabat (Food Delivery)",
                    "Rafeeq (Multi-delivery)",
                    "Snoonu (Food & Grocery)",
                    "Careem (Delivery Services)",
                    "Amazon Qatar",
                    "DHL Express",
                    "FedEx Qatar",
                    "Local Restaurants",
                    "E-commerce Companies",
                  ].map((company, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <Bike className="w-4 h-4 text-qatar-gold" />
                      <span className="text-sm text-gray-700">{company}</span>
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
                    "Passport copy (valid 6+ months from travel date)",
                    "Recent passport-size photos (4 copies, white background)",
                    "Educational certificates (attested by home country)",
                    "Police clearance certificate (attested)",
                    "Medical fitness certificate from approved center",
                    "Previous employment certificates (if any)",
                    "CV/Resume with contact details",
                    "Driving license copy (if available)",
                    "Birth certificate copy",
                    "National ID card copy",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-qatar-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-qatar-gold/10 rounded-lg border border-qatar-gold/20">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> We provide complete document attestation
                    assistance. Our team will guide you through the entire
                    documentation process.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Facts Card */}
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
                  <p className="text-sm text-qatar-gold">Express: 10-12 days</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Visa Fee</span>
                  </div>
                  <p className="text-3xl font-bold text-qatar-gold">QAR 7,500</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Monthly Salary</span>
                  </div>
                  <p className="text-2xl font-bold text-qatar-maroon">QAR 2,300</p>
                  <p className="text-sm text-gray-500">PKR 180,000</p>
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

                  <Button
                    variant="outline"
                    className="w-full border-qatar-gold text-qatar-gold hover:bg-qatar-gold hover:text-white"
                  >
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Our visa experts are available 24/7 to answer your questions
                </p>
                <div className="space-y-2">
                  <a href="tel:+97412345678" className="block">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      +974 12345678
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/97412345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Chat
                    </Button>
                  </a>
                  <a href="mailto:info@fastqatarvisa.com" className="block">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Other Work Visas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Other Work Visas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { name: "Cleaner Visa", slug: "cleaner", fee: "QAR 7,000" },
                  { name: "Labour Visa", slug: "labour", fee: "QAR 7,000" },
                  { name: "Accountant Visa", slug: "accountant", fee: "QAR 8,000" },
                  { name: "Work Permit (2Y)", slug: "work-permit", fee: "From QAR 7,500" },
                  { name: "Freelance Visa", slug: "freelance", fee: "From QAR 8,500" },
                ].map((visa) => (
                  <Link
                    key={visa.slug}
                    href={`/services/work/${visa.slug}`}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {visa.name}
                    </span>
                    <span className="text-sm text-qatar-gold font-semibold">
                      {visa.fee}
                    </span>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
