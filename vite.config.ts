import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type HtmlTagDescriptor, type Plugin } from 'vite';
import { company, contactLine, fullAddress, hasEmail } from './src/config/company.ts';
import { images } from './src/data/images.ts';
import { en } from './src/i18n/en.ts';
import { HERO_IMAGE_QUALITY, HERO_IMAGE_WIDTHS, photoSrcSet, photoUrl } from './src/lib/photo.ts';

const fillCompany = (text: string) =>
  text.replaceAll('{company}', company.name).replaceAll('{years}', String(company.experienceYears));

/**
 * Generates SEO tags, LocalBusiness structured data, robots.txt, and
 * sitemap.xml from `src/config/company.ts` and the English copy, so business
 * details are edited in one place.
 */
function seo(siteUrl: string, basePath: string): Plugin {
  const title = fillCompany(en.meta.title);
  const description = fillCompany(en.meta.description);
  const ogImage = photoUrl(images.hero, 1200, 1200 / 630, 80);
  const pageUrl = siteUrl ? `${siteUrl}${basePath}` : '';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'HousePainter'],
    name: company.name,
    description,
    ...(pageUrl && { url: pageUrl, '@id': `${pageUrl}#business` }),
    image: ogImage,
    telephone: company.phone.dial || company.phone.display,
    ...(hasEmail() && { email: company.email }),
    address: {
      '@type': 'PostalAddress',
      ...(company.address.street ? { streetAddress: company.address.street } : {}),
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      ...(company.address.postalCode ? { postalCode: company.address.postalCode } : {}),
      addressCountry: company.address.countryCode,
    },
    areaServed: company.serviceAreas.map((city) => ({
      '@type': 'City',
      name: `${city}, TX`,
    })),
    knowsLanguage: ['en', 'es'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction, Remodeling & Painting Services',
      itemListElement: Object.values(en.services.items).map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.description },
      })),
    },
    sameAs: Object.values(company.social).filter(Boolean),
  };

  const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' });

  return {
    name: 'site-seo',
    transformIndexHtml(html) {
      const tags: HtmlTagDescriptor[] = [
        meta({ name: 'description', content: description }),
        meta({ name: 'robots', content: 'index, follow' }),
        meta({ name: 'geo.region', content: 'US-TX' }),
        meta({ name: 'geo.placename', content: 'Plano' }),

        meta({ property: 'og:type', content: 'website' }),
        meta({ property: 'og:site_name', content: company.name }),
        meta({ property: 'og:title', content: title }),
        meta({ property: 'og:description', content: description }),
        meta({ property: 'og:locale', content: 'en_US' }),
        meta({ property: 'og:locale:alternate', content: 'es_US' }),
        meta({ property: 'og:image', content: ogImage }),
        meta({ property: 'og:image:width', content: '1200' }),
        meta({ property: 'og:image:height', content: '630' }),
        meta({ property: 'og:image:alt', content: en.hero.imageAlt }),
        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        meta({ name: 'twitter:title', content: title }),
        meta({ name: 'twitter:description', content: description }),
        meta({ name: 'twitter:image', content: ogImage }),

        // The hero photo is the largest element on first load — start fetching it early.
        {
          tag: 'link',
          attrs: {
            rel: 'preload',
            as: 'image',
            href: photoUrl(images.hero, 1920, undefined, HERO_IMAGE_QUALITY),
            imagesrcset: photoSrcSet(images.hero, HERO_IMAGE_WIDTHS, undefined, HERO_IMAGE_QUALITY) ?? '',
            imagesizes: '100vw',
            fetchpriority: 'high',
          },
          injectTo: 'head',
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(structuredData),
          injectTo: 'head',
        },
      ];

      if (pageUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: pageUrl }, injectTo: 'head' },
          meta({ property: 'og:url', content: pageUrl }),
        );
      }

      return {
        html: html
          .replace('%SITE_TITLE%', title)
          .replace('%NOSCRIPT_COMPANY%', company.name)
          .replace('%NOSCRIPT_DESCRIPTION%', fillCompany(en.footer.description))
          .replace('%NOSCRIPT_CONTACT%', `${contactLine('·')} · ${fullAddress()}`),
        tags,
      };
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /'];
      if (pageUrl) robots.push(`Sitemap: ${pageUrl}sitemap.xml`);
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` });

      if (pageUrl) {
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
</urlset>
`;
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // GitHub Pages serves the site from /<repository>/; the deploy workflow passes that in BASE_PATH.
  const basePath = `/${(env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')}/`.replace('//', '/');
  const siteUrl = (env.SITE_URL || company.siteUrl).replace(/\/+$/, '').replace(new RegExp(`${basePath}?$`), '');

  return {
    base: basePath,
    plugins: [react(), tailwindcss(), seo(siteUrl, basePath)],
    build: {
      target: 'es2022',
      cssMinify: 'lightningcss',
    },
  };
});
