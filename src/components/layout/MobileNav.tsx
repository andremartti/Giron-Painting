import { ArrowRight, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';
import { useLanguage } from '../../i18n/LanguageContext';
import { ButtonLink } from '../ui/Button';
import { ContactDetails } from '../ui/ContactDetails';
import { LanguageSwitcher } from './LanguageSwitcher';
import { navItems } from './navigation';

interface MobileNavProps {
  open: boolean;
  onClose: (restoreFocus?: boolean) => void;
  active: string | null;
}

/** Full-screen menu for phones and tablets, toggled by the navbar's hamburger button. */
export function MobileNav({ open, onClose, active }: MobileNavProps) {
  const { t } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);
  useScrollLock(open);

  // Move focus into the menu and make the page behind it unreachable by keyboard.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true });
    const background = document.querySelectorAll<HTMLElement>('main, footer');
    background.forEach((element) => (element.inert = true));
    return () => background.forEach((element) => (element.inert = false));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(true);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-menu"
      ref={panelRef}
      className="fixed inset-x-0 top-18 bottom-0 animate-slide-down overflow-y-auto border-t border-white/10 bg-night text-white xl:hidden"
    >
      <nav aria-label={t.nav.label} className="container-site flex min-h-full flex-col py-6">
        <ul className="divide-y divide-white/10">
          {navItems.map((item, index) => (
            <li key={item.id} className="animate-rise-in" style={{ animationDelay: `${60 + index * 35}ms` }}>
              <a
                href={`#${item.id}`}
                onClick={() => onClose()}
                aria-current={active === item.id ? 'location' : undefined}
                className="group flex min-h-14 items-center justify-between py-3 font-display text-2xl font-semibold text-white transition-colors hover:text-brick-300 aria-[current=location]:text-brick-300"
              >
                {t.nav[item.labelKey]}
                <ArrowRight
                  className="size-5 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-brick-300"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-6">
          <ButtonLink href="#contact" size="lg" onClick={() => onClose()} className="w-full">
            {t.common.getEstimate}
          </ButtonLink>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold tracking-[0.14em] text-white/60 uppercase">{t.language.label}</span>
            <LanguageSwitcher tone="light" size="lg" />
          </div>
        </div>

        <div className="mt-auto pt-10">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <ContactDetails tone="dark" compact />
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/60">
            <MapPin className="size-4 text-brick-300" aria-hidden="true" />
            {t.contact.serviceArea}
          </p>
        </div>
      </nav>
    </div>
  );
}
