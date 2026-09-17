import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

/** Four-step timeline: horizontal on desktop, vertical on mobile. */
export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" aria-labelledby="process-title" className="bg-paper py-20 sm:py-28">
      <div className="container-site">
        <SectionHeader
          id="process-title"
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          subtitle={t.process.subtitle}
          align="center"
        />

        <div className="relative mt-14 lg:mt-20">
          {/* Connector lines */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-10 left-7 w-px bg-gradient-to-b from-brick-600 via-line to-line lg:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-brick-600 via-line to-line lg:block"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {t.process.steps.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 90}
                className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-7 lg:text-center"
              >
                <span
                  className={`relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold shadow-card ${
                    index === 0 ? 'bg-brick-600 text-white' : 'border border-line bg-white text-brick-600'
                  }`}
                >
                  <span className="sr-only">{index + 1}. </span>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </span>
                <div className="pt-2.5 lg:max-w-64 lg:pt-0">
                  <h3 className="text-xl font-bold tracking-[-0.01em]">{step.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
