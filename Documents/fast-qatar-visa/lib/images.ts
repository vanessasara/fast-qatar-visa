/**
 * Centralized image URLs for Fast Qatar Visa Center
 * All images are sourced from Unsplash for high quality and free usage
 */

export const IMAGES = {
  // Hero section images
  hero: {
    dohaSkylline: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80",
    dohaNight: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?w=1920&q=80",
    qatarAirport: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80",
    modernCity: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?w=1920&q=80",
  },

  // Services section images
  services: {
    tourist: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
    business: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    transit: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&q=80",
    family: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
    work: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    passport: "https://images.unsplash.com/photo-1544989164-31dc3c645987?w=800&q=80",
    travel: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80",
    luggage: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&q=80",
  },

  // About page images
  about: {
    team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    collaboration: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    partnership: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    support: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  },

  // Features/Trust indicators
  features: {
    security: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    support: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
    speed: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    success: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80",
  },

  // Qatar culture/architecture
  qatar: {
    museum: "https://images.unsplash.com/photo-1559253474-e2f3f35d51f0?w=1200&q=80",
    souq: "https://images.unsplash.com/photo-1578321272125-4f96f0aec96d?w=1200&q=80",
    desert: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=1200&q=80",
    architecture: "https://images.unsplash.com/photo-1569288063643-5d29ad64df09?w=1200&q=80",
    pearl: "https://images.unsplash.com/photo-1610375228550-8f8c9e4d4b43?w=1200&q=80",
  },

  // Contact page
  contact: {
    customerService: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    helpdesk: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
    communication: "https://images.unsplash.com/photo-1560264280-88b68371db39?w=1200&q=80",
  },

  // Testimonials - Profile photos
  testimonials: {
    person1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    person2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    person3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    person4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    person5: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    person6: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },

  // Backgrounds and patterns
  backgrounds: {
    gradient: "https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80",
    abstract: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=1920&q=80",
    geometric: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=1920&q=80",
  },

  // Icons and misc
  misc: {
    airplane: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    documents: "https://images.unsplash.com/photo-1568234928966-359c35dd8327?w=600&q=80",
    handshake: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    calendar: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=600&q=80",
  },
};

// Helper function to get image with custom dimensions
export function getImageUrl(url: string, width?: number, height?: number, quality?: number): string {
  const urlObj = new URL(url);
  if (width) urlObj.searchParams.set("w", width.toString());
  if (height) urlObj.searchParams.set("h", height.toString());
  if (quality) urlObj.searchParams.set("q", quality.toString());
  return urlObj.toString();
}
