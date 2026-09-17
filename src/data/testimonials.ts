import type { ProjectCategory } from './projects';

export interface Testimonial {
  /** Stable key for React. */
  id: string;
  /** The customer's words, exactly as written (keep the original language). */
  quote: string;
  /** How the customer agreed to be credited, e.g. "Maria G." */
  name: string;
  /** e.g. "Plano, TX" */
  location: string;
  /** Type of work, used to show a translated label. Omit if unknown. */
  category?: ProjectCategory;
}

/**
 * Customer testimonials.
 *
 * These are placeholders on purpose — only publish real reviews from real
 * customers, with their permission. Replace each entry (or add more) and the
 * section updates automatically.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: '[CUSTOMER TESTIMONIAL]',
    name: '[CUSTOMER NAME]',
    location: '[CITY], TX',
  },
  {
    id: 'testimonial-2',
    quote: '[CUSTOMER TESTIMONIAL]',
    name: '[CUSTOMER NAME]',
    location: '[CITY], TX',
  },
  {
    id: 'testimonial-3',
    quote: '[CUSTOMER TESTIMONIAL]',
    name: '[CUSTOMER NAME]',
    location: '[CITY], TX',
  },
];
