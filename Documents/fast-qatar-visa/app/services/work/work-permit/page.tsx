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
  Briefcase,
  Building,
  Shield,
  Calendar,
  RefreshCw,
} from "lucide-react";

export const metadata = {
  title: "Work Permit Visa (2 Years) Qatar - Fast Qatar Visa Center",
  description:
    "Apply for Qatar 2-Year Work Permit Visa. From QAR 7,500. Extended employment authorization for engineers, IT professionals, healthcare workers, and more.",
};

export default function WorkPermitVisaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.work.workPermit}
          alt="Work Permit Visa Qatar"
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
            <span className="text-white">Work Permit (2 Years)</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-qatar-gold" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Work Permit Visa (2 Years)
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Extended employment authorization for various professional categories with long-term stability
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
                  The 2-Year Work Permit Visa provides extended employment authorization for various professional and skilled categories. This visa offers longer stability and is suitable for professionals seeking long-term opportunities in Qatar.
                </p>
                <p>
                  This versatile visa category covers a wide range of professions from engineering and IT to healthcare and hospitality. The extended validity period provides job security and allows for career development in Qatar.
                </p>
                <p>
                  With the option to renew and potential for family sponsorship (based on salary), this visa is ideal for professionals planning to establish their careers in Qatar.
                </p>
              </CardContent>
            </Card>

            {/* Eligible Professions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Eligible Professions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  This work permit is available for multiple professional categories:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Engineers (All disciplines)",
                    "IT Professionals",
                    "Healthcare Workers",
                    "Teachers & Educators",
                    "Sales Professionals",
                    "Marketing Specialists",
                    "Hotel & Hospitality Staff",
                    "Restaurant Workers",
                    "Retail Managers",
                    "Administrative Staff",
                    "HR Professionals",
                    "Project Managers",
                    "Graphic Designers",
                    "Architects",
                    "Quality Controllers",
                    "Logistics Coordinators",
                    "Customer Service",
                    "And many more...",
                  ].map((profession, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-qatar-gold flex-shrink-0" />
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
                    <div className="text-3xl font-bold text-qatar-gold">From QAR 7,500</div>
                    <div className="text-sm text-gray-500 mt-1">Varies by category</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-qatar-maroon/10 to-qatar-maroon/5 rounded-xl border border-qatar-maroon/20">
                    <div className="text-sm text-gray-600 mb-1">Salary Range</div>
                    <div className="text-3xl font-bold text-qatar-maroon">Varies</div>
                    <div className="text-sm text-gray-500 mt-1">Based on job and experience</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Calendar className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">2 Years</div>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Renewable</div>
                    <div className="font-semibold">Yes</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Insurance</div>
                    <div className="font-semibold">Included</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Family Visa</div>
                    <div className="font-semibold">Possible*</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-qatar-maroon">What&apos;s Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Extended work permit (2 years)",
                      "Residence permit (2 years)",
                      "Medical insurance coverage",
                      "Multiple re-entry options",
                      "Job change flexibility (with NOC)",
                      "Family sponsorship possible*",
                      "Renewable with employer",
                      "Qatar ID card processing",
                      "End of service benefits",
                      "Annual leave as per labor law",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-qatar-gold flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Family sponsorship depends on salary level (typically QAR 10,000+ for family visa eligibility)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  General Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Valid passport (minimum 6 months validity)",
                    "Relevant educational qualifications (attested)",
                    "Professional experience in the field",
                    "Clean police clearance certificate",
                    "Medical fitness certificate",
                    "Job offer from Qatar employer",
                    "Professional certifications (if applicable)",
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
                    "Passport copy (valid 6+ months)",
                    "Recent passport photos (white background)",
                    "Educational certificates (attested)",
                    "Professional certifications (attested, if any)",
                    "Experience certificates (attested)",
                    "Police clearance certificate (attested)",
                    "Medical fitness certificate",
                    "CV/Resume with complete work history",
                    "Reference letters",
                    "Job offer letter from employer",
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
                  <p className="text-gray-700 font-medium">20-30 working days</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Visa Fee</span>
                  </div>
                  <p className="text-3xl font-bold text-qatar-gold">From QAR 7,500</p>
                  <p className="text-sm text-gray-500">Up to QAR 10,000</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Validity</span>
                  </div>
                  <p className="text-2xl font-bold text-qatar-maroon">2 Years</p>
                  <p className="text-sm text-gray-500">Renewable</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">Family Sponsorship</span>
                  </div>
                  <p className="text-gray-700 font-medium">Based on salary</p>
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
