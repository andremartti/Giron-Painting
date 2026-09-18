import { ArrowRight, MapPin } from 'lucide-react';
import { images } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';
import { HERO_IMAGE_QUALITY, HERO_IMAGE_WIDTHS } from '../../lib/photo';
import { ButtonLink } from '../ui/Button';
import { Photo } from '../ui/Photo';

export function Hero() {
  const { t, f } = useLanguage();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night text-white"
    >
      <Photo
        src={images.hero}
        alt={t.hero.imageAlt}
        sizes="100vw"
        widths={HERO_IMAGE_WIDTHS}
        quality={HERO_IMAGE_QUALITY}
        priority
        className="absolute inset-0 -z-20 size-full object-[60%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(19_18_16/0.92)_0%,rgb(19_18_16/0.72)_45%,rgb(19_18_16/0.25)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-night/85 to-transparent" />

      <div className="container-site flex flex-1 items-center pt-32 pb-14 sm:pt-36 lg:pb-20">
        <div className="max-w-3xl">
          <p className="inline-flex animate-rise-in items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-2 pr-4 pl-2.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="flex size-6 items-center justify-center rounded-full bg-brick-600" aria-hidden="true">
              <MapPin className="size-3.5" strokeWidth={2.4} />
            </span>
            {t.hero.badge}
          </p>

          <h1
            id="hero-title"
            className="mt-7 animate-rise-in text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.03em] [animation-delay:80ms] sm:text-6xl lg:text-[4.75rem]"
          >
            <span className="block">{t.hero.titleLead}</span>
            <span className="block text-brick-300">{t.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-2xl animate-rise-in text-lg leading-relaxed text-white/85 [animation-delay:160ms] sm:text-xl">
            {t.hero.text}
          </p>

          <div className="mt-9 flex animate-rise-in flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:gap-4">
            <ButtonLink href="#contact" size="lg" className="w-full sm:w-auto">
              {t.hero.primaryCta}
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#services" size="lg" variant="outline-light" className="w-full backdrop-blur-sm sm:w-auto">
              {t.hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12 bg-night/55 backdrop-blur-md">
        <div className="container-site">
          <h2 className="sr-only">{t.hero.highlightsLabel}</h2>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {t.hero.highlights.map((item, index) => (
              <li
                key={item}
                className={`flex items-center gap-3 py-4 text-sm font-medium text-white/85 sm:py-5 sm:text-[0.9375rem] ${
                  index % 2 === 1 ? 'pl-4 sm:pl-6' : 'pr-4'
                } ${index >= 2 ? 'border-t border-white/10 lg:border-t-0' : ''} ${
                  index > 0 ? 'lg:border-l lg:border-white/10 lg:pl-6' : ''
                }`}
              >
                <span className="h-5 w-0.5 shrink-0 bg-brick-400" aria-hidden="true" />
                {f(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
