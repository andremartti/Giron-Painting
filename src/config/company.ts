/**
 * Business information — the single place to edit company details.
 *
 * Every value wrapped in [SQUARE BRACKETS] is a placeholder that must be
 * replaced with real information before launch. The site detects bracketed
 * values automatically: placeholder phone numbers and emails are shown as plain
 * text, and become clickable `tel:` / `mailto:` links once real values are set.
 *
 * Nothing here is used to make claims the business hasn't provided — no
 * licenses, years in business, ratings, or review counts.
 */
export const company = {
  /** Public business name, shown in the navbar, footer, titles, and schema. */
  name: '[COMPANY NAME]',

  phone: {
    /** How the number is displayed, e.g. "(972) 555-0123". */
    display: '[PHONE NUMBER]',
    /** Dialable number in E.164 format, e.g. "+19725550123". Leave empty until known. */
    dial: '',
  },

  email: '[EMAIL ADDRESS]',

  address: {
    /** Street address shown on the site, e.g. "1234 Example St, Suite 100". */
    street: '[BUSINESS ADDRESS]',
    city: 'Plano',
    region: 'TX',
    postalCode: '[ZIP CODE]',
    countryCode: 'US',
  },

  /** Business hours, one line per language. */
  hours: {
    en: '[BUSINESS HOURS]',
    es: '[HORARIO DE ATENCIÓN]',
  },

  /**
   * Social profiles. Leave a value empty until the real URL exists — empty
   * profiles render as inactive icons instead of broken links.
   */
  social: {
    facebook: '',
    instagram: '',
    googleBusiness: '',
  },

  /**
   * Cities listed in the Service Areas section and in the structured data.
   * Confirm this list with the business owner before launch.
   */
  serviceAreas: ['Plano', 'Frisco', 'Allen', 'McKinney', 'Richardson', 'Carrollton', 'The Colony'],

  /**
   * Final public URL, e.g. "https://www.example.com". Used for the canonical
   * link, Open Graph tags, and sitemap. The GitHub Pages workflow sets it
   * automatically through the SITE_URL environment variable.
   */
  siteUrl: '',
} as const;

export type Company = typeof company;

const PLACEHOLDER_PATTERN = /\[[^\]]+\]/;

/** True when a value still contains a bracketed placeholder such as "[EMAIL]". */
export function isPlaceholder(value: string): boolean {
  return value.trim() === '' || PLACEHOLDER_PATTERN.test(value);
}

/** `tel:` link for the business phone, or `undefined` while it's a placeholder. */
export function phoneHref(): string | undefined {
  const dial = company.phone.dial.replace(/[^\d+]/g, '');
  return dial ? `tel:${dial}` : undefined;
}

/** `mailto:` link for the business email, or `undefined` while it's a placeholder. */
export function emailHref(): string | undefined {
  return isPlaceholder(company.email) ? undefined : `mailto:${company.email}`;
}

/** Street, city, region, and ZIP on a single line. */
export function fullAddress(): string {
  const { street, city, region, postalCode } = company.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}
