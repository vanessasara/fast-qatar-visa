"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does visa processing take?",
    answer:
      "Standard processing takes 2-3 business days. We also offer Express (24 hours) and Super Express (same day) options for urgent travel needs. Processing times may vary depending on the visa type and your nationality.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Basic requirements include a valid passport (minimum 6 months validity), passport-sized photograph, confirmed hotel booking, and return flight ticket. Additional documents may be required depending on the visa type. Check our Services page for detailed requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), debit cards, and bank transfers. All payments are processed through secure, encrypted channels to protect your financial information.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Yes, absolutely. We use bank-level 256-bit SSL encryption to protect all your personal and payment information. We never share your data with third parties and comply with international data protection standards.",
  },
  {
    question: "What if my visa application is rejected?",
    answer:
      "We offer a full money-back guarantee if your visa application is rejected due to reasons within our control. Our 98% success rate means rejections are rare, but we stand behind our service with this guarantee.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Yes! Once you submit your application, you'll receive a reference number via email. Use this number on our Track Application page to check your visa status in real-time. You'll also receive email and SMS updates at each stage.",
  },
  {
    question: "Do I need to visit your office in person?",
    answer:
      "No, our entire process is 100% online. You can apply from anywhere in the world, upload documents digitally, and receive your approved visa via email. No office visits or physical document submissions required.",
  },
  {
    question: "How will I receive my approved visa?",
    answer:
      "Your approved visa will be sent to your registered email address as a PDF document. Simply print the visa and carry it with you when traveling to Qatar. We also store a copy in your account for easy access.",
  },
  {
    question: "Can I apply for multiple people at once?",
    answer:
      "Yes, you can submit applications for multiple travelers in a single order. This is perfect for families or groups traveling together. Each applicant will need their own set of documents, but you can manage everything from one account.",
  },
  {
    question: "What if I need help during the application process?",
    answer:
      "Our support team is available 24/7 via email, phone, and live chat. Whether you have questions about documents, need help filling out forms, or want to check your application status, we're always here to assist you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Quick answers to common questions about our visa services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 text-qatar-maroon" />
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-300",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              {/* Answer Content */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="border-t border-gray-100 px-6 py-5">
                  <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="#contact-form"
              className="font-semibold text-qatar-maroon hover:underline"
            >
              Send us a message
            </a>{" "}
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
