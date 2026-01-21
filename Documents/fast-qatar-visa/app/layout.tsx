import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Skip to content link for accessibility */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>

          <Header />
          <main id="main-content" className="flex-1 pt-16 md:pt-20" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
