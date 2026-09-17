import { useEffect, useState, type MouseEvent } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { legalRoutes } from './components/layout/navigation';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { EstimateCta } from './components/sections/EstimateCta';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Projects } from './components/sections/Projects';
import { ServiceAreas } from './components/sections/ServiceAreas';
import { Services } from './components/sections/Services';
import { Testimonials } from './components/sections/Testimonials';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { EstimateProvider } from './context/EstimateContext';
import { useLanguage } from './i18n/LanguageContext';
import { LegalPage } from './pages/LegalPage';

type View = 'home' | 'privacy' | 'terms';

/** The legal pages live at #privacy-policy and #terms-of-service; any other hash is a home-page section. */
function viewFromHash(): View {
  const hash = window.location.hash.slice(1);
  if (hash === legalRoutes.privacy) return 'privacy';
  if (hash === legalRoutes.terms) return 'terms';
  return 'home';
}

function SkipLink() {
  const { t } = useLanguage();
  const skip = (event: MouseEvent<HTMLAnchorElement>) => {
    // Handled in JS so the URL hash (used for routing) doesn't change.
    event.preventDefault();
    const main = document.getElementById('main');
    main?.focus({ preventScroll: true });
    main?.scrollIntoView();
  };
  return (
    <a
      href="#main"
      onClick={skip}
      className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-md bg-ink px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
    >
      {t.common.skipToContent}
    </a>
  );
}

export default function App() {
  const { t, f } = useLanguage();
  const [view, setView] = useState<View>(viewFromHash);

  useEffect(() => {
    const onHashChange = () => setView(viewFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // After switching pages, jump to the requested section (or the top).
  useEffect(() => {
    if (view !== 'home') {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'instant' });
  }, [view]);

  // Title and description follow the current page and language.
  useEffect(() => {
    const titles: Record<View, string> = {
      home: t.meta.title,
      privacy: t.meta.privacyTitle,
      terms: t.meta.termsTitle,
    };
    document.title = f(titles[view]);
    document.querySelector('meta[name="description"]')?.setAttribute('content', f(t.meta.description));
  }, [view, t, f]);

  return (
    <EstimateProvider>
      <SkipLink />
      <Navbar alwaysSolid={view !== 'home'} />
      {view === 'home' ? (
        <main id="main" tabIndex={-1} className="focus:outline-none">
          <Hero />
          <Services />
          <WhyChooseUs />
          <About />
          <Projects />
          <Process />
          <ServiceAreas />
          <Testimonials />
          <EstimateCta />
          <Contact />
        </main>
      ) : (
        <LegalPage kind={view} />
      )}
      <Footer />
    </EstimateProvider>
  );
}
