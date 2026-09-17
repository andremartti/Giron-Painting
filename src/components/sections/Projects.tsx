import { Expand, MapPin } from 'lucide-react';
import { useMemo, useState } from 'react';
import { projectCategories, projects, type ProjectCategory } from '../../data/projects';
import { useLanguage } from '../../i18n/LanguageContext';
import { Photo } from '../ui/Photo';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { Lightbox } from './Lightbox';

type Filter = 'all' | ProjectCategory;

export function Projects() {
  const { t, f } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: t.projects.all },
    ...projectCategories.map((category) => ({ value: category, label: t.projects.categories[category] })),
  ];

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-sand py-20 sm:py-28">
      <div className="container-site">
        <SectionHeader
          id="projects-title"
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
          align="split"
        />

        <Reveal className="mt-10 flex flex-col gap-4 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label={t.projects.filterLabel}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
          >
            {filters.map(({ value, label }) => {
              const selected = filter === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(value)}
                  className={`min-h-11 shrink-0 rounded-full border px-4.5 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${
                    selected
                      ? 'border-ink bg-ink text-white'
                      : 'border-ink/15 bg-paper text-ink-soft hover:border-ink/40 hover:text-ink'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <p className="font-mono text-xs text-muted">{t.projects.placeholderNote}</p>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          {f(t.projects.showing, { count: visible.length })}
        </p>

        <ul
          className={`mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ${filter === 'all' ? 'lg:grid-flow-dense' : ''}`}
        >
          {visible.map((project, index) => {
            const copy = t.projects.items[project.id];
            const featured = filter === 'all' && project.featured;
            return (
              <li
                key={`${filter}-${project.id}`}
                className={`animate-pop-in ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-haspopup="dialog"
                  aria-label={`${f(t.projects.open, { title: copy.title })} — ${t.projects.categories[project.category]}, ${project.location}`}
                  className="group relative block size-full overflow-hidden rounded-lg bg-stone text-left shadow-card"
                >
                  <Photo
                    src={project.image}
                    alt={copy.alt}
                    ratio={4 / 3}
                    widths={featured ? [640, 960, 1280] : [480, 720, 960]}
                    sizes={
                      featured
                        ? '(min-width: 1024px) 50rem, (min-width: 640px) 50vw, 100vw'
                        : '(min-width: 1024px) 25rem, (min-width: 640px) 50vw, 100vw'
                    }
                    className="aspect-[4/3] size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/25 to-transparent transition-opacity duration-300"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 text-white sm:p-6">
                    <span className="rounded-sm bg-brick-600 px-2 py-1 text-[0.6875rem] font-semibold tracking-[0.12em] uppercase">
                      {t.projects.categories[project.category]}
                    </span>
                    <span
                      className={`mt-3 font-display leading-tight font-bold ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}
                    >
                      {copy.title}
                    </span>
                    <span className="mt-1.5 flex items-center gap-1.5 text-sm text-white/75">
                      <MapPin className="size-3.5" aria-hidden="true" />
                      {project.location}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-4 flex size-10 translate-y-1 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                  >
                    <Expand className="size-4" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <Lightbox
        projects={visible}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
