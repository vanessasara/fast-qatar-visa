"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Briefcase, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className={cn(
          "bg-qatar-maroon text-white transition-all duration-300 ease-in-out",
          isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5">
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-white/90">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-6 mx-auto sm:mx-0">
              <a
                href="tel:+97 23456789"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-qatar-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>+974-234 5678</span>
              </a>
              <a
                href="https://wa.me/97"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium hover:text-qatar-gold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky z-50 w-full border-b transition-all duration-300 ease-in-out",
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm"
            : "top-[41px] bg-white",
          isMobileMenuOpen && "shadow-none"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative shrink-0 h-10 w-20 sm:h-12 sm:w-24 md:h-14 md:w-28 lg:h-16 lg:w-32 transition-transform hover:scale-105"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/Logo.png"
                fill
                alt="Fast Qatar Visa Logo"
                className="object-contain"
                priority
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.subItems ? (
                    <>
                      <Link
                        href={link.href}
                        className={cn(
                          "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          link.highlight
                            ? "text-qatar-maroon font-semibold"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {link.highlight && <Briefcase className="w-4 h-4" />}
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute top-full left-0 mt-1 transition-all duration-200 ease-in-out">
                        <div className="bg-popover text-popover-foreground rounded-md shadow-lg border p-1 min-w-[220px]">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block select-none rounded-sm px-3 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                          <div className="h-px my-1 bg-border" />
                          <Link
                            href="/services/work"
                            className="flex items-center gap-2 rounded-sm px-3 py-2 text-sm font-medium text-qatar-gold hover:bg-accent transition-colors"
                          >
                            View All Work Visas
                            <span className="ml-auto">→</span>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
              <a
                href="https://wa.me/9712345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-3 lg:px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-green-50 hover:text-green-600 hover:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-qatar-maroon px-4 lg:px-5 py-2 text-sm font-semibold text-white shadow transition-colors hover:bg-qatar-maroon/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden border-t",
            isMobileMenuOpen ? "max-h-[calc(100vh-3.5rem)]" : "max-h-0 border-t-0"
          )}
        >
          <nav className="bg-background px-4 py-4 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                      link.highlight
                        ? "text-qatar-maroon font-semibold"
                        : "text-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.highlight && <Briefcase className="w-5 h-5" />}
                    {link.label}
                  </Link>
                  {link.subItems && (
                    <div className="ml-6 mt-1 mb-2 space-y-1 border-l-2 border-qatar-gold/30 pl-4">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Buttons */}
              <div className="mt-4 pt-4 border-t space-y-2">
                <a
                  href="tel:+97 23456789"
                  className="flex items-center justify-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-base font-semibold shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  +974-5104 9145
                </a>
                <a
                  href="https://wa.me/97451049145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-green-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Chat
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center rounded-md bg-qatar-maroon px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-qatar-maroon/90"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}