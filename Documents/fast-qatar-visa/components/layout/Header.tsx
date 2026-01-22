"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Briefcase, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    href: "/services/work",
    label: "Work Visas",
    highlight: true,
    subItems: [
      { href: "/services/work/bike-rider", label: "Bike Rider Visa" },
      { href: "/services/work/cleaner", label: "Cleaner Visa" },
      { href: "/services/work/labour", label: "Labour Visa" },
      { href: "/services/work/accountant", label: "Accountant Visa" },
      { href: "/services/work/work-permit", label: "Work Permit (2Y)" },
      { href: "/services/work/freelance", label: "Freelance Visa" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/track", label: "Track" },
];

const PHONE_NUMBER = "+974 12345678";
const WHATSAPP_NUMBER = "97412345678";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className={cn(
        "bg-qatar-maroon text-white text-sm transition-all duration-300",
        isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/80">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 mx-auto sm:mx-0">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="flex items-center gap-2 hover:text-qatar-gold transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-qatar-gold transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-md"
            : "top-[40px] bg-white"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative shrink-0 h-12 w-24 sm:h-16 sm:w-32 md:h-18 md:w-36 lg:h-20 lg:w-40"
            >
              <Image
                src="/Logo.png"
                fill
                alt="Fast Qatar Visa Logo"
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.subItems ? (
                    <>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-qatar-maroon-50 hover:text-qatar-maroon lg:px-4",
                          link.highlight
                            ? "text-qatar-maroon font-semibold"
                            : "text-gray-700"
                        )}
                      >
                        {link.highlight && <Briefcase className="w-4 h-4" />}
                        {link.label}
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 pt-2 transition-all duration-200">
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px]">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-qatar-maroon-50 hover:text-qatar-maroon transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                          <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                            <Link
                              href="/services/work"
                              className="text-sm font-medium text-qatar-gold hover:text-qatar-gold-700"
                            >
                              View All Work Visas →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-qatar-maroon-50 hover:text-qatar-maroon lg:px-4"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-green-500 px-4 py-2 text-sm font-semibold text-green-600 transition-all hover:bg-green-500 hover:text-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-qatar-maroon px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-qatar-maroon-800 focus:outline-none focus:ring-2 focus:ring-qatar-maroon focus:ring-offset-2"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button with Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
                <SheetHeader className="p-6 border-b border-gray-100">
                  <SheetTitle className="text-left">
                    <Link
                      href="/"
                      className="relative block h-12 w-28"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Image
                        src="/Logo.png"
                        fill
                        alt="Fast Qatar Visa Logo"
                        className="object-contain"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-4">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <div key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-qatar-maroon-50 hover:text-qatar-maroon",
                            link.highlight
                              ? "text-qatar-maroon font-semibold"
                              : "text-gray-700"
                          )}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {link.highlight && <Briefcase className="w-4 h-4" />}
                          {link.label}
                        </Link>
                        {link.subItems && (
                          <div className="ml-6 mt-1 mb-2 space-y-1 border-l-2 border-qatar-gold/30 pl-4">
                            {link.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block py-2 text-sm text-gray-600 hover:text-qatar-maroon transition-colors"
                                onClick={() => setIsSheetOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Contact Buttons */}
                <div className="border-t border-gray-100 p-4 space-y-3">
                  <a
                    href={`tel:${WHATSAPP_NUMBER}`}
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-qatar-maroon px-5 py-3 text-base font-semibold text-qatar-maroon transition-all hover:bg-qatar-maroon hover:text-white"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    {PHONE_NUMBER}
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-5 py-3 text-base font-semibold text-white transition-all hover:bg-green-600"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center rounded-lg bg-qatar-maroon px-5 py-3 text-base font-semibold text-white transition-all hover:bg-qatar-maroon-800"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
