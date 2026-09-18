/**
 * English copy — the default language and the reference shape for every other
 * translation. Tokens in {curly braces} are filled in at render time:
 * {company} → company name, {years} → years of experience, {year} → current
 * year, and a few section-specific values noted next to each string.
 */
export const en = {
  meta: {
    title: 'Construction & Painting Company in Plano, TX | {company}',
    description:
      '{company}: {years}+ years of experience in construction, remodeling, and interior & exterior painting for homes and businesses in Plano, TX and the DFW area. Free estimates.',
    privacyTitle: 'Privacy Policy | {company}',
    termsTitle: 'Terms of Service | {company}',
  },

  common: {
    skipToContent: 'Skip to main content',
    getEstimate: 'Get a Free Estimate',
    close: 'Close',
    /** {network} → social network name */
    socialNotSet: '{network} — link coming soon',
    newTab: '(opens in a new tab)',
    /** {phone} → phone number */
    call: 'Call {phone}',
    whatsapp: 'Message us on WhatsApp',
    /** Pre-filled first message in WhatsApp */
    whatsappMessage: "Hi {company}! I'd like to request a free estimate.",
  },

  language: {
    label: 'Language',
    en: 'English',
    es: 'Español',
  },

  nav: {
    label: 'Main navigation',
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    serviceAreas: 'Service Areas',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeLink: '{company} — home',
  },

  hero: {
    badge: 'Proudly Serving Plano, TX & Surrounding Areas',
    titleLead: 'Quality Construction & Painting,',
    titleAccent: 'Built to Last.',
    text: 'Professional construction, remodeling, and interior & exterior painting services for homes and businesses in Plano, Texas and surrounding areas.',
    primaryCta: 'Get a Free Estimate',
    secondaryCta: 'View Our Services',
    imageAlt: 'Home with freshly painted white brick, stone accents, and dark garage doors in Frisco, Texas',
    highlightsLabel: 'What we do',
    highlights: [
      '{years}+ Years of Experience',
      'Interior & Exterior Painting',
      'Remodeling & Drywall',
      'Residential & Commercial',
    ],
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Our Services',
    subtitle: 'Professional workmanship for every project, from preparation to the final finish.',
    learnMore: 'Learn More',
    scopeTitle: 'What this service can include',
    scopeNote: "Every project is different — we'll confirm the exact scope with you during your consultation.",
    dialogCta: 'Request an Estimate for This Service',
    items: {
      interior: {
        title: 'Interior Painting',
        description: 'Transform interior spaces with clean, professional painting and detailed finishing.',
        details:
          'From a single accent wall to a whole-home repaint, interior painting starts with careful preparation so the finish looks smooth, even, and clean.',
        scope: [
          'Walls, ceilings, and accent walls',
          'Patching, sanding, and surface preparation',
          'Doors, trim, and baseboards',
          'Protecting floors and furnishings',
          'Cleanup once the work is complete',
        ],
        imageAlt: 'Office with walls and built-in cabinets painted sage green',
      },
      exterior: {
        title: 'Exterior Painting',
        description: 'Protect and refresh your property with durable exterior painting solutions.',
        details:
          "Exterior painting helps protect your property from the Texas sun and weather while giving it a fresh, well-kept look.",
        scope: [
          'Siding, stucco, and brick surfaces',
          'Fascia, soffits, and exterior trim',
          'Front doors, shutters, and garage doors',
          'Cleaning, scraping, and caulking before painting',
          'Paint and color selection guidance',
        ],
        imageAlt: 'Two-story home with freshly painted white brick and dark garage doors',
      },
      residential: {
        title: 'Residential Construction',
        description: "Construction and improvement services designed around your home's needs.",
        details:
          'Construction and improvement work planned around how you live — whether you are adding space, rebuilding, or upgrading parts of your home.',
        scope: [
          'Home additions and structural improvements',
          'Framing and interior build-outs',
          'Patios, porches, and outdoor living areas',
          'Coordination of finishing work',
          'Clear scope and project planning',
        ],
        imageAlt: 'Crew framing a new garage roof on a home in Celina, Texas',
      },
      commercial: {
        title: 'Commercial Construction',
        description: 'Professional construction and improvement services for commercial properties.',
        details:
          'Construction and improvement services for offices, retail spaces, and other commercial properties, scheduled with your business operations in mind.',
        scope: [
          'Tenant improvements and interior build-outs',
          'Commercial painting and finishing',
          'Drywall, framing, and ceiling work',
          'Repairs and property updates',
          'Scheduling around business hours when possible',
        ],
        imageAlt: 'Crew on a boom lift working on the exterior of a commercial building',
      },
      remodeling: {
        title: 'Remodeling',
        description: 'Upgrade kitchens, bathrooms, living spaces, and other areas with professional remodeling.',
        details:
          'Remodeling projects that update the rooms you use most, with attention to layout, materials, and the finishing details.',
        scope: [
          'Kitchen remodeling',
          'Bathroom remodeling',
          'Living areas and bedrooms',
          'Flooring, trim, and finish updates',
          'Painting and final touches',
        ],
        imageAlt: 'Remodeled kitchen with white shaker cabinets and butcher-block countertops',
      },
      drywall: {
        title: 'Drywall & Wall Repair',
        description: 'Repair damaged walls, install drywall, and prepare surfaces for a smooth finish.',
        details:
          'Drywall installation and repairs that leave walls and ceilings smooth and ready for paint — from small patches to full rooms.',
        scope: [
          'New drywall installation',
          'Holes, cracks, and water-damage repair',
          'Taping, mudding, and sanding',
          'Texture matching and wall repair',
          'Surface preparation for painting',
        ],
        imageAlt: 'Hands holding a drywall knife and applying joint compound to a wall',
      },
      cabinets: {
        title: 'Cabinet & Trim Painting',
        description: 'Refresh cabinets, doors, trim, molding, and other detailed surfaces.',
        details:
          'Detailed painting for cabinets, doors, trim, and molding — the surfaces that make a finished room feel complete.',
        scope: [
          'Kitchen and bathroom cabinets',
          'Interior doors and door frames',
          'Trim, baseboards, and crown molding',
          'Ceilings and hard-to-reach areas',
          'Cleaning, sanding, and priming',
        ],
        imageAlt: 'Kitchen cabinets painted white with dark granite countertops',
      },
      renovations: {
        title: 'General Renovations',
        description:
          'Flexible renovation services for projects that require multiple construction and finishing solutions.',
        details:
          'Renovation work for projects that combine several trades, managed as one project from demolition to the final coat of paint.',
        scope: [
          'Multi-room and whole-home renovations',
          'Demolition and rebuild work',
          'Drywall, painting, and finishing',
          'Repairs before selling or moving in',
          'Property improvements for owners and managers',
        ],
        imageAlt: 'Remodeled living room with gray walls, a painted brick fireplace, and new flooring',
      },
    },
  },

  whyUs: {
    eyebrow: 'Why Choose Us',
    title: 'Why Choose {company}?',
    intro:
      "Hiring a contractor means trusting someone with your property. Here's what you can expect when you work with our team.",
    imageAlt: 'Our crew working on a roof, replacing siding next to a chimney',
    items: {
      experience: {
        title: '{years}+ Years of Experience',
        text: 'Decades of hands-on work in painting, remodeling, and construction go into every project.',
      },
      quality: {
        title: 'Quality Craftsmanship',
        text: 'We focus on careful preparation, precise application, and clean finishing.',
      },
      detail: {
        title: 'Attention to Detail',
        text: 'Every project receives attention to the details that make a finished space look professional.',
      },
      reliable: {
        title: 'Reliable Service',
        text: 'Clear communication and organized project execution from start to finish.',
      },
      versatile: {
        title: 'Residential & Commercial',
        text: 'Solutions for homeowners, property owners, and businesses.',
      },
      local: {
        title: 'Local Service',
        text: 'Proudly serving Plano and communities throughout the surrounding DFW area.',
      },
    },
  },

  about: {
    eyebrow: 'About Us',
    title: 'Built Around Quality. Finished With Care.',
    paragraphs: [
      'With more than {years} years of experience, {company} provides construction, remodeling, and painting services for residential and commercial customers in Plano, Texas and the surrounding Dallas–Fort Worth area.',
      "Whether you're refreshing a single room, updating the outside of your home, or planning improvements to a commercial space, our approach stays the same: careful preparation, quality workmanship, and a clean, professional finish.",
    ],
    storyPlaceholder:
      "[COMPANY STORY — Add a few sentences about how the business started, your team's background, and what sets your work apart.]",
    points: [
      'Homes, rental properties, and businesses',
      'Painting, drywall, remodeling, and construction',
      'Communication from estimate to walkthrough',
    ],
    experienceValue: '{years}+',
    experienceLabel: 'Years of experience',
    imageAlt: 'Team member on a scissor lift working on the exterior of a commercial building',
    detailAlt: 'Crew working on a roof gable with tan lap siding',
    cta: 'Learn More About Us',
  },

  projects: {
    eyebrow: 'Portfolio',
    title: 'Our Recent Work',
    subtitle: 'Painting, remodeling, and construction projects completed by our team across the DFW area.',
    filterLabel: 'Filter projects by category',
    all: 'All',
    categories: {
      interior: 'Interior Painting',
      exterior: 'Exterior Painting',
      remodeling: 'Remodeling',
      construction: 'Construction',
      commercial: 'Commercial',
    },
    /** {count} → number of visible projects */
    showing: 'Showing {count} projects',
    /** {title} → project title */
    open: 'View larger image: {title}',
    lightboxLabel: 'Project photo viewer',
    previous: 'Previous project',
    next: 'Next project',
    /** {current}, {total} */
    counter: '{current} of {total}',
    items: {
      exteriorFrisco: {
        title: 'Exterior Home Painting',
        alt: 'Two-story home with freshly painted white brick, stone accents, and dark garage doors in Frisco, Texas',
      },
      kitchenFrisco: {
        title: 'Kitchen Cabinets, Marble & Lighting',
        alt: 'Kitchen with white and dark painted cabinets, a large marble island, and brass pendant lights',
      },
      officeFrisco: {
        title: 'Office Cabinets & Wall Painting',
        alt: 'Office with built-in cabinets and walls painted sage green, wood floors, and a ceiling fan',
      },
      garageRoofCelina: {
        title: 'Tornado-Damaged Garage Roof Repair',
        alt: 'Crew rebuilding a garage roof with new framing and house wrap after tornado damage',
      },
      kitchenCabinets: {
        title: 'Kitchen Cabinet Painting',
        alt: 'Kitchen with cabinets painted white, dark granite countertops, and pendant lights',
      },
      sidingRoof: {
        title: 'Siding Replacement & Painting',
        alt: 'Three workers on a shingle roof replacing siding next to a chimney chase',
      },
      commercialExterior: {
        title: 'Commercial Building Exterior',
        alt: 'Workers on a boom lift installing exterior panels on a commercial building wrapped in house wrap',
      },
      homeLiving: {
        title: 'Whole-Home Remodel: Living Room',
        alt: 'Remodeled living room with gray walls, a painted brick fireplace, recessed lights, and wood-look flooring',
      },
      roofing: {
        title: 'Roofing & Siding Work',
        alt: 'Two workers on a roof with temporary wood supports, working on a gable with tan lap siding',
      },
      balconyFrisco: {
        title: 'Balcony Flooring',
        alt: 'Balcony with new stone tile flooring and a black metal railing',
      },
      homeKitchen: {
        title: 'Whole-Home Remodel: Kitchen',
        alt: 'Remodeled kitchen with white shaker cabinets, butcher-block countertops, and stainless steel appliances',
      },
      closet: {
        title: 'Closet Remodel',
        alt: 'Walk-in closet with white shelving, drawers, hanging rods, and dark wood floors',
      },
    },
  },

  process: {
    eyebrow: 'How It Works',
    title: 'Our Process',
    subtitle: 'A simple, organized approach from the first conversation to the final walkthrough.',
    steps: [
      {
        title: 'Request Your Estimate',
        text: 'Tell us about your project and what you want to accomplish.',
      },
      {
        title: 'Project Consultation',
        text: 'Discuss the scope, materials, finishes, and expectations.',
      },
      {
        title: 'Professional Work',
        text: 'Our team completes the project with attention to preparation, workmanship, and detail.',
      },
      {
        title: 'Final Walkthrough',
        text: 'Review the completed work and make sure the project meets expectations.',
      },
    ],
  },

  serviceAreas: {
    eyebrow: 'Service Areas',
    title: 'Serving Plano & the DFW Area',
    text: 'Based in Plano, Texas, {company} works with homeowners, property owners, and businesses in communities across the northern Dallas–Fort Worth metroplex.',
    listTitle: 'Areas We Serve',
    homeBase: 'Home base',
    surrounding: 'Surrounding DFW communities',
    mapLabel: 'Illustrated map of Plano, Texas and nearby service-area cities',
    mapNote: 'Illustrative map — not to scale',
    toDallas: 'Dallas',
    outsideTitle: 'Outside these areas?',
    outsideText: 'Is your property outside these areas? Contact us to ask about service availability.',
    outsideCta: 'Ask About Availability',
  },

  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What Our Customers Say',
    subtitle: 'Feedback from the homeowners and businesses we work with.',
    listLabel: 'Customer testimonials',
  },

  estimateCta: {
    title: 'Ready to Transform Your Property?',
    text: 'Tell us about your next construction, remodeling, or painting project and request your free estimate today.',
    button: 'Request a Free Estimate',
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's Talk About Your Project",
    subtitle:
      "Share a few details about your project and we'll follow up to talk through next steps and schedule your free estimate.",
    infoTitle: 'Contact Information',
    phone: 'Phone',
    whatsapp: 'WhatsApp & Text',
    email: 'Email',
    address: 'Address',
    hours: 'Business Hours',
    serviceArea: 'Serving Plano, TX & the surrounding DFW area',
    form: {
      title: 'Request Your Free Estimate',
      requiredNote: 'Fields marked with * are required.',
      required: 'required',
      fullName: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project Type',
      projectTypePlaceholder: 'Select a project type',
      projectTypes: {
        interior: 'Interior Painting',
        exterior: 'Exterior Painting',
        construction: 'Construction',
        remodeling: 'Remodeling',
        drywall: 'Drywall Repair',
        cabinets: 'Cabinet Painting',
        commercial: 'Commercial Project',
        other: 'Other',
      },
      propertyType: 'Property Type',
      propertyTypes: {
        residential: 'Residential',
        commercial: 'Commercial',
      },
      contactMethod: 'Preferred Contact Method',
      contactMethods: {
        phone: 'Phone call',
        text: 'Text message',
        email: 'Email',
      },
      details: 'Project Details',
      detailsHint: "Describe the work you'd like done, the approximate size of the area, and your ideal timeline.",
      honeypot: 'Leave this field empty',
      submit: 'Request My Free Estimate',
      submitting: 'Sending…',
      errorSummary: 'Please review the highlighted fields.',
      successTitle: 'Thank you — your request has been sent.',
      successText: "We'll review your project details and reach out using your preferred contact method.",
      sendAnother: 'Send another request',
      failureTitle: "We couldn't send your request.",
      failureText: 'Please try again in a moment, or contact us directly by phone or email.',
      notConfiguredTitle: "Online requests aren't available yet.",
      notConfiguredText: "Please call or email us directly and we'll be glad to help with your estimate.",
    },
    validation: {
      nameRequired: 'Please enter your full name.',
      emailRequired: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address, like name@example.com.',
      phoneRequired: 'Please enter your phone number.',
      phoneInvalid: 'Please enter a valid 10-digit U.S. phone number.',
      projectTypeRequired: 'Please select a project type.',
      propertyTypeRequired: 'Please select a property type.',
      contactMethodRequired: 'Please choose how you would like us to contact you.',
      detailsRequired: 'Please tell us a little about your project.',
      /** {min} → minimum characters */
      detailsShort: 'Please add a few more details (at least {min} characters).',
    },
  },

  footer: {
    description:
      'Professional construction, remodeling, and interior & exterior painting services in Plano, Texas and surrounding areas.',
    linksTitle: 'Quick Links',
    servicesTitle: 'Services',
    contactTitle: 'Contact',
    socialTitle: 'Follow Us',
    social: {
      facebook: 'Facebook',
      instagram: 'Instagram',
      googleBusiness: 'Google Business Profile',
    },
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: '© {year} {company}. All rights reserved.',
    legalLabel: 'Legal',
    backToTop: 'Back to top',
  },

  legal: {
    backHome: 'Back to Home',
    /** Joins phone and email in {contact}. */
    or: 'or',
    updated: 'Last updated: [DATE]',
    templateNotice:
      '[TEMPLATE — This page is a starting point only. Have it reviewed and completed by a qualified legal professional before publishing.]',
    privacy: {
      title: 'Privacy Policy',
      intro:
        'This Privacy Policy explains how {company} collects and uses information submitted through this website.',
      sections: [
        {
          heading: 'Information We Collect',
          body: 'When you submit the estimate request form, we collect the information you choose to provide, such as your name, email address, phone number, property type, and project details.',
        },
        {
          heading: 'How We Use Your Information',
          body: 'We use this information to respond to your request, prepare estimates, and communicate with you about your project.',
        },
        {
          heading: 'Sharing Your Information',
          body: '[DESCRIBE ANY THIRD PARTIES THAT RECEIVE THIS INFORMATION, SUCH AS YOUR FORM OR EMAIL SERVICE PROVIDER.]',
        },
        {
          heading: 'Cookies and Analytics',
          body: 'This website stores your language preference in your browser. [DESCRIBE ANY ANALYTICS OR TRACKING TOOLS YOU ADD.]',
        },
        {
          heading: 'Contact Us',
          body: 'If you have questions about this policy, contact {company} at {contact}.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      intro: 'By using this website, you agree to the following terms.',
      sections: [
        {
          heading: 'Use of This Website',
          body: 'The content on this website is provided for general information about the services offered by {company}.',
        },
        {
          heading: 'Estimates and Services',
          body: '[DESCRIBE HOW ESTIMATES, CONTRACTS, PAYMENTS, AND WARRANTIES ARE HANDLED.]',
        },
        {
          heading: 'Photos and Content',
          body: '[CONFIRM OWNERSHIP OR LICENSING OF THE PHOTOS AND CONTENT SHOWN ON THIS WEBSITE.]',
        },
        {
          heading: 'Limitation of Liability',
          body: '[ADD LIMITATION OF LIABILITY LANGUAGE REVIEWED BY A LEGAL PROFESSIONAL.]',
        },
        {
          heading: 'Contact Us',
          body: 'Questions about these terms can be sent to {company} at {contact}.',
        },
      ],
    },
  },
} as const;

/** Recursively turns string literal types into `string`, keeping the shape. */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Translations = Widen<typeof en>;
