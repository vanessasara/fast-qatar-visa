import { Mail, Phone, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+974 12345678",
    href: "tel:+97412345678",
    description: "Available 24/7",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+974 12345678",
    href: "https://wa.me/97412345678",
    description: "Quick responses, instant support",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@fastqatarvisa.com",
    href: "mailto:info@fastqatarvisa.com",
    description: "We reply within 2-4 hours",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "24/7 Support Available",
    href: null,
    description: "Always here to help",
  },
];

const officeAddress = {
  line1: "Office 303, Abdul Jaleel Abdul Ghani Building",
  line2: "Al Matar Street, Doha, Qatar",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.5687389835403!2d51.52843897613!3d25.286061677655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzA5LjgiTiA1McKwMzEnNTEuOCJF!5e0!3m2!1sen!2sqa!4v1635000000000!5m2!1sen!2sqa",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Al+Matar+Street+Doha+Qatar",
};

export default function ContactInfo() {
  return (
    <div className="rounded-2xl bg-background p-8 shadow-xl">
      <span className="inline-flex items-center gap-2 rounded-full bg-qatar-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-qatar-gold">
        <span className="h-1.5 w-1.5 rounded-full bg-qatar-gold" />
        Qatar Office
      </span>
      <h2 className="mt-3 font-heading text-2xl font-bold text-foreground sm:text-3xl">
        Contact Information
      </h2>
      <p className="mt-2 text-muted-foreground">
        Reach us directly through any of these channels.
      </p>

      {/* Contact Details */}
      <div className="mt-8 space-y-5">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-qatar-maroon/10 transition-colors group-hover:bg-qatar-maroon">
              <detail.icon className="h-5 w-5 text-qatar-maroon" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-lg font-semibold text-foreground transition-colors hover:text-qatar-maroon"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-qatar-gold">
                  {detail.value}
                </p>
              )}
              <p className="text-sm text-muted-foreground">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Office Address */}
      <div className="mt-8 rounded-xl border border-border bg-muted p-5">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-qatar-maroon text-white">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Office Address</p>
            <p className="mt-1 text-sm text-muted-foreground">{officeAddress.line1}</p>
            <p className="text-sm text-muted-foreground">{officeAddress.line2}</p>
            <a
              href={officeAddress.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-qatar-gold hover:underline"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <a href="tel:+97412345678" className="block">
          <Button
            variant="primary"
            className="w-full"
            leftIcon={<Phone className="h-4 w-4" />}
          >
            Call Now
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
            className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
            leftIcon={<MessageCircle className="h-4 w-4" />}
          >
            WhatsApp
          </Button>
        </a>
      </div>

      {/* Map */}
      <div className="mt-6 overflow-hidden rounded-xl border border-border">
        <div className="relative h-48 w-full bg-muted">
          <iframe
            src={officeAddress.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Fast Qatar Visa Center Office Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  );
}
