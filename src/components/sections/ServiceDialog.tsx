import { Check, X } from 'lucide-react';
import { useEstimate } from '../../context/EstimateContext';
import { services, type ServiceId } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Photo } from '../ui/Photo';

interface ServiceDialogProps {
  serviceId: ServiceId | null;
  onClose: () => void;
}

/** "Learn More" details for a service, with a shortcut to the estimate form. */
export function ServiceDialog({ serviceId, onClose }: ServiceDialogProps) {
  const { t } = useLanguage();
  const { startEstimate } = useEstimate();
  const service = services.find((item) => item.id === serviceId);
  const copy = service ? t.services.items[service.id] : null;

  return (
    <Modal
      open={Boolean(service)}
      onClose={onClose}
      labelledBy="service-dialog-title"
      className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto overscroll-contain rounded-xl bg-paper text-ink shadow-2xl"
    >
      {service && copy && (
        <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
          {/* First in the DOM so it receives initial focus when the dialog opens. */}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.common.close}
            className="absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-full bg-white/95 text-ink shadow-card transition-colors hover:bg-ink hover:text-white md:top-4 md:right-4"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          <div className="relative aspect-[16/10] md:aspect-auto">
            <Photo
              src={service.image}
              alt={copy.imageAlt}
              widths={[640, 960]}
              sizes="(min-width: 768px) 24rem, 100vw"
              className="size-full md:absolute md:inset-0"
            />
          </div>

          <div className="p-6 sm:p-10">
            <p className="eyebrow">{t.services.title}</p>
            <h2 id="service-dialog-title" className="mt-3 pr-10 text-3xl leading-tight font-bold tracking-[-0.02em]">
              {copy.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{copy.details}</p>

            <h3 className="mt-8 font-display text-sm font-semibold tracking-[0.12em] uppercase">{t.services.scopeTitle}</h3>
            <ul className="mt-4 space-y-3">
              {copy.scope.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brick-600 text-white"
                    aria-hidden="true"
                  >
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">{t.services.scopeNote}</p>

            <Button
              size="lg"
              className="mt-6 w-full sm:w-auto"
              onClick={() => {
                onClose();
                startEstimate(service.projectType);
              }}
            >
              {t.services.dialogCta}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
