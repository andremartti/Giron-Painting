import { images } from './images';

export const projectCategories = [
  'interior',
  'exterior',
  'remodeling',
  'construction',
  'commercial',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type ProjectId =
  | 'exteriorFrisco'
  | 'kitchenFrisco'
  | 'officeFrisco'
  | 'garageRoofCelina'
  | 'kitchenCabinets'
  | 'sidingRoof'
  | 'homeKitchen'
  | 'homeLiving'
  | 'roofing'
  | 'balconyFrisco'
  | 'closet'
  | 'commercialExterior';

export interface Project {
  id: ProjectId;
  category: ProjectCategory;
  image: string;
  /** Where the project is located, e.g. "Frisco, TX". Omit if unknown. */
  location?: string;
  /** Shown larger in the "All" view on wide screens. */
  featured?: boolean;
  /** CSS object-position for the thumbnail crop (useful for tall photos). */
  position?: string;
}

/**
 * Gallery entries — the company's completed work. Titles and alt text live in `src/i18n`.
 *
 * With two featured projects, 12 entries fill the three-column grid exactly.
 */
export const projects: readonly Project[] = [
  { id: 'exteriorFrisco', category: 'exterior', image: images.projectExteriorFrisco, location: 'Frisco, TX', featured: true },
  { id: 'kitchenFrisco', category: 'remodeling', image: images.projectKitchenFrisco, location: 'Frisco, TX' },
  { id: 'officeFrisco', category: 'interior', image: images.projectOfficeFrisco, location: 'Frisco, TX' },
  { id: 'garageRoofCelina', category: 'construction', image: images.projectGarageRoof, location: 'Celina, TX', position: 'center 35%' },
  { id: 'kitchenCabinets', category: 'remodeling', image: images.projectKitchenCabinets },
  { id: 'sidingRoof', category: 'exterior', image: images.projectSidingRoof, position: 'center 18%' },
  { id: 'commercialExterior', category: 'commercial', image: images.projectCommercial, position: 'center 30%' },
  { id: 'homeLiving', category: 'remodeling', image: images.projectHomeLiving, featured: true },
  { id: 'roofing', category: 'construction', image: images.projectRoofing, position: 'center 22%' },
  { id: 'balconyFrisco', category: 'construction', image: images.projectBalcony, location: 'Frisco, TX', position: 'center 60%' },
  { id: 'homeKitchen', category: 'remodeling', image: images.projectHomeKitchen },
  { id: 'closet', category: 'remodeling', image: images.projectCloset, position: 'center 40%' },
];
