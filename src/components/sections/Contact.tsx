import { MapPin } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ContactDetails } from '../ui/ContactDetails';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { ContactForm } from './ContactForm';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-paper py-20 sm:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeader
            id="contact-title"
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />

          <Reveal delay={80} className="mt-10 overflow-hidden rounded-xl bg-night text-white shadow-lift">
            <div className="p-7 sm:p-9">
              <h3 className="font-display text-sm font-semibold tracking-[0.16em] text-white/60 uppercase">
                {t.contact.infoTitle}
              </h3>
              <div className="mt-6">
                <ContactDetails tone="dark" />
              </div>
            </div>
            <p className="flex items-center gap-2.5 border-t border-white/10 bg-white/5 px-7 py-4 text-sm text-white/75 sm:px-9">
              <MapPin className="size-4 shrink-0 text-brick-300" aria-hidden="true" />
              {t.contact.serviceArea}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
