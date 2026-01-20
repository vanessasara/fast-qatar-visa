"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { href: "/services", label: "Tourist Visa" },
  { href: "/services", label: "Business Visa" },
  { href: "/services/work", label: "Work Visas" },
  { href: "/services/work/bike-rider", label: "Bike Rider Visa" },
  { href: "/services/work/accountant", label: "Accountant Visa" },
];

const importantLinks = [
  { href: "/track", label: "Track Application" },
  { href: "/contact", label: "FAQ" },
  { href: "/services", label: "Requirements" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-qatar-maroon-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About Company */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="text-2xl">🇶🇦</span>
              <span className="text-xl font-bold text-white">
                Fast Qatar Visa
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              Your trusted partner for Qatar visa processing. We provide fast,
              reliable, and secure visa services with a 98% success rate. Get
              your visa approved in as little as 24 hours.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-qatar-gold hover:text-qatar-maroon-900"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-qatar-gold">
              Our Services
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-qatar-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-qatar-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-qatar-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-qatar-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-qatar-gold" />
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <a
                    href="mailto:info@fastqatarvisa.com"
                    className="text-sm text-white hover:text-qatar-gold"
                  >
                    info@fastqatarvisa.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-qatar-gold" />
                <div>
                  <p className="text-sm text-gray-300">Call / WhatsApp</p>
                  <a
                    href="tel:+97451049145"
                    className="text-sm text-white hover:text-qatar-gold"
                  >
                    +974-5104 9145
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-qatar-gold" />
                <div>
                  <p className="text-sm text-gray-300">Qatar Office</p>
                  <p className="text-sm text-white">Office 303, Abdul Jaleel Abdul Ghani Building</p>
                  <p className="text-sm text-white">Al Matar Street, Doha, Qatar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-qatar-gold" />
                <div>
                  <p className="text-sm text-gray-300">Working Hours</p>
                  <p className="text-sm text-white">24/7 Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Get the latest updates on visa requirements and travel tips.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full max-w-md gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 transition-colors focus:border-qatar-gold focus:outline-none focus:ring-1 focus:ring-qatar-gold"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-qatar-gold px-5 py-2.5 text-sm font-semibold text-qatar-maroon-900 transition-all hover:bg-qatar-gold-300"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-qatar-maroon-950">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Fast Qatar Visa Center. All
              rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-qatar-gold">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-qatar-gold">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
