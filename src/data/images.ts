/**
 * Photo catalog.
 *
 * "/images/<name>" entries are the company's own photos in `public/images/`
 * (several widths each, see `photoManifest.ts`). The remaining Unsplash id is a
 * royalty-free placeholder (Unsplash License) until a real photo is available.
 *
 * Alt text lives in the translation files (`src/i18n`) so it can be translated.
 */
export const images = {
  hero: '/images/exterior-frisco',
  estimateCta: '/images/kitchen-frisco',
  whyUs: '/images/siding-roof',

  aboutMain: '/images/team-lift',
  aboutDetail: '/images/roofing',

  serviceInterior: '/images/office-frisco',
  serviceExterior: '/images/exterior-frisco',
  serviceResidential: '/images/garage-roof-celina',
  serviceCommercial: '/images/commercial-exterior',
  serviceRemodeling: '/images/home-remodel-kitchen',
  /** Placeholder (Unsplash) — no drywall photo yet. */
  serviceDrywall: 'photo-1768839725085-829e6ac7ac26',
  serviceCabinets: '/images/kitchen-cabinets',
  serviceRenovations: '/images/home-remodel-living',

  projectExteriorFrisco: '/images/exterior-frisco',
  projectKitchenFrisco: '/images/kitchen-frisco',
  projectOfficeFrisco: '/images/office-frisco',
  projectKitchenCabinets: '/images/kitchen-cabinets',
  projectHomeKitchen: '/images/home-remodel-kitchen',
  projectHomeLiving: '/images/home-remodel-living',
  projectCloset: '/images/closet',
  projectGarageRoof: '/images/garage-roof-celina',
  projectSidingRoof: '/images/siding-roof',
  projectRoofing: '/images/roofing',
  projectBalcony: '/images/balcony-frisco',
  projectCommercial: '/images/commercial-exterior',
} as const;

export type ImageKey = keyof typeof images;
