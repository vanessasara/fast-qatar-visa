# Fast Qatar Visa Center - Complete Website Development Guide
## Updated with Fast Global ME Reference & Work Visa Categories

---

## 📋 PROJECT INFORMATION SUMMARY

### Reference Website Analysis
Based on **fastglobalme.com** - a professional migration services company offering:
- Multiple country visa services (Qatar, Dubai, Abu Dhabi, India, Canada, UK, Europe, Australia)
- 12+ years of industry experience
- Offices in Dubai, Abu Dhabi, Qatar, India, Canada, Portugal, UK
- Emphasis on: Fast processing, Expert assistance, 24/7 support, High success rate
- Clean, professional design with trust-building elements
- Strong use of testimonials and success stories
- Multiple contact channels (Phone, Email, WhatsApp)

### Your Website Focus
**Fast Qatar Visa Center** - Specialized Qatar visa processing service

### New Work Visa Categories to Add
1. **Bike Rider Visa**
   - Visa Price: QAR 7,500
   - Monthly Salary: QAR 2,300/month (PKR 180,000/month)
   - Includes residence permit

2. **Cleaner Visa**
   - Visa Price: QAR 7,000
   - Monthly Salary: QAR 2,000/month
   - Includes residence permit

3. **Labour Visa**
   - Same pricing as Cleaner Visa
   - Visa Price: QAR 7,000
   - Monthly Salary: QAR 2,000/month
   - Includes residence permit

4. **Accountant Open Visa**
   - Visa Price: QAR 8,000
   - Monthly Salary: QAR 25,000/month + Residence
   - Professional category

5. **Work Permit Visa (2 Years)**
   - For various professional categories
   - Extended validity period

6. **Freelance Visa**
   - For independent professionals
   - Flexible work arrangements

---

## 🎨 DESIGN DIRECTION & AESTHETIC

### Core Design Philosophy (Inspired by Fast Global ME)
- **Aesthetic**: Professional, trustworthy, modern Middle Eastern fusion
- **Tone**: Confident but approachable, premium but accessible
- **Colors**: Qatar maroon (#8B1538) + Gold (#D4AF37) with clean whites
- **Typography**: Professional serif for headings (Playfair Display or Crimson Pro), clean sans-serif for body (Manrope or DM Sans)
- **Visual Style**: Clean, spacious, trust-building with subtle cultural elements

### Key Differentiators
- Qatar flag colors throughout (maroon & gold)
- Middle Eastern architectural influences in patterns
- Professional photography showing modern Qatar
- Success-oriented messaging
- Multi-channel support emphasis

---

## 📊 INFORMATION ARCHITECTURE

### Website Structure
```
Fast Qatar Visa Center
├── Home
├── Visa Services
│   ├── Tourist Visa
│   ├── Business Visa
│   ├── Transit Visa
│   ├── Family Visa
│   └── Work Visas ⭐ NEW SECTION
│       ├── Bike Rider Visa
│       ├── Cleaner Visa
│       ├── Labour Visa
│       ├── Accountant Open Visa
│       ├── Work Permit Visa (2 Years)
│       └── Freelance Visa
├── About Us
├── Contact
└── Track Application
```

---

## 📱 PHASE 0: Project Setup & Configuration

### Task 0.1: Next.js Configuration for Images
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
```

### Task 0.2: Create Image Constants
Create `/lib/images.ts`:
```typescript
export const IMAGES = {
  // Hero Sections
  hero: {
    main: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070', // Doha skyline
    services: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074', // Airplane
    about: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070', // Team collaboration
    contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074', // Customer support
    track: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070', // Documents/tracking
  },

  // Service Cards - Tourist Visa
  tourist: {
    card: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035', // Airplane travel
    detail: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070', // Tourist landmarks
  },

  // Service Cards - Business Visa
  business: {
    card: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073', // Business meeting
    detail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070', // Professional handshake
  },

  // Service Cards - Transit Visa
  transit: {
    card: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074', // Airport terminal
    detail: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2006', // Airport lounge
  },

  // Service Cards - Family Visa
  family: {
    card: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070', // Happy family
    detail: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070', // Family at airport
  },

  // NEW - Work Visa Categories
  work: {
    bikeRider: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006', // Delivery person
    cleaner: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070', // Professional cleaning
    labour: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070', // Construction worker
    accountant: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070', // Office professional
    workPermit: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070', // Professional team
    freelance: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070', // Freelancer working
  },

  // Features & Benefits
  features: {
    fast: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070', // Speed/fast processing
    secure: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070', // Security
    support: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074', // Customer support
    expert: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076', // Expert professional
    success: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015', // Success chart
    guarantee: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071', // Money/guarantee
  },

  // About Page
  about: {
    story: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070', // Team meeting
    office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069', // Modern office
    culture: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070', // Qatar culture
  },

  // Testimonials (diverse, professional headshots)
  testimonials: {
    client1: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070',
    client2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070',
    client3: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070',
  },

  // Background patterns (subtle Islamic geometry)
  patterns: {
    subtle: '/patterns/islamic-pattern-subtle.svg', // You'll create this
    gold: '/patterns/islamic-pattern-gold.svg', // You'll create this
  },
}
```

### Task 0.3: Tailwind Configuration
Update `tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Qatar Brand Colors
        qatarMaroon: {
          DEFAULT: '#8B1538',
          50: '#FAE8ED',
          100: '#F5D1DB',
          200: '#EBA3B7',
          300: '#E17593',
          400: '#D7476F',
          500: '#8B1538',
          600: '#70112D',
          700: '#540D22',
          800: '#380917',
          900: '#1C040B',
        },
        qatarGold: {
          DEFAULT: '#D4AF37',
          50: '#FAF6E9',
          100: '#F5EDD3',
          200: '#EBDBA7',
          300: '#E1C97B',
          400: '#D7B74F',
          500: '#D4AF37',
          600: '#A98C2C',
          700: '#7F6921',
          800: '#544616',
          900: '#2A230B',
        },
        // Semantic Colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

### Task 0.4: Install Required Fonts
Add to `app/layout.tsx`:
```typescript
import { Playfair_Display, Manrope } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

// In the HTML tag:
<html className={`${playfair.variable} ${manrope.variable}`}>
```

### Task 0.5: Global Styles
Update `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --border: 0 0% 89.8%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-body;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #8B1538;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #70112D;
  }
}
```

---

## 🏗️ PHASE 1: Layout Components

### Task 1.1: Header Component
Create `/components/layout/Header.tsx`:

**Key Features:**
- Qatar flag emoji 🇶🇦 next to logo
- Sticky header with blur background on scroll
- Navigation: Home | Visa Services | About | Contact | Track Application
- "Apply Now" CTA button (maroon)
- Mobile responsive with hamburger menu
- Phone number: +974-5104 9145 (from Fast Global ME Qatar)
- WhatsApp integration option

**Design Notes:**
- Use distinctive font for logo (Playfair Display)
- Maroon color for main branding
- Gold hover states
- Smooth transitions
- Glass morphism effect when scrolling

### Task 1.2: Footer Component
Create `/components/layout/Footer.tsx`:

**Content Structure (4 Columns):**

**Column 1: About**
- Company description
- "Your trusted Qatar visa partner with 10+ years of experience"
- Social media icons (placeholder)

**Column 2: Quick Links**
- Tourist Visa
- Business Visa
- Work Visas
- Family Visa
- Transit Visa

**Column 3: Resources**
- Track Application
- FAQs
- Visa Requirements
- Document Checklist
- Privacy Policy

**Column 4: Contact**
- **Qatar Office:**
  - Office 303, Abdul Jaleel Abdul Ghani Building
  - Al Matar Street, Doha, Qatar
- **Phone:** +974-5104 9145
- **Email:** info@fastqatarvisa.com
- **Working Hours:** 24/7 Support Available

**Design Notes:**
- Dark maroon background (#540D22)
- White/light gray text
- Gold headings
- Newsletter subscription field
- Copyright: "© 2026 Fast Qatar Visa Center. All rights reserved."

---

## 🏠 PHASE 2: Home Page Sections

### Task 2.1: Hero Section
Create `/components/sections/Hero.tsx`:

**Background Image:**
- Stunning Doha skyline (use IMAGES.hero.main)
- Dark overlay (50% opacity) for text readability
- Full viewport height

**Content:**
- Main Headline: "Fast & Reliable Qatar Visa Processing"
- Subheadline: "Get your Qatar visa approved in 24-48 hours with our expert assistance. Serving travelers worldwide for over 10 years."
- **Two CTA Buttons:**
  - Primary: "Apply for Visa Now" (maroon solid)
  - Secondary: "Track Application" (maroon outline)

**Trust Badges (Below CTAs):**
- "10+ Years Experience"
- "98% Success Rate"
- "24/7 Expert Support"
- "Government Approved"

**Animation:**
- Fade in from bottom
- Staggered appearance for elements

### Task 2.2: Services Preview Section
Create `/components/sections/ServicesPreview.tsx`:

**Section Header:**
- Title: "Our Visa Services"
- Subtitle: "Comprehensive visa solutions for every travel need"

**Service Cards (Grid of 6):**

**Row 1: Traditional Visas**
1. **Tourist Visa**
   - Image: Airplane/travel
   - Icon: Camera/Plane
   - Description: "Explore Qatar's rich culture and modern attractions"
   - Processing: "2-3 days"
   - "Learn More →"

2. **Business Visa**
   - Image: Business meeting
   - Icon: Briefcase
   - Description: "Attend conferences, meetings, and business opportunities"
   - Processing: "24-48 hours"
   - "Learn More →"

3. **Transit Visa**
   - Image: Airport terminal
   - Icon: Transfer icon
   - Description: "Smooth layovers and connections through Doha"
   - Processing: "12-24 hours"
   - "Learn More →"

**Row 2: Work & Family Visas**
4. **Family Visa**
   - Image: Happy family
   - Icon: Family/People
   - Description: "Bring your loved ones to Qatar"
   - Processing: "3-5 days"
   - "Learn More →"

5. **Work Visa** ⭐ NEW HIGHLIGHT
   - Image: Professional office
   - Icon: Briefcase/ID Card
   - Description: "Employment visas for various job categories"
   - Badge: "Multiple Options Available"
   - "Explore Work Visas →"

6. **Freelance Visa** ⭐ NEW
   - Image: Freelancer working
   - Icon: Laptop/Globe
   - Description: "Independent professional work permits"
   - Processing: "5-7 days"
   - "Learn More →"

**Card Design:**
- White background
- Subtle shadow
- Gold border on hover
- Lift effect on hover
- Consistent height

### Task 2.3: How It Works Section
Create `/components/sections/HowItWorks.tsx`:

**Title:** "Simple 4-Step Process"
**Subtitle:** "Get your Qatar visa in just a few easy steps"

**Steps (Horizontal Timeline):**

**Step 1: Choose Visa Type**
- Icon: Document with checkmark
- Gold circular badge with "1"
- Description: "Select the visa category that matches your travel purpose"

**Step 2: Submit Documents**
- Icon: Upload cloud
- Gold circular badge with "2"
- Description: "Upload required documents through our secure portal"

**Step 3: Make Payment**
- Icon: Credit card/Payment
- Gold circular badge with "3"
- Description: "Pay securely with multiple payment options"

**Step 4: Receive Visa**
- Icon: Email/Checkmark
- Gold circular badge with "4"
- Description: "Get your approved visa delivered to your email"

**Visual Elements:**
- Connecting line/arrow between steps
- On mobile: vertical layout
- Clean, minimal design

### Task 2.4: Work Visa Categories Section ⭐ NEW
Create `/components/sections/WorkVisaCategories.tsx`:

**Section Title:** "Qatar Work Visa Services"
**Subtitle:** "Professional employment visas with competitive packages"

**6 Work Visa Cards in Grid (2 rows × 3 columns):**

**1. Bike Rider Visa**
- **Image:** Delivery person on bike
- **Visa Price:** QAR 7,500
- **Salary Package:**
  - QAR 2,300/month
  - PKR 180,000/month equivalent
- **Includes:**
  - 2-year work permit
  - Residence permit
  - Medical insurance processing
- **CTA:** "Apply Now"
- **Badge:** "High Demand"

**2. Cleaner Visa**
- **Image:** Professional cleaning service
- **Visa Price:** QAR 7,000
- **Salary Package:**
  - QAR 2,000/month
  - Housing allowance included
- **Includes:**
  - Work permit
  - Residence permit
  - Food & accommodation support
- **CTA:** "Apply Now"

**3. Labour Visa**
- **Image:** Construction/Labour worker
- **Visa Price:** QAR 7,000
- **Salary Package:**
  - QAR 2,000/month
  - Basic benefits
- **Includes:**
  - Work permit
  - Residence permit
  - Safety equipment
- **CTA:** "Apply Now"

**4. Accountant Open Visa**
- **Image:** Professional in office
- **Visa Price:** QAR 8,000
- **Salary Package:**
  - QAR 25,000/month + Benefits
  - PKR 620,000/month equivalent
- **Includes:**
  - Professional work permit
  - Residence permit
  - Family sponsorship option
- **CTA:** "Apply Now"
- **Badge:** "Professional Category"

**5. Work Permit Visa (2 Years)**
- **Image:** Business professional
- **Visa Price:** Starting from QAR 7,500
- **Duration:** 2 years validity
- **Includes:**
  - Extended work permit
  - Residence permit
  - Renewable option
- **CTA:** "Apply Now"

**6. Freelance Visa**
- **Image:** Independent professional
- **Visa Price:** Starting from QAR 8,500
- **Benefits:**
  - Work independently
  - Multiple clients allowed
  - Flexible arrangement
- **Includes:**
  - Professional permit
  - Residence permit
  - Business setup support
- **CTA:** "Apply Now"
- **Badge:** "New in Qatar"

**Card Design:**
- Clean white cards with shadow
- Maroon top border accent
- Gold price highlighting
- Clear salary information
- Professional icons
- "Popular" or "Most Applied" badges where applicable

**Section Footer:**
- "All prices include government fees and processing"
- "Contact us for customized packages"
- Link to detailed comparison page

### Task 2.5: Why Choose Us Section
Create `/components/sections/WhyChooseUs.tsx`:

**Title:** "Why Choose Fast Qatar Visa?"
**Subtitle:** "Your trusted partner for hassle-free visa processing"

**6 Feature Cards (Based on Fast Global ME strengths):**

**1. 10+ Years Experience**
- Icon: Award/Trophy
- Title: "Decade of Excellence"
- Description: "Over 10 years of specialized experience in Qatar visa processing with thousands of successful applications"

**2. Fast Processing**
- Icon: Lightning/Rocket
- Title: "Quick Turnaround"
- Description: "Express processing available - get your visa approved in as little as 24 hours with our priority service"

**3. 98% Success Rate**
- Icon: Chart trending up
- Title: "Proven Track Record"
- Description: "Exceptional approval rate with thousands of satisfied clients from over 150 countries worldwide"

**4. 24/7 Expert Support**
- Icon: Headset/Support
- Title: "Always Available"
- Description: "Round-the-clock assistance from our dedicated visa specialists via phone, email, and WhatsApp"

**5. Secure & Transparent**
- Icon: Shield with check
- Title: "Complete Security"
- Description: "Bank-level encryption for your data and transparent process with no hidden fees"

**6. Government Approved**
- Icon: Verified badge
- Title: "Official Partner"
- Description: "Authorized visa processing center working directly with Qatar government authorities"

**Design:**
- 3 columns on desktop, 2 on tablet, 1 on mobile
- Icon at top (maroon or gold)
- Clean typography
- Hover effect: lift + gold border

### Task 2.6: Testimonials Section
Create `/components/sections/Testimonials.tsx`:

**Title:** "What Our Clients Say"
**Subtitle:** "Real experiences from travelers worldwide"

**3 Testimonial Cards:**

**Testimonial 1:**
- **Photo:** Professional South Asian male
- **Quote:** "I got my bike rider visa through Fast Qatar Visa in just 5 days! The team was incredibly professional and guided me through every step. The salary package was exactly as promised. Highly recommend for anyone seeking work in Qatar!"
- **Name:** Ahmed K.
- **Country:** 🇵🇰 Pakistan
- **Visa Type:** Bike Rider Visa
- **Rating:** ⭐⭐⭐⭐⭐

**Testimonial 2:**
- **Photo:** Professional female
- **Quote:** "Fast Qatar Visa made my family visa process so smooth and stress-free. They handled all the documentation and kept me updated at every stage. Received my visa in just 4 days. Excellent service and very trustworthy!"
- **Name:** Sarah M.
- **Country:** 🇮🇳 India
- **Visa Type:** Family Visa
- **Rating:** ⭐⭐⭐⭐⭐

**Testimonial 3:**
- **Photo:** Professional male
- **Quote:** "I applied for accountant open visa and the process was incredibly efficient. The team explained all salary details, benefits, and requirements clearly. Got my visa approved and now working in Doha. Best visa service!"
- **Name:** Michael O.
- **Country:** 🇵🇭 Philippines
- **Visa Type:** Accountant Visa
- **Rating:** ⭐⭐⭐⭐⭐

**Design:**
- Cards with photo at top (circular)
- Quotation mark design element
- 5 gold stars
- Equal height cards
- Subtle shadow and border

### Task 2.7: CTA Section
Create `/components/sections/CTASection.tsx`:

**Background:**
- Maroon gradient (dark to light)
- Optional: Subtle Islamic pattern overlay (10% opacity)

**Content:**
- **Headline:** "Ready to Start Your Qatar Journey?"
- **Subtext:** "Join thousands of satisfied clients who trust Fast Qatar Visa for their visa needs. Expert guidance, fast processing, and guaranteed support."
- **Primary CTA Button:** "Apply for Visa Now" (white bg, maroon text, large)
- **Secondary CTA Button:** "Contact Our Team" (maroon outline, white text)

**Trust Indicators Below:**
- Icon + Text: "Secure Payment"
- Icon + Text: "24/7 Support"
- Icon + Text: "Money-Back Guarantee"

**Design:**
- All text white
- Generous padding
- Centered content
- Prominent buttons

### Task 2.8: Statistics Section ⭐ NEW
Create `/components/sections/Statistics.tsx`:

**Background:** Light gray or subtle pattern

**4 Stat Cards in Row:**

**Stat 1: Visas Processed**
- Large Number: "50,000+"
- Label: "Visas Successfully Processed"
- Icon: Document with check

**Stat 2: Countries Served**
- Large Number: "150+"
- Label: "Countries Served Worldwide"
- Icon: Globe

**Stat 3: Success Rate**
- Large Number: "98%"
- Label: "Visa Approval Success Rate"
- Icon: Trophy

**Stat 4: Processing Time**
- Large Number: "24-48"
- Label: "Average Processing Hours"
- Icon: Clock

**Design:**
- Numbers in maroon, large and bold
- Icons in gold
- Clean white cards
- Subtle animation on scroll

---

## 📄 PHASE 3: Services Page (Work Visas Focus)

### Task 3.1: Services Page Hero
Create `/components/sections/ServicesHero.tsx`:

**Background:** Image of professional office/modern Qatar
**Overlay:** Dark (50%)
**Breadcrumb:** Home > Visa Services

**Content:**
- Title: "Qatar Visa Services"
- Description: "Comprehensive visa solutions for tourists, business travelers, families, and professionals"

### Task 3.2: Service Category Tabs
Create `/components/sections/ServicesTabs.tsx`:

**Tab Navigation:**
```
[ Tourist ] [ Business ] [ Transit ] [ Family ] [ Work Visas ⭐ ] [ Freelance ]
```

**Active Tab:** Maroon background
**Inactive Tabs:** Gray, gold on hover

### Task 3.3: Work Visas Detailed Section ⭐ CRITICAL
Create `/components/sections/WorkVisasDetailed.tsx`:

For EACH work visa category, create detailed page with:

#### **Bike Rider Visa Detail Page**

**Left Column (40%): Featured Image**
- High-quality image of delivery person in Qatar
- Professional, positive environment

**Right Column (60%): Information**

**Overview:**
"The Bike Rider Visa is designed for delivery and courier professionals seeking employment in Qatar's rapidly growing food delivery and logistics sector. This visa category offers stable employment with competitive salary and full residence benefits."

**Eligibility Criteria:**
✓ Age: 21-45 years
✓ Valid passport (minimum 6 months validity)
✓ Basic education certificate
✓ Clean police clearance certificate
✓ Medical fitness certificate
✓ Previous experience preferred but not mandatory

**Visa Package Details:**
- **Visa Processing Fee:** QAR 7,500
- **Monthly Salary:** QAR 2,300 (PKR 180,000)
- **Contract Duration:** 2 years (renewable)
- **Accommodation:** Company provided or allowance
- **Food:** Company provided or allowance
- **Medical Insurance:** Included
- **Transport:** Company bike provided
- **Working Hours:** 8-10 hours/day, 6 days/week
- **Leave:** 30 days annual leave

**What's Included:**
✓ Work permit processing
✓ Residence permit (2 years)
✓ Medical insurance
✓ End of service benefits
✓ Company accommodation
✓ Work equipment (bike, uniform)

**Processing Time:**
- Standard: 15-20 working days
- Express: 10-12 working days (additional fee)

**Required Documents:**
- Passport copy (valid 6+ months)
- Recent passport-size photos (white background)
- Educational certificates (attested)
- Police clearance certificate (attested)
- Medical fitness certificate
- Previous employment certificates (if any)
- CV/Resume

**Career Opportunities:**
- Food delivery services (Talabat, Rafeeq, etc.)
- Courier companies
- E-commerce delivery
- Logistics companies

**Apply Now Button:** Large, maroon, prominent

---

#### **Cleaner Visa Detail Page**

**Left Column: Featured Image**
- Professional cleaning service in modern setting

**Right Column: Information**

**Overview:**
"The Cleaner Visa provides employment opportunities for professional cleaning staff in Qatar's residential, commercial, and hospitality sectors. This category offers stable income with comprehensive benefits and accommodation support."

**Eligibility Criteria:**
✓ Age: 21-50 years
✓ Valid passport (minimum 6 months validity)
✓ Basic education
✓ Clean police clearance
✓ Medical fitness
✓ Experience preferred

**Visa Package Details:**
- **Visa Processing Fee:** QAR 7,000
- **Monthly Salary:** QAR 2,000
- **Contract Duration:** 2 years (renewable)
- **Housing Allowance:** QAR 500/month
- **Food Allowance:** QAR 300/month
- **Medical Insurance:** Included
- **Transport:** Company provided
- **Working Hours:** 8 hours/day, 6 days/week
- **Leave:** 30 days annual leave

**What's Included:**
✓ Work permit processing
✓ Residence permit (2 years)
✓ Medical insurance
✓ Housing and food allowances
✓ End of service benefits
✓ Cleaning equipment and uniform

**Job Sectors:**
- Hotels and resorts
- Corporate offices
- Shopping malls
- Residential compounds
- Hospitals and clinics
- Educational institutions

**Processing Time:**
- Standard: 15-20 working days

**Required Documents:**
[Same as Bike Rider Visa list]

**Apply Now Button**

---

#### **Labour Visa Detail Page**

**Left Column: Featured Image**
- Construction worker or general labor in Qatar

**Right Column: Information**

**Overview:**
"The Labour Visa category serves Qatar's construction and general labor workforce. With major infrastructure projects and continuous development, skilled and unskilled laborers are in high demand across Qatar."

**Eligibility Criteria:**
✓ Age: 21-50 years
✓ Valid passport
✓ Basic education
✓ Clean background
✓ Physically fit
✓ Skills in specific trades (optional)

**Visa Package Details:**
- **Visa Processing Fee:** QAR 7,000
- **Monthly Salary:** QAR 2,000 (varies by skill level)
- **Contract Duration:** 2 years (renewable)
- **Accommodation:** Company camp/housing
- **Food:** Company provided
- **Medical Insurance:** Included
- **Transport:** To/from work site
- **Working Hours:** 8-10 hours/day
- **Leave:** 30 days annual leave
- **Overtime:** Available with additional pay

**What's Included:**
✓ Work permit processing
✓ Residence permit (2 years)
✓ Medical insurance
✓ Full accommodation
✓ Meals provided
✓ Safety equipment
✓ End of service benefits

**Job Categories:**
- Construction labor
- General labor
- Warehouse workers
- Factory workers
- Agricultural workers
- Maintenance staff
- Skilled trades (electrician, plumber, carpenter)

**Processing Time:**
- Standard: 15-20 working days

**Salary Range Based on Skills:**
- Unskilled: QAR 2,000/month
- Semi-skilled: QAR 2,500/month
- Skilled: QAR 3,000-4,000/month

**Required Documents:**
[Same comprehensive list]

**Apply Now Button**

---

#### **Accountant Open Visa Detail Page** ⭐ PREMIUM

**Left Column: Featured Image**
- Professional accountant in modern office

**Right Column: Information**

**Overview:**
"The Accountant Open Visa is a premium professional category designed for qualified accounting professionals. This visa offers high earning potential, family sponsorship options, and career advancement opportunities in Qatar's thriving business sector."

**Eligibility Criteria:**
✓ Age: 25-55 years
✓ Bachelor's degree in Accounting/Finance (mandatory)
✓ Minimum 2-3 years professional experience
✓ Professional certifications (CPA, ACCA, CMA) preferred
✓ Valid passport (6+ months)
✓ Clean police clearance
✓ Medical fitness

**Visa Package Details:**
- **Visa Processing Fee:** QAR 8,000
- **Monthly Salary:** QAR 25,000+ (PKR 620,000+)
- **Contract Duration:** 2 years (renewable)
- **Housing Allowance:** QAR 5,000-8,000/month
- **Transport Allowance:** QAR 1,500-2,000/month
- **Medical Insurance:** Family coverage available
- **Education Allowance:** For children (if applicable)
- **Annual Bonus:** Performance-based
- **Leave:** 30 days + air tickets

**What's Included:**
✓ Professional work permit
✓ Residence permit (2 years)
✓ Family sponsorship eligibility
✓ Comprehensive medical insurance
✓ Housing and transport allowances
✓ End of service gratuity
✓ Career development opportunities

**Career Opportunities:**
- Multinational corporations
- Qatar Financial Centre companies
- Banks and financial institutions
- Oil & gas companies
- Real estate firms
- Consulting firms
- Government organizations

**Additional Benefits:**
- Tax-free income
- Savings potential 60-70%
- Professional growth
- Networking opportunities
- Family visa options
- Quality lifestyle

**Processing Time:**
- Standard: 20-25 working days
- Express: 15 working days (additional fee)

**Required Documents:**
- Passport copy (valid 6+ months)
- Recent passport photos
- Bachelor's degree (attested)
- Professional certificates (attested)
- Experience certificates (attested)
- Police clearance (attested)
- Medical fitness certificate
- Detailed CV/Resume
- Reference letters

**Apply Now Button** - Make this stand out more

---

#### **Work Permit Visa (2 Years) Detail Page**

**Overview:**
"The 2-Year Work Permit Visa provides extended employment authorization for various professional and skilled categories. This visa offers longer stability and is suitable for professionals seeking long-term opportunities in Qatar."

**Visa Package Details:**
- **Visa Processing Fee:** QAR 7,500-10,000 (varies by category)
- **Duration:** 2 years full validity
- **Renewable:** Yes, with employer sponsorship
- **Job Categories:** Multiple professions available

**Applicable For:**
- Engineers
- IT Professionals
- Healthcare workers
- Teachers
- Sales professionals
- Hotel staff
- Restaurant workers
- Retail managers
- And more...

**Benefits:**
✓ Extended validity (2 years)
✓ Residence permit included
✓ Family sponsorship possible
✓ Multiple re-entry options
✓ Job change flexibility (with NOC)

**Processing Time:** 20-30 working days

---

#### **Freelance Visa Detail Page** ⭐ NEW CATEGORY

**Overview:**
"The Freelance Visa enables independent professionals to work in Qatar without traditional employer sponsorship. Perfect for consultants, digital professionals, and service providers seeking flexibility and independence."

**Eligibility Criteria:**
✓ Professional qualification or proven expertise
✓ Portfolio of previous work
✓ Business plan or service offering
✓ Minimum age: 25 years
✓ Clean background
✓ Financial stability proof

**Visa Package Details:**
- **Visa Processing Fee:** QAR 8,500
- **Duration:** 1-2 years
- **Renewable:** Yes
- **Income:** Based on your services
- **Clients:** Multiple clients allowed

**What's Included:**
✓ Self-sponsored work permit
✓ Residence permit
✓ Business setup support
✓ Multi-entry visa
✓ Independent work authorization

**Suitable For:**
- IT consultants
- Graphic designers
- Marketing professionals
- Content creators
- Business consultants
- Trainers and coaches
- Photographers
- Event planners
- Translators
- And other professional services

**Processing Time:**
- Standard: 25-30 working days

**Required Documents:**
- Detailed business plan
- Portfolio of work
- Professional qualifications
- Bank statements (proof of funds)
- Passport copy
- All standard documents

**Apply Now Button**

---

### Task 3.4: Document Requirements Section
Create `/components/sections/DocumentRequirements.tsx`:

**Use Accordion Component (shadcn/ui)**

**General Requirements (All Visa Types):**
```
▼ General Documents
  ✓ Valid passport (minimum 6 months validity)
  ✓ Passport-size photographs (2 copies, white background)
  ✓ Police clearance certificate (home country, attested)
  ✓ Medical fitness certificate
  ✓ Educational certificates (attested)
```

**Work Visa Specific:**
```
▼ Work Visa Additional Documents
  ✓ Employment contract from Qatar employer
  ✓ Job offer letter
  ✓ Company registration documents
  ✓ Salary certificate
  ✓ Experience certificates (previous employment)
  ✓ Professional qualifications (for skilled positions)
```

**Professional Categories (Accountant, etc.):**
```
▼ Professional Category Requirements
  ✓ University degree (attested by Ministry of Foreign Affairs)
  ✓ Qatar Embassy attestation
  ✓ Professional certifications (CPA, ACCA, etc.)
  ✓ Minimum 2-3 years experience proof
  ✓ Reference letters from previous employers
  ✓ Detailed CV/Resume
```

**Attestation Process:**
```
▼ Document Attestation Guide
  Step 1: Notary attestation in home country
  Step 2: Ministry of Foreign Affairs attestation
  Step 3: Qatar Embassy attestation
  Step 4: Qatar Ministry of Foreign Affairs attestation
  
  Note: We provide complete attestation assistance
```

---

### Task 3.5: Pricing Comparison Table
Create `/components/sections/PricingComparison.tsx`:

**Table Format:**

| Visa Category | Processing Fee | Salary Range | Processing Time | Family Sponsorship |
|--------------|----------------|--------------|----------------|-------------------|
| Bike Rider | QAR 7,500 | QAR 2,300/month | 15-20 days | After 1 year |
| Cleaner | QAR 7,000 | QAR 2,000/month | 15-20 days | After 1 year |
| Labour | QAR 7,000 | QAR 2,000-4,000/month | 15-20 days | After 1 year |
| Accountant | QAR 8,000 | QAR 25,000+/month | 20-25 days | Eligible |
| Work Permit (2Y) | QAR 7,500-10,000 | Varies by job | 20-30 days | Depends on salary |
| Freelance | QAR 8,500 | Self-determined | 25-30 days | After 6 months |

**Note Below Table:**
"All fees include government charges and processing. Additional express processing available for urgent applications."

---

## 👥 PHASE 4: About Page

### Task 4.1: About Hero
- Background: Team collaboration image
- Title: "About Fast Qatar Visa Center"
- Mission statement

### Task 4.2: Company Story
**Based on Fast Global ME model:**

"Fast Qatar Visa Center was established with a vision to simplify Qatar visa processing for travelers, workers, and families worldwide. With over 10 years of specialized experience in Qatar immigration services, we have successfully processed thousands of visa applications from over 150 countries.

Our team of expert visa consultants works directly with Qatar government authorities to ensure your application is handled professionally and efficiently. We understand the challenges and complexities of visa applications, which is why we provide personalized guidance throughout the entire process.

As an authorized and government-approved visa processing center, we maintain the highest standards of service quality, transparency, and security. Our success is measured by the thousands of satisfied clients who have successfully obtained their Qatar visas through our services.

Whether you're planning a leisure trip, business visit, or seeking employment opportunities in Qatar, Fast Qatar Visa Center is your trusted partner for a smooth and hassle-free visa experience."

**Statistics Cards:**
- "10+ Years" - Industry Experience
- "50,000+" - Visas Processed
- "98%" - Success Rate
- "150+" - Countries Served

### Task 4.3: Core Values
1. **Integrity** - Honest and transparent service
2. **Excellence** - Highest quality standards
3. **Speed** - Fast and efficient processing
4. **Support** - 24/7 customer assistance
5. **Security** - Data protection and privacy
6. **Trust** - Building long-term relationships

### Task 4.4: Office Locations
**Qatar Office (Main):**
- Office 303, Abdul Jaleel Abdul Ghani Building
- Al Matar Street, Doha, Qatar
- Phone: +974-5104 9145
- Email: info@fastqatarvisa.com

**Optional:** Add Google Maps embed

---

## 📞 PHASE 5: Contact Page

### Task 5.1: Contact Hero
- Background: Customer support image
- Title: "Get in Touch"
- Subtitle: "Our expert team is ready to assist with your visa queries"

### Task 5.2: Contact Form
**Form Fields:**
1. Full Name (required)
2. Email Address (required)
3. Phone Number (with country code)
4. Visa Type (dropdown):
   - Tourist Visa
   - Business Visa
   - Transit Visa
   - Family Visa
   - Bike Rider Visa
   - Cleaner Visa
   - Labour Visa
   - Accountant Visa
   - Work Permit (2 Years)
   - Freelance Visa
   - Other
5. Message (textarea, required)
6. Submit Button

**Success Message:**
"Thank you for contacting us! Our team will respond within 2-4 hours."

### Task 5.3: Contact Information Card
**Qatar Office:**
- **Address:** Office 303, Abdul Jaleel Abdul Ghani Building, Al Matar Street, Doha, Qatar
- **Phone:** +974-5104 9145
- **WhatsApp:** +974-5104 9145 (clickable)
- **Email:** info@fastqatarvisa.com
- **Working Hours:** 24/7 Support Available

**Quick Contact Options:**
- Call icon → +974-5104 9145
- WhatsApp icon → Chat Now
- Email icon → Send Email
- Location icon → Get Directions

### Task 5.4: FAQ Section
**20 Essential Questions:**

**General Questions:**
1. **How long does visa processing take?**
   - Tourist/Transit: 24-48 hours
   - Business: 2-3 days
   - Work visas: 15-30 days depending on category
   - Family: 3-5 days

2. **What payment methods do you accept?**
   - Credit/Debit cards (Visa, Mastercard)
   - Bank transfers
   - Online payment gateways
   - Cash (at office)

3. **Is my information secure?**
   - Yes, we use bank-level SSL encryption
   - Secure payment processing
   - Confidential document handling
   - Data protection compliance

4. **What if my visa is rejected?**
   - Full refund of processing fees
   - Government fees non-refundable
   - Reapplication assistance
   - Success rate: 98%

5. **Can I track my application?**
   - Yes, use reference number on Track page
   - Email updates at each stage
   - SMS notifications available
   - 24/7 status checking

**Work Visa Specific:**
6. **What is the minimum salary for work visa?**
   - Minimum: QAR 1,800/month (as per Qatar law)
   - Our packages: QAR 2,000-25,000+ based on category
   - Includes allowances and benefits

7. **Can I bring my family on work visa?**
   - Yes, if salary is QAR 10,000+ or specific categories
   - Accountant visa: Family sponsorship eligible
   - Other categories: After 1 year of employment
   - Separate family visa fees apply

8. **What documents need attestation?**
   - Educational certificates
   - Police clearance certificate
   - Marriage certificate (for family visa)
   - Birth certificates (for children)
   - We provide complete attestation assistance

9. **How long is the work visa valid?**
   - Bike Rider/Cleaner/Labour: 2 years
   - Professional categories: 2 years
   - Freelance: 1-2 years
   - All renewable with employer/sponsor

10. **What is included in the visa fee?**
    - Government processing fees
    - Our service charges
    - Document verification
    - Application submission
    - Status tracking
    - NOT included: Attestation, courier, medical

**Application Process:**
11. **Do I need to visit your office?**
    - No, complete online process available
    - Document upload through portal
    - Video call verification if needed
    - Office visit optional

12. **How do I submit documents?**
    - Upload through our secure portal
    - Email scanned copies
    - Courier original documents
    - Drop off at office

13. **When should I apply?**
    - Tourist: 2 weeks before travel
    - Work visa: 1-2 months before joining
    - Allow extra time for attestation
    - Express processing available

14. **Can I apply for multiple people?**
    - Yes, family applications together
    - Group applications for companies
    - Bulk processing available
    - Discounts on group applications

15. **What if I made a mistake in application?**
    - Contact us immediately
    - Corrections before submission: free
    - After submission: may need reapplication
    - Our team verifies before submission

**Payment & Refunds:**
16. **When do I pay?**
    - 50% advance to start processing
    - 50% before visa issuance
    - Full payment option available
    - Secure online payment

17. **What is your refund policy?**
    - Processing fees: refundable if rejected
    - Government fees: non-refundable
    - Refund within 7-10 business days
    - Bank transfer or original payment method

18. **Are there hidden charges?**
    - No hidden fees
    - Complete price transparency
    - Optional services clearly marked
    - Detailed invoice provided

**Visa Validity & Travel:**
19. **How will I receive my visa?**
    - Email PDF (electronic visa)
    - Original courier option available
    - Print and carry for immigration
    - Valid for entry to Qatar

20. **Can I extend my visa in Qatar?**
    - Tourist visa: possible once (30 days)
    - Work visa: renewable with employer
    - Contact Qatar immigration
    - We provide guidance

**Design:**
- Accordion format (shadcn/ui)
- Search functionality
- Category filters
- Plus/minus icons

---

## 🔍 PHASE 6: Track Application Page

### Task 6.1: Track Hero
- Simple, clean header
- Title: "Track Your Visa Application"
- Subtitle: "Enter your reference number to check status"

### Task 6.2: Tracking Form
**Form Design:**
- Clean white card, centered
- **Fields:**
  1. Reference Number (e.g., FQV-12345-2026)
  2. Email Address (verification)
- **Button:** "Track Status" (large, maroon)
- **Help Text:** "Reference number was sent to your email after application submission"

### Task 6.3: Status Display Component
**Application Details Card:**
- Reference Number: FQV-XXXXX-2026
- Applicant Name: [Name]
- Visa Type: [Type]
- Application Date: [Date]
- Estimated Completion: [Date]

**Status Timeline (4 Stages):**

**Stage 1: Application Received ✓**
- Status: Completed
- Date: Jan 15, 2026, 10:30 AM
- Icon: Document received (green)
- Message: "Your application has been received and verified"

**Stage 2: Under Review** ← CURRENT
- Status: In Progress
- Icon: Magnifying glass (gold, pulsing)
- Message: "Our team is processing your documents"
- Estimated: 2-3 days remaining

**Stage 3: Approved** (pending)
- Status: Pending
- Icon: Checkmark (gray)
- Message: "Awaiting approval"

**Stage 4: Visa Issued** (pending)
- Status: Pending
- Icon: Email/Send (gray)
- Message: "Visa will be sent to your email"

**Design:**
- Vertical timeline on mobile
- Horizontal on desktop
- Connecting lines (green=complete, gold=current, gray=pending)
- Smooth animations

**Action Buttons:**
- Download Receipt (if applicable)
- Print Status
- Contact Support (if issue)
- Back to Home

### Task 6.4: Tracking Help Section
**Can't Find Your Reference?**
- Check spam/junk folder
- Search email for "Fast Qatar Visa"
- Contact support: +974-5104 9145
- Email: info@fastqatarvisa.com

**Status Update Timing:**
- Updates every 6-12 hours
- Email notifications at each stage
- SMS updates (if opted in)

---

## 🎨 PHASE 7: UI/UX Polish & Frontend Design

### Task 7.1: Review Frontend Design Skill
**Apply these principles:**

**Typography:**
- ✅ Playfair Display for headings (distinctive, elegant)
- ✅ Manrope for body (clean, readable)
- ❌ Avoid: Inter, Roboto, Arial
- Use: 48-60px for H1, 32-40px for H2, 24-28px for H3

**Color Psychology:**
- Maroon: Trust, stability, premium
- Gold: Success, quality, achievement
- White: Cleanliness, simplicity
- Use 60-30-10 rule: 60% white, 30% maroon, 10% gold

**Motion & Animation:**
- Page load: Staggered fade-in
- Scroll: Reveal animations
- Hover: Smooth lift + color transition
- Button click: Subtle scale + shadow
- Use `animation-delay` for stagger effect

**Spatial Composition:**
- Generous white space
- Asymmetric layouts where appropriate
- Overlapping elements (hero text over image)
- Z-index layering for depth

**Visual Details:**
- Subtle gradient overlays on images
- Box shadows for depth
- Border radius: 12-16px for cards
- Islamic geometric patterns (subtle)
- Grain texture overlay (2-5% opacity)

### Task 7.2: Create Custom Components

**1. Visa Card Component**
Create `/components/ui/VisaCard.tsx`:
```typescript
interface VisaCardProps {
  title: string;
  description: string;
  price: string;
  salary?: string;
  image: string;
  badge?: string;
  icon: React.ReactNode;
  href: string;
}
```

**Features:**
- Image with overlay
- Icon at top
- Title + description
- Price highlight (gold)
- Salary info (if work visa)
- Badge (optional)
- Hover effect: lift + border glow
- CTA button

**2. Stat Card Component**
Create `/components/ui/StatCard.tsx`:
```typescript
interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}
```

**3. Feature Card Component**
Create `/components/ui/FeatureCard.tsx`:
- Icon
- Title
- Description
- Hover effects

**4. Testimonial Card Component**
Create `/components/ui/TestimonialCard.tsx`:
- Client photo (circular)
- Quote with quotation marks
- Name, country, visa type
- 5-star rating

### Task 7.3: Responsive Design Refinement

**Breakpoints:**
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+

**Mobile Optimizations:**
- Hamburger menu (smooth slide-in)
- Stacked cards (no grid)
- Larger touch targets (min 44px)
- Simplified hero (less text)
- Collapsible sections

**Tablet Optimizations:**
- 2-column grids
- Adjusted padding
- Optimized images

**Desktop Optimizations:**
- 3-4 column grids
- Full-width hero
- Hover effects
- Sidebar navigation

### Task 7.4: Image Optimization Checklist

For EVERY image:
```typescript
<Image
  src={IMAGES.hero.main}
  alt="Modern Doha skyline at sunset"
  width={1920}
  height={1080}
  priority={true} // For hero images only
  loading="lazy" // For below-fold images
  placeholder="blur"
  blurDataURL="data:image/..." // Low-quality placeholder
  className="object-cover"
/>
```

**Hero Images:**
- `priority={true}`
- Load immediately
- High quality

**Below-fold Images:**
- `loading="lazy"`
- Load on scroll
- Optimize size

**Object Fit:**
- `object-cover` - Most images
- `object-contain` - Logos

### Task 7.5: Accessibility Improvements

**1. Semantic HTML:**
```html
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
```

**2. ARIA Labels:**
- Navigation: `aria-label="Main navigation"`
- Forms: `aria-label="Visa application form"`
- Buttons: Descriptive text

**3. Keyboard Navigation:**
- All interactive elements focusable
- Visible focus states (gold outline)
- Skip to content link
- Tab order logical

**4. Screen Reader:**
- Alt text for ALL images (descriptive)
- Form labels properly associated
- Error messages clear
- Status updates announced

**5. Color Contrast:**
- Text: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Use contrast checker tools

### Task 7.6: Performance Optimization

**1. Code Splitting:**
```typescript
// Dynamic imports for heavy components
const WorkVisaDetails = dynamic(() => import('@/components/WorkVisaDetails'))
```

**2. Image Optimization:**
- Next.js Image component everywhere
- WebP format (automatic)
- Responsive images
- Lazy loading

**3. Font Loading:**
- `display: 'swap'` for fonts
- Preload critical fonts
- Subset fonts (Latin only)

**4. CSS Optimization:**
- Tailwind purge unused
- Critical CSS inline
- Minimize custom CSS

**5. Bundle Size:**
- Tree shaking
- Remove unused dependencies
- Monitor bundle size

### Task 7.7: Animations & Micro-interactions

**Page Load Animation:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-load {
  animation: fadeInUp 0.6s ease-out;
}

.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
```

**Scroll Animations:**
Use Intersection Observer:
```typescript
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => setIsVisible(entry.isIntersecting)
  );
  
  if (ref.current) observer.observe(ref.current);
  
  return () => observer.disconnect();
}, []);
```

**Button Hover:**
```css
.btn-primary {
  @apply transition-all duration-300;
  @apply hover:scale-105 hover:shadow-lg;
}
```

---

## 📋 PHASE 8: Content & Final Touches

### Task 8.1: SEO Optimization

**Page Metadata:**
```typescript
// app/page.tsx
export const metadata = {
  title: 'Fast Qatar Visa Center | Quick & Reliable Qatar Visa Processing',
  description: 'Get your Qatar visa in 24-48 hours. Tourist, business, work, and family visas. 10+ years experience, 98% success rate. Apply online today!',
  keywords: 'Qatar visa, work visa Qatar, tourist visa Qatar, bike rider visa, accountant visa Qatar',
  openGraph: {
    title: 'Fast Qatar Visa Center',
    description: 'Professional Qatar visa services',
    images: ['/og-image.jpg'],
  },
}
```

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fast Qatar Visa Center",
  "url": "https://fastqatarvisa.com",
  "logo": "https://fastqatarvisa.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+974-5104-9145",
    "contactType": "customer service"
  }
}
```

### Task 8.2: Legal Pages

**Privacy Policy Page:**
- Data collection
- Usage
- Protection measures
- User rights
- Contact info

**Terms of Service:**
- Service description
- User responsibilities
- Payment terms
- Refund policy
- Liability limitations

**Cookie Policy:**
- Types of cookies
- Purpose
- How to disable
- Third-party cookies

### Task 8.3: Final Content Review

**Checklist:**
- ✅ All placeholder text replaced
- ✅ All images have alt text
- ✅ All links tested
- ✅ Forms validated
- ✅ Phone numbers clickable
- ✅ Email addresses clickable
- ✅ Prices verified
- ✅ Processing times accurate
- ✅ Grammar checked
- ✅ Consistent terminology

### Task 8.4: Testing Checklist

**Functionality:**
- ✅ All navigation links work
- ✅ Forms submit correctly
- ✅ Validation working
- ✅ Mobile menu opens/closes
- ✅ Tracking system functional
- ✅ All buttons clickable
- ✅ Images load properly

**Responsive:**
- ✅ Mobile (375px)
- ✅ Tablet (768px)
- ✅ Desktop (1024px+)
- ✅ Large desktop (1440px+)

**Browser Testing:**
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

**Performance:**
- ✅ Lighthouse score >90
- ✅ Page load <3 seconds
- ✅ Images optimized
- ✅ No console errors

---

## 📦 COMPLETE FILE STRUCTURE

```
fast-qatar-visa/
├── app/
│   ├── layout.tsx (root layout, fonts, metadata)
│   ├── page.tsx (Home page)
│   ├── globals.css (Tailwind + custom styles)
│   │
│   ├── services/
│   │   ├── page.tsx (Services overview)
│   │   ├── tourist/page.tsx
│   │   ├── business/page.tsx
│   │   ├── transit/page.tsx
│   │   ├── family/page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx (Work visas overview)
│   │   │   ├── bike-rider/page.tsx ⭐
│   │   │   ├── cleaner/page.tsx ⭐
│   │   │   ├── labour/page.tsx ⭐
│   │   │   ├── accountant/page.tsx ⭐
│   │   │   ├── work-permit/page.tsx ⭐
│   │   │   └── freelance/page.tsx ⭐
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── contact/
│   │   └── page.tsx
│   │
│   ├── track/
│   │   └── page.tsx
│   │
│   ├── privacy/
│   │   └── page.tsx
│   │
│   └── terms/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Layout.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WorkVisaCategories.tsx ⭐
│   │   ├── WhyChooseUs.tsx
│   │   ├── Statistics.tsx ⭐
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   ├── ServicesHero.tsx
│   │   ├── ServicesTabs.tsx
│   │   ├── WorkVisasDetailed.tsx ⭐
│   │   ├── DocumentRequirements.tsx
│   │   ├── PricingComparison.tsx ⭐
│   │   ├── AboutHero.tsx
│   │   ├── CompanyStory.tsx
│   │   ├── Values.tsx
│   │   ├── ContactHero.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ContactInfo.tsx
│   │   ├── FAQ.tsx
│   │   ├── TrackHero.tsx
│   │   ├── TrackingForm.tsx
│   │   ├── StatusDisplay.tsx
│   │   └── TrackingHelp.tsx
│   │
│   └── ui/
│       ├── VisaCard.tsx ⭐
│       ├── StatCard.tsx ⭐
│       ├── FeatureCard.tsx
│       ├── TestimonialCard.tsx
│       ├── button.tsx (shadcn)
│       ├── card.tsx (shadcn)
│       ├── input.tsx (shadcn)
│       ├── form.tsx (shadcn)
│       ├── accordion.tsx (shadcn)
│       ├── tabs.tsx (shadcn)
│       └── ... (other shadcn components)
│
├── lib/
│   ├── utils.ts
│   └── images.ts ⭐
│
├── public/
│   ├── images/
│   ├── patterns/
│   │   ├── islamic-pattern-subtle.svg
│   │   └── islamic-pattern-gold.svg
│   └── favicon.ico
│
├── next.config.js ⭐
├── tailwind.config.ts ⭐
└── package.json
```

---

## 🚀 IMPLEMENTATION PRIORITY

### Phase 1: Foundation (Do First)
1. ✅ Next.js config for images
2. ✅ Create image constants file
3. ✅ Tailwind config with Qatar colors
4. ✅ Install fonts
5. ✅ Global styles
6. ✅ Header component
7. ✅ Footer component

### Phase 2: Home Page (Do Second)
1. ✅ Hero section
2. ✅ Services preview (include work visas)
3. ✅ Work Visa Categories section ⭐ PRIORITY
4. ✅ How It Works
5. ✅ Why Choose Us
6. ✅ Statistics
7. ✅ Testimonials
8. ✅ CTA section

### Phase 3: Work Visas (Do Third - CRITICAL)
1. ✅ Work visas overview page
2. ✅ Bike Rider visa detail page ⭐
3. ✅ Cleaner visa detail page ⭐
4. ✅ Labour visa detail page ⭐
5. ✅ Accountant visa detail page ⭐
6. ✅ Work Permit visa detail page ⭐
7. ✅ Freelance visa detail page ⭐
8. ✅ Pricing comparison table
9. ✅ Document requirements

### Phase 4: Other Pages (Do Fourth)
1. ✅ About page
2. ✅ Contact page
3. ✅ Track page
4. ✅ Traditional visa service pages

### Phase 5: Polish (Do Last)
1. ✅ Responsive testing
2. ✅ Animation refinement
3. ✅ Performance optimization
4. ✅ Accessibility review
5. ✅ Content review
6. ✅ SEO optimization
7. ✅ Legal pages

---

## 💎 KEY SUCCESS FACTORS

### Design Excellence
- **Distinctive Typography:** Playfair Display + Manrope (NOT Inter/Roboto)
- **Bold Color Use:** Maroon (#8B1538) + Gold (#D4AF37) dominance
- **Cultural Elements:** Subtle Islamic geometric patterns
- **Professional Photography:** High-quality Qatar-specific images
- **Smooth Animations:** Staggered reveals, hover effects, scroll triggers

### Content Quality
- **Clear Pricing:** Transparent visa fees and salary information
- **Detailed Information:** Complete work visa category descriptions
- **Trust Signals:** 10+ years, 98% success, 24/7 support
- **Real Examples:** Authentic testimonials and success stories
- **Comprehensive FAQs:** Answer all common questions

### User Experience
- **Simple Navigation:** Easy to find work visa categories
- **Clear CTAs:** "Apply Now" buttons prominent
- **Mobile-First:** Excellent experience on all devices
- **Fast Loading:** Optimized images and code
- **Easy Contact:** Multiple channels (phone, WhatsApp, email)

### Technical Excellence
- **Next.js Best Practices:** Server components, image optimization
- **Accessibility:** WCAG AA compliance
- **SEO:** Proper metadata, structured data
- **Performance:** Lighthouse score >90
- **Security:** SSL, data protection

---

## 📞 CONTACT INFORMATION TO USE

- **Company Name:** Fast Qatar Visa Center
- **Qatar Office:** Office 303, Abdul Jaleel Abdul Ghani Building, Al Matar Street, Doha, Qatar
- **Phone:** +974-5104 9145
- **WhatsApp:** +974-5104 9145
- **Email:** info@fastqatarvisa.com
- **Working Hours:** 24/7 Support Available

---

## ⚠️ CRITICAL REMINDERS

1. **Frontend Design Skill:** Use distinctive fonts, avoid AI clichés
2. **Image Optimization:** Use Next.js Image component EVERYWHERE
3. **Work Visas:** This is your MAIN differentiator - make it prominent
4. **Pricing Transparency:** Show all fees clearly (QAR amounts)
5. **Salary Information:** Clearly display monthly salaries
6. **Trust Building:** Emphasize experience, success rate, support
7. **Mobile Experience:** Test thoroughly on mobile devices
8. **Loading Speed:** Optimize everything for fast load times
9. **Accessibility:** Alt text, keyboard navigation, screen readers
10. **Real Data:** Use accurate processing times and requirements

---

## 🎯 FINAL QUALITY CHECKLIST

### Visual Design
- [ ] Distinctive typography (no Inter/Roboto)
- [ ] Qatar colors (maroon + gold) used prominently
- [ ] High-quality images with proper alt text
- [ ] Consistent spacing and alignment
- [ ] Professional, trustworthy appearance
- [ ] Cultural elements incorporated subtly

### Functionality
- [ ] All navigation links working
- [ ] Forms validate and submit
- [ ] Mobile menu functions properly
- [ ] Tracking system operational
- [ ] All CTAs linked correctly
- [ ] Images load and display properly

### Content
- [ ] Work visa information complete and accurate
- [ ] Pricing clearly displayed (QAR amounts)
- [ ] Salary information included
- [ ] Processing times specified
- [ ] FAQs comprehensive
- [ ] No placeholder text remaining
- [ ] Grammar and spelling checked

### Performance
- [ ] Lighthouse score >90
- [ ] Images optimized
- [ ] Page load <3 seconds
- [ ] No console errors
- [ ] Mobile performance excellent

### Accessibility
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Color contrast sufficient
- [ ] Form labels proper
- [ ] ARIA labels where needed

### SEO
- [ ] Page titles optimized
- [ ] Meta descriptions written
- [ ] Open Graph tags added
- [ ] Structured data implemented
- [ ] URLs clean and descriptive

---

## 🎉 YOU'RE READY TO BUILD!

This comprehensive guide provides everything needed to create Fast Qatar Visa Center website with:

✅ **Clear work visa focus** with all 6 categories detailed
✅ **Professional design** inspired by Fast Global ME
✅ **Complete content** for all pages
✅ **Technical excellence** with Next.js best practices
✅ **User-centric** approach with trust-building elements
✅ **Mobile-optimized** responsive design
✅ **Performance-focused** fast loading and smooth interactions

**Remember:** The work visa categories (especially Bike Rider, Cleaner, Labour, and Accountant) are your UNIQUE selling points. Make them prominent, clear, and easy to find!

**Start with Phase 0, follow the priority order, and create something amazing! 🚀**