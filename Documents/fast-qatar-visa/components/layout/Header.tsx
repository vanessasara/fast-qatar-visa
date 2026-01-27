"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Briefcase, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { ThemeToggle } from "@/components/theme-toggle";

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
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className={cn(
        "bg-qatar-maroon dark:bg-qatar-maroon-800 text-white text-sm transition-all duration-300",
        isScrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 py-2">
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-xs sm:text-sm">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-6 mx-auto sm:mx-0">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex items-center gap-1.5 hover:text-qatar-gold transition-colors text-xs sm:text-sm"
                aria-label="Call us"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                <span className="truncate">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-qatar-gold transition-colors text-xs sm:text-sm"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" aria-hidden="true" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border",
          isScrolled
            ? "top-0 shadow-md"
            : "top-[40px]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="relative shrink-0 h-12 w-28 sm:h-14 sm:w-32 md:h-16 md:w-36 lg:h-18 lg:w-40"
            >
              <Image
                src="/Logo.png"
                fill
                alt="Fast Qatar Visa Logo"
                className="object-contain dark:brightness-0 dark:invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Main navigation">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.subItems ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={cn(
                            "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground lg:px-4",
                            link.highlight
                              ? "text-qatar-maroon dark:text-qatar-gold font-semibold"
                              : "text-foreground",
                            isActiveLink(link.href) && "bg-accent text-qatar-maroon dark:text-qatar-gold"
                          )}
                        >
                          {link.highlight && <Briefcase className="w-4 h-4" />}
                          <Link href={link.href} className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                            {link.label}
                          </Link>
                          <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-[200px]">
                        {link.subItems.map((subItem) => (
                          <DropdownMenuItem key={subItem.href} asChild>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "w-full cursor-pointer",
                                isActiveLink(subItem.href) && "bg-accent text-qatar-maroon dark:text-qatar-gold font-medium"
                              )}
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link
                            href="/services/work"
                            className="font-medium text-qatar-gold dark:text-qatar-gold-400 cursor-pointer"
                          >
                            View All Work Visas →
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground lg:px-4",
                        isActiveLink(link.href)
                          ? "bg-accent text-qatar-maroon dark:text-qatar-gold font-semibold"
                          : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-green-500 dark:border-green-600 px-4 py-2 text-sm font-semibold text-green-600 dark:text-green-400 transition-all hover:bg-green-500 hover:text-white dark:hover:bg-green-600"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-qatar-maroon dark:bg-qatar-gold px-5 py-2.5 text-sm font-semibold text-white dark:text-qatar-maroon-900 transition-all hover:bg-qatar-maroon-800 dark:hover:bg-qatar-gold-300 focus:outline-none focus:ring-2 focus:ring-qatar-maroon dark:focus:ring-qatar-gold focus:ring-offset-2"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button with Sheet */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-accent md:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-0 flex flex-col">
                  <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="text-left">
                      <Link
                        href="/"
                        className="relative block h-10 w-24"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <Image
                          src="/Logo.png"
                          fill
                          alt="Fast Qatar Visa Logo"
                          className="object-contain object-left dark:brightness-0 dark:invert"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto px-4 py-4">
                    <div className="flex flex-col gap-1">
                      {navLinks.map((link) => (
                        <div key={link.href}>
                          {link.subItems ? (
                            <>
                              <div className="flex items-center gap-1">
                                <Link
                                  href={link.href}
                                  className={cn(
                                    "flex-1 flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent",
                                    link.highlight
                                      ? "text-qatar-maroon dark:text-qatar-gold font-semibold"
                                      : "text-foreground",
                                    isActiveLink(link.href) && "bg-accent"
                                  )}
                                  onClick={() => setIsSheetOpen(false)}
                                >
                                  {link.highlight && <Briefcase className="w-4 h-4" />}
                                  {link.label}
                                </Link>
                                <button
                                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.href ? null : link.href)}
                                  className="p-3 rounded-lg hover:bg-accent transition-colors"
                                  aria-label={`Toggle ${link.label} submenu`}
                                >
                                  <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform",
                                    expandedMobileMenu === link.href && "rotate-180"
                                  )} />
                                </button>
                              </div>
                              {expandedMobileMenu === link.href && (
                                <div className="ml-6 mt-1 mb-2 space-y-1 border-l-2 border-qatar-gold/30 pl-4">
                                  {link.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.href}
                                      href={subItem.href}
                                      className={cn(
                                        "block py-2 text-sm transition-colors hover:text-qatar-maroon dark:hover:text-qatar-gold",
                                        isActiveLink(subItem.href)
                                          ? "text-qatar-maroon dark:text-qatar-gold font-medium"
                                          : "text-muted-foreground"
                                      )}
                                      onClick={() => setIsSheetOpen(false)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={link.href}
                              className={cn(
                                "flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent",
                                isActiveLink(link.href)
                                  ? "bg-accent text-qatar-maroon dark:text-qatar-gold font-semibold"
                                  : "text-foreground"
                              )}
                              onClick={() => setIsSheetOpen(false)}
                            >
                              {link.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>

                  {/* Mobile Contact Buttons */}
                  <div className="border-t border-border p-4 space-y-3 bg-muted/30">
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-qatar-maroon dark:border-qatar-gold px-5 py-3 text-base font-semibold text-qatar-maroon dark:text-qatar-gold transition-all hover:bg-qatar-maroon hover:text-white dark:hover:bg-qatar-gold dark:hover:text-qatar-maroon-900"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Phone className="w-5 h-5" />
                      {PHONE_NUMBER}
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-green-500 dark:bg-green-600 px-5 py-3 text-base font-semibold text-white transition-all hover:bg-green-600 dark:hover:bg-green-700"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      WhatsApp Chat
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center rounded-lg bg-qatar-maroon dark:bg-qatar-gold px-5 py-3 text-base font-semibold text-white dark:text-qatar-maroon-900 transition-all hover:bg-qatar-maroon-800 dark:hover:bg-qatar-gold-300"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
