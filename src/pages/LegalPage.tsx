import { ArrowLeft } from 'lucide-react';
import { company } from '../config/company';
import { useLanguage } from '../i18n/LanguageContext';

interface LegalPageProps {
  kind: 'privacy' | 'terms';
}

/** Privacy Policy / Terms of Service templates. Replace the bracketed text before launch. */
export function LegalPage({ kind }: LegalPageProps) {
  const { t, f } = useLanguage();
  const page = t.legal[kind];
  const vars = { email: company.email, phone: company.phone.display };

  return (
    <main id="main" tabIndex={-1} className="bg-paper pt-32 pb-24 focus:outline-none sm:pt-40">
      <article className="container-site max-w-3xl">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-display text-[0.8125rem] font-semibold tracking-[0.08em] text-brick-600 uppercase hover:text-brick-800"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          {t.legal.backHome}
        </a>

        <h1 className="mt-8 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{page.title}</h1>
        <p className="mt-3 text-sm text-muted">{t.legal.updated}</p>

        <p className="mt-8 rounded-md border-l-4 border-brick-600 bg-brick-50 px-5 py-4 font-mono text-sm text-ink-soft">
          {t.legal.templateNotice}
        </p>

        <p className="mt-8 text-lg leading-relaxed text-ink-soft">{f(page.intro)}</p>

        {page.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-bold tracking-[-0.01em]">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-muted">{f(section.body, vars)}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
