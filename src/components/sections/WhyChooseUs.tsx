import { BadgeCheck, Building, CalendarCheck, MapPinned, ScanSearch, type LucideIcon } from 'lucide-react';
import { images } from '../../data/images';
import type { Translations } from '../../i18n/en';
import { useLanguage } from '../../i18n/LanguageContext';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const reasons: { key: keyof Translations['whyUs']['items']; icon: LucideIcon }[] = [
  { key: 'quality', icon: BadgeCheck },
  { key: 'detail', icon: ScanSearch },
  { key: 'reliable', icon: CalendarCheck },
  { key: 'versatile', icon: Building },
  { key: 'local', icon: MapPinned },
];

export function WhyChooseUs() {
  const { t, f } = useLanguage();

  return (
    <section id="why-us" aria-labelledby="why-us-title" className="relative overflow-hidden bg-night py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_100%_0%,rgb(165_58_36/0.18),transparent_60%)]"
      />
      <div className="container-site relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeader
            id="why-us-title"
            eyebrow={t.whyUs.eyebrow}
            title={f(t.whyUs.title)}
            subtitle={t.whyUs.intro}
            tone="dark"
          />
          <Reveal delay={120} className="mt-10 hidden lg:block">
            <div className="relative overflow-hidden rounded-lg">
              <Photo
                src={images.whyUs}
                alt={t.whyUs.imageAlt}
                ratio={4 / 3}
                widths={[480, 720, 960]}
                sizes="(min-width: 1280px) 30rem, 40vw"
                className="aspect-[4/3] w-full"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1.5 bg-brick-600" />
            </div>
          </Reveal>
        </div>

        <ol className="grid gap-px self-start overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:col-span-7">
          {reasons.map(({ key, icon: Icon }, index) => {
            const item = t.whyUs.items[key];
            const wide = index === reasons.length - 1;
            return (
              <Reveal
                as="li"
                key={key}
                delay={index * 60}
                className={`group bg-night p-7 transition-colors duration-300 hover:bg-night-soft sm:p-8 ${wide ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="flex size-12 items-center justify-center rounded-md bg-brick-600/15 text-brick-300 ring-1 ring-brick-400/25 transition-colors duration-300 group-hover:bg-brick-600 group-hover:text-white"
                    aria-hidden="true"
                  >
                    <Icon className="size-6" strokeWidth={1.7} />
                  </span>
                  <span className="font-display text-sm font-semibold tracking-[0.12em] text-white/35" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-2.5 leading-relaxed text-white/70">{item.text}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
