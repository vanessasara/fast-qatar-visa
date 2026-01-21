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
  Calculator,
  Building,
  Shield,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export const metadata = {
  title: "Accountant Open Visa Qatar - Fast Qatar Visa Center",
  description:
    "Apply for Qatar Accountant Open Visa. QAR 8,000 visa fee, QAR 25,000+/month salary. Professional category with family sponsorship and high earning potential.",
};

export default function AccountantVisaPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src={IMAGES.work.accountant}
          alt="Accountant Visa Qatar"
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
            <span className="text-white">Accountant Visa</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Calculator className="w-8 h-8 text-qatar-gold" />
            </div>
            <Badge className="bg-qatar-gold text-white border-0">Professional Category</Badge>
            <Badge className="bg-white text-qatar-maroon border-0">Most Popular</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Accountant Open Visa
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Premium professional category with high earning potential, family sponsorship, and career growth opportunities
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-qatar-gold border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700">
                <p>
                  The Accountant Open Visa is a premium professional category designed for qualified accounting professionals. This visa offers high earning potential, family sponsorship options, and career advancement opportunities in Qatar&apos;s thriving business sector.
                </p>
                <p>
                  Qatar&apos;s position as a global financial hub, home to the Qatar Financial Centre (QFC), creates exceptional opportunities for accounting professionals. Major multinational corporations, banks, oil &amp; gas companies, and consulting firms actively recruit qualified accountants.
                </p>
                <p>
                  With tax-free income and comprehensive benefits, accountants can save 60-70% of their earnings while enjoying a high quality of life in Doha.
                </p>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon flex items-center gap-2">
                  <GraduationCap className="w-6 h-6" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Age: 25-55 years",
                    "Bachelor's degree in Accounting/Finance (mandatory)",
                    "Minimum 2-3 years professional experience",
                    "Professional certifications preferred (CPA, ACCA, CMA, CA)",
                    "Valid passport (6+ months validity)",
                    "Clean police clearance certificate",
                    "Medical fitness certificate",
                    "Strong English communication skills",
                    "Knowledge of accounting software (SAP, Oracle, QuickBooks)",
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
                    <div className="text-3xl font-bold text-qatar-gold">QAR 8,000</div>
                    <div className="text-sm text-gray-500 mt-1">One-time payment</div>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-qatar-maroon/10 to-qatar-maroon/5 rounded-xl border border-qatar-maroon/20">
                    <div className="text-sm text-gray-600 mb-1">Monthly Salary</div>
                    <div className="text-3xl font-bold text-qatar-maroon">QAR 25,000+</div>
                    <div className="text-sm text-gray-500 mt-1">PKR 620,000+/month</div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
                  <div className="text-center">
                    <Building className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Housing</div>
                    <div className="font-semibold text-sm">QAR 5,000-8,000/mo</div>
                  </div>
                  <div className="text-center">
                    <Briefcase className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Transport</div>
                    <div className="font-semibold text-sm">QAR 1,500-2,000/mo</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Insurance</div>
                    <div className="font-semibold text-sm">Family Coverage</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 text-qatar-gold mx-auto mb-2" />
                    <div className="text-sm text-gray-500">Bonus</div>
                    <div className="font-semibold text-sm">Performance Based</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4 text-qatar-maroon">What&apos;s Included:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Professional work permit (2 years)",
                      "Residence permit (2 years)",
                      "Family sponsorship eligible",
                      "Comprehensive medical insurance",
                      "Housing allowance (QAR 5,000-8,000/mo)",
                      "Transport allowance (QAR 1,500-2,000/mo)",
                      "Education allowance for children",
                      "Annual performance bonus",
                      "30 days leave + air tickets",
                      "End of service gratuity",
                      "Career development opportunities",
                      "Tax-free income",
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

            {/* Career Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Accountants in Qatar work with leading organizations:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Multinational Corporations",
                    "Qatar Financial Centre",
                    "Banks & Financial Institutions",
                    "Oil & Gas Companies",
                    "Real Estate Firms",
                    "Big 4 Consulting Firms",
                    "Government Organizations",
                    "Healthcare Sector",
                    "Construction Companies",
                  ].map((sector, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Calculator className="w-4 h-4 text-qatar-gold" />
                      <span className="text-sm text-gray-700">{sector}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Benefits */}
            <Card className="bg-gradient-to-br from-qatar-gold/5 to-white border-qatar-gold/20">
              <CardHeader>
                <CardTitle className="text-2xl text-qatar-maroon">Why Choose This Visa?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Tax-Free Income", desc: "No income tax in Qatar - keep 100% of your earnings" },
                    { title: "High Savings Potential", desc: "Save 60-70% of your salary with low living costs" },
                    { title: "Family Sponsorship", desc: "Bring your spouse and children to Qatar" },
                    { title: "Professional Growth", desc: "Career advancement and networking opportunities" },
                    { title: "Quality Lifestyle", desc: "Modern amenities, safe environment, excellent healthcare" },
                    { title: "Global Experience", desc: "Work with international teams and clients" },
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
                    "Bachelor's degree in Accounting/Finance (attested)",
                    "Professional certifications (CPA, ACCA, CMA - attested)",
                    "Experience certificates (minimum 2-3 years, attested)",
                    "Police clearance certificate (attested)",
                    "Medical fitness certificate",
                    "Detailed CV/Resume",
                    "Reference letters from previous employers",
                    "Academic transcripts",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-qatar-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-qatar-maroon/5 rounded-lg border border-qatar-maroon/10">
                  <p className="text-sm text-gray-700">
                    <strong>Attestation Process:</strong> All educational documents require attestation from your home country&apos;s Ministry of Foreign Affairs and Qatar Embassy. We provide complete attestation assistance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="sticky top-24 border-qatar-gold border-2">
              <CardHeader className="bg-gradient-to-r from-qatar-maroon to-qatar-maroon/90 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Premium Package
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">Processing Time</span>
                  </div>
                  <p className="text-gray-700 font-medium">20-25 working days</p>
                  <p className="text-sm text-qatar-gold">Express: 15 days</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Visa Fee</span>
                  </div>
                  <p className="text-3xl font-bold text-qatar-gold">QAR 8,000</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">Monthly Salary</span>
                  </div>
                  <p className="text-2xl font-bold text-qatar-maroon">QAR 25,000+</p>
                  <p className="text-sm text-gray-500">PKR 620,000+</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-semibold">Family Sponsorship</span>
                  </div>
                  <p className="text-green-600 font-medium">Eligible</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Contract Duration</span>
                  </div>
                  <p className="text-gray-700 font-medium">2 years (renewable)</p>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3">
                  <Link href="/contact" className="block">
                    <Button className="w-full bg-qatar-gold hover:bg-qatar-gold/90 text-white text-lg py-6">
                      Apply Now
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-qatar-maroon text-qatar-maroon hover:bg-qatar-maroon hover:text-white">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Speak to an Expert</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">
                  Our professional visa consultants are available 24/7
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
    </Layout>
  );
}
