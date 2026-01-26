import { IMAGES } from "./images";

// Work visa type definition
export interface WorkVisa {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroDescription: string;
  icon: string;
  image: string;
  visaFee: string;
  visaFeeNote?: string;
  salary: string;
  salaryPKR?: string;
  salaryNote?: string;
  processingTime: string;
  expressProcessing?: string;
  duration: string;
  familySponsorship: string;
  badges?: string[];
  isPremium?: boolean;
  isPopular?: boolean;
  overview: string[];
  eligibility: string[];
  packageIncludes: string[];
  contractDetails: {
    label: string;
    value: string;
    icon: string;
  }[];
  benefits?: {
    title: string;
    description: string;
  }[];
  jobCategories: string[];
  jobCategoriesTitle: string;
  requiredDocuments: string[];
  salaryRanges?: {
    level: string;
    salary: string;
  }[];
  workingConditions?: {
    label: string;
    value: string;
  }[];
  metadata: {
    title: string;
    description: string;
  };
}

// Contact information - centralized
export const CONTACT_INFO = {
  phone: "+974 12345678",
  phoneRaw: "+97412345678",
  whatsapp: "97412345678",
  email: "info@fastqatarvisa.com",
  address: {
    line1: "Office 303, Abdul Jaleel Abdul Ghani Building",
    line2: "Al Matar Street, Doha, Qatar",
  },
  workingHours: "24/7 Support Available",
};

// All work visa data
export const WORK_VISAS: WorkVisa[] = [
  {
    slug: "bike-rider",
    title: "Bike Rider Visa",
    shortTitle: "Bike Rider",
    description: "Join Qatar's rapidly growing delivery and logistics sector with competitive salary and full benefits package",
    heroDescription: "Join Qatar's rapidly growing delivery and logistics sector with competitive salary and full benefits package",
    icon: "Bike",
    image: IMAGES.work.bikeRider,
    visaFee: "QAR 7,500",
    visaFeePKR: "PKR 140,000",
    salary: "QAR 2,300",
    salaryPKR: "PKR 180,000",
    processingTime: "15-20 working days",
    expressProcessing: "Express: 10-12 days",
    duration: "2 years",
    familySponsorship: "After 1 year",
    badges: ["High Demand"],
    overview: [
      "The Bike Rider Visa is designed for delivery and courier professionals seeking employment in Qatar's rapidly growing food delivery and logistics sector. This visa category offers stable employment with competitive salary and full residence benefits.",
      "Qatar's e-commerce and food delivery industry is expanding rapidly, creating thousands of job opportunities for bike riders. Major companies like Talabat, Rafeeq, Snoonu, and various logistics firms are actively hiring delivery professionals.",
      "With the 2022 FIFA World Cup infrastructure and ongoing development projects, Qatar has become one of the most sought-after destinations for delivery professionals in the Middle East.",
    ],
    eligibility: [
      "Age: 21-45 years",
      "Valid passport (minimum 6 months validity)",
      "Basic education certificate",
      "Clean police clearance certificate",
      "Medical fitness certificate",
      "Previous delivery experience preferred but not mandatory",
      "Valid driving license (can be obtained in Qatar)",
      "Good physical health and fitness",
    ],
    packageIncludes: [
      "Work permit processing (2 years)",
      "Residence permit (2 years)",
      "Medical insurance coverage",
      "Company accommodation or allowance",
      "Food allowance or company meals",
      "Company bike and equipment",
      "Uniform and safety gear",
      "End of service benefits",
      "30 days annual leave",
      "Air ticket allowance (annual)",
      "Qatar ID card processing",
      "Airport pickup on arrival",
    ],
    contractDetails: [
      { label: "Contract", value: "2 Years", icon: "Calendar" },
      { label: "Accommodation", value: "Provided", icon: "Building" },
      { label: "Insurance", value: "Included", icon: "Shield" },
      { label: "Working Hours", value: "8-10 hrs/day", icon: "Clock" },
    ],
    workingConditions: [
      { label: "Working Hours", value: "8-10 hours/day, 6 days/week with flexible scheduling" },
      { label: "Rest Day", value: "1 day off per week (typically Friday)" },
      { label: "Overtime", value: "Available with additional pay (1.5x hourly rate)" },
      { label: "Tips", value: "Customer tips allowed and encouraged (extra income)" },
      { label: "Annual Leave", value: "30 days paid leave per year" },
      { label: "Sick Leave", value: "14 days paid sick leave per year" },
    ],
    jobCategories: [
      "Talabat (Food Delivery)",
      "Rafeeq (Multi-delivery)",
      "Snoonu (Food & Grocery)",
      "Careem (Delivery Services)",
      "Amazon Qatar",
      "DHL Express",
      "FedEx Qatar",
      "Local Restaurants",
      "E-commerce Companies",
    ],
    jobCategoriesTitle: "Career Opportunities",
    requiredDocuments: [
      "Passport copy (valid 6+ months from travel date)",
      "Recent passport-size photos (4 copies, white background)",
      "Educational certificates (attested by home country)",
      "Police clearance certificate (attested)",
      "Medical fitness certificate from approved center",
      "Previous employment certificates (if any)",
      "CV/Resume with contact details",
      "Driving license copy (if available)",
      "Birth certificate copy",
      "National ID card copy",
    ],
    metadata: {
      title: "Bike Rider Visa Qatar - Fast Qatar Visa Center",
      description: "Apply for Qatar Bike Rider Visa. QAR 7,500 visa fee, QAR 2,300/month salary, 2-year work permit with residence and medical insurance included.",
    },
  },
  {
    slug: "cleaner",
    title: "Cleaner Visa",
    shortTitle: "Cleaner",
    description: "Professional cleaning opportunities in Qatar's residential, commercial, and hospitality sectors",
    heroDescription: "Professional cleaning opportunities in Qatar's residential, commercial, and hospitality sectors",
    icon: "Sparkles",
    image: IMAGES.work.cleaner,
    visaFee: "QAR 7,000",
    visaFeePKR: "PKR 140,000",
    salary: "QAR 2,000",
    salaryPKR: "PKR 160,000",
    salaryNote: "+ QAR 800 allowances",
    processingTime: "15-20 working days",
    duration: "2 years",
    familySponsorship: "After 1 year",
    overview: [
      "The Cleaner Visa provides employment opportunities for professional cleaning staff in Qatar's residential, commercial, and hospitality sectors. This category offers stable income with comprehensive benefits and accommodation support.",
      "Qatar's growing economy and infrastructure development have created a high demand for professional cleaning services. From luxury hotels to corporate offices, shopping malls to residential compounds, cleaning professionals are in constant demand.",
      "This visa includes housing and food allowances, making it an attractive option for workers seeking to maximize their savings while working in Qatar.",
    ],
    eligibility: [
      "Age: 21-50 years",
      "Valid passport (minimum 6 months validity)",
      "Basic education (literate)",
      "Clean police clearance certificate",
      "Medical fitness certificate",
      "Previous cleaning experience preferred but not required",
      "Good physical health and stamina",
      "Ability to work in a team environment",
    ],
    packageIncludes: [
      "Work permit processing",
      "Residence permit (2 years)",
      "Medical insurance coverage",
      "Housing allowance (QAR 500/month)",
      "Food allowance (QAR 300/month)",
      "Cleaning equipment and uniform",
      "End of service benefits",
      "30 days annual leave",
      "Transportation to work",
      "Qatar ID card processing",
    ],
    contractDetails: [
      { label: "Housing", value: "QAR 500/mo", icon: "Home" },
      { label: "Food", value: "QAR 300/mo", icon: "Building" },
      { label: "Insurance", value: "Included", icon: "Shield" },
      { label: "Contract", value: "2 Years", icon: "Calendar" },
    ],
    jobCategories: [
      "Hotels and Resorts",
      "Corporate Offices",
      "Shopping Malls",
      "Residential Compounds",
      "Hospitals and Clinics",
      "Educational Institutions",
      "Government Buildings",
      "Airports and Stations",
      "Private Villas",
    ],
    jobCategoriesTitle: "Employment Sectors",
    requiredDocuments: [
      "Passport copy (valid 6+ months)",
      "Recent passport-size photos (white background)",
      "Educational certificates (attested)",
      "Police clearance certificate (attested)",
      "Medical fitness certificate",
      "Previous employment certificates (if any)",
      "CV/Resume",
      "National ID card copy",
    ],
    metadata: {
      title: "Cleaner Visa Qatar - Fast Qatar Visa Center",
      description: "Apply for Qatar Cleaner Visa. QAR 7,000 visa fee, QAR 2,000/month salary with housing and food allowances. 2-year work permit included.",
    },
  },
  {
    slug: "labour",
    title: "Labour Visa",
    shortTitle: "Labour",
    description: "Construction and general labor opportunities with Qatar's major infrastructure projects",
    heroDescription: "Construction and general labor opportunities with Qatar's major infrastructure projects",
    icon: "HardHat",
    image: IMAGES.work.labour,
    visaFee: "QAR 7,000",
    visaFeePKR: "PKR 140,000",
    salary: "QAR 2,000-4,000",
    salaryPKR: "PKR 160,000-320,000",
    salaryNote: "Based on skill level",
    processingTime: "15-20 working days",
    duration: "2 years",
    familySponsorship: "After 1 year",
    overview: [
      "The Labour Visa category serves Qatar's construction and general labor workforce. With major infrastructure projects and continuous development, skilled and unskilled laborers are in high demand across Qatar.",
      "Qatar continues to invest heavily in infrastructure, real estate, and industrial development. This creates ongoing demand for construction workers, factory staff, warehouse workers, and general laborers.",
      "This visa provides full accommodation and meals, allowing workers to save a significant portion of their salary.",
    ],
    eligibility: [
      "Age: 21-50 years",
      "Valid passport (minimum 6 months validity)",
      "Basic education",
      "Clean police clearance certificate",
      "Medical fitness and physically fit",
      "Skills in specific trades (optional, higher salary)",
      "Ability to work in outdoor conditions",
      "Willingness to work in team environment",
    ],
    packageIncludes: [
      "Work permit processing",
      "Residence permit (2 years)",
      "Medical insurance coverage",
      "Company accommodation (camp/housing)",
      "Meals provided (3 times daily)",
      "Transportation to/from work site",
      "Safety equipment and uniform",
      "End of service benefits",
      "30 days annual leave",
      "Overtime pay available",
    ],
    contractDetails: [
      { label: "Accommodation", value: "Company Camp", icon: "Building" },
      { label: "Meals", value: "Provided", icon: "Wrench" },
      { label: "Safety Gear", value: "Included", icon: "Shield" },
      { label: "Contract", value: "2 Years", icon: "Calendar" },
    ],
    salaryRanges: [
      { level: "Unskilled Labour", salary: "QAR 2,000/month" },
      { level: "Semi-skilled Labour", salary: "QAR 2,500/month" },
      { level: "Skilled Labour (Electrician, Plumber, etc.)", salary: "QAR 3,000-4,000/month" },
    ],
    jobCategories: [
      "Construction Labour",
      "General Labour",
      "Warehouse Workers",
      "Factory Workers",
      "Agricultural Workers",
      "Maintenance Staff",
      "Electricians",
      "Plumbers",
      "Carpenters",
      "Welders",
      "Painters",
      "Mason/Tiler",
    ],
    jobCategoriesTitle: "Job Categories",
    requiredDocuments: [
      "Passport copy (valid 6+ months)",
      "Recent passport-size photos (white background)",
      "Educational certificates (attested)",
      "Police clearance certificate (attested)",
      "Medical fitness certificate",
      "Trade certificates (for skilled workers)",
      "Previous employment certificates",
      "CV/Resume",
    ],
    metadata: {
      title: "Labour Visa Qatar - Fast Qatar Visa Center",
      description: "Apply for Qatar Labour Visa. QAR 7,000 visa fee, QAR 2,000-4,000/month salary. Construction and general labor opportunities with accommodation provided.",
    },
  },
  {
    slug: "accountant",
    title: "Accountant Open Visa",
    shortTitle: "Accountant",
    description: "Premium professional category with high earning potential, family sponsorship, and career growth opportunities",
    heroDescription: "Premium professional category with high earning potential, family sponsorship, and career growth opportunities",
    icon: "Calculator",
    image: IMAGES.work.accountant,
    visaFee: "QAR 8,000",
    visaFeePKR: "PKR 140,000",
    visaFeeNote: "One-time payment",
    salary: "QAR 25,000+",
    salaryPKR: "PKR 620,000+",
    processingTime: "20-25 working days",
    expressProcessing: "Express: 15 days",
    duration: "2 years",
    familySponsorship: "Eligible",
    badges: ["Professional Category", "Most Popular"],
    isPremium: true,
    isPopular: true,
    overview: [
      "The Accountant Open Visa is a premium professional category designed for qualified accounting professionals. This visa offers high earning potential, family sponsorship options, and career advancement opportunities in Qatar's thriving business sector.",
      "Qatar's position as a global financial hub, home to the Qatar Financial Centre (QFC), creates exceptional opportunities for accounting professionals. Major multinational corporations, banks, oil & gas companies, and consulting firms actively recruit qualified accountants.",
      "With tax-free income and comprehensive benefits, accountants can save 60-70% of their earnings while enjoying a high quality of life in Doha.",
    ],
    eligibility: [
      "Age: 25-55 years",
      "Bachelor's degree in Accounting/Finance (mandatory)",
      "Minimum 2-3 years professional experience",
      "Professional certifications preferred (CPA, ACCA, CMA, CA)",
      "Valid passport (6+ months validity)",
      "Clean police clearance certificate",
      "Medical fitness certificate",
      "Strong English communication skills",
      "Knowledge of accounting software (SAP, Oracle, QuickBooks)",
    ],
    packageIncludes: [
      "Professional work permit (2 years)",
      "Residence permit (2 years)",
      "Family sponsorship eligible",
      "Comprehensive medical insurance",
      "Housing allowance (QAR 5,000-8,000/mo)",
      "Transport allowance (QAR 1,500-2,000/mo)",
      "Education allowance for children",
      "Annual performance bonus",
      "30 days leave + air tickets",
      "End of service gratuity",
      "Career development opportunities",
      "Tax-free income",
    ],
    contractDetails: [
      { label: "Housing", value: "QAR 5,000-8,000/mo", icon: "Building" },
      { label: "Transport", value: "QAR 1,500-2,000/mo", icon: "Briefcase" },
      { label: "Insurance", value: "Family Coverage", icon: "Shield" },
      { label: "Bonus", value: "Performance Based", icon: "Award" },
    ],
    benefits: [
      { title: "Tax-Free Income", description: "No income tax in Qatar - keep 100% of your earnings" },
      { title: "High Savings Potential", description: "Save 60-70% of your salary with low living costs" },
      { title: "Family Sponsorship", description: "Bring your spouse and children to Qatar" },
      { title: "Professional Growth", description: "Career advancement and networking opportunities" },
      { title: "Quality Lifestyle", description: "Modern amenities, safe environment, excellent healthcare" },
      { title: "Global Experience", description: "Work with international teams and clients" },
    ],
    jobCategories: [
      "Multinational Corporations",
      "Qatar Financial Centre",
      "Banks & Financial Institutions",
      "Oil & Gas Companies",
      "Real Estate Firms",
      "Big 4 Consulting Firms",
      "Government Organizations",
      "Healthcare Sector",
      "Construction Companies",
    ],
    jobCategoriesTitle: "Career Opportunities",
    requiredDocuments: [
      "Passport copy (valid 6+ months)",
      "Recent passport photos (white background)",
      "Bachelor's degree in Accounting/Finance (attested)",
      "Professional certifications (CPA, ACCA, CMA - attested)",
      "Experience certificates (minimum 2-3 years, attested)",
      "Police clearance certificate (attested)",
      "Medical fitness certificate",
      "Detailed CV/Resume",
      "Reference letters from previous employers",
      "Academic transcripts",
    ],
    metadata: {
      title: "Accountant Open Visa Qatar - Fast Qatar Visa Center",
      description: "Apply for Qatar Accountant Open Visa. QAR 8,000 visa fee, QAR 25,000+/month salary. Professional category with family sponsorship and high earning potential.",
    },
  },
  {
    slug: "work-permit",
    title: "Work Permit Visa (2 Years)",
    shortTitle: "Work Permit",
    description: "Extended employment authorization for various professional categories with long-term stability",
    heroDescription: "Extended employment authorization for various professional categories with long-term stability",
    icon: "Briefcase",
    image: IMAGES.work.workPermit,
    visaFee: "From QAR 7,500",
    visaFeePKR: "PKR 140,000",
    visaFeeNote: "Up to QAR 10,000",
    salary: "Varies",
    salaryPKR: "PKR 160,000-320,000",
    salaryNote: "Based on job and experience",
    processingTime: "20-30 working days",
    duration: "2 years",
    familySponsorship: "Based on salary",
    overview: [
      "The 2-Year Work Permit Visa provides extended employment authorization for various professional and skilled categories. This visa offers longer stability and is suitable for professionals seeking long-term opportunities in Qatar.",
      "This versatile visa category covers a wide range of professions from engineering and IT to healthcare and hospitality. The extended validity period provides job security and allows for career development in Qatar.",
      "With the option to renew and potential for family sponsorship (based on salary), this visa is ideal for professionals planning to establish their careers in Qatar.",
    ],
    eligibility: [
      "Valid passport (minimum 6 months validity)",
      "Relevant educational qualifications (attested)",
      "Professional experience in the field",
      "Clean police clearance certificate",
      "Medical fitness certificate",
      "Job offer from Qatar employer",
      "Professional certifications (if applicable)",
    ],
    packageIncludes: [
      "Extended work permit (2 years)",
      "Residence permit (2 years)",
      "Medical insurance coverage",
      "Multiple re-entry options",
      "Job change flexibility (with NOC)",
      "Family sponsorship possible*",
      "Renewable with employer",
      "Qatar ID card processing",
      "End of service benefits",
      "Annual leave as per labor law",
    ],
    contractDetails: [
      { label: "Duration", value: "2 Years", icon: "Calendar" },
      { label: "Renewable", value: "Yes", icon: "RefreshCw" },
      { label: "Insurance", value: "Included", icon: "Shield" },
      { label: "Family Visa", value: "Possible*", icon: "Users" },
    ],
    jobCategories: [
      "Engineers (All disciplines)",
      "IT Professionals",
      "Healthcare Workers",
      "Teachers & Educators",
      "Sales Professionals",
      "Marketing Specialists",
      "Hotel & Hospitality Staff",
      "Restaurant Workers",
      "Retail Managers",
      "Administrative Staff",
      "HR Professionals",
      "Project Managers",
      "Graphic Designers",
      "Architects",
      "Quality Controllers",
      "Logistics Coordinators",
      "Customer Service",
      "And many more...",
    ],
    jobCategoriesTitle: "Eligible Professions",
    requiredDocuments: [
      "Passport copy (valid 6+ months)",
      "Recent passport photos (white background)",
      "Educational certificates (attested)",
      "Professional certifications (attested, if any)",
      "Experience certificates (attested)",
      "Police clearance certificate (attested)",
      "Medical fitness certificate",
      "CV/Resume with complete work history",
      "Reference letters",
      "Job offer letter from employer",
    ],
    metadata: {
      title: "Work Permit Visa (2 Years) Qatar - Fast Qatar Visa Center",
      description: "Apply for Qatar 2-Year Work Permit Visa. From QAR 7,500. Extended employment authorization for engineers, IT professionals, healthcare workers, and more.",
    },
  },
  {
    slug: "freelance",
    title: "Freelance Visa",
    shortTitle: "Freelance",
    description: "Work independently in Qatar without traditional employer sponsorship. Perfect for consultants and digital professionals.",
    heroDescription: "Work independently in Qatar without traditional employer sponsorship. Perfect for consultants and digital professionals.",
    icon: "Laptop",
    image: IMAGES.work.freelance,
    visaFee: "From QAR 8,500",
    visaFeePKR: "PKR 140,000",
    visaFeeNote: "One-time payment",
    salary: "Unlimited",
    salaryPKR: "PKR 160,000-320,000",
    salaryNote: "Self-determined earnings",
    processingTime: "25-30 working days",
    duration: "1-2 years",
    familySponsorship: "After 6 months",
    badges: ["New in Qatar"],
    overview: [
      "The Freelance Visa enables independent professionals to work in Qatar without traditional employer sponsorship. Perfect for consultants, digital professionals, and service providers seeking flexibility and independence.",
      "This relatively new visa category reflects Qatar's commitment to attracting global talent and supporting the gig economy. Freelancers can work with multiple clients, set their own rates, and enjoy the freedom of self-employment while living in one of the world's most dynamic cities.",
      "With Qatar's tax-free environment, freelancers can maximize their earnings while enjoying world-class infrastructure and a high quality of life.",
    ],
    eligibility: [
      "Minimum age: 25 years",
      "Professional qualification or proven expertise",
      "Portfolio demonstrating your work",
      "Business plan or service offering description",
      "Clean police clearance certificate",
      "Medical fitness certificate",
      "Proof of financial stability (bank statements)",
      "Valid passport (6+ months validity)",
    ],
    packageIncludes: [
      "Self-sponsored work permit",
      "Residence permit (1-2 years)",
      "Independent work authorization",
      "Multiple clients allowed",
      "Business setup support",
      "Multi-entry visa",
      "Qatar ID card processing",
      "Bank account opening assistance",
      "Renewable visa option",
      "No employer dependency",
    ],
    contractDetails: [
      { label: "Duration", value: "1-2 Years", icon: "Calendar" },
      { label: "Clients", value: "Multiple", icon: "Globe" },
      { label: "Sponsorship", value: "Self-Sponsored", icon: "Shield" },
      { label: "Family Visa", value: "After 6 months", icon: "Users" },
    ],
    benefits: [
      { title: "Complete Independence", description: "No employer sponsorship required - you are your own sponsor" },
      { title: "Multiple Clients", description: "Work with as many clients as you want, locally and internationally" },
      { title: "Tax-Free Income", description: "Keep 100% of your earnings with no income tax in Qatar" },
      { title: "Flexibility", description: "Set your own schedule, rates, and work arrangements" },
      { title: "Business Growth", description: "Build your brand and client base in the Middle East" },
      { title: "Family Option", description: "Sponsor family members after 6 months of residency" },
    ],
    jobCategories: [
      "IT Consultants",
      "Software Developers",
      "Graphic Designers",
      "Marketing Professionals",
      "Content Creators",
      "Business Consultants",
      "Trainers & Coaches",
      "Photographers",
      "Videographers",
      "Event Planners",
      "Translators",
      "Writers & Editors",
      "Web Developers",
      "Digital Marketers",
      "Financial Advisors",
      "Legal Consultants",
      "Architects",
      "Interior Designers",
    ],
    jobCategoriesTitle: "Suitable Professions",
    requiredDocuments: [
      "Detailed business plan (services you will offer)",
      "Portfolio of previous work/projects",
      "Professional qualifications (attested)",
      "Bank statements (proof of funds - minimum 6 months)",
      "Passport copy (valid 6+ months)",
      "Recent passport photos (white background)",
      "Police clearance certificate (attested)",
      "Medical fitness certificate",
      "CV/Resume with complete work history",
      "Client testimonials or references (if available)",
    ],
    metadata: {
      title: "Freelance Visa Qatar - Fast Qatar Visa Center",
      description: "Apply for Qatar Freelance Visa. From QAR 8,500. Work independently without employer sponsorship. Perfect for consultants, digital professionals, and service providers.",
    },
  },
];

// Helper function to get visa by slug
export function getWorkVisaBySlug(slug: string): WorkVisa | undefined {
  return WORK_VISAS.find((visa) => visa.slug === slug);
}

// Helper function to get all visa slugs (for static params)
export function getAllWorkVisaSlugs(): string[] {
  return WORK_VISAS.map((visa) => visa.slug);
}

// Helper function to get other work visas (for sidebar)
export function getOtherWorkVisas(currentSlug: string): Pick<WorkVisa, "slug" | "shortTitle" | "visaFee">[] {
  return WORK_VISAS.filter((visa) => visa.slug !== currentSlug).map((visa) => ({
    slug: visa.slug,
    shortTitle: visa.shortTitle,
    visaFee: visa.visaFee,
  }));
}
