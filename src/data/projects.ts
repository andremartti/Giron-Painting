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
  | 'interiorRoom'
  | 'exteriorFarmhouse'
  | 'remodelKitchen'
  | 'commercialLobby'
  | 'exteriorBrick'
  | 'constructionFraming'
  | 'interiorLiving'
  | 'remodelBath'
  | 'constructionInterior'
  | 'exteriorSiding'
  | 'commercialOffice'
  | 'interiorOpen';

export interface Project {
  id: ProjectId;
  category: ProjectCategory;
  image: string;
  /** Where the project is located, e.g. "Plano, TX". */
  location: string;
  /** Shown larger in the "All" view on wide screens. */
  featured?: boolean;
}

/**
 * Gallery entries. Titles and alt text live in `src/i18n`.
 *
 * The photos are placeholders — swap in the company's completed projects and
 * set the real `location` for each one.
 */
export const projects: readonly Project[] = [
  { id: 'exteriorFarmhouse', category: 'exterior', image: images.projectExteriorFarmhouse, location: '[CITY], TX', featured: true },
  { id: 'interiorRoom', category: 'interior', image: images.projectInteriorRoom, location: '[CITY], TX' },
  { id: 'remodelKitchen', category: 'remodeling', image: images.projectRemodelKitchen, location: '[CITY], TX' },
  { id: 'commercialLobby', category: 'commercial', image: images.projectCommercialLobby, location: '[CITY], TX' },
  { id: 'exteriorBrick', category: 'exterior', image: images.projectExteriorBrick, location: '[CITY], TX' },
  { id: 'constructionFraming', category: 'construction', image: images.projectConstructionFraming, location: '[CITY], TX' },
  { id: 'interiorLiving', category: 'interior', image: images.projectInteriorLiving, location: '[CITY], TX' },
  { id: 'remodelBath', category: 'remodeling', image: images.projectRemodelBath, location: '[CITY], TX', featured: true },
  { id: 'constructionInterior', category: 'construction', image: images.projectConstructionInterior, location: '[CITY], TX' },
  { id: 'exteriorSiding', category: 'exterior', image: images.projectExteriorSiding, location: '[CITY], TX' },
  { id: 'commercialOffice', category: 'commercial', image: images.projectCommercialOffice, location: '[CITY], TX' },
  { id: 'interiorOpen', category: 'interior', image: images.projectInteriorOpen, location: '[CITY], TX' },
];
