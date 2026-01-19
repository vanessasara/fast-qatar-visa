# Fast Qatar Visa Center - Website Development Guide (Updated with Images)

## Project Overview
Build a professional visa processing website for Fast Qatar Visa Center using Next.js 14+, Tailwind CSS, and shadcn/ui components. The website should have a clean, trustworthy design with Qatar-inspired colors (maroon and gold) and high-quality imagery for better user experience.

---

## PHASE 0: Next.js Configuration & Image Setup

### Tasks:

1. **Update next.config.js file to allow all image domains**:
   - Find or create the next.config.js file in your project root folder
   - Add a configuration for images that allows loading from any external website
   - Set it up to accept images from both secure (https) and regular (http) websites
   - Use two asterisks as a wildcard pattern to allow any domain name
   - This means you can use images from Unsplash, Pexels, or any other image hosting service without getting errors
   - Make sure image optimization is enabled for better loading speeds

2. **Create an image constants file** at `/lib/images.ts`:
   - Make a new TypeScript file to store all your image URLs in one organized place
   - This makes it super easy to change images later without hunting through code
   - Create an object called IMAGES with different categories
   - Organize images by where they'll be used:
     - Hero section: Doha skyline, modern buildings, Qatar landmarks
     - Services: Travel photos, passports, business meetings, families traveling
     - About page: Professional teams, office spaces, Qatar culture
     - Features: Security symbols, customer support, fast delivery
     - Qatar culture: Architecture blending tradition and modernity, desert scenes
   - Use free stock photo websites like Unsplash or Pexels for high-quality images
   - All images should look professional and trustworthy

3. **Image Selection Guidelines for Best UI/UX**:
   - Choose images that make visitors feel confident and safe
   - Look for photos with Qatar or Middle Eastern settings when you can
   - Make sure images aren't too dark or too bright - you need good contrast for text
   - Pick images with colors that work well with maroon and gold theme
   - Show diverse people in professional settings
   - Avoid cluttered or busy backgrounds
   - Use landscape orientation for hero sections
   - Use square or portrait for cards and smaller sections
   - Every image should serve a purpose - either informative or trust-building

---

## PHASE 1: Project Setup & Configuration

### Tasks:
1. **Update `tailwind.config.ts`** with custom colors:
   - Add Qatar-inspired color palette to theme.extend.colors
   - Include qatarMaroon as primary color
   - Include qatarGold as accent/secondary color
   - Add complementary shades for hover states and variants
   - Add custom gradient backgrounds using these colors

2. **Create comprehensive folder structure**:
   - Create /components folder with subfolders: sections, ui, layout
   - Create /lib folder for utilities and constants
   - Create /app folder with route folders: about, services, contact, track
   - Create /public/images folder for any local images
   - The images.ts file goes in /lib for centralized image management

3. **Update globals.css**:
   - Add any custom global styles needed
   - Set smooth scroll behavior
   - Add custom animations for fade-in effects
   - Style scrollbar to match theme colors

---

## PHASE 2: Layout Components (Header & Footer)

### Tasks:

1. **Create Header component** at `/components/layout/Header.tsx`:
   - Add Qatar flag emoji or icon next to logo text "Fast Qatar Visa"
   - Logo should be maroon color and bold
   - Use NavigationMenu from shadcn for main navigation
   - Navigation links: Home, Services, About, Contact, Track Application
   - Add "Apply Now" button in maroon color on the right side
   - Make header sticky with blur background effect when scrolling
   - Add mobile hamburger menu for responsive design
   - Use smooth transitions for all hover effects

2. **Create Footer component** at `/components/layout/Footer.tsx`:
   - Use dark background (maroon or dark gray) with white text
   - Create 4 columns layout for desktop:
     - Column 1: About company with brief description
     - Column 2: Quick links to services
     - Column 3: Important links (Track, FAQ, Requirements)
     - Column 4: Contact information with icons
   - Add social media icons at bottom (placeholder for now)
   - Include newsletter signup section with email input
   - Add copyright text at the very bottom
   - On mobile, stack columns vertically
   - Use gold color for headings and hover states

3. **Create Layout wrapper** at `/components/layout/Layout.tsx`:
   - Simple wrapper component that includes Header and Footer
   - Accepts children prop for page content
   - Ensures consistent layout across all pages

---

## PHASE 3: Home Page Sections (Enhanced with Images)

### Tasks:

1. **Create Hero Section** at `/components/sections/Hero.tsx`:
   - **Background Image Setup**:
     - Use a stunning photo of Doha's modern skyline during sunset or blue hour
     - The image should show Qatar's impressive architecture and development
     - Alternative: Use the Pearl Qatar, Museum of Islamic Art, or Katara Cultural Village
     - Make sure the image is high resolution and looks sharp on large screens
   - **Image Overlay for Readability**:
     - Add a dark semi-transparent layer over the image
     - This makes white text easy to read
     - The overlay should be about half transparent so you can still see the beautiful image
   - **Text Content**:
     - Main headline in large bold letters: "Get Your Qatar Visa Fast & Easy"
     - Subtitle explaining benefits: quick processing, reliable service, expert help
     - Make text white and very easy to read
   - **Call-to-Action Buttons**:
     - Primary button: "Apply Now" with solid maroon background
     - Secondary button: "Check Status" with maroon outline, white background
     - Place buttons side by side on desktop, stack on mobile
   - **Trust Indicators**:
     - Add small badges below buttons showing key benefits
     - Examples: "98% Success Rate", "24-Hour Processing", "24/7 Support"
     - Use subtle icons with each badge
   - **Animation**:
     - Make everything fade in smoothly when page loads
     - Text should appear from bottom to top
     - Keep it professional, not too flashy
   - **Responsive Design**:
     - On mobile, make sure text doesn't get too small
     - Adjust padding so everything fits nicely
     - Background image should still look good when cropped on mobile

2. **Create Services Preview Section** at `/components/sections/ServicesPreview.tsx`:
   - **Section Header**:
     - Title: "Our Visa Services"
     - Subtitle: "Choose the visa type that suits your travel needs"
     - Center aligned with good spacing above and below
   - **Service Cards Layout**:
     - Create a grid showing 4 cards
     - On desktop: show all 4 in one row
     - On tablet: show 2 cards per row
     - On mobile: stack them vertically, one card at a time
   - **Individual Card Design**:
     - Each card should have its own unique background image (subtle, not overpowering)
     - Add a light overlay so the image doesn't distract from text
     - Place a large colorful icon at the top of each card
     - Service name as bold heading
     - Write 2-3 sentences describing what this visa is for
     - Add a "Learn More →" link in gold color at the bottom
   - **Four Service Types with Images**:
     - **Tourist Visa Card**:
       - Image: Airplane flying, tourist attractions, or luggage/travel gear
       - Icon: Airplane or camera icon
       - Description: For leisure travel, sightseeing, and family visits
     - **Business Visa Card**:
       - Image: Business meeting, handshake, or modern office
       - Icon: Briefcase or building icon
       - Description: For conferences, meetings, and business trips
     - **Transit Visa Card**:
       - Image: Airport terminal, airplane at gate, or transit area
       - Icon: Transfer or connecting flights icon
       - Description: For layovers and connections through Doha
     - **Family Visa Card**:
       - Image: Happy family traveling together or family at airport
       - Icon: Family/people icon
       - Description: For bringing family members to Qatar
   - **Interactive Effects**:
     - When someone hovers over a card, it should lift up slightly
     - The border should change to gold color
     - Shadow should get stronger to show depth
     - Make the transition smooth and elegant
   - **Card Spacing**:
     - Leave enough space between cards so they don't look cramped
     - Make sure each card has equal height for a clean look
     - Add generous padding inside each card

3. **Create How It Works Section** at `/components/sections/HowItWorks.tsx`:
   - Section heading: "How It Works" with subtitle "Get your visa in 4 simple steps"
   - 4 step cards in a row (or 2x2 grid on mobile)
   - Each step includes:
     - Large circular badge with step number (use gold background)
     - Icon representing the step
     - Step title
     - Brief description
   - Add connecting line or arrow between steps on desktop
   - Steps should be:
     - Step 1: Fill Application (form icon)
     - Step 2: Upload Documents (upload icon)
     - Step 3: Make Payment (credit card icon)
     - Step 4: Receive Visa (checkmark/email icon)
   - Keep design clean and minimal with plenty of white space

4. **Create Why Choose Us Section** at `/components/sections/WhyChooseUs.tsx`:
   - **Section Introduction**:
     - Title: "Why Choose Fast Qatar Visa?"
     - Subtitle: "Your trusted partner for Qatar visa processing"
     - Center the text with good spacing
   - **Grid Layout**:
     - Show 6 feature cards in a grid
     - Desktop: 3 cards per row (2 rows total)
     - Tablet: 2 cards per row
     - Mobile: 1 card at a time, stacked vertically
   - **Individual Feature Card Design**:
     - Clean white background with subtle border
     - Good padding inside each card for breathing room
     - Hover effect: card lifts slightly, border turns gold
     - Each card contains: icon, title, description
   - **Six Features with Specific Icons and Details**:
     - **Fast Processing**:
       - Icon: Lightning bolt or rocket (shows speed)
       - Title: "Fast Processing"
       - Description: "Get your visa approved in as little as 24 hours with our express service"
       - Optional small image: Clock showing fast time or speedometer
     - **Secure & Safe**:
       - Icon: Shield with checkmark or lock
       - Title: "Secure & Safe"
       - Description: "Bank-level encryption protects all your personal and payment information"
       - Optional small image: Secure payment or data protection visual
     - **24/7 Support**:
       - Icon: Headset or chat bubbles
       - Title: "24/7 Support"
       - Description: "Our expert team is available round the clock to assist you anytime"
       - Optional small image: Customer service representative or support desk
     - **Expert Assistance**:
       - Icon: Person with checkmark or graduation cap
       - Title: "Expert Assistance"
       - Description: "Dedicated visa specialists guide you through every step of the process"
       - Optional small image: Professional consultant helping client
     - **High Success Rate**:
       - Icon: Chart trending upward or trophy
       - Title: "High Success Rate"
       - Description: "98% approval rate with thousands of satisfied customers worldwide"
       - Optional small image: Success chart or happy customer
     - **Money-Back Guarantee**:
       - Icon: Money with checkmark or shield with dollar sign
       - Title: "Money-Back Guarantee"
       - Description: "Full refund if your visa application is rejected - risk-free service"
       - Optional small image: Money back or guarantee seal
   - **Icon Styling**:
     - Make icons large enough to be noticed (about 2-3 inches on screen)
     - Use maroon or gold color for icons
     - Place icon at top of each card
     - Icons should be simple and easily recognizable
   - **Card Consistency**:
     - Keep all cards the same height for neat appearance
     - Use same padding and spacing in each card
     - Make sure text doesn't get too long in any one card
     - Align everything nicely for professional look

5. **Create Testimonials Section** at `/components/sections/Testimonials.tsx`:
   - **Section Header**:
     - Title: "What Our Clients Say"
     - Subtitle: "Real experiences from satisfied customers" (optional)
     - Center aligned
   - **Layout Design**:
     - Show 3 testimonial cards in a row
     - On desktop: all 3 side by side
     - On tablet: 2 cards, then 1 below
     - On mobile: stack all 3 vertically
   - **Individual Testimonial Card**:
     - **Client Photo** (top of card):
       - Small circular photo of the person
       - Use professional-looking stock photos of diverse people
       - Photos should show friendly, happy faces
       - Size: about the size of a large coin
       - Center the photo at top of card
     - **Quote/Review**:
       - Add quotation mark icon or design element
       - Write realistic positive review (3-4 sentences)
       - Talk about specific benefits they experienced
       - Examples: fast processing, helpful support, easy process
       - Use natural, conversational language
     - **Client Information**:
       - Client name (can be first name + last initial for privacy)
       - Country they're from with small flag emoji
       - Example: "Sarah M. 🇺🇸 United States"
     - **Star Rating**:
       - Show 5 gold stars at bottom
       - All testimonials should be 5-star for trust
       - Stars should be visible and nicely designed
   - **Card Design**:
     - White background with subtle shadow
     - Rounded corners for friendly feel
     - Good padding inside so text isn't cramped
     - Border can be light gray or gold on hover
   - **Sample Testimonials Content**:
     - Testimonial 1: Focus on speed and efficiency
       - "Got my Qatar visa in just 24 hours! The process was incredibly smooth and the support team answered all my questions instantly. Highly recommend!"
     - Testimonial 2: Focus on ease of use
       - "I was worried about the application process, but Fast Qatar Visa made everything so simple. Clear instructions and very professional service."
     - Testimonial 3: Focus on reliability
       - "Used this service twice now for business visas. Never had any issues, always approved on time. Very trustworthy and reliable!"
   - **Visual Polish**:
     - Keep cards equal height for clean look
     - Add subtle hover effect (slight lift)
     - Consider adding a light background color for the section (very light gray)
     - Space cards evenly with consistent gaps

6. **Create CTA Section** at `/components/sections/CTASection.tsx`:
   - **Background Design**:
     - Use a maroon gradient background (dark to lighter maroon)
     - Alternative: Solid maroon with subtle pattern overlay
     - Pattern ideas: Geometric shapes inspired by Islamic art, subtle dots, or diagonal lines
     - Keep pattern very subtle - shouldn't distract from text
   - **Optional Background Image**:
     - You can add a faded background image of Qatar
     - Use very low opacity (like 10-15%) so it's barely visible
     - This adds depth without being distracting
   - **Text Content**:
     - Large bold heading: "Ready to Apply for Your Qatar Visa?"
     - Make heading white and really stand out
     - Supporting text below (1-2 sentences):
       - Example: "Join thousands of travelers who trust us for their Qatar visa needs. Start your application today and get approved in 24 hours!"
     - Keep text centered
     - All text should be white for good contrast
   - **Call-to-Action Button**:
     - Large prominent button: "Start Your Application"
     - Button color: White background with maroon text
     - OR: Gold background with dark text
     - Make button bigger than normal buttons
     - Add hover effect: button should slightly change color or lift
     - Place button centered below the text
   - **Additional Trust Elements** (Optional):
     - Add small icons or badges below button:
       - "Secure Payment" icon
       - "24/7 Support" icon
       - "Money-Back Guarantee" icon
     - Keep these small and subtle
     - Use white or gold color
   - **Spacing**:
     - Generous padding top and bottom
     - Make sure section feels spacious, not cramped
     - Give the button plenty of space around it
   - **Overall Feel**:
     - This section should feel important and urgent
     - But not pushy or aggressive
     - Professional and inviting

7. **Update Home Page** at `/app/page.tsx`:
   - Import all section components created above
   - Arrange in this order:
     - Hero
     - ServicesPreview
     - HowItWorks
     - WhyChooseUs
     - Testimonials
     - CTASection
   - Wrap everything in Layout component
   - Add smooth scroll behavior
   - Ensure proper spacing between sections (use consistent padding)

---

## PHASE 4: Services Page (Detailed with Images)

### Tasks:

1. **Create Page Hero** at `/components/sections/ServicesHero.tsx`:
   - Smaller hero section with background image
   - Page title: "Our Visa Services"
   - Brief description of comprehensive visa solutions
   - Breadcrumb navigation (Home > Services)

2. **Create Detailed Services List** at `/components/sections/ServicesList.tsx`:
   - **Tab Navigation Setup**:
     - Create clickable tabs at the top to switch between visa types
     - Tab options: Tourist | Business | Transit | Family | Work
     - Active tab should be highlighted in maroon color
     - Inactive tabs in gray, change to gold on hover
   - **Content Layout for Each Tab**:
     - When someone clicks a tab, show that visa type's information
     - Use two-column layout on desktop:
       - Left side (40%): Large featured image
       - Right side (60%): All the information
     - On mobile, stack image on top, then information below
   - **Featured Image Selection** (Left Column):
     - **Tourist Visa**: 
       - Show tourists at famous Qatar landmark (Museum of Islamic Art, Souq Waqif)
       - OR happy travelers with luggage at modern airport
       - OR someone taking photos of Doha skyline
     - **Business Visa**:
       - Business people shaking hands in modern office
       - Professional conference or meeting setting
       - Corporate buildings in Doha's financial district
     - **Transit Visa**:
       - Hamad International Airport terminal (modern and luxurious)
       - Airplane at gate with boarding bridge
       - Comfortable airport lounge or waiting area
     - **Family Visa**:
       - Happy family at airport with luggage
       - Family exploring Qatar together
       - Parents with children in a welcoming setting
     - **Work Visa**:
       - Professional in office environment
       - Construction or development project in Qatar
       - Modern workspace or business district
     - Make image fill the space nicely with rounded corners
     - Add subtle shadow to make image stand out
   - **Information Content** (Right Column):
     - **Detailed Description**:
       - Write 3-4 paragraphs explaining this visa type
       - Who needs it, what it allows, how long it's valid
       - Make it easy to understand, avoid legal jargon
     - **Eligibility Criteria**:
       - Create a list showing who can apply
       - Use checkmark icons for each point
       - Keep points short and clear
     - **Processing Time**:
       - Show time in a colored badge
       - Example: "2-3 Business Days" in a green badge
       - If express options available, mention them
     - **Price Information**:
       - Display starting price clearly
       - Mention "From $XX" if prices vary
       - Add small note about what's included
     - **Apply Now Button**:
       - Large, prominent maroon button
       - Place it at the bottom of content
       - Should stand out as the main action
   - **Visual Consistency**:
     - Keep same layout for all tabs
     - Use same image size and position
     - Maintain consistent spacing
     - Make sure switching tabs feels smooth

3. **Create Requirements Checklist** at `/components/sections/RequirementsChecklist.tsx`:
   - Section heading: "Document Requirements"
   - Use Accordion component for different visa types
   - Each accordion item expands to show:
     - Checklist of required documents with checkmark icons
     - Special notes or important reminders in highlighted boxes
     - Sample document images where helpful (passport, photo specs)
   - Use icons to indicate document types
   - Make it easy to scan and understand

4. **Create Pricing Table** at `/components/sections/PricingTable.tsx`:
   - Section heading: "Pricing & Processing Time"
   - Three pricing tiers displayed as cards:
     - Standard (2-3 days processing)
     - Express (24 hours processing)
     - Super Express (same day processing)
   - Each pricing card shows:
     - Processing time badge at top
     - Price in large text
     - List of included features with checkmarks
     - "Select Plan" button
   - Highlight the Express option as "Most Popular"
   - Use gold accent for the popular choice

5. **Update Services Page** at `/app/services/page.tsx`:
   - Import all service-related components
   - Arrange sections: ServicesHero, ServicesList, RequirementsChecklist, PricingTable
   - Add CTA section at bottom
   - Wrap in Layout

---

## PHASE 5: About Page (With Team & Company Images)

### Tasks:

1. **Create About Hero** at `/components/sections/AboutHero.tsx`:
   - **Background Image Selection**:
     - Use an inspiring image that represents professionalism and teamwork
     - Good options:
       - Team of diverse professionals collaborating in modern office
       - Aerial view of Qatar showing development and progress
       - Handshake or partnership image showing trust
       - Modern office building exterior in Doha
     - Make sure image is bright and welcoming, not dark or intimidating
   - **Image Overlay**:
     - Add a semi-transparent dark layer over the image
     - Not too dark - you should still see the image clearly
     - This helps white text stand out and be readable
   - **Text Content**:
     - Large heading: "About Fast Qatar Visa Center"
     - Subtitle with mission statement (1-2 sentences):
       - Example: "We're committed to making Qatar visa processing simple, fast, and stress-free for travelers worldwide"
     - Keep text centered and easy to read
     - Use white text color for good contrast
   - **Size and Spacing**:
     - Make this hero smaller than the home page hero
     - It should take up about half the screen height
     - Add good padding so text isn't touching edges
   - **Breadcrumb Navigation**:
     - Add small breadcrumb at top: Home > About
     - Helps users know where they are
     - Use subtle white or light gray color

2. **Create Company Story Section** at `/components/sections/CompanyStory.tsx`:
   - **Layout Design**:
     - Split the section into two halves side by side
     - Left side shows a large inspiring image
     - Right side contains text and statistics
     - On mobile, stack image on top, text below
   - **Image Selection for Left Side**:
     - Choose ONE of these image types:
       - Professional team collaborating around a table
       - Modern office space with people working
       - Customer service representative helping someone
       - Qatar skyline representing growth and modernity
     - Image should look warm, professional, and trustworthy
     - Make sure image has good lighting and looks high quality
   - **Text Content on Right Side**:
     - Start with a small label like "Our Story" in gold color
     - Write the company story in 3-4 paragraphs:
       - Paragraph 1: When and why the company was founded
       - Paragraph 2: How you've grown and what makes you different
       - Paragraph 3: Your commitment to customers and service quality
       - Paragraph 4: Your vision for the future
     - Use a warm, friendly but professional tone
     - Make text easy to read with good spacing between paragraphs
   - **Statistics Cards Below Text**:
     - Show 3-4 impressive numbers in small cards
     - Each stat card should have:
       - Large number (like "5+" or "10,000+")
       - Small description below (like "Years in Business" or "Visas Processed")
       - Icon related to the statistic
     - Arrange cards in a grid or row
     - Examples of stats to show:
       - Years of experience
       - Total visas successfully processed
       - Customer satisfaction percentage
       - Countries served
     - Use maroon or gold accent colors for numbers
   - **Visual Balance**:
     - Make sure image and text take roughly equal space
     - Keep generous padding around all elements
     - Image should be vertically centered with text section

3. **Create Values Section** at `/components/sections/Values.tsx`:
   - Section heading: "Our Core Values"
   - Grid of 4-6 value cards
   - Each card includes:
     - Relevant icon
     - Value name (Trust, Speed, Transparency, Excellence, etc.)
     - Brief description
   - Use clean card design with subtle shadows
   - Optional: Add related background images with overlay

4. **Create Team Section (Optional)** at `/components/sections/Team.tsx`:
   - If you want to add team members:
     - Grid of team member cards
     - Each card: Photo, Name, Role, Brief bio
     - Use placeholder professional photos
   - If no team section, skip this component

5. **Update About Page** at `/app/about/page.tsx`:
   - Import and arrange: AboutHero, CompanyStory, Values, (Team if created)
   - Add trust indicators section with certifications or partnerships
   - Include CTA section at bottom
   - Wrap in Layout

---

## PHASE 6: Contact Page (User-Friendly Design)

### Tasks:

1. **Create Contact Hero** at `/components/sections/ContactHero.tsx`:
   - **Background Image**:
     - Use a welcoming, friendly image
     - Good options:
       - Customer service representative with headset, smiling
       - Helping hands or handshake representing support
       - Phone and laptop representing communication
       - Modern communication/contact center
     - Keep image warm and inviting, not cold or corporate
   - **Overlay and Text**:
     - Add semi-transparent overlay for text readability
     - Heading: "Get In Touch"
     - Subtitle: "We're here to help with your Qatar visa questions"
     - OR: "Have questions? Our team is ready to assist you 24/7"
     - Keep it simple and reassuring
   - **Size**:
     - Smaller than main homepage hero
     - About 30-40% of screen height
     - Focus user's attention on the contact form below

2. **Create Contact Form** at `/components/sections/ContactForm.tsx`:
   - **Form Container Design**:
     - White background card with subtle shadow
     - Rounded corners for friendly feel
     - Good padding inside for comfortable spacing
   - **Form Title**:
     - "Send Us a Message" or "How Can We Help?"
     - Place at top of form
   - **Form Fields** (in this order):
     - **Full Name**:
       - Label: "Full Name"
       - Placeholder: "Enter your full name"
       - Required field indicator (red asterisk)
     - **Email Address**:
       - Label: "Email Address"
       - Placeholder: "your.email@example.com"
       - Required, with email validation
     - **Phone Number**:
       - Label: "Phone Number"
       - Placeholder: "+974 XXXX XXXX"
       - Optional or required as you prefer
     - **Visa Type** (Dropdown):
       - Label: "Visa Type"
       - Options: Tourist, Business, Transit, Family, Work, Not Sure
       - Default: "Select visa type"
     - **Your Message**:
       - Label: "Message"
       - Large text area (5-6 lines tall)
       - Placeholder: "Tell us how we can help you..."
       - Required field
   - **Submit Button**:
     - Text: "Send Message" or "Submit"
     - Maroon background, white text
     - Full width of form
     - Show loading spinner when submitting
   - **Success/Error Messages**:
     - After submission show green success message
     - "Thank you! We'll respond within 24 hours"
     - If error, show red message explaining what went wrong
   - **Visual Details**:
     - Use clean, modern input fields
     - Good spacing between fields
     - Clear labels above each field
     - Subtle borders on inputs
     - Focus state: border turns maroon when clicked

3. **Create Contact Info Section** at `/components/sections/ContactInfo.tsx`:
   - **Container Design**:
     - Can be a card or just clean layout
     - Match the styling of contact form
   - **Section Title**:
     - "Contact Information" or "Reach Us Directly"
   - **Contact Details with Icons**:
     - **Email**:
       - Icon: Envelope/mail icon
       - Label: "Email Us"
       - Value: "info@fastqatarvisa.com"
       - Make email clickable (opens email client)
     - **Phone Number**:
       - Icon: Phone icon
       - Label: "Call Us"
       - Value: "+974 XXXX XXXX"
       - Make phone clickable on mobile
     - **WhatsApp** (Optional):
       - Icon: WhatsApp icon
       - Label: "WhatsApp"
       - Value: "+974 XXXX XXXX"
       - Very popular in Qatar region
     - **Working Hours**:
       - Icon: Clock icon
       - Label: "Available"
       - Value: "24/7 - Always Here to Help"
       - OR specific hours if not 24/7
     - **Office Address** (if applicable):
       - Icon: Location pin icon
       - Label: "Office Location"
       - Value: "Doha, Qatar" or specific address
   - **Layout of Info Items**:
     - Stack vertically with good spacing
     - Icon on left, text on right
     - Use maroon or gold for icons
     - Make contact details stand out
   - **Optional Map**:
     - If you have physical office, add Google Maps embed
     - Place below contact details
     - Make it interactive
     - Use rounded corners to match design
   - **Trust Badge** (Optional):
     - Add "24/7 Support Available" badge
     - Use gold color to highlight
     - Place prominently

4. **Create FAQ Accordion** at `/components/sections/FAQ.tsx`:
   - **Section Title**:
     - "Frequently Asked Questions"
     - Subtitle: "Quick answers to common questions"
   - **Accordion Design**:
     - Use expandable accordion component
     - One question visible at a time
     - Click to expand and see answer
     - Smooth animation when opening/closing
   - **10 Essential Questions** (with helpful answers):
     - **Q1: How long does visa processing take?**
       - A: Standard processing is 2-3 business days. Express service available in 24 hours.
     - **Q2: What documents do I need?**
       - A: Passport copy, photo, confirmed hotel booking, and return flight ticket. Full list varies by visa type.
     - **Q3: What payment methods do you accept?**
       - A: We accept all major credit cards, debit cards, and bank transfers.
     - **Q4: Is my information secure?**
       - A: Yes, we use bank-level encryption for all data and payments.
     - **Q5: What if my visa is rejected?**
       - A: We offer a full refund if your application is rejected. Our success rate is 98%.
     - **Q6: Can I track my application?**
       - A: Yes, use your reference number on our Track Application page.
     - **Q7: Do I need to visit your office?**
       - A: No, everything is done online. No office visit required.
     - **Q8: How will I receive my visa?**
       - A: Your approved visa will be emailed to you as a PDF document.
     - **Q9: Can I apply for multiple people?**
       - A: Yes, you can submit multiple applications in one order.
     - **Q10: What if I need help during the process?**
       - A: Our support team is available 24/7 via email, phone, and live chat.
   - **Visual Design**:
     - Clean, easy to read
     - Question in bold, answer in regular text
     - Add plus/minus icon to show expand/collapse state
     - Hover effect on questions
     - Adequate spacing between questions

5. **Update Contact Page** at `/app/contact/page.tsx`:
   - **Layout Structure**:
     - ContactHero at very top (full width)
     - Main content section below with two columns:
       - **Left Column (60% width)**: ContactForm
       - **Right Column (40% width)**: ContactInfo
       - On mobile: Stack form first, then info below
     - **FAQ Section**: Full width below the two columns
     - **CTA Section**: At bottom encouraging users to apply
   - **Spacing**:
     - Good gap between columns
     - Generous padding around all sections
     - Make page feel open and breathable
   - **Overall Feel**:
     - Welcoming and accessible
     - Easy to use and understand
     - Professional but friendly

---

## PHASE 7: Track Application Page (Status Tracking)

### Tasks:

1. **Create Track Hero** at `/components/sections/TrackHero.tsx`:
   - **Simple Clean Design** (no background image needed):
     - Light colored background (light gray or subtle gradient)
     - OR small background image related to tracking/progress
   - **Text Content**:
     - Heading: "Track Your Application"
     - Subtitle: "Enter your reference number to check your visa status"
     - Keep it simple and informative
   - **Size**:
     - Smaller hero, about 25-30% of screen
     - Just enough to introduce the page

2. **Create Tracking Form** at `/components/sections/TrackingForm.tsx`:
   - **Card Container**:
     - White card with rounded corners
     - Centered on page
     - Not too wide (about half screen width on desktop)
     - Subtle shadow for depth
   - **Icon or Illustration** (Optional):
     - Small search or tracking icon at top of card
     - Can be magnifying glass or document with checkmark
     - Use maroon or gold color
   - **Form Fields**:
     - **Reference Number Input**:
       - Label: "Reference Number"
       - Placeholder: "Enter your reference number (e.g., QV-12345-2024)"
       - Large, easy to read input field
       - Required field
     - **Email Address Input**:
       - Label: "Email Address"
       - Placeholder: "Enter your email address"
       - For verification purposes
       - Required field
   - **Helper Text**:
     - Below inputs, add small helpful text
     - "Reference number was sent to your email after application"
     - Use gray color, smaller font
   - **Track Button**:
     - Text: "Track Status" or "Check Status"
     - Maroon background, white text
     - Full width of form
     - Large and prominent
     - Loading spinner shows when checking
   - **Can't Find Reference Section**:
     - Small link below button
     - "Can't find your reference number?"
     - Opens help dialog or scrolls to help section

3. **Create Status Display** at `/components/sections/StatusDisplay.tsx`:
   - **Show This After Tracking** (replaces or appears below form):
     - Only appears after user successfully tracks application
   - **Application Details Card**:
     - **Header Section**:
       - Title: "Application Status"
       - Reference number displayed prominently
       - Application date
     - **Applicant Information**:
       - Full name
       - Visa type applied for
       - Display in clean, organized format
   - **Status Progress Timeline**:
     - Visual stepper/timeline showing 4 stages:
       - **Stage 1: Application Received** ✓
         - Icon: Document received
         - Color: Green (completed)
         - Date: When received
       - **Stage 2: Under Review** (current example)
         - Icon: Magnifying glass or person reviewing
         - Color: Gold (current/in progress)
         - Pulsing or animated to show activity
       - **Stage 3: Approved** (pending)
         - Icon: Checkmark or stamp
         - Color: Gray (not yet complete)
         - Empty circle or outline
       - **Stage 4: Visa Dispatched** (pending)
         - Icon: Email or send icon
         - Color: Gray (not yet complete)
         - Empty circle or outline
     - **Timeline Design**:
       - Vertical timeline on mobile
       - Horizontal timeline on desktop
       - Connecting line between stages
       - Completed stages: solid green line
       - Current stage: gold/yellow line
       - Future stages: dotted gray line
   - **Current Status Badge**:
     - Large badge showing current status
     - Example: "UNDER REVIEW"
     - Use appropriate color (green for approved, gold for processing, etc.)
     - Placed prominently
   - **Estimated Completion**:
     - Show estimated date when visa will be ready
     - Example: "Estimated completion: Jan 25, 2024"
     - Use calendar icon
   - **Action Buttons**:
     - "Download Receipt" button (if applicable)
     - "Print Status" button
     - "Contact Support" button if there's an issue
   - **Visual Design**:
     - Clean, professional layout
     - Good use of spacing
     - Clear visual hierarchy
     - Easy to understand at a glance

4. **Create Help Section** at `/components/sections/TrackingHelp.tsx`:
   - **Section Title**:
     - "Need Help?"
   - **Common Tracking Questions**:
     - Use small FAQ format or info cards
     - **"Where is my reference number?"**
       - Answer: Check your email confirmation or receipt
     - **"My status hasn't updated"**
       - Answer: Processing can take 24-48 hours. If longer, contact support
     - **"What if I entered wrong information?"**
       - Answer: Link to contact support
   - **Contact Support Card**:
     - Prominent card with support options
     - "Can't find your application? We're here to help"
     - Email address
     - Phone number
     - Live chat link (if available)
     - Use different background color to stand out
   - **Tips Section** (Optional):
     - Small tips box with helpful information
     - "Tip: Save your reference number for future tracking"
     - "Tip: Check spam folder if you can't find our email"

5. **Update Track Page** at `/app/track/page.tsx`:
   - **Layout Structure**:
     - TrackHero at top
     - TrackingForm in center, prominently displayed
     - StatusDisplay shows conditionally (only after successful tracking)
     - TrackingHelp section at bottom
   - **Responsive Design**:
     - On mobile, make form full width with padding
     - Timeline should stack vertically on mobile
     - All text should remain readable
   - **User Flow**:
     - User arrives → sees form
     - User enters info → clicks track
     - Loading state shows briefly
     - Status display appears with smooth animation
     - Help section always visible at bottom
   - **Overall Feel**:
     - Efficient and straightforward
     - No unnecessary clutter
     - Focus on the tracking functionality
     - Professional and trustworthy

---

## PHASE 8: Styling, Responsiveness & Polish

### Tasks:

1. **Responsive Design Check**:
   - Test every page on mobile (375px), tablet (768px), and desktop (1024px+)
   - Ensure navigation menu works on mobile with hamburger icon
   - Check that all grids collapse properly on smaller screens
   - Verify images resize and don't overflow
   - Test forms on mobile devices for usability
   - Make sure buttons are touch-friendly (min 44px height)

2. **Image Optimization - Making Images Load Fast**:
   - **Always Use Next.js Image Component**:
     - Never use regular HTML img tags
     - Next.js Image component automatically optimizes images
     - Makes images smaller in file size
     - Serves the right size image for each device
   - **Setting Image Dimensions**:
     - For images with known size: set width and height
     - Example: width={800} height={600}
     - This prevents page from jumping around while loading
     - For full-width images: use fill prop with proper container
   - **Image Loading Strategy**:
     - **Hero images** (above the fold):
       - Add priority={true} property
       - Makes them load first, immediately
       - Users see them right away
     - **Below-fold images** (further down page):
       - Add loading="lazy" property
       - Only loads when user scrolls near them
       - Saves bandwidth and speeds up initial load
   - **Alt Text for Accessibility**:
     - Every image must have descriptive alt text
     - Describe what's in the image
     - Helps screen readers for visually impaired users
     - Example: alt="Professional team collaborating in modern office"
     - Don't just say alt="image" - be specific
   - **Object Fit Property**:
     - **object-fit: cover** - Use for most images
       - Fills the container, may crop edges
       - Keeps aspect ratio, no distortion
       - Good for backgrounds and card images
     - **object-fit: contain** - Use for logos or important details
       - Shows full image, may have empty space
       - Never crops, never distorts
   - **Placeholder Blur Effect**:
     - Add placeholder="blur" to images
     - Shows blurry preview while loading
     - Makes loading feel faster and smoother
     - Better user experience
   - **Image Format**:
     - Next.js automatically converts to WebP format
     - WebP is smaller and faster than JPEG/PNG
     - No action needed on your part - it's automatic
   - **Practical Tips**:
     - Don't use images larger than needed
     - If showing 400px wide, don't use 4000px image
     - Compress images before uploading if very large
     - Test page speed and image loading on slow connections

3. **Animations & Transitions**:
   - Add hover states to all interactive elements
   - Smooth transitions for color and transform changes
   - Consider adding fade-in animations for sections on scroll (use Intersection Observer)
   - Button loading states with spinner
   - Smooth page transitions
   - Keep animations subtle and professional (not too flashy)

4. **Consistent Spacing**:
   - Use Tailwind spacing scale consistently (px-4, py-8, etc.)
   - Section padding: py-16 or py-20 on desktop, py-12 on mobile
   - Container max-width: 1280px or 1440px
   - Consistent gaps in grids: gap-6 or gap-8

5. **Typography Refinement**:
   - Set clear heading hierarchy (h1, h2, h3)
   - Heading sizes: h1 (3-4rem), h2 (2.5rem), h3 (1.5rem)
   - Body text size: 16px (base)
   - Line height for readability: 1.6-1.8
   - Use font weights appropriately (400 for body, 600 for headings)
   - Ensure good contrast ratios for accessibility

6. **Color Consistency**:
   - Use maroon for primary actions and headings
   - Use gold for accents and highlights
   - Use neutral grays for body text
   - Ensure sufficient contrast for text readability
   - Hover states should use darker/lighter shades
   - Disabled states should be clearly visible

7. **Icons Implementation**:
   - Replace all placeholder text with actual lucide-react icons
   - Ensure icon sizes are consistent (typically 24px or 1.5rem)
   - Use appropriate icons for each feature/service
   - Icons should match the overall design aesthetic
   - Add proper aria-labels for accessibility

---

## PHASE 9: Accessibility & SEO

### Tasks:

1. **Accessibility Improvements**:
   - Add proper alt text to all images
   - Ensure proper heading hierarchy (h1 -> h2 -> h3)
   - Use semantic HTML elements
   - Add ARIA labels where needed
   - Ensure keyboard navigation works everywhere
   - Test with screen reader (basic check)
   - Add focus visible states to all interactive elements
   - Ensure color contrast meets WCAG AA standards
   - Add skip-to-content link for keyboard users

2. **SEO Optimization**:
   - Add metadata to each page (title, description)
   - Use descriptive page titles: "Tourist Visa Services - Fast Qatar Visa"
   - Write compelling meta descriptions (150-160 characters)
   - Add Open Graph tags for social sharing
   - Use structured data markup for organization/services (optional)
   - Ensure URLs are clean and descriptive
   - Add favicon in /public folder

3. **Performance Optimization**:
   - Use Next.js Image component everywhere
   - Implement lazy loading for below-fold content
   - Minimize use of large dependencies
   - Ensure fast page load times
   - Test on slow connections
   - Use loading skeletons where appropriate

---

## PHASE 10: Content & Final Touches

### Tasks:

1. **Content Writing**:
   - Replace all placeholder text with realistic visa-related content
   - Write clear, concise descriptions for each visa type
   - Create helpful FAQ answers based on common visa questions
   - Write trust-building content that emphasizes security and reliability
   - Ensure professional tone throughout
   - Proofread all content for grammar and clarity

2. **Realistic Data**:
   - Add realistic pricing (research typical visa service costs)
   - Include actual processing times
   - List real document requirements for Qatar visas
   - Add genuine-sounding testimonials (or mark as examples)

3. **Create Reusable Components**:
   - Extract repeated patterns into components:
     - VisaCard component for displaying visa types
     - FeatureCard for features/benefits
     - StepCard for process steps
     - StatCard for displaying statistics
   - This makes the code more maintainable

4. **Error Handling**:
   - Add proper error states for forms
   - Handle failed form submissions gracefully
   - Show helpful error messages
   - Add loading states for async operations

5. **Legal Pages (Optional but Recommended)**:
   - Create Privacy Policy page
   - Create Terms of Service page
   - Add links in footer
   - Keep content simple but comprehensive

---

## Design Guidelines Throughout Development

### Visual Design Principles:

1. **Color Usage**:
   - Primary (Qatar Maroon #8B1538): Main buttons, headings, key accents
   - Secondary (Gold #D4AF37): Highlights, hover states, badges, borders
   - Success: Green for approved/completed states
   - Warning: Yellow for pending states
   - Error: Red for rejections/errors
   - Neutral: Slate/Gray for text, borders, backgrounds
   - Always maintain sufficient contrast for readability

2. **Typography Guidelines**:
   - Use system fonts or Inter/Geist for clean, modern look
   - Headings: Bold, generous sizing, maroon or dark gray
   - Body text: Regular weight, 16px base size, comfortable line-height
   - Avoid all-caps except for small labels
   - Use letter-spacing carefully

3. **Spacing Philosophy**:
   - Generous whitespace between sections
   - Consistent internal padding in cards and components
   - Section spacing: py-16 to py-24 on desktop
   - Container padding: px-4 on mobile, px-6 on tablet, px-8 on desktop
   - Grid gaps: gap-6 to gap-8

4. **Component Styling**:
   - Rounded corners: rounded-lg (0.5rem) to rounded-xl (0.75rem)
   - Subtle shadows on cards: shadow-sm or shadow-md
   - Borders: Use sparingly, 1px width, light gray
   - Hover effects: Slight lift (translateY), border color change, shadow increase
   - Active states: Slightly pressed appearance

5. **Image Treatment - Making Images Look Professional**:
   - **Text Overlay on Images**:
     - When you put text on top of images, always add a dark overlay
     - The overlay is a semi-transparent dark layer between image and text
     - **Overlay Darkness**:
       - For bright images: use 40-50% dark overlay
       - For medium images: use 50-60% dark overlay
       - For already dark images: might need 30-40%
       - Test to ensure text is always easy to read
     - **How to Test Readability**:
       - Squint your eyes - can you still read the text?
       - View on mobile - is it still clear?
       - Check in sunlight conditions
   - **Object-Fit for Different Situations**:
     - **Use object-fit: cover** when:
       - Background images in hero sections
       - Card images where edges can be cropped
       - Photo grids where uniformity matters
       - Any decorative images
     - **Use object-fit: contain** when:
       - Logos that must show completely
       - Infographics or charts
       - Product images that need all details visible
       - When aspect ratio is critical
   - **Aspect Ratios to Keep Consistent**:
     - **Hero sections**: Usually 16:9 or 21:9 (wide)
     - **Service cards**: 4:3 or 16:9
     - **Team photos**: 1:1 (square) or 4:5 (portrait)
     - **Testimonial avatars**: 1:1 (perfect circle)
     - Keep ratios same within each section for visual harmony
   - **Blur and Gradient Overlays**:
     - **Blur Effect**:
       - Slightly blur background images behind text
       - Helps text stand out more
       - Don't blur too much - image should still be recognizable
     - **Gradient Overlays**:
       - Instead of solid dark overlay, use gradient
       - Darker at bottom where text is
       - Lighter at top showing more of image
       - Looks more elegant and modern
     - **Example Gradient**:
       - Top: 20% dark
       - Bottom: 60% dark
       - Smooth transition between
   - **Image Quality Guidelines**:
     - All images should be sharp and clear
     - No pixelated or blurry images
     - Proper lighting - not too dark or washed out
     - Professional looking, not amateur selfies
     - Consistent color grading across similar images
   - **Common Image Mistakes to Avoid**:
     - Don't stretch or squish images - keeps original proportions
     - Don't use watermarked stock photos
     - Don't mix photo styles (black & white with color randomly)
     - Don't use images with too much text already in them
     - Don't use low-resolution images
   - **Adding Subtle Effects**:
     - Rounded corners: makes images friendly (8-12px radius)
     - Shadows: adds depth (subtle, not too dark)
     - Borders: only if it enhances the design (1-2px max)
     - Hover effects: slight zoom or brightness change

---

## Implementation Notes for Claude Code:

### Best Practices:

1. **Build Incrementally**: Complete each phase fully before moving to the next. Test each component after creation.

2. **Component Structure**: Keep components focused on single responsibility. Extract reusable patterns early.

3. **TypeScript Usage**: Always use proper typing for props, state, and function parameters.

4. **Next.js Conventions**: 
   - Use 'use client' directive only when needed (forms, state, interactivity)
   - Keep page.tsx files minimal - they should mostly import and arrange components
   - Use Server Components by default for better performance

5. **Styling Approach**:
   - Use Tailwind utility classes primarily
   - Use shadcn component defaults - customize only when necessary
   - Keep custom CSS minimal
   - Use Tailwind's responsive prefixes (sm:, md:, lg:, xl:)

6. **Image Handling**:
   - Always use Next.js Image component
   - Import images from /lib/images.ts constants
   - Set explicit width and height where possible
   - Use fill prop for unknown dimensions with proper object-fit

7. **Form Handling**:
   - Use shadcn Form components with react-hook-form
   - Implement proper validation
   - Show clear error messages
   - Provide visual feedback for all states

8. **Code Organization**:
   - Keep component files focused and under 300 lines
   - Use clear, descriptive names
   - Add JSDoc comments for complex components
   - Group related components in folders

9. **Testing As You Go**:
   - Check mobile view after each component
   - Test forms for validation and submission
   - Verify all links work
   - Check image loading and optimization
   - Test keyboard navigation

10. **Performance Mindset**:
    - Lazy load components below fold
    - Use dynamic imports for heavy components
    - Optimize images aggressively
    - Minimize client-side JavaScript

---

## Expected Final File Structure:

```
fast-qatar-visa/
├── app/
│   ├── layout.tsx (root layout with metadata)
│   ├── page.tsx (home page - imports all home sections)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── track/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTASection.tsx
│   │   ├── ServicesHero.tsx
│   │   ├── ServicesList.tsx
│   │   ├── RequirementsChecklist.tsx
│   │   ├── PricingTable.tsx
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
│   └── ui/ (all shadcn components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── form.tsx
│       ├── accordion.tsx
│       ├── tabs.tsx
│       └── ... (other shadcn components)
│
├── lib/
│   ├── utils.ts (cn utility and helpers)
│   └── images.ts (centralized image URLs)
│
├── public/
│   └── images/ (any local images, favicon)
│
├── next.config.js (with image domain configuration)
├── tailwind.config.ts (with custom colors)
└── package.json
```

---

## Quality Checklist Before Completion:

### Visual Quality:
- [ ] All pages look professional and polished
- [ ] Consistent spacing throughout
- [ ] Images load properly and look good
- [ ] Colors are used consistently
- [ ] Typography hierarchy is clear
- [ ] Hover states work on all interactive elements

### Functionality:
- [ ] All navigation links work
- [ ] Forms validate properly
- [ ] Mobile menu opens and closes
- [ ] Responsive design works on all screen sizes
- [ ] Images are optimized and load quickly
- [ ] No console errors in browser

### Content:
- [ ] All placeholder text is replaced with realistic content
- [ ] No lorem ipsum remaining
- [ ] All images have alt text
- [ ] Contact information is present (even if placeholder)
- [ ] FAQ answers are helpful and clear

### Accessibility:
- [ ] Proper heading hierarchy
- [ ] Good color contrast
- [ ] Keyboard navigation works
- [ ] Forms have proper labels
- [ ] Images have descriptive alt text

### Code Quality:
- [ ] No TypeScript errors
- [ ] Components are properly organized
- [ ] Code is readable and well-commented
- [ ] No unused imports or variables
- [ ] Following Next.js best practices

---

## Ready to Build!

This guide provides a comprehensive roadmap for building the Fast Qatar Visa Center website. Follow each phase sequentially, test as you go, and refer back to the design guidelines for consistency. The end result will be a professional, user-friendly visa processing website with excellent UI/UX.

**Important Reminders:**
- Start with Phase 0 to configure Next.js properly for images
- Use the images.ts file to manage all image URLs centrally
- Test responsiveness after completing each major section
- Keep the Qatar color theme (maroon and gold) consistent throughout
- Focus on trust-building through professional design and clear information
- Prioritize user experience in forms and navigation

Good luck with the build!
