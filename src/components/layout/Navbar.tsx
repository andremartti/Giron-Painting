import { Menu, Phone, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { company, phoneHref } from '../../config/company';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { useLanguage } from '../../i18n/LanguageContext';
import { ButtonLink } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { navItems, navSectionIds } from './navigation';

interface NavbarProps {
  /** On pages without a hero image, the bar is always solid. */
  alwaysSolid?: boolean;
}

export function Navbar({ alwaysSolid = false }: NavbarProps) {
  const { t, f } = useLanguage();
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(navSectionIds, !alwaysSolid);

  const solid = alwaysSolid || scrolled || menuOpen;
  const callHref = phoneHref();

  // Close the mobile menu when the viewport grows to desktop width.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 80rem)');
    const onChange = () => query.matches && setMenuOpen(false);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      {/* Always dark so the white logo reads on every page and scroll position. */}
      <div
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid
            ? 'bg-night/95 shadow-[0_1px_0_rgb(255_255_255/0.06),0_12px_30px_-18px_rgb(0_0_0/0.6)] backdrop-blur-md'
            : 'bg-gradient-to-b from-night/70 to-transparent'
        }`}
      >
        <div
          className={`container-site flex items-center justify-between gap-4 transition-[height] duration-300 ${solid ? 'h-18' : 'h-20 lg:h-24'}`}
        >
          <a href="#home" aria-label={f(t.nav.homeLink)} className="min-w-0 rounded-md" onClick={() => closeMenu()}>
            <Logo
              className={`transition-[height] duration-300 ${solid ? 'h-11 sm:h-12' : 'h-11 sm:h-13 lg:h-14'}`}
            />
          </a>

          <nav aria-label={t.nav.label} className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const current = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={current ? 'location' : undefined}
                      className={`relative block rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:bg-brick-500 after:transition-transform after:duration-300 ${
                        current ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                      } text-white/85 hover:text-white aria-[current=location]:text-white`}
                    >
                      {t.nav[item.labelKey]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            {/* Wrappers control visibility so it can't clash with the components' own display classes. */}
            <div className="hidden sm:block">
              <LanguageSwitcher tone="light" />
            </div>
            <div className="hidden md:block">
              <ButtonLink href="#contact">{t.common.getEstimate}</ButtonLink>
            </div>
            {/* Tap-to-call on phones, where the estimate button is hidden. */}
            {callHref && (
              <a
                href={callHref}
                aria-label={f(t.common.call, { phone: company.phone.display })}
                className="flex size-11 items-center justify-center rounded-md bg-brick-600 text-white shadow-[0_8px_18px_-10px_rgb(165_58_36/0.9)] transition-colors hover:bg-brick-700 md:hidden"
              >
                <Phone className="size-5" aria-hidden="true" />
              </a>
            )}
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-11 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10 xl:hidden"
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNav open={menuOpen} onClose={closeMenu} active={active} />
    </header>
  );
}
