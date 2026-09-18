import type { ImgHTMLAttributes } from 'react';
import { DEFAULT_WIDTHS, photoSize, photoSrcSet, photoUrl } from '../../lib/photo';

interface PhotoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  /** "/images/<name>" for the company's photos, an Unsplash photo id, or a path inside `public/`. */
  src: string;
  alt: string;
  /** Width ÷ height used to crop the image on the CDN, e.g. 4 / 3. */
  ratio?: number;
  /** `sizes` attribute: how wide the image is rendered at each breakpoint. */
  sizes: string;
  widths?: readonly number[];
  /** Load immediately with high priority (only for above-the-fold images). */
  priority?: boolean;
  quality?: number;
  /** CSS object-position, e.g. "center 30%", to choose which part stays visible when cropped. */
  position?: string;
}

/** Responsive, lazy-loaded image. */
export function Photo({
  src,
  alt,
  ratio,
  sizes,
  widths = DEFAULT_WIDTHS,
  priority = false,
  quality,
  position,
  className = '',
  style,
  ...props
}: PhotoProps) {
  const largest = widths[widths.length - 1];
  const natural = photoSize(src);
  const width = natural?.width ?? largest;
  const height = ratio ? Math.round(width / ratio) : natural?.height;

  return (
    <img
      src={photoUrl(src, largest, ratio, quality)}
      srcSet={photoSrcSet(src, widths, ratio, quality)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      width={width}
      height={height}
      className={`bg-stone object-cover ${className}`}
      style={position ? { objectPosition: position, ...style } : style}
      {...props}
    />
  );
}
