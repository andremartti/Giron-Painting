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
  name: 'Giron Painting',

  /** Years of experience, shown as "30+". Used in the hero, About, Why Choose Us, and meta description. */
  experienceYears: 30,

  phone: {
    /** How the number is displayed, e.g. "(972) 555-0123". */
    display: '(214) 417-0701',
    /** Dialable number in E.164 format, e.g. "+19725550123". Leave empty until known. */
    dial: '+12144170701',
  },

  /** Leave empty to hide the email everywhere until the address exists. */
  email: '',

  address: {
    /** Street address, e.g. "1234 Example St, Suite 100". Leave empty to show only the city. */
    street: '',
    city: 'Plano',
    region: 'TX',
    /** Leave empty to omit. */
    postalCode: '',
    countryCode: 'US',
  },

  /** Business hours, one line per language. */
  hours: {
    en: '7:00 AM – 8:00 PM',
    es: '7:00 a. m. – 8:00 p. m.',
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

/** Whether an email (real or bracketed placeholder) should be shown. Empty hides it. */
export function hasEmail(): boolean {
  return company.email.trim() !== '';
}

/** Street (if any), city, region, and ZIP (if any) on a single line. */
export function fullAddress(): string {
  const { street, city, region, postalCode } = company.address;
  const locality = [`${city}, ${region}`, postalCode].filter(Boolean).join(' ');
  return [street, locality].filter(Boolean).join(', ');
}

/** Phone and email (when set) joined for sentences, e.g. "(214) 417-0701 or name@example.com". */
export function contactLine(or: string): string {
  return [company.phone.display, hasEmail() ? company.email : ''].filter(Boolean).join(` ${or} `);
}
