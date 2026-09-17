import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  align?: 'left' | 'center' | 'split';
  tone?: 'light' | 'dark';
  className?: string;
}

/** Eyebrow + H2 + optional subtitle. `id` is used by the section's aria-labelledby. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeaderProps) {
  const dark = tone === 'dark';
  const titleClass = `text-[2.125rem] leading-[1.08] font-bold tracking-[-0.02em] sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`;
  const subtitleClass = `text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`;

  if (align === 'split') {
    return (
      <Reveal className={`grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10 ${className}`}>
        <div className="lg:col-span-7">
          <p className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}>{eyebrow}</p>
          <h2 id={id} className={`mt-4 ${titleClass}`}>
            {title}
          </h2>
        </div>
        {subtitle && <p className={`max-w-xl lg:col-span-5 lg:pb-1.5 ${subtitleClass}`}>{subtitle}</p>}
      </Reveal>
    );
  }

  const centered = align === 'center';
  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <p className={`eyebrow ${dark ? 'eyebrow-light' : ''}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-4 ${titleClass}`}>
        {title}
      </h2>
      {subtitle && <p className={`mt-5 ${centered ? 'mx-auto' : ''} max-w-2xl ${subtitleClass}`}>{subtitle}</p>}
    </Reveal>
  );
}
