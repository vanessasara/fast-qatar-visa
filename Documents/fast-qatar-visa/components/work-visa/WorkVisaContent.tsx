import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Users, DollarSign } from "lucide-react";
import { ICON_MAP, type IconName } from "@/lib/icon-map";
import type { WorkVisa } from "@/lib/work-visas";

const { GraduationCap } = ICON_MAP;

interface WorkVisaContentProps {
  visa: WorkVisa;
}

export function WorkVisaContent({ visa }: WorkVisaContentProps) {
  // Get the icon component dynamically from our optimized icon map
  const JobIcon = ICON_MAP[visa.icon as IconName];

  return (
    <div className="lg:col-span-2 space-y-8">
      {/* Overview */}
      <Card className={visa.isPremium ? "border-qatar-gold border-2" : ""}>
        <CardHeader>
          <CardTitle className="card-title-with-icon">
            <FileText className="w-6 h-6" />
            Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="prose max-w-none text-muted-foreground">
          {visa.overview.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>

      {/* Suitable Professions / Job Categories (for some visas, show before eligibility) */}
      {(visa.slug === "freelance" || visa.slug === "work-permit") && (
        <Card>
          <CardHeader>
            <CardTitle className="card-title-with-icon">
              {JobIcon && <JobIcon className="w-6 h-6" />}
              {visa.jobCategoriesTitle}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {visa.slug === "freelance"
                ? "The Freelance Visa is ideal for independent professionals in:"
                : "This work permit is available for multiple professional categories:"}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {visa.jobCategories.map((category, idx) => (
                <div key={idx} className="job-category-item">
                  <CheckCircle className="icon-gold-sm" />
                  <span className="text-sm text-muted-foreground">{category}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Eligibility Criteria */}
      <Card>
        <CardHeader>
          <CardTitle className="card-title-with-icon">
            {visa.slug === "accountant" ? (
              <GraduationCap className="w-6 h-6" />
            ) : (
              <Users className="w-6 h-6" />
            )}
            {visa.slug === "work-permit" ? "General Eligibility" : "Eligibility Criteria"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {visa.eligibility.map((item, idx) => (
              <li key={idx} className="checklist-item">
                <CheckCircle className="icon-gold mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Package Details */}
      <Card>
        <CardHeader>
          <CardTitle className="card-title-with-icon">
            <DollarSign className="w-6 h-6" />
            {visa.slug === "freelance" ? "Package Details" : "Complete Package Details"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="pricing-card-gold">
              <div className="text-sm text-muted-foreground mb-1">Visa Processing Fee</div>
              <div className="text-3xl font-bold text-qatar-gold">{visa.visaFee}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {visa.visaFeeNote || "One-time payment"}
              </div>
            </div>
            <div className="pricing-card-maroon">
              <div className="text-sm text-muted-foreground mb-1">
                {visa.slug === "freelance" ? "Income Potential" : "Monthly Salary"}
              </div>
              <div className="text-3xl font-bold text-qatar-maroon">{visa.salary}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {visa.salaryPKR || visa.salaryNote || ""}
              </div>
            </div>
          </div>

          {/* Salary Ranges (for Labour Visa) */}
          {visa.salaryRanges && (
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-3 text-qatar-maroon">Salary Range by Skill Level:</h4>
              <div className="space-y-2">
                {visa.salaryRanges.map((range, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-muted-foreground">{range.level}</span>
                    <span className="font-semibold">{range.salary}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contract Details Grid */}
          <div className="contract-details-grid">
            {visa.contractDetails.map((detail, idx) => {
              const DetailIcon = ICON_MAP[detail.icon as IconName];
              return (
                <div key={idx} className="text-center">
                  {DetailIcon && <DetailIcon className="icon-gold-center" />}
                  <div className="text-sm text-muted-foreground">{detail.label}</div>
                  <div className="font-semibold text-sm">{detail.value}</div>
                </div>
              );
            })}
          </div>

          {/* What's Included */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-qatar-maroon">
              {visa.slug === "bike-rider" ? "What's Included in Your Package:" : "What's Included:"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {visa.packageIncludes.map((item, idx) => (
                <div key={idx} className="checklist-item-sm">
                  <CheckCircle className="icon-gold-sm" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
            {visa.slug === "work-permit" && (
              <p className="text-sm text-muted-foreground mt-4">
                * Family sponsorship depends on salary level (typically QAR 10,000+ for family visa eligibility)
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Working Conditions (for Bike Rider) */}
      {visa.workingConditions && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-qatar-maroon">Working Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visa.workingConditions.map((condition, idx) => (
                <div key={idx}>
                  <div className="font-semibold mb-2 text-foreground">{condition.label}:</div>
                  <p className="text-muted-foreground">{condition.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Benefits (for Accountant and Freelance) */}
      {visa.benefits && (
        <Card className="bg-gradient-to-br from-qatar-gold/5 to-background border-qatar-gold/20">
          <CardHeader>
            <CardTitle className="text-2xl text-qatar-maroon">
              {visa.slug === "accountant" ? "Why Choose This Visa?" : "Key Benefits"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visa.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-10 h-10 bg-qatar-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-qatar-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-qatar-maroon">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Job Categories / Career Opportunities (for non-freelance/work-permit) */}
      {visa.slug !== "freelance" && visa.slug !== "work-permit" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-qatar-maroon">{visa.jobCategoriesTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            {visa.slug !== "labour" && (
              <p className="text-muted-foreground mb-4">
                {visa.slug === "accountant"
                  ? "Accountants in Qatar work with leading organizations:"
                  : visa.slug === "bike-rider"
                  ? "As a bike rider in Qatar, you can work with leading companies in the delivery and logistics sector:"
                  : "Cleaners are employed across various sectors in Qatar:"}
              </p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {visa.jobCategories.map((category, idx) => (
                <div key={idx} className="job-category-item">
                  {JobIcon && <JobIcon className="w-4 h-4 text-qatar-gold" />}
                  <span className="text-sm text-muted-foreground">{category}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Required Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="card-title-with-icon">
            <FileText className="w-6 h-6" />
            Required Documents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {visa.requiredDocuments.map((item, idx) => (
              <li key={idx} className="checklist-item">
                <FileText className="icon-gold mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* Attestation Note */}
          {(visa.slug === "bike-rider" || visa.slug === "accountant") && (
            <div className={`mt-6 p-4 rounded-lg border ${visa.slug === "accountant" ? "bg-qatar-maroon/5 border-qatar-maroon/10" : "bg-qatar-gold/10 border-qatar-gold/20"}`}>
              <p className="text-sm text-muted-foreground">
                {visa.slug === "accountant" ? (
                  <>
                    <strong>Attestation Process:</strong> All educational documents require attestation from your home country&apos;s Ministry of Foreign Affairs and Qatar Embassy. We provide complete attestation assistance.
                  </>
                ) : (
                  <>
                    <strong>Note:</strong> We provide complete document attestation assistance. Our team will guide you through the entire documentation process.
                  </>
                )}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
