import { logoGeometry } from './logoGeometry';

interface LogoProps {
  /** "full" = mark + GIRON PAINTING; "mark" = the GP hexagon only. */
  variant?: 'full' | 'mark';
  className?: string;
}

/**
 * Giron Painting logo drawn with `currentColor`, so it's white on dark
 * backgrounds (the approved version) or dark wherever a parent sets `text-ink`.
 * Decorative: the surrounding link or heading provides the accessible name.
 */
export function Logo({ variant = 'full', className = '' }: LogoProps) {
  const { markWidth, fullWidth, height, mark, giron, painting } = logoGeometry;
  const full = variant === 'full';

  return (
    <svg
      viewBox={`0 0 ${full ? fullWidth : markWidth} ${height}`}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={`block h-10 w-auto ${className}`}
    >
      <path d={mark} />
      {full && (
        <>
          <path d={giron} />
          <path d={painting} />
        </>
      )}
    </svg>
  );
}
