/// <reference types="vite/client" />

import { photoManifest } from '../data/photoManifest.ts';

/**
 * Image URL helpers.
 *
 * A photo `src` can be:
 *  - the name of one of the company's photos in `public/images/`, written as
 *    "/images/<name>" (e.g. "/images/exterior-frisco"). Each is stored in several
 *    widths (`<name>-<width>.webp`, listed in `src/data/photoManifest.ts`) so
 *    phones download smaller files;
 *  - an Unsplash photo id (e.g. "photo-1562259949-e8e7689d7828"), served from
 *    Unsplash's CDN with on-the-fly resizing;
 *  - any other path in `public/` (e.g. "/images/logo.png"), served as-is.
 */

const UNSPLASH_CDN = 'https://images.unsplash.com/';

export const DEFAULT_WIDTHS = [480, 768, 1080, 1440] as const;

/** Widths for the full-screen hero image when it comes from Unsplash. */
export const HERO_IMAGE_WIDTHS = [640, 960, 1280, 1920, 2400] as const;
export const HERO_IMAGE_QUALITY = 70;

let baseOverride: string | undefined;

/** Sets the base path outside Vite's client runtime (used by the build config). */
export function setPhotoBase(base: string): void {
  baseOverride = base;
}

function isUnsplash(src: string): boolean {
  return src.startsWith('photo-');
}

function localPhoto(src: string) {
  const name = src.startsWith('/images/') ? src.slice('/images/'.length) : '';
  return name ? photoManifest[name] : undefined;
}

/** Prefixes a `public/` path with the site's base path (needed on GitHub Pages). */
export function withBase(path: string, base = baseOverride ?? import.meta.env?.BASE_URL ?? '/'): string {
  if (!path.startsWith('/')) return path;
  return base.replace(/\/$/, '') + path;
}

/** Natural size of a local photo (largest stored width), if known. */
export function photoSize(src: string): { width: number; height: number } | undefined {
  const entry = localPhoto(src);
  return entry && { width: entry.width, height: entry.height };
}

/**
 * URL of a photo at (at least) a given width. For Unsplash photos, `ratio`
 * (width / height) crops the image server-side.
 */
export function photoUrl(src: string, width: number, ratio?: number, quality = 72): string {
  const local = localPhoto(src);
  if (local) {
    const w = local.widths.find((candidate) => candidate >= width) ?? local.widths[local.widths.length - 1];
    return withBase(`${src}-${w}.webp`);
  }
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

/** `srcset` for responsive loading. Local photos use their stored widths. */
export function photoSrcSet(
  src: string,
  widths: readonly number[] = DEFAULT_WIDTHS,
  ratio?: number,
  quality?: number,
): string | undefined {
  const local = localPhoto(src);
  if (local) return local.widths.map((w) => `${withBase(`${src}-${w}.webp`)} ${w}w`).join(', ');
  if (!isUnsplash(src)) return undefined;
  return widths.map((w) => `${photoUrl(src, w, ratio, quality)} ${w}w`).join(', ');
}
