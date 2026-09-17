import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { company } from '../config/company';
import { en, type Translations } from './en';
import { es } from './es';

export const languages = ['en', 'es'] as const;
export type Language = (typeof languages)[number];

const translations: Record<Language, Translations> = { en, es };

const DEFAULT_LANGUAGE: Language = 'en';
const STORAGE_KEY = 'site-language';

function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'es' || stored === 'en' ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

type Vars = Record<string, string | number>;

/** Replaces {tokens} in a string. {company} and {year} are always available. */
export function fill(text: string, vars: Vars = {}): string {
  const all: Vars = { company: company.name, year: new Date().getFullYear(), ...vars };
  return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in all ? String(all[key]) : match));
}

interface LanguageContextValue {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  /** Shorthand for `fill`. */
  f: (text: string, vars?: Vars) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readStoredLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Storage unavailable (private mode) — the choice still applies to this visit. */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: translations[lang], setLang, f: fill }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return context;
}
