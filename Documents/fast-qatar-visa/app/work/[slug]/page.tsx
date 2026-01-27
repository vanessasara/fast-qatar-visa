import { notFound } from "next/navigation";
import { Metadata } from "next";
import { WorkVisaHero, WorkVisaSidebar, WorkVisaContent } from "@/components/work-visa";
import { getWorkVisaBySlug, getAllWorkVisaSlugs } from "@/lib/work-visas";

interface WorkVisaPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all work visa pages
export async function generateStaticParams() {
  const slugs = getAllWorkVisaSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each work visa page
export async function generateMetadata({ params }: WorkVisaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const visa = getWorkVisaBySlug(slug);

  if (!visa) {
    return {
      title: "Visa Not Found",
    };
  }

  return {
    title: visa.metadata.title,
    description: visa.metadata.description,
    keywords: [
      `${visa.title}`,
      "Qatar work visa",
      "Qatar employment visa",
      "Qatar visa processing",
      "Qatar job visa",
      visa.slug,
    ],
    openGraph: {
      title: visa.metadata.title,
      description: visa.metadata.description,
      type: "website",
      locale: "en_US",
      siteName: "Fast Qatar Visa Center",
      images: [
        {
          url: visa.image,
          width: 1200,
          height: 630,
          alt: visa.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: visa.metadata.title,
      description: visa.metadata.description,
      images: [visa.image],
    },
  };
}

export default async function WorkVisaPage({ params }: WorkVisaPageProps) {
  const { slug } = await params;
  const visa = getWorkVisaBySlug(slug);

  if (!visa) {
    notFound();
  }

  // Structured data for the work visa service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": visa.title,
    "description": visa.metadata.description,
    "provider": {
      "@type": "Organization",
      "name": "Fast Qatar Visa Center",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Qatar",
    },
    "offers": {
      "@type": "Offer",
      "price": visa.visaFee.replace(/[^0-9]/g, ""),
      "priceCurrency": "QAR",
      "description": `${visa.title} processing service`,
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <WorkVisaHero
        title={visa.title}
        description={visa.heroDescription}
        image={visa.image}
        icon={visa.icon}
        badges={visa.badges}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <WorkVisaContent visa={visa} />

          {/* Sidebar Column */}
          <WorkVisaSidebar
            currentSlug={visa.slug}
            visaFee={visa.visaFee}
            visaFeePKR={visa.visaFeePKR}
            visaFeeNote={visa.visaFeeNote}
            salary={visa.salary}
            salaryPKR={visa.salaryPKR}
            salaryNote={visa.salaryNote}
            processingTime={visa.processingTime}
            expressProcessing={visa.expressProcessing}
            duration={visa.duration}
            familySponsorship={visa.familySponsorship}
            isPremium={visa.isPremium}
            sidebarIcon={visa.slug === "freelance" ? "Laptop" : visa.slug === "accountant" ? "Award" : undefined}
            sidebarTitle={visa.slug === "freelance" ? "Freelance Package" : visa.slug === "accountant" ? "Premium Package" : undefined}
          />
        </div>
      </div>
    </>
  );
}
