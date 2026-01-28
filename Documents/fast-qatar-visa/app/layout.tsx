import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LoadingBar } from "@/components/loading";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Fast Qatar Visa Center | Quick & Easy Visa Processing",
    template: "%s | Fast Qatar Visa",
  },
  description:
    "Get your Qatar visa fast and easy with our professional visa processing service. 98% success rate, 24-hour processing, and 24/7 support. Apply online today!",
  keywords: [
    "Qatar visa",
    "Qatar tourist visa",
    "Qatar business visa",
    "Qatar visa online",
    "fast Qatar visa",
    "Qatar visa processing",
  ],
  openGraph: {
    title: "Fast Qatar Visa Center | Quick & Easy Visa Processing",
    description:
      "Get your Qatar visa fast and easy with our professional visa processing service. 98% success rate, 24-hour processing, and 24/7 support.",
    type: "website",
    locale: "en_US",
    siteName: "Fast Qatar Visa Center",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Qatar Visa Center | Quick & Easy Visa Processing",
    description:
      "Get your Qatar visa fast and easy with our professional visa processing service.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fast Qatar Visa Center",
    "url": "https://fastqatarvisa.com",
    "logo": "https://fastqatarvisa.com/logo.png",
    "description": "Professional Qatar visa processing service with 10+ years experience, 98% success rate, and 24/7 support.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 303, Abdul Jaleel Abdul Ghani Building, Al Matar Street",
      "addressLocality": "Doha",
      "addressCountry": "Qatar"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+974-12345678",
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic"],
      "areaServed": "Worldwide"
    },
    "sameAs": [
      "https://facebook.com/fastqatarvisa",
      "https://twitter.com/fastqatarvisa",
      "https://linkedin.com/company/fastqatarvisa"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <LoadingBar />
          </Suspense>
          <div className="flex min-h-screen flex-col">
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="skip-to-content">
              Skip to main content
            </a>

            <Header />
            <main id="main-content" className="flex-1" role="main" aria-label="Main content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
