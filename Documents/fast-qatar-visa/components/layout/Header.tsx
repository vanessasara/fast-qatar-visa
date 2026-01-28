"use client";

import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown, Briefcase, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { ThemeToggle } from "@/components/theme-toggle";

const visaServices = [
  { href: "/work/bike-rider", label: "Bike Rider Visa", description: "Fast processing for bike rider work visas" },
  { href: "/work/cleaner", label: "Cleaner Visa", description: "Professional cleaning staff visa services" },
  { href: "/work/labour", label: "Labour Visa", description: "General labour work permit assistance" },
  { href: "/work/accountant", label: "Accountant Visa", description: "Professional accountant visa processing" },
  { href: "/work/work-permit", label: "Work Permit (2Y)", description: "Two-year work permit applications" },
  { href: "/work/freelance", label: "Freelance Visa", description: "Freelance work visa solutions" },
];

const PHONE_NUMBER = "+974 12345678";
const WHATSAPP_NUMBER = "97412345678";

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600 dark:text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workVisasOpen, setWorkVisasOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

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
        "fixed top-0 left-0 right-0 z-40 bg-qatar-maroon dark:bg-qatar-maroon-900 text-white transition-all duration-300 border-b border-qatar-maroon-700",
        isScrolled ? "translate-y-[-100%]" : "translate-y-0"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 py-2.5">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-sm" />
              <span className="text-white font-medium text-xs sm:text-sm">24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="flex items-center gap-1.5 hover:text-qatar-gold transition-colors text-xs sm:text-sm font-medium"
                aria-label="Call us"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-qatar-gold transition-colors text-xs sm:text-sm font-medium"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
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
          "fixed left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
          isScrolled ? "top-0 shadow-lg" : "top-[44px]"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-[72px] md:h-20 items-center justify-between gap-3 lg:gap-4">
            {/* Logo */}
            <Link href="/" className="relative shrink-0 h-14 w-36 sm:h-16 sm:w-40 md:h-[72px] md:w-44 lg:h-20 lg:w-48">
              <Image
                src="/Logo.png"
                fill
                alt="Fast Qatar Visa Logo"
                className={cn(
                  "object-contain",
                  theme === 'dark' && "brightness-0 invert"
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex mx-auto">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3 relative group text-foreground hover:text-qatar-maroon dark:hover:text-qatar-gold font-medium")}>
                    <Link href="/">
                      <span>Home</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-qatar-maroon dark:bg-qatar-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3 relative group text-foreground hover:text-qatar-maroon dark:hover:text-qatar-gold font-medium")}>
                    <Link href="/services">
                      <span>Services</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-qatar-maroon dark:bg-qatar-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Work Visas Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm px-3 font-semibold text-qatar-maroon dark:text-qatar-gold hover:text-qatar-maroon-800 dark:hover:text-qatar-gold-300">
                    <Briefcase className="w-4 h-4 mr-1" />
                    Work Visas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:p-6 w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/work"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-qatar-maroon/10 to-qatar-maroon/20 dark:from-qatar-gold/10 dark:to-qatar-gold/20 p-4 lg:p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow"
                          >
                            <Briefcase className="h-5 w-5 lg:h-6 lg:w-6 mb-2 text-qatar-maroon dark:text-qatar-gold" />
                            <div className="mb-2 mt-2 lg:mt-4 text-base lg:text-lg font-bold text-qatar-maroon dark:text-qatar-gold">
                              Work Visas
                            </div>
                            <p className="text-xs lg:text-sm leading-tight text-muted-foreground">
                              Professional work visa processing services for Qatar. Fast, reliable, and hassle-free.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {visaServices.slice(0, 3).map((service) => (
                        <ListItem
                          key={service.label}
                          title={service.label}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                    <div className="border-t px-6 py-4">
                      <div className="grid grid-cols-2 gap-3">
                        {visaServices.slice(3).map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">{service.label}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-gray-600 dark:text-gray-400">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3 relative group text-foreground hover:text-qatar-maroon dark:hover:text-qatar-gold font-medium")}>
                    <Link href="/about">
                      <span>About</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-qatar-maroon dark:bg-qatar-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3 relative group text-foreground hover:text-qatar-maroon dark:hover:text-qatar-gold font-medium")}>
                    <Link href="/contact">
                      <span>Contact</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-qatar-maroon dark:bg-qatar-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3 relative group text-foreground hover:text-qatar-maroon dark:hover:text-qatar-gold font-medium")}>
                    <Link href="/track">
                      <span>Track</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-qatar-maroon dark:bg-qatar-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2 shrink-0 ml-2">
              <ThemeToggle />

              <Button  size="sm" className="h-9 px-3 text-sm font-medium whitespace-nowrap bg-qatar-maroon text-white hover:bg-qatar-maroon-800 dark:bg-qatar-gold dark:text-qatar-maroon-900 dark:hover:bg-qatar-gold-300 transition-all shadow-sm hover:shadow-md">
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="flex items-center justify-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
              </Button>

              <Button  size="sm" className="h-9 px-3 text-sm font-medium whitespace-nowrap bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition-all shadow-sm hover:shadow-md">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>

              <Button  size="sm" className="h-9 px-4 text-sm font-bold whitespace-nowrap bg-qatar-maroon text-white hover:bg-qatar-maroon-800  transition-all shadow-sm hover:shadow-md">
                <Link href="/contact" className="flex items-center justify-center">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="flex lg:hidden items-center gap-2">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden shrink-0">
                  <Button variant="ghost" >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] overflow-y-auto p-0">
                  <SheetHeader className="px-6 py-4 border-b">
                    <SheetTitle className="text-left text-xl font-bold">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col py-2">
                    {/* Home */}
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                    >
                      Home
                    </Link>

                    {/* Divider */}
                    <div className="border-t my-1" />

                    {/* Services Link */}
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                    >
                      Services
                    </Link>

                    {/* Divider */}
                    <div className="border-t my-1" />

                    {/* Work Visas Collapsible */}
                    <Collapsible open={workVisasOpen} onOpenChange={setWorkVisasOpen}>
                      <div className="w-full px-6 py-3 text-base font-bold hover:bg-accent transition-colors flex items-center justify-between group">
                        <Link
                          href="/work"
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn("flex-1 text-left flex items-center gap-2", workVisasOpen ? "text-qatar-maroon dark:text-qatar-gold" : "text-qatar-maroon dark:text-qatar-gold")}
                        >
                          <Briefcase className="w-4 h-4" />
                          Work Visas
                        </Link>
                        <CollapsibleTrigger asChild>
                          <button className="p-1">
                            <ChevronDown className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              workVisasOpen && "rotate-180 text-qatar-maroon dark:text-qatar-gold"
                            )} />
                          </button>
                        </CollapsibleTrigger>
                      </div>
                      <CollapsibleContent className="px-6 pb-3 pt-2 space-y-2">
                        {visaServices.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm py-2 px-4 rounded-md text-gray-600 dark:text-gray-300 hover:text-qatar-maroon dark:hover:text-qatar-gold hover:bg-accent transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Divider */}
                    <div className="border-t my-1" />

                    {/* Other Links */}
                    <Link
                      href="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                    >
                      About
                    </Link>

                    {/* Divider */}
                    <div className="border-t my-1" />

                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                    >
                      Contact
                    </Link>

                    {/* Divider */}
                    <div className="border-t my-1" />

                    <Link
                      href="/track"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                    >
                      Track
                    </Link>
                  </nav>

                  {/* Fixed bottom buttons */}
                  <div className="sticky bottom-0 bg-background border-t p-4 space-y-2 shadow-lg">
                    <div className="flex items-center justify-between px-2 pb-2">
                      <span className="text-sm font-medium">Theme</span>
                      <ThemeToggle />
                    </div>
                    <Button  variant="outline" className="w-full h-12 text-base font-medium border-2 border-qatar-maroon dark:border-qatar-gold text-qatar-maroon dark:text-qatar-gold hover:bg-qatar-maroon hover:text-white dark:hover:bg-qatar-gold dark:hover:text-qatar-maroon-900 transition-all">
                      <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                        <Phone className="h-5 w-5" />
                        <span>{PHONE_NUMBER}</span>
                      </a>
                    </Button>
                    <Button  variant="outline" className="w-full h-12 text-base font-medium border-2 border-green-500 dark:border-green-600 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white dark:hover:bg-green-600 transition-all">
                      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                        <WhatsAppIcon className="h-5 w-5" />
                        <span>WhatsApp Chat</span>
                      </a>
                    </Button>
                    <Button  className="w-full h-12 text-base font-bold bg-qatar-maroon text-white hover:bg-qatar-maroon-800 transition-all shadow-md hover:shadow-lg">
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center">
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "h-16 sm:h-[72px] md:h-20"
            : "h-[108px] sm:h-[116px] md:h-[124px]"
        )}
        aria-hidden="true"
      />
    </>
  );
}
