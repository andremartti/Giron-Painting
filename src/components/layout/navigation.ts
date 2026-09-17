import type { Translations } from '../../i18n/en';

export interface NavItem {
  /** id of the target section on the home page. */
  id: string;
  labelKey: Exclude<keyof Translations['nav'], 'label' | 'openMenu' | 'closeMenu' | 'homeLink' | 'tagline'>;
}

export const navItems: readonly NavItem[] = [
  { id: 'home', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'services', labelKey: 'services' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'service-areas', labelKey: 'serviceAreas' },
  { id: 'contact', labelKey: 'contact' },
];

export const navSectionIds: readonly string[] = navItems.map((item) => item.id);

/** Hash routes for the standalone legal pages. */
export const legalRoutes = {
  privacy: 'privacy-policy',
  terms: 'terms-of-service',
} as const;
