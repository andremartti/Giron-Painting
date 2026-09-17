import {
  BrickWall,
  Brush,
  Building2,
  Hammer,
  House,
  PaintRoller,
  PencilRuler,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { images } from './images';
import type { ProjectType } from './projectTypes';

export type ServiceId =
  | 'interior'
  | 'exterior'
  | 'residential'
  | 'commercial'
  | 'remodeling'
  | 'drywall'
  | 'cabinets'
  | 'renovations';

export interface Service {
  id: ServiceId;
  icon: LucideIcon;
  image: string;
  /** Project type pre-selected in the estimate form when this service is chosen. */
  projectType: ProjectType;
}

/** Display order of the service cards. Text lives in `src/i18n`. */
export const services: readonly Service[] = [
  { id: 'interior', icon: PaintRoller, image: images.serviceInterior, projectType: 'interior' },
  { id: 'exterior', icon: House, image: images.serviceExterior, projectType: 'exterior' },
  { id: 'residential', icon: Hammer, image: images.serviceResidential, projectType: 'construction' },
  { id: 'commercial', icon: Building2, image: images.serviceCommercial, projectType: 'commercial' },
  { id: 'remodeling', icon: PencilRuler, image: images.serviceRemodeling, projectType: 'remodeling' },
  { id: 'drywall', icon: BrickWall, image: images.serviceDrywall, projectType: 'drywall' },
  { id: 'cabinets', icon: Brush, image: images.serviceCabinets, projectType: 'cabinets' },
  { id: 'renovations', icon: Wrench, image: images.serviceRenovations, projectType: 'other' },
];
