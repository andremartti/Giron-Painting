import { ArrowRight, Phone } from 'lucide-react';
import { company, phoneHref } from '../../config/company';
import { images } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';
import { ButtonLink } from '../ui/Button';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';

export function EstimateCta() {
  const { t, f } = useLanguage();
  const callHref = phoneHref();

  return (
    <section aria-labelledby="estimate-cta-title" className="relative isolate overflow-hidden bg-night py-24 text-white sm:py-32">
      <Photo
        src={images.estimateCta}
        alt=""
        widths={[768, 1280, 1920]}
        sizes="100vw"
        className="absolute inset-0 -z-20 size-full"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(19_18_16/0.94)_0%,rgb(19_18_16/0.8)_50%,rgb(134_46_29/0.55)_100%)]"
      />

      <Reveal className="container-site">
        <div className="max-w-2xl border-l-4 border-brick-500 pl-6 sm:pl-8">
          <h2 id="estimate-cta-title" className="text-4xl leading-[1.05] font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            {t.estimateCta.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">{t.estimateCta.text}</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:ml-10 sm:flex-row sm:gap-4">
          <ButtonLink href="#contact" size="lg" className="w-full sm:w-auto">
            {t.estimateCta.button}
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" aria-hidden="true" />
          </ButtonLink>
          {callHref && (
            <ButtonLink href={callHref} size="lg" variant="outline-light" className="w-full backdrop-blur-sm sm:w-auto">
              <Phone className="size-4" aria-hidden="true" />
              {f(t.common.call, { phone: company.phone.display })}
            </ButtonLink>
          )}
        </div>
      </Reveal>
    </section>
  );
}
