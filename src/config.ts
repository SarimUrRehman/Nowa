/**
 * ==========================================================================================
 * NOUWADETAIL CONFIGURATION & OWNER EDITING GUIDE
 * ==========================================================================================
 * 
 * Central Oregon Mobile Auto Detailing (Redmond • Bend • Sisters • Surrounding Areas)
 * 
 * HOW TO EDIT THIS SITE:
 * 1. Business Info & Contact:
 *    Update PHONE_PLACEHOLDER, EMAIL_PLACEHOLDER, HOURS_PLACEHOLDER below.
 * 
 * 2. TikTok Link:
 *    Update TIKTOK_URL if your handle changes.
 * 
 * 3. Before & After Photos:
 *    By default, high-fidelity SVG/CSS placeholders ("Before photo coming soon" / "After photo coming soon")
 *    are displayed so the site looks stunning right out of the box with zero broken images.
 *    To use your own real photos:
 *      a. Place your optimized .webp or .jpg photos in `/public/images/` or `./images/`
 *         (Recommended size: 1200x800px or 4:3 / 16:9 aspect ratio, < 300KB each).
 *      b. Update `beforeSrc` and `afterSrc` fields in `BEFORE_AFTER_GALLERY` below.
 *      c. Set `hasRealImage: true` when you have uploaded the file.
 * 
 * 4. Testimonials:
 *    Replace the marked placeholder customer reviews in `TESTIMONIALS` with real quotes once received.
 * 
 * 5. Services:
 *    Edit, reorder, or add descriptions to the 8 services in `SERVICES_LIST`.
 * ==========================================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  quoteNote: string;
  iconName: 'interior' | 'exterior' | 'full' | 'vacuum' | 'upholstery' | 'console' | 'windows' | 'wheels';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  vehicleType: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
  hasRealImage: boolean;
  category: 'paint' | 'interior' | 'wheels';
}

export interface TestimonialItem {
  id: string;
  author: string;
  vehicle: string;
  location: string;
  feedback: string;
  isPlaceholder: boolean;
}

export const BUSINESS_CONFIG = {
  // Brand Names & Copy
  brandName: 'NouwaDetail',
  legalName: 'NouwaDetailing FT',
  tagline: 'Mobile Auto Detailing. Interior & Exterior Cleaning.',
  heroHeadline: 'We Bring the Shine to You.',
  heroSubheadline: 'Mobile auto detailing, interior and exterior cleaning across Redmond, Bend and Central Oregon.',
  ctaText: 'Book your detail today!',
  serviceAreaLabel: 'Redmond • Bend • Central Oregon (we come to you)',
  
  // Social & Channels
  tiktokHandle: '@nouwa.detailingft',
  tiktokUrl: 'https://www.tiktok.com/@nouwa.detailingft',
  
  // Contact Placeholders (Clearly marked for easy editing)
  phonePlaceholder: '(541) 000-0000',
  phoneTel: 'tel:5410000000',
  phoneSms: 'sms:5410000000',
  emailPlaceholder: 'info@yourdomain.com',
  emailMailto: 'mailto:info@yourdomain.com',
  hoursPlaceholder: 'Hours: Mon–Sat 8 AM–6 PM • Sun Closed',
  
  // Service Areas
  citiesServed: ['Redmond', 'Bend', 'Central Oregon'],
  locationCoverageDesc: 'Serving residential driveways, corporate offices, and private properties across Deschutes County.',
  
  // Brand Palette
  colors: {
    black: '#0A0A0A',
    graphite: '#141414',
    graphiteCard: '#1C1C1E',
    crimson: '#D91E2A',
    silver: '#A8ADB5',
    white: '#FFFFFF',
    lightSection: '#F4F4F5'
  }
};

/**
 * 8 Editable Services
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'interior-detailing',
    title: 'Interior Detailing',
    shortDesc: 'Deep sanitize, steam cleaning, stain treatment, and UV protection for a fresh cabin.',
    quoteNote: 'Request a quote for your vehicle size',
    iconName: 'interior'
  },
  {
    id: 'exterior-wash-hand-dry',
    title: 'Exterior Wash & Hand Dry',
    shortDesc: 'Gentle two-bucket hand wash, streak-free rinse, micro-fiber drying, and paint conditioning.',
    quoteNote: 'Request a quote for coupe, truck or SUV',
    iconName: 'exterior'
  },
  {
    id: 'full-detail',
    title: 'Full Interior & Exterior Detail',
    shortDesc: 'The complete bumper-to-bumper transformation: deep clean cabin plus high-gloss exterior shine.',
    quoteNote: 'Request a quote for complete vehicle package',
    iconName: 'full'
  },
  {
    id: 'vacuum-carpet-cleaning',
    title: 'Vacuum & Carpet Cleaning',
    shortDesc: 'High-power crevice vacuuming, high-pressure extraction, and pet hair & pine needle removal.',
    quoteNote: 'Request a quote based on interior condition',
    iconName: 'vacuum'
  },
  {
    id: 'seat-upholstery-cleaning',
    title: 'Seat & Upholstery Cleaning',
    shortDesc: 'Deep hot-water shampoo for fabric seats or gentle cleansing and conditioning for leather.',
    quoteNote: 'Request a quote for leather or fabric seats',
    iconName: 'upholstery'
  },
  {
    id: 'dashboard-console-door-panels',
    title: 'Dashboard, Console & Door Panels',
    shortDesc: 'Meticulous cleaning of vents, cupholders, buttons, trim, and non-greasy matte UV finish.',
    quoteNote: 'Request a quote for custom interior details',
    iconName: 'console'
  },
  {
    id: 'window-glass-cleaning',
    title: 'Window & Glass Cleaning',
    shortDesc: 'Streak-free clarity inside and out, water spot removal, and hydrophobic glass treatment.',
    quoteNote: 'Request a quote with exterior package',
    iconName: 'windows'
  },
  {
    id: 'wheel-tire-cleaning',
    title: 'Wheel & Tire Cleaning',
    shortDesc: 'Brake dust removal, acid-free wheel barrel cleansing, tire degreasing, and satin tire dressing.',
    quoteNote: 'Request a quote for specialized wheel finishes',
    iconName: 'wheels'
  }
];

/**
 * 6 Benefit Points
 */
export const WHY_CHOOSE_BENEFITS = [
  {
    title: 'We Come To You',
    description: 'Home, office, or worksite—enjoy professional detailing while you work, relax, or spend time with family.'
  },
  {
    title: 'Interior & Exterior in One Visit',
    description: 'Complete bumper-to-bumper transformation so your vehicle looks, feels, and smells brand new.'
  },
  {
    title: 'Meticulous Attention to Detail',
    description: 'We treat every crevice, stitch, air vent, and wheel spoke with uncompromising dedication.'
  },
  {
    title: 'Flexible Scheduling',
    description: 'Convenient weekday and weekend appointment windows designed to fit around your busy schedule.'
  },
  {
    title: 'Professional Quality Products',
    description: 'Safe, pH-neutral soaps, pro-grade interior conditioners, and ceramic paint enhancers.'
  },
  {
    title: 'Seamless, Easy Booking',
    description: 'Fast online quote requests, transparent communication, and rapid text or call response times.'
  }
];

/**
 * 3-Step How It Works Mini-Row
 */
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Book',
    description: 'Select your services, tell us your vehicle type, and choose your preferred date online or by phone.'
  },
  {
    step: '02',
    title: 'We Arrive',
    description: 'Our fully equipped mobile detailing unit pulls directly up to your driveway or workplace with all tools ready.'
  },
  {
    step: '03',
    title: 'Enjoy Your Clean Car',
    description: 'Inspect the showroom-level shine, take back your pristine cabin, and drive with total confidence.'
  }
];

/**
 * Results / Before & After Slots
 * (Pre-configured with SVG/CSS placeholders ready for owner's real photos)
 */
export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [
  {
    id: 'result-1',
    title: 'Exterior Paint Shine & Water Beading',
    vehicleType: 'High-Gloss Paint Restoration',
    description: 'Removed road grime, pine sap, and winter salt; restored deep reflection and silky gloss.',
    beforeLabel: 'Before photo coming soon',
    afterLabel: 'After photo coming soon',
    category: 'paint',
    hasRealImage: false,
    beforeSrc: './images/before-1.webp',
    afterSrc: './images/after-1.webp'
  },
  {
    id: 'result-2',
    title: 'Deep Carpet & Upholstery Extraction',
    vehicleType: 'Cabin & Fabric Revitalization',
    description: 'Extracted embedded dirt, coffee stains, and pet hair, returning seats to like-new freshness.',
    beforeLabel: 'Before photo coming soon',
    afterLabel: 'After photo coming soon',
    category: 'interior',
    hasRealImage: false,
    beforeSrc: './images/before-2.webp',
    afterSrc: './images/after-2.webp'
  },
  {
    id: 'result-3',
    title: 'Wheel Barrels & Brake Dust Elimination',
    vehicleType: 'Wheel & Tire Treatment',
    description: 'Eliminated stubborn baked-on brake dust, brightened alloy rims, and coated tires in deep satin black.',
    beforeLabel: 'Before photo coming soon',
    afterLabel: 'After photo coming soon',
    category: 'wheels',
    hasRealImage: false,
    beforeSrc: './images/before-3.webp',
    afterSrc: './images/after-3.webp'
  }
];

/**
 * 3 Placeholder Testimonial Cards
 * (Clearly marked for the business owner to update with real client reviews)
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Customer Review Placeholder #1',
    vehicle: 'Truck / SUV Detail',
    location: 'Redmond, OR',
    feedback: 'NouwaDetail came right to my driveway in Redmond. The interior looks and smells like the day I drove it off the dealership lot. Amazing attention to every nook and cup holder!',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    author: 'Customer Review Placeholder #2',
    vehicle: 'Daily Commuter Sedan',
    location: 'Bend, OR',
    feedback: 'Super convenient having them detail my car while I worked from home in Bend. The exterior paint has an incredible gloss reflection and the rims are spotless.',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    author: 'Customer Review Placeholder #3',
    vehicle: 'Family Crossover',
    location: 'Central Oregon',
    feedback: 'Having kids and dogs usually wrecks the backseats. NouwaDetail took care of all the dog hair, sand from the trails, and dried spills. Highly recommend!',
    isPlaceholder: true
  }
];
