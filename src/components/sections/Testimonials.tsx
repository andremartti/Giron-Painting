import { Quote, UserRound } from 'lucide-react';
import { isPlaceholder } from '../../config/company';
import { testimonials } from '../../data/testimonials';
import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

/** Customer quotes from `src/data/testimonials.ts`. */
export function Testimonials() {
  const { t } = useLanguage();
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-paper py-20 sm:py-28">
      <div className="container-site">
        <SectionHeader
          id="testimonials-title"
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
          align="center"
        />

        <ul aria-label={t.testimonials.listLabel} className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.id} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-lg border border-line bg-white p-7 shadow-card sm:p-8">
                <Quote className="size-9 text-brick-600" strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sand font-display font-bold text-ink-soft"
                  >
                    {isPlaceholder(testimonial.name) ? (
                      <UserRound className="size-5" />
                    ) : (
                      testimonial.name.trim().charAt(0).toUpperCase()
                    )}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display font-bold text-ink">{testimonial.name}</span>
                    <span className="text-sm text-muted">
                      {testimonial.location}
                      {testimonial.category && ` · ${t.projects.categories[testimonial.category]}`}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
