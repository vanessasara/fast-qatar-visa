import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ICON_MAP, type IconName } from "@/lib/icon-map";

interface WorkVisaHeroProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  badges?: string[];
}

export function WorkVisaHero({ title, description, image, icon, badges }: WorkVisaHeroProps) {
  // Dynamically get the icon component from our optimized icon map
  const IconComponent = ICON_MAP[icon as IconName];

  return (
    <section className="work-visa-hero">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="text-white/70 text-sm mb-4">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-white transition-colors">
            Visa Services
          </Link>
          <span className="mx-2">/</span>
          <Link href="/work" className="hover:text-white transition-colors">
            Work Visas
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>

        {/* Icon and Badges */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            {IconComponent && <IconComponent className="w-8 h-8 text-qatar-gold" />}
          </div>
          {badges?.map((badge, idx) => (
            <Badge
              key={idx}
              className={idx === 0 ? "bg-qatar-gold text-white border-0" : "bg-white text-qatar-maroon border-0"}
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* Title and Description */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-white/90 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
