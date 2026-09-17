import { languages, useLanguage } from '../../i18n/LanguageContext';

interface LanguageSwitcherProps {
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
  className?: string;
}

/** EN | ES toggle. The choice is saved in localStorage by the language provider. */
export function LanguageSwitcher({ tone = 'dark', size = 'md', className = '' }: LanguageSwitcherProps) {
  const { lang, setLang, t } = useLanguage();
  const light = tone === 'light';

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-md border p-0.5 transition-colors ${light ? 'border-white/30' : 'border-ink/15'} ${className}`}
    >
      {languages.map((code, index) => {
        const selected = lang === code;
        return (
          <span key={code} className="flex items-center">
            {index > 0 && (
              <span aria-hidden="true" className={`px-0.5 text-xs ${light ? 'text-white/40' : 'text-ink/30'}`}>
                |
              </span>
            )}
            <button
              type="button"
              lang={code}
              aria-pressed={selected}
              onClick={() => setLang(code)}
              className={`rounded-[5px] font-display font-semibold tracking-[0.08em] transition-colors ${
                size === 'lg' ? 'min-h-11 min-w-14 px-4 text-sm' : 'min-h-9 min-w-10 px-2.5 text-xs'
              } ${
                selected
                  ? 'bg-brick-600 text-white'
                  : light
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-ink/70 hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {code.toUpperCase()}
              <span className="sr-only"> — {t.language[code]}</span>
            </button>
          </span>
        );
      })}
    </div>
  );
}
