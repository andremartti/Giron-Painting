import type { Language } from '../i18n/LanguageContext';
import type { EstimateFormValues } from './estimateForm';

/**
 * Sends an estimate request.
 *
 * Connecting a form service:
 *  1. Create a form endpoint (e.g. Formspree, Basin, Getform) or your own API
 *     route that accepts a JSON POST — for example one that sends the email
 *     with Resend.
 *  2. Put the URL in `VITE_ESTIMATE_FORM_ENDPOINT` (see `.env.example`). On
 *     GitHub Pages, add it as a repository variable with the same name.
 *
 * Until an endpoint is configured, the form still validates normally and then
 * asks visitors to call or email instead, so no request is silently lost.
 */

export type SubmitResult = 'sent' | 'not-configured';

const endpoint = (import.meta.env.VITE_ESTIMATE_FORM_ENDPOINT ?? '').trim();

export interface EstimatePayload extends Omit<EstimateFormValues, 'website'> {
  language: Language;
  submittedAt: string;
  page: string;
}

export async function submitEstimate(values: EstimateFormValues, language: Language): Promise<SubmitResult> {
  const { website, ...fields } = values;

  // Honeypot filled in: pretend it worked so bots don't retry.
  if (website) return 'sent';

  const payload: EstimatePayload = {
    ...fields,
    language,
    submittedAt: new Date().toISOString(),
    page: window.location.href,
  };

  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.info('[estimate form] No VITE_ESTIMATE_FORM_ENDPOINT set. Payload that would be sent:', payload);
    }
    return 'not-configured';
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Estimate request failed with status ${response.status}`);
  }
  return 'sent';
}
