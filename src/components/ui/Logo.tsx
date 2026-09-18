import { company } from '../../config/company';
import { useLanguage } from '../../i18n/LanguageContext';

interface LogoProps {
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Temporary wordmark: a roofline mark plus the company name.
 * Replace the <svg> with the real logo when it's available.
 */
export function Logo({ tone = 'dark', className = '' }: LogoProps) {
  const { t } = useLanguage();
  const light = tone === 'light';

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="size-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="7" className="fill-brick-600" />
        <path d="M8 21 20 10.5 32 21" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="square" />
        <path d="M13 19.5V30h14V19.5" fill="none" stroke="#fff" strokeWidth="3" />
        <path d="M17.5 30v-5.5h5V30" fill="#fff" />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`truncate font-display text-[0.95rem] font-extrabold tracking-[0.06em] uppercase sm:text-base ${light ? 'text-white' : 'text-ink'}`}
        >
          {company.name}
        </span>
        <span
          className={`mt-1.5 truncate text-[0.625rem] font-semibold tracking-[0.2em] uppercase ${light ? 'text-white/70' : 'text-muted'}`}
        >
          {t.nav.tagline}
          <span className="hidden min-[400px]:inline"> · Plano, TX</span>
        </span>
      </span>
    </span>
  );
}
