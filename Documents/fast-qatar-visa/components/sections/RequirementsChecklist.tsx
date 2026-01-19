"use client";

import { useState } from "react";
import { ChevronDown, Check, AlertCircle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const requirements = [
  {
    id: "tourist",
    title: "Tourist Visa Requirements",
    documents: [
      "Valid passport (minimum 6 months validity)",
      "Passport-sized photograph (white background, recent)",
      "Completed visa application form",
      "Confirmed hotel reservation or accommodation details",
      "Return flight ticket",
      "Proof of sufficient funds (bank statement)",
      "Travel insurance (recommended)",
    ],
    notes: [
      "Passport must have at least 2 blank pages",
      "Photo must be taken within the last 6 months",
      "Bank statement should cover last 3 months",
    ],
  },
  {
    id: "business",
    title: "Business Visa Requirements",
    documents: [
      "Valid passport (minimum 6 months validity)",
      "Passport-sized photograph (white background)",
      "Invitation letter from Qatar-based company",
      "Letter from employer stating purpose of visit",
      "Company registration documents",
      "Confirmed hotel reservation",
      "Return flight ticket",
      "Business card",
    ],
    notes: [
      "Invitation letter must be on company letterhead",
      "Letter should specify duration and purpose of visit",
      "Trade license copy may be required",
    ],
  },
  {
    id: "transit",
    title: "Transit Visa Requirements",
    documents: [
      "Valid passport (minimum 6 months validity)",
      "Passport-sized photograph",
      "Confirmed onward flight ticket",
      "Proof of valid visa for final destination (if required)",
      "Hotel booking (if overnight stay)",
    ],
    notes: [
      "Minimum layover must be 5 hours",
      "Maximum stay allowed is 96 hours (4 days)",
      "Some nationalities may be eligible for visa-free transit",
    ],
  },
  {
    id: "family",
    title: "Family Visa Requirements",
    documents: [
      "Valid passport for all applicants",
      "Passport-sized photographs for all applicants",
      "Sponsor's valid Qatar residency permit (QID)",
      "Sponsor's salary certificate",
      "Marriage certificate (for spouse, attested)",
      "Birth certificates (for children, attested)",
      "Tenancy contract or accommodation proof",
      "Medical fitness certificates",
      "Police clearance certificates",
    ],
    notes: [
      "All certificates must be attested by relevant authorities",
      "Sponsor must meet minimum salary requirements",
      "Medical tests must be conducted at approved centers",
    ],
  },
  {
    id: "work",
    title: "Work Visa Requirements",
    documents: [
      "Valid passport (minimum 6 months validity)",
      "Passport-sized photographs",
      "Job offer letter from Qatar employer",
      "Educational certificates (attested)",
      "Professional experience certificates",
      "Medical fitness certificate",
      "Police clearance certificate",
      "CV/Resume",
    ],
    notes: [
      "Employer must obtain work permit approval first",
      "Attestation required from Ministry of Foreign Affairs",
      "Some professions require additional licensing",
      "Medical test includes HIV, Hepatitis B & C, TB screening",
    ],
  },
];

export default function RequirementsChecklist() {
  const [openItem, setOpenItem] = useState<string | null>("tourist");

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Document Requirements
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Make sure you have all the required documents ready before applying
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {requirements.map((req) => (
            <div
              key={req.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleItem(req.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-qatar-maroon" />
                  <span className="font-semibold text-gray-900">
                    {req.title}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-300",
                    openItem === req.id && "rotate-180"
                  )}
                />
              </button>

              {/* Accordion Content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openItem === req.id ? "max-h-[1000px]" : "max-h-0"
                )}
              >
                <div className="border-t border-gray-100 px-6 py-6">
                  {/* Documents List */}
                  <h4 className="mb-4 font-medium text-gray-900">
                    Required Documents:
                  </h4>
                  <ul className="space-y-3">
                    {req.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-600">{doc}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Important Notes */}
                  <div className="mt-6 rounded-lg bg-amber-50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600" />
                      <h4 className="font-medium text-amber-800">
                        Important Notes:
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {req.notes.map((note, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-amber-700"
                        >
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
