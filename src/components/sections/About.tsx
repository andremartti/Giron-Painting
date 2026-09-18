import { ArrowRight, Check } from 'lucide-react';
import { images } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';
import { ButtonLink } from '../ui/Button';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';

export function About() {
  const { t, f } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="overflow-hidden bg-paper py-20 sm:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative pr-8 pb-10 sm:pr-16 sm:pb-14">
          <div className="relative overflow-hidden rounded-lg shadow-lift">
            <Photo
              src={images.aboutMain}
              alt={t.about.imageAlt}
              ratio={4 / 5}
              widths={[480, 720, 960]}
              sizes="(min-width: 1024px) 34rem, 90vw"
              position="center 30%"
              className="aspect-[4/5] w-full"
            />
          </div>
          <p className="absolute bottom-16 left-3 flex flex-col items-start gap-1.5 rounded-md bg-brick-600 px-3.5 py-3 text-white shadow-lift sm:bottom-20 sm:left-5 sm:px-4 sm:py-3.5">
            <span className="font-display text-3xl leading-none font-extrabold sm:text-4xl">
              {f(t.about.experienceValue)}
            </span>
            <span className="max-w-24 text-xs leading-tight font-semibold tracking-[0.08em] uppercase sm:text-[0.8125rem]">
              {t.about.experienceLabel}
            </span>
          </p>
          <div className="absolute right-0 bottom-0 w-[46%] overflow-hidden rounded-lg border-[6px] border-paper shadow-lift">
            <Photo
              src={images.aboutDetail}
              alt={t.about.detailAlt}
              ratio={1}
              widths={[320, 480]}
              sizes="(min-width: 1024px) 15rem, 40vw"
              position="center 22%"
              className="aspect-square w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title" className="mt-4 text-[2.125rem] leading-[1.08] font-bold tracking-[-0.02em] sm:text-5xl">
            {t.about.title}
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{f(paragraph)}</p>
            ))}
            <p className="rounded-md border border-dashed border-ink/25 bg-sand px-4 py-3 text-base text-ink-soft">
              {t.about.storyPlaceholder}
            </p>
          </div>

          <ul className="mt-8 space-y-3.5">
            {t.about.points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-medium text-ink">
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brick-50 text-brick-600 ring-1 ring-brick-100"
                  aria-hidden="true"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <ButtonLink href="#process" variant="outline-dark" size="lg" className="mt-10 w-full sm:w-auto">
            {t.about.cta}
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
