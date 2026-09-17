/** Options of the "Project Type" field in the estimate form. Labels live in `src/i18n`. */
export const projectTypes = [
  'interior',
  'exterior',
  'construction',
  'remodeling',
  'drywall',
  'cabinets',
  'commercial',
  'other',
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const propertyTypes = ['residential', 'commercial'] as const;
export type PropertyType = (typeof propertyTypes)[number];

export const contactMethods = ['phone', 'text', 'email'] as const;
export type ContactMethod = (typeof contactMethods)[number];
