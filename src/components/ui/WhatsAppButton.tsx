import { whatsappHref } from '../../config/company';
import { useLanguage } from '../../i18n/LanguageContext';
import { WhatsAppIcon } from './SocialIcons';

/** Floating "chat on WhatsApp" button in the bottom-right corner. */
export function WhatsAppButton() {
  const { t, f } = useLanguage();
  const href = whatsappHref(f(t.common.whatsappMessage));
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.common.whatsapp} ${t.common.newTab}`}
      title={t.common.whatsapp}
      className="fixed right-4 bottom-4 z-40 flex size-14 animate-pop-in items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-[0_12px_28px_-10px_rgb(0_0_0/0.55)] transition-[transform,background-color] duration-200 [animation-delay:1.2s] hover:scale-105 hover:bg-[#177a41] sm:right-6 sm:bottom-6 sm:size-15"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  );
}
