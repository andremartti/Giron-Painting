import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { services, type Service, type ServiceId } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { ServiceDialog } from './ServiceDialog';

function ServiceCard({ service, onOpen }: { service: Service; onOpen: () => void }) {
  const { t } = useLanguage();
  const copy = t.services.items[service.id];
  const Icon = service.icon;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-card ring-1 ring-ink/5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lift has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-brick-500">
      <div className="aspect-[4/3] overflow-hidden">
        <Photo
          src={service.image}
          alt={copy.imageAlt}
          ratio={4 / 3}
          position={service.position}
          widths={[400, 640, 880]}
          sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="size-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-6 pb-6">
        <span
          className="-mt-7 flex size-14 items-center justify-center rounded-md bg-brick-600 text-white shadow-[0_12px_24px_-12px_rgb(134_46_29/0.9)] ring-4 ring-white transition-colors duration-300 group-hover:bg-ink"
          aria-hidden="true"
        >
          <Icon className="size-6" strokeWidth={1.8} />
        </span>
        <h3 className="mt-5 text-xl leading-tight font-bold tracking-[-0.01em] text-ink">{copy.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{copy.description}</p>
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="mt-6 inline-flex items-center gap-2 self-start font-display text-[0.8125rem] font-semibold tracking-[0.08em] text-brick-600 uppercase after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {t.services.learnMore}
          <span className="sr-only">: {copy.title}</span>
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export function Services() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<ServiceId | null>(null);

  return (
    <section id="services" aria-labelledby="services-title" className="bg-paper py-20 sm:py-28">
      <div className="container-site">
        <SectionHeader
          id="services-title"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          align="split"
        />

        <ul className="mt-12 grid gap-x-5 gap-y-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal as="li" key={service.id} delay={(index % 4) * 70}>
              <ServiceCard service={service} onOpen={() => setOpenId(service.id)} />
            </Reveal>
          ))}
        </ul>
      </div>

      <ServiceDialog serviceId={openId} onClose={() => setOpenId(null)} />
    </section>
  );
}
