import {
  Mail,
  Phone,
  MessageCircle,
  HelpCircle,
  Lightbulb,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const helpQuestions = [
  {
    question: "Where is my reference number?",
    answer:
      "Your reference number was sent to your email immediately after you submitted your application. Check your inbox and spam folder for an email from Fast Qatar Visa.",
  },
  {
    question: "My status hasn't updated",
    answer:
      "Status updates can take 24-48 hours to reflect. If your status hasn't changed after 48 hours, please contact our support team for assistance.",
  },
  {
    question: "What if I entered wrong information?",
    answer:
      "If you entered incorrect details in your application, please contact our support team immediately. We'll help you correct the information before processing.",
  },
];

const tips = [
  "Save your reference number in a safe place for future tracking",
  "Check your spam folder if you can't find our confirmation email",
  "Enable email notifications to receive instant status updates",
];

export default function TrackingHelp() {
  return (
    <section id="tracking-help" className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Need Help?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Find answers to common tracking questions or contact our support team
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Common Questions */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
              <HelpCircle className="h-6 w-6 text-qatar-maroon" />
              Common Questions
            </h3>
            <div className="space-y-4">
              {helpQuestions.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h4 className="font-semibold text-foreground">
                    {item.question}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-8 rounded-xl bg-qatar-gold/10 p-6">
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-qatar-gold-800">
                <Lightbulb className="h-5 w-5" />
                Helpful Tips
              </h4>
              <ul className="space-y-2">
                {tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-qatar-gold-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-qatar-gold" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Status Update Timing */}
            <div className="mt-8 rounded-xl border border-border bg-background p-6">
              <h4 className="mb-4 font-semibold text-foreground">
                Status Update Timing
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-qatar-maroon" />
                  Updates every 6-12 hours during processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-qatar-maroon" />
                  Email notifications sent at each stage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-qatar-maroon" />
                  SMS updates available (if opted in)
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Support Card */}
          <div>
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-qatar-maroon/10">
                <AlertCircle className="h-6 w-6 text-qatar-maroon" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Can&apos;t Find Your Application?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our support team is here to help you locate and track your visa
                application.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:info@fastqatarvisa.com"
                  className="flex items-center gap-3 rounded-lg bg-muted p-3 transition-colors hover:bg-muted"
                >
                  <Mail className="h-5 w-5 text-qatar-maroon" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-xs text-muted-foreground">
                      info@fastqatarvisa.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+97412345678"
                  className="flex items-center gap-3 rounded-lg bg-muted p-3 transition-colors hover:bg-muted"
                >
                  <Phone className="h-5 w-5 text-qatar-maroon" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-xs text-muted-foreground">+974 12345678</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/97412345678"
                  className="flex items-center gap-3 rounded-lg bg-muted p-3 transition-colors hover:bg-muted"
                >
                  <MessageCircle className="h-5 w-5 text-qatar-maroon" />
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp</p>
                    <p className="text-xs text-muted-foreground">Quick responses</p>
                  </div>
                </a>
              </div>

              <Link
                href="/contact"
                className="mt-6 block w-full rounded-lg bg-qatar-maroon px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-qatar-maroon-800"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
