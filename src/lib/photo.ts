/// <reference types="vite/client" />

/**
 * Image URL helpers.
 *
 * A photo `src` can be either:
 *  - an Unsplash photo id (e.g. "photo-1562259949-e8e7689d7828"), served from
 *    Unsplash's CDN with on-the-fly resizing, or
 *  - a path inside `public/` (e.g. "/images/kitchen.jpg") for the company's own
 *    photos. Local files are served as-is, so export them at a sensible size.
 */

const UNSPLASH_CDN = 'https://images.unsplash.com/';

export const DEFAULT_WIDTHS = [480, 768, 1080, 1440] as const;

/** Widths for the full-screen hero image (also preloaded from index.html). */
export const HERO_IMAGE_WIDTHS = [640, 960, 1280, 1920, 2400] as const;
export const HERO_IMAGE_QUALITY = 70;

function isUnsplash(src: string): boolean {
  return src.startsWith('photo-');
}

/** Prefixes a `public/` path with the site's base path (needed on GitHub Pages). */
export function withBase(path: string, base = import.meta.env?.BASE_URL ?? '/'): string {
  if (!path.startsWith('/')) return path;
  return base.replace(/\/$/, '') + path;
}

/**
 * URL of a photo at a given width. `ratio` (width / height) crops the image
 * server-side so the browser downloads only the pixels it will show.
 */
export function photoUrl(src: string, width: number, ratio?: number, quality = 72): string {
  if (!isUnsplash(src)) return withBase(src);
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    q: String(quality),
    w: String(width),
  });
  if (ratio) params.set('h', String(Math.round(width / ratio)));
  return `${UNSPLASH_CDN}${src}?${params.toString()}`;
}

/** `srcset` for responsive loading. Local images return `undefined`. */
export function photoSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_WIDTHS,
  ratio?: number,
  quality?: number,
): string | undefined {
  if (!isUnsplash(src)) return undefined;
  return widths.map((w) => `${photoUrl(src, w, ratio, quality)} ${w}w`).join(', ');
}
