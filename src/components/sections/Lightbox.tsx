import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { useEffect, useRef, type KeyboardEvent, type PointerEvent } from 'react';
import type { Project } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import { photoSrcSet, photoUrl } from '../../lib/photo';
import { Modal } from '../ui/Modal';

interface LightboxProps {
  projects: readonly Project[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

const SWIPE_THRESHOLD = 50;
/** Photos are shown at 3:2 so space is reserved before they finish loading. */
const LIGHTBOX_RATIO = 3 / 2;

export function Lightbox({ projects, index, onChange, onClose }: LightboxProps) {
  const { t, f } = useLanguage();
  const swipeStart = useRef<number | null>(null);
  const project = index === null ? undefined : projects[index];
  const total = projects.length;

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + total) % total);
  };

  // Warm the cache for the neighbouring photos so arrows feel instant.
  useEffect(() => {
    if (index === null || total < 2) return;
    for (const step of [1, -1]) {
      const neighbour = projects[(index + step + total) % total];
      const img = new Image();
      img.src = photoUrl(neighbour.image, 1500, LIGHTBOX_RATIO);
    }
  }, [index, projects, total]);

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') go(1);
    if (event.key === 'ArrowLeft') go(-1);
  };

  const onPointerDown = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse') swipeStart.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent) => {
    if (swipeStart.current === null) return;
    const delta = event.clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(delta) > SWIPE_THRESHOLD) go(delta < 0 ? 1 : -1);
  };

  const copy = project ? t.projects.items[project.id] : null;
  const arrowClass =
    'flex size-12 items-center justify-center rounded-full border border-white/20 bg-night/60 text-white backdrop-blur transition-colors hover:border-white hover:bg-white hover:text-ink';

  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      label={t.projects.lightboxLabel}
      className="h-dvh w-screen bg-transparent text-white"
    >
      {project && copy && (
        <div
          data-dismiss
          onKeyDown={onKeyDown}
          className="flex size-full flex-col px-4 pt-4 pb-6 sm:px-6"
        >
          <div data-dismiss className="flex items-center justify-between gap-4">
            <p className="font-display text-sm font-semibold tracking-[0.12em] text-white/70" aria-live="polite">
              {f(t.projects.counter, { current: (index ?? 0) + 1, total })}
            </p>
            <button type="button" onClick={onClose} aria-label={t.common.close} className={arrowClass}>
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div
            data-dismiss
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center py-4"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <figure key={project.id} className="flex max-h-full animate-fade-in flex-col items-center">
              <img
                src={photoUrl(project.image, 1500, LIGHTBOX_RATIO)}
                srcSet={photoSrcSet(project.image, [960, 1500, 2100], LIGHTBOX_RATIO)}
                sizes="(min-width: 1280px) 72rem, 100vw"
                width={1500}
                height={1000}
                alt={copy.alt}
                className="max-h-[calc(100dvh-13rem)] w-auto max-w-full rounded-md object-contain shadow-2xl select-none"
                draggable={false}
              />
              <figcaption className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
                <span className="font-display text-lg font-bold sm:text-xl">{copy.title}</span>
                <span className="text-sm text-white/65">{t.projects.categories[project.category]}</span>
                <span className="flex items-center gap-1 text-sm text-white/65">
                  <MapPin className="size-3.5" aria-hidden="true" />
                  {project.location}
                </span>
              </figcaption>
            </figure>
          </div>

          {total > 1 && (
            <div className="flex items-center justify-center gap-4 sm:absolute sm:inset-x-6 sm:top-1/2 sm:-translate-y-1/2 sm:justify-between sm:gap-0 sm:pointer-events-none">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={t.projects.previous}
                className={`${arrowClass} sm:pointer-events-auto`}
              >
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={t.projects.next}
                className={`${arrowClass} sm:pointer-events-auto`}
              >
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
