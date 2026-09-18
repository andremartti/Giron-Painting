import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { ComponentType, ReactNode, SVGProps } from 'react';
import { company, emailHref, fullAddress, hasEmail, phoneHref, whatsappHref } from '../../config/company';
import { useLanguage } from '../../i18n/LanguageContext';
import { WhatsAppIcon } from './SocialIcons';

interface ContactItemProps {
  icon: ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
  label: string;
  href?: string;
  /** Opens in a new tab (for links that leave the site). */
  external?: boolean;
  tone: 'light' | 'dark';
  children: ReactNode;
}

function ContactItem({ icon: Icon, label, href, external = false, tone, children }: ContactItemProps) {
  const { t } = useLanguage();
  const dark = tone === 'dark';
  const value = href ? (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className={`font-semibold underline-offset-4 transition-colors hover:underline ${dark ? 'text-white hover:text-brick-300' : 'text-ink hover:text-brick-600'}`}
    >
      {children}
      {external && <span className="sr-only"> {t.common.newTab}</span>}
    </a>
  ) : (
    <span className={`font-semibold ${dark ? 'text-white' : 'text-ink'}`}>{children}</span>
  );

  return (
    <li className="flex gap-4">
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-md ${dark ? 'bg-white/8 text-brick-300' : 'bg-brick-50 text-brick-600'}`}
        aria-hidden="true"
      >
        <Icon className="size-5" strokeWidth={1.8} />
      </span>
      <span className="flex min-w-0 flex-col gap-0.5 pt-0.5">
        <span className={`text-xs font-semibold tracking-[0.14em] uppercase ${dark ? 'text-white/60' : 'text-muted'}`}>
          {label}
        </span>
        <span className="break-words">{value}</span>
      </span>
    </li>
  );
}

/**
 * Phone, WhatsApp, email, address, and hours from `src/config/company.ts`.
 * Phone and email become clickable links as soon as real values are entered;
 * an empty email or WhatsApp number is hidden.
 */
export function ContactDetails({ tone = 'light', compact = false }: { tone?: 'light' | 'dark'; compact?: boolean }) {
  const { t, f, lang } = useLanguage();
  const whatsapp = whatsappHref(f(t.common.whatsappMessage));

  return (
    <ul className={compact ? 'space-y-4' : 'space-y-6'}>
      <ContactItem icon={Phone} label={t.contact.phone} href={phoneHref()} tone={tone}>
        {company.phone.display}
      </ContactItem>
      {whatsapp && (
        <ContactItem icon={WhatsAppIcon} label={t.contact.whatsapp} href={whatsapp} external tone={tone}>
          {company.phone.display}
        </ContactItem>
      )}
      {hasEmail() && (
        <ContactItem icon={Mail} label={t.contact.email} href={emailHref()} tone={tone}>
          {company.email}
        </ContactItem>
      )}
      <ContactItem icon={MapPin} label={t.contact.address} tone={tone}>
        {fullAddress()}
      </ContactItem>
      {!compact && (
        <ContactItem icon={Clock} label={t.contact.hours} tone={tone}>
          {company.hours[lang]}
        </ContactItem>
      )}
    </ul>
  );
}
