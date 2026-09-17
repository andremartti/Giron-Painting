import { ArrowRight, MapPin, Route } from 'lucide-react';
import { company } from '../../config/company';
import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceAreaMap } from './ServiceAreaMap';

export function ServiceAreas() {
  const { t, f } = useLanguage();
  const [homeBase, ...nearby] = company.serviceAreas;

  return (
    <section id="service-areas" aria-labelledby="service-areas-title" className="bg-sand py-20 sm:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            id="service-areas-title"
            eyebrow={t.serviceAreas.eyebrow}
            title={t.serviceAreas.title}
            subtitle={f(t.serviceAreas.text)}
          />

          <Reveal delay={80} className="mt-9">
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-ink uppercase">
              {t.serviceAreas.listTitle}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <li className="col-span-2 flex items-center gap-3 rounded-md bg-ink px-4 py-3 text-white sm:col-span-3">
                <MapPin className="size-5 text-brick-300" aria-hidden="true" />
                <span className="font-display text-lg font-bold">{homeBase}, TX</span>
                <span className="ml-auto rounded-sm bg-brick-600 px-2 py-0.5 text-[0.6875rem] font-semibold tracking-[0.1em] uppercase">
                  {t.serviceAreas.homeBase}
                </span>
              </li>
              {nearby.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-2 rounded-md border border-ink/10 bg-paper px-3.5 py-2.5 font-medium text-ink"
                >
                  <MapPin className="size-4 shrink-0 text-brick-600" aria-hidden="true" />
                  {city}
                </li>
              ))}
              <li className="col-span-2 flex items-center gap-2 rounded-md border border-dashed border-ink/20 px-3.5 py-2.5 text-muted sm:col-span-3">
                <MapPin className="size-4 shrink-0 text-ink/40" aria-hidden="true" />
                {t.serviceAreas.surrounding}
              </li>
            </ul>
          </Reveal>

          <Reveal delay={140} className="mt-8 flex gap-4 rounded-lg border-l-4 border-brick-600 bg-paper p-5 sm:p-6">
            <Route className="size-8 shrink-0 text-brick-600" strokeWidth={1.6} aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-bold">{t.serviceAreas.outsideTitle}</h3>
              <p className="mt-1 text-muted">{t.serviceAreas.outsideText}</p>
              <a
                href="#contact"
                className="group mt-3 inline-flex min-h-11 items-center gap-2 font-display text-[0.8125rem] font-semibold tracking-[0.08em] text-brick-600 uppercase hover:text-brick-800"
              >
                {t.serviceAreas.outsideCta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6">
          <ServiceAreaMap />
        </Reveal>
      </div>
    </section>
  );
}
