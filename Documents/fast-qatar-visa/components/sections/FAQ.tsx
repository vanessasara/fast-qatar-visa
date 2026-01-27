"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQCategory = "general" | "work-visa" | "process" | "payment" | "validity";

interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

const categories: { id: FAQCategory; label: string }[] = [
  { id: "general", label: "General" },
  { id: "work-visa", label: "Work Visas" },
  { id: "process", label: "Application Process" },
  { id: "payment", label: "Payment & Refunds" },
  { id: "validity", label: "Visa Validity" },
];

const faqs: FAQ[] = [
  // General Questions
  {
    category: "general",
    question: "How long does visa processing take?",
    answer:
      "Processing times vary by visa type: Tourist/Transit visas take 24-48 hours, Business visas take 2-3 days, Work visas take 15-30 days depending on category, and Family visas take 3-5 days. Express processing is available for urgent applications.",
  },
  {
    category: "general",
    question: "What payment methods do you accept?",
    answer:
      "We accept Credit/Debit cards (Visa, Mastercard), bank transfers, online payment gateways, and cash payments at our office. All online transactions are processed through secure, encrypted channels.",
  },
  {
    category: "general",
    question: "Is my information secure?",
    answer:
      "Yes, we use bank-level SSL encryption for all data transmission. We maintain secure payment processing, confidential document handling, and full compliance with data protection regulations. Your information is never shared with third parties.",
  },
  {
    category: "general",
    question: "What if my visa is rejected?",
    answer:
      "We offer a full refund of processing fees if your visa is rejected. Government fees are non-refundable. We also provide reapplication assistance. With our 98% success rate, rejections are rare.",
  },
  {
    category: "general",
    question: "Can I track my application?",
    answer:
      "Yes! Use your reference number on our Track Application page for 24/7 status checking. You'll receive email updates at each stage, and SMS notifications are available if opted in.",
  },
  // Work Visa Specific
  {
    category: "work-visa",
    question: "What is the minimum salary for a work visa?",
    answer:
      "The minimum salary as per Qatar law is QAR 1,800/month. Our visa packages offer QAR 2,000-25,000+ depending on the category: Bike Rider (QAR 2,300), Cleaner/Labour (QAR 2,000), and Accountant (QAR 25,000+). All packages include allowances and benefits.",
  },
  {
    category: "work-visa",
    question: "Can I bring my family on a work visa?",
    answer:
      "Yes, if your salary is QAR 10,000+ or you're in specific professional categories. Accountant visa holders are eligible for family sponsorship immediately. Other categories can sponsor family after 1 year of employment. Separate family visa fees apply.",
  },
  {
    category: "work-visa",
    question: "What documents need attestation?",
    answer:
      "Documents requiring attestation include: Educational certificates, Police clearance certificate, Marriage certificate (for family visa), and Birth certificates (for children). We provide complete attestation assistance through our service.",
  },
  {
    category: "work-visa",
    question: "How long is the work visa valid?",
    answer:
      "Bike Rider, Cleaner, and Labour visas are valid for 2 years. Professional categories like Accountant are also 2 years. Freelance visas are valid for 1-2 years. All work visas are renewable with employer/sponsor support.",
  },
  {
    category: "work-visa",
    question: "What is included in the visa fee?",
    answer:
      "The visa fee includes: Government processing fees, our service charges, document verification, application submission, and status tracking. NOT included: Document attestation, courier charges, and medical examination fees.",
  },
  // Application Process
  {
    category: "process",
    question: "Do I need to visit your office?",
    answer:
      "No, our complete process is available online. You can upload documents through our secure portal, have video call verification if needed, and receive your visa by email. Office visits are optional for those who prefer in-person service.",
  },
  {
    category: "process",
    question: "How do I submit documents?",
    answer:
      "You can submit documents in multiple ways: Upload through our secure online portal, email scanned copies to us, courier original documents, or drop them off at our office in person.",
  },
  {
    category: "process",
    question: "When should I apply?",
    answer:
      "Recommended timelines: Tourist visas - 2 weeks before travel, Work visas - 1-2 months before intended joining date. Allow extra time for document attestation if required. Express processing is available for urgent cases.",
  },
  {
    category: "process",
    question: "Can I apply for multiple people?",
    answer:
      "Yes! Family applications can be processed together, and we offer group applications for companies. Bulk processing is available with discounts on group applications.",
  },
  {
    category: "process",
    question: "What if I made a mistake in my application?",
    answer:
      "Contact us immediately if you notice an error. Corrections before submission are free. After submission, reapplication may be needed. Our team verifies all applications before submission to minimize errors.",
  },
  // Payment & Refunds
  {
    category: "payment",
    question: "When do I pay?",
    answer:
      "Payment structure: 50% advance to start processing, remaining 50% before visa issuance. Full payment upfront is also an option. All payments are processed through secure online channels.",
  },
  {
    category: "payment",
    question: "What is your refund policy?",
    answer:
      "Processing fees are refundable if your visa is rejected. Government fees are non-refundable. Refunds are processed within 7-10 business days via bank transfer or original payment method.",
  },
  {
    category: "payment",
    question: "Are there hidden charges?",
    answer:
      "No hidden fees - we maintain complete price transparency. All optional services are clearly marked, and you receive a detailed invoice with full breakdown of all charges before payment.",
  },
  // Visa Validity & Travel
  {
    category: "validity",
    question: "How will I receive my visa?",
    answer:
      "Your approved visa is sent via email as a PDF (electronic visa). Original courier option is available on request. Simply print the visa and carry it for Qatar immigration. Your visa remains valid for entry to Qatar.",
  },
  {
    category: "validity",
    question: "Can I extend my visa in Qatar?",
    answer:
      "Tourist visas can be extended once for an additional 30 days. Work visas are renewable with employer sponsorship. Contact Qatar immigration for extensions. We provide guidance and support for extension applications.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<FAQCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-gradient-to-b from-muted to-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-qatar-maroon/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-qatar-maroon">
            <span className="h-1.5 w-1.5 rounded-full bg-qatar-maroon" />
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Quick answers to common questions about our visa services
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-10">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-4 pl-12 pr-4 text-foreground shadow-sm transition-colors focus:border-qatar-maroon focus:outline-none focus:ring-2 focus:ring-qatar-maroon/20"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "bg-qatar-maroon text-white"
                : "bg-muted text-foreground hover:bg-muted"
            )}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category.id
                  ? "bg-qatar-maroon text-white"
                  : "bg-muted text-foreground hover:bg-muted"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="mt-10 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="rounded-xl border border-border bg-background p-8 text-center">
              <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-muted-foreground">
                No questions found matching your criteria. Try a different search term or category.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-muted"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-qatar-maroon/10">
                      <HelpCircle className="h-4 w-4 text-qatar-maroon" />
                    </div>
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>

                {/* Answer Content */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  )}
                >
                  <div className="border-t border-border px-6 py-5 pl-[72px]">
                    <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Results count */}
        {searchQuery && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Showing {filteredFaqs.length} of {faqs.length} questions
          </p>
        )}

        {/* Still Have Questions */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-qatar-maroon/5 to-qatar-gold/5 p-8 text-center">
          <h3 className="text-lg font-semibold text-foreground">Still have questions?</h3>
          <p className="mt-2 text-muted-foreground">
            Our visa experts are available 24/7 to help you.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg bg-qatar-maroon px-6 py-3 font-semibold text-white transition-colors hover:bg-qatar-maroon/90"
            >
              Send a Message
            </a>
            <a
              href="https://wa.me/97412345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-green-500 px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-green-500 hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
