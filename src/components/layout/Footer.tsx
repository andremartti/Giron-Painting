import { ArrowUp } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import { company } from '../../config/company';
import { services } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';
import { ContactDetails } from '../ui/ContactDetails';
import { Logo } from '../ui/Logo';
import { FacebookIcon, GoogleIcon, InstagramIcon } from '../ui/SocialIcons';
import { legalRoutes, navItems } from './navigation';

const socialNetworks: {
  key: keyof typeof company.social;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}[] = [
  { key: 'facebook', icon: FacebookIcon },
  { key: 'instagram', icon: InstagramIcon },
  { key: 'googleBusiness', icon: GoogleIcon },
];

const headingClass = 'font-display text-xs font-semibold tracking-[0.2em] text-white/55 uppercase';
const linkClass = 'text-white/80 transition-colors hover:text-white hover:underline underline-offset-4';

export function Footer() {
  const { t, f } = useLanguage();

  return (
    <footer className="bg-night text-white">
      <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Logo className="h-14 sm:h-16" />
          <p className="mt-6 max-w-sm leading-relaxed text-white/70">{t.footer.description}</p>

          <h2 className={`${headingClass} mt-8`}>{t.footer.socialTitle}</h2>
          <ul className="mt-4 flex gap-3">
            {socialNetworks.map(({ key, icon: Icon }) => {
              const url = company.social[key];
              const name = t.footer.social[key];
              const iconBox = 'flex size-11 items-center justify-center rounded-md border transition-colors';
              return (
                <li key={key}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} ${t.common.newTab}`}
                      className={`${iconBox} border-white/20 text-white hover:border-brick-400 hover:bg-brick-600`}
                    >
                      <Icon className="size-5" />
                    </a>
                  ) : (
                    <span
                      role="img"
                      aria-label={f(t.common.socialNotSet, { network: name })}
                      title={f(t.common.socialNotSet, { network: name })}
                      className={`${iconBox} border-white/10 text-white/35`}
                    >
                      <Icon className="size-5" />
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-labelledby="footer-links" className="lg:col-span-2">
          <h2 id="footer-links" className={headingClass}>
            {t.footer.linksTitle}
          </h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass}>
                  {t.nav[item.labelKey]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className={headingClass}>{t.footer.servicesTitle}</h2>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <a href="#services" className={linkClass}>
                  {t.services.items[service.id].title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={headingClass}>{t.footer.contactTitle}</h2>
          <div className="mt-5">
            <ContactDetails tone="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-5 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{f(t.footer.rights)}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <nav aria-label={t.footer.legalLabel}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                <li>
                  <a href={`#${legalRoutes.privacy}`} className={linkClass}>
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href={`#${legalRoutes.terms}`} className={linkClass}>
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </nav>
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0 });
                document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true });
              }}
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <ArrowUp className="size-4" aria-hidden="true" />
              {t.footer.backToTop}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
