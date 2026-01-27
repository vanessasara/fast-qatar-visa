"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, DollarSign, Users, Calendar, Phone, MessageCircle, Mail, Award, Laptop } from "lucide-react";
import { CONTACT_INFO, getOtherWorkVisas } from "@/lib/work-visas";

interface WorkVisaSidebarProps {
  currentSlug: string;
  visaFee: string;
  visaFeePKR: string;
  visaFeeNote?: string;
  salary: string;
  salaryPKR?: string;
  salaryNote?: string;
  processingTime: string;
  expressProcessing?: string;
  duration: string;
  familySponsorship: string;
  isPremium?: boolean;
  sidebarIcon?: string;
  sidebarTitle?: string;
}

export function WorkVisaSidebar({
  currentSlug,
  visaFee,
  visaFeePKR,
  visaFeeNote,
  salary,
  salaryPKR,
  salaryNote,
  processingTime,
  expressProcessing,
  duration,
  familySponsorship,
  isPremium,
  sidebarIcon,
  sidebarTitle,
}: WorkVisaSidebarProps) {
  const otherVisas = getOtherWorkVisas(currentSlug);

  return (
    <div className="lg:col-span-1">
      <div className="lg:sticky lg:top-24 space-y-6">
        {/* Quick Facts Card */}
        <Card className={isPremium ? "border-qatar-gold border-2" : ""}>
          <CardHeader className="sidebar-header">
            <CardTitle className="text-xl flex items-center gap-2">
              {isPremium ? (
                <>
                  {sidebarIcon === "Award" && <Award className="w-5 h-5" />}
                  {sidebarIcon === "Laptop" && <Laptop className="w-5 h-5" />}
                  {sidebarTitle || "Premium Package"}
                </>
              ) : (
                "Quick Facts"
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            {/* Processing Time */}
            <div>
              <div className="sidebar-label">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">Processing Time</span>
              </div>
              <p className="text-gray-700 font-medium">{processingTime}</p>
              {expressProcessing && (
                <p className="text-sm text-qatar-gold">{expressProcessing}</p>
              )}
            </div>

            {/* Visa Fee */}
            <div className="sidebar-divider">
              <div className="sidebar-label">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-semibold">Visa Fee</span>
              </div>
              <p className="text-3xl font-bold text-qatar-gold">{visaFee}</p>
              {visaFeePKR && <p className="text-3xl font-bold text-qatar-maroon">{visaFeePKR}</p>}
              {visaFeeNote && <p className="text-sm text-gray-500">{visaFeeNote}</p>}
            </div>

            {/* Salary */}
            <div className="sidebar-divider">
              <div className="sidebar-label">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-semibold">Monthly Salary</span>
              </div>
              <p className="text-2xl font-bold text-qatar-maroon">{salary}</p>
              {salaryPKR && <p className="text-sm text-gray-500">{salaryPKR}</p>}
              {salaryNote && <p className="text-sm text-gray-500">{salaryNote}</p>}
            </div>

            {/* Duration (for some visa types) */}
            {duration !== "2 years" && (
              <div className="sidebar-divider">
                <div className="sidebar-label">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">Duration</span>
                </div>
                <p className="text-2xl font-bold text-qatar-maroon">{duration}</p>
                <p className="text-sm text-gray-500">Renewable</p>
              </div>
            )}

            {/* Family Sponsorship */}
            <div className="sidebar-divider">
              <div className="sidebar-label">
                <Users className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {familySponsorship === "Eligible" ? "Family Sponsorship" : "Contract Duration"}
                </span>
              </div>
              {familySponsorship === "Eligible" ? (
                <p className="text-green-600 font-medium">Eligible</p>
              ) : familySponsorship.startsWith("After") || familySponsorship.startsWith("Based") ? (
                <>
                  <p className="text-gray-700 font-medium">{familySponsorship}</p>
                </>
              ) : (
                <p className="text-gray-700 font-medium">{duration} (renewable)</p>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="sidebar-divider space-y-3">
              <Link href="/contact" className="block">
                <Button className={`w-full text-white text-lg py-6 ${isPremium ? "bg-qatar-gold hover:bg-qatar-gold/90" : "bg-qatar-maroon hover:bg-qatar-maroon/90"}`}>
                  Apply Now
                </Button>
              </Link>
              {isPremium && (
                <Button variant="outline" className="w-full border-qatar-maroon text-qatar-maroon hover:bg-qatar-maroon hover:text-white">
                  {currentSlug === "freelance" ? "Free Consultation" : "Schedule Consultation"}
                </Button>
              )}
              {!isPremium && (
                <Button variant="outline" className="w-full border-qatar-gold text-qatar-gold hover:bg-qatar-gold hover:text-white">
                  Download Brochure
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {isPremium ? (currentSlug === "freelance" ? "Questions?" : "Speak to an Expert") : "Need Help?"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-gray-600">
              {isPremium
                ? currentSlug === "freelance"
                  ? "Our freelance visa specialists are available 24/7"
                  : "Our professional visa consultants are available 24/7"
                : "Our visa experts are available 24/7 to answer your questions"}
            </p>
            <div className="space-y-2">
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="block">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  {CONTACT_INFO.phone}
                </Button>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full justify-start gap-2 text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Chat
                </Button>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="block">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Other Work Visas (only for non-premium) */}
        {!isPremium && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Other Work Visas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {otherVisas.map((visa) => (
                <Link
                  key={visa.slug}
                  href={`/services/work/${visa.slug}`}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {visa.shortTitle} Visa
                  </span>
                  <span className="text-sm text-qatar-gold font-semibold">
                    {visa.visaFee}
                  </span>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
