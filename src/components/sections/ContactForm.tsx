import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode, type Ref } from 'react';
import { useEstimate } from '../../context/EstimateContext';
import { contactMethods, projectTypes, propertyTypes } from '../../data/projectTypes';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  DETAILS_MIN_LENGTH,
  FIELD_ORDER,
  emptyEstimateForm,
  formatPhone,
  validateField,
  validateForm,
  type EstimateFormValues,
  type FieldName,
  type FormErrors,
} from '../../lib/estimateForm';
import { submitEstimate, type SubmitResult } from '../../lib/submitEstimate';
import { Button } from '../ui/Button';
import { ContactDetails } from '../ui/ContactDetails';

type Status = 'idle' | 'submitting' | SubmitResult | 'error';

const fieldId = (name: FieldName) => `estimate-${name}`;
const errorId = (name: FieldName) => `estimate-${name}-error`;

function RequiredMark() {
  return (
    <span className="ml-0.5 text-brick-600" aria-hidden="true">
      *
    </span>
  );
}

function FieldError({ name, message }: { name: FieldName; message?: string }) {
  if (!message) return null;
  return (
    <p id={errorId(name)} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-brick-700">
      <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function Notice({
  tone,
  title,
  children,
  focusRef,
}: {
  tone: 'success' | 'warning';
  title: string;
  children: ReactNode;
  focusRef?: Ref<HTMLDivElement>;
}) {
  const success = tone === 'success';
  const Icon = success ? CircleCheck : CircleAlert;
  return (
    <div
      ref={focusRef}
      tabIndex={-1}
      role={success ? 'status' : 'alert'}
      className={`animate-rise-in rounded-lg border p-5 focus:outline-none sm:p-6 ${
        success ? 'border-emerald-700/25 bg-emerald-50' : 'border-brick-600/30 bg-brick-50'
      }`}
    >
      <div className="flex gap-3.5">
        <Icon className={`mt-0.5 size-6 shrink-0 ${success ? 'text-emerald-700' : 'text-brick-600'}`} aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="font-display text-lg font-bold text-ink">{title}</p>
          <div className="mt-1.5 text-ink-soft">{children}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Free-estimate request form with accessible, translated validation.
 * Submission is handled by `src/lib/submitEstimate.ts`.
 */
export function ContactForm() {
  const { t, f, lang } = useLanguage();
  const { request } = useEstimate();
  const form = t.contact.form;
  const titleId = useId();

  const [values, setValues] = useState<EstimateFormValues>(emptyEstimateForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const noticeRef = useRef<HTMLDivElement>(null);

  // A service's "Request an Estimate" button pre-selects the project type.
  useEffect(() => {
    if (!request) return;
    setStatus((current) => (current === 'sent' ? 'idle' : current));
    setValues((current) => ({ ...current, projectType: request.projectType }));
    setErrors((current) => ({ ...current, projectType: undefined }));
    const timer = window.setTimeout(() => {
      document.getElementById(fieldId('projectType'))?.focus({ preventScroll: true });
    }, 500);
    return () => window.clearTimeout(timer);
  }, [request]);

  // Move focus to result messages so screen reader and keyboard users notice them.
  useEffect(() => {
    if (status === 'sent' || status === 'not-configured' || status === 'error') {
      noticeRef.current?.focus({ preventScroll: true });
      noticeRef.current?.scrollIntoView({ block: 'nearest' });
    }
  }, [status]);

  const message = (name: FieldName) => {
    const key = errors[name];
    return key ? f(t.contact.validation[key], { min: DETAILS_MIN_LENGTH }) : undefined;
  };

  const setField = <K extends keyof EstimateFormValues>(name: K, value: EstimateFormValues[K], validateNow = false) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (name !== 'website' && (submitAttempted || validateNow || errors[name as FieldName])) {
      setErrors((current) => ({ ...current, [name]: validateField(name as FieldName, next) }));
    }
  };

  const handleBlur = (name: FieldName) => {
    let next = values;
    if (name === 'phone' && values.phone) {
      next = { ...values, phone: formatPhone(values.phone) };
      setValues(next);
    }
    // Don't flag empty fields just because someone tabbed through them.
    if (submitAttempted || next[name].trim()) {
      setErrors((current) => ({ ...current, [name]: validateField(name, next) }));
    }
  };

  const focusField = (name: FieldName) => {
    const element =
      name === 'propertyType' || name === 'contactMethod'
        ? document.querySelector<HTMLInputElement>(`input[name="${name}"]`)
        : document.getElementById(fieldId(name));
    element?.focus();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    setSubmitAttempted(true);
    const found = validateForm(values);
    setErrors(found);
    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      setStatus('idle');
      focusField(firstInvalid);
      return;
    }

    setStatus('submitting');
    try {
      const result = await submitEstimate(values, lang);
      setStatus(result);
      if (result === 'sent') {
        setValues(emptyEstimateForm);
        setErrors({});
        setSubmitAttempted(false);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const describedBy = (name: FieldName, hintId?: string) =>
    [hintId, errors[name] ? errorId(name) : undefined].filter(Boolean).join(' ') || undefined;

  const hasErrors = submitAttempted && Object.values(errors).some(Boolean);

  const card = 'rounded-xl bg-white p-6 shadow-lift ring-1 ring-ink/5 sm:p-10';

  if (status === 'sent') {
    return (
      <div className={card}>
        <Notice tone="success" title={form.successTitle} focusRef={noticeRef}>
          <p>{form.successText}</p>
        </Notice>
        <Button variant="outline-dark" className="mt-6" onClick={() => setStatus('idle')}>
          {form.sendAnother}
        </Button>
      </div>
    );
  }

  const labelClass = 'mb-2 block text-sm font-semibold text-ink';
  const legendClass = 'mb-2.5 text-sm font-semibold text-ink';
  const choiceClass =
    'flex min-h-12 min-w-[8.5rem] flex-1 cursor-pointer items-center gap-3 rounded-md border border-line bg-white px-4 py-2.5 text-[0.9375rem] font-medium text-ink transition-colors hover:border-stone has-[:checked]:border-brick-600 has-[:checked]:bg-brick-50';

  return (
    <form noValidate onSubmit={handleSubmit} aria-labelledby={titleId} className={`relative ${card}`}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <h3 id={titleId} className="font-display text-2xl font-bold tracking-[-0.01em] text-ink">
          {form.title}
        </h3>
        <p className="text-sm text-muted">{form.requiredNote}</p>
      </div>

      {hasErrors && (
        <p role="alert" className="mt-6 flex items-center gap-2 rounded-md bg-brick-50 px-4 py-3 text-sm font-semibold text-brick-700">
          <CircleAlert className="size-4 shrink-0" aria-hidden="true" />
          {form.errorSummary}
        </p>
      )}

      <div className="mt-7 grid gap-x-5 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={fieldId('fullName')} className={labelClass}>
            {form.fullName}
            <RequiredMark />
          </label>
          <input
            id={fieldId('fullName')}
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={(event) => setField('fullName', event.target.value)}
            onBlur={() => handleBlur('fullName')}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={describedBy('fullName')}
            className="field-input"
          />
          <FieldError name="fullName" message={message('fullName')} />
        </div>

        <div>
          <label htmlFor={fieldId('email')} className={labelClass}>
            {form.email}
            <RequiredMark />
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
            value={values.email}
            onChange={(event) => setField('email', event.target.value)}
            onBlur={() => handleBlur('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            className="field-input"
          />
          <FieldError name="email" message={message('email')} />
        </div>

        <div>
          <label htmlFor={fieldId('phone')} className={labelClass}>
            {form.phone}
            <RequiredMark />
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required
            value={values.phone}
            onChange={(event) => setField('phone', event.target.value)}
            onBlur={() => handleBlur('phone')}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            className="field-input"
          />
          <FieldError name="phone" message={message('phone')} />
        </div>

        <div>
          <label htmlFor={fieldId('projectType')} className={labelClass}>
            {form.projectType}
            <RequiredMark />
          </label>
          <div className="relative">
            <select
              id={fieldId('projectType')}
              name="projectType"
              required
              value={values.projectType}
              onChange={(event) =>
                setField('projectType', event.target.value as EstimateFormValues['projectType'], true)
              }
              onBlur={() => handleBlur('projectType')}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={describedBy('projectType')}
              className={`field-input appearance-none pr-11 ${values.projectType ? '' : 'text-muted'}`}
            >
              <option value="" disabled>
                {form.projectTypePlaceholder}
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="text-ink">
                  {form.projectTypes[type]}
                </option>
              ))}
            </select>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted"
            >
              <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <FieldError name="projectType" message={message('projectType')} />
        </div>

        <fieldset aria-describedby={describedBy('propertyType')} className="min-w-0">
          <legend className={legendClass}>
            {form.propertyType}
            <RequiredMark />
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {propertyTypes.map((type) => (
              <label key={type} className={choiceClass}>
                <input
                  type="radio"
                  name="propertyType"
                  value={type}
                  required
                  checked={values.propertyType === type}
                  onChange={() => setField('propertyType', type, true)}
                  aria-invalid={Boolean(errors.propertyType)}
                  className="size-4.5 shrink-0 accent-brick-600"
                />
                {form.propertyTypes[type]}
              </label>
            ))}
          </div>
          <FieldError name="propertyType" message={message('propertyType')} />
        </fieldset>

        <fieldset aria-describedby={describedBy('contactMethod')} className="min-w-0 sm:col-span-2">
          <legend className={legendClass}>
            {form.contactMethod}
            <RequiredMark />
          </legend>
          <div className="flex flex-wrap gap-2.5">
            {contactMethods.map((method) => (
              <label key={method} className={choiceClass}>
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  required
                  checked={values.contactMethod === method}
                  onChange={() => setField('contactMethod', method, true)}
                  aria-invalid={Boolean(errors.contactMethod)}
                  className="size-4.5 shrink-0 accent-brick-600"
                />
                {form.contactMethods[method]}
              </label>
            ))}
          </div>
          <FieldError name="contactMethod" message={message('contactMethod')} />
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor={fieldId('details')} className={labelClass}>
            {form.details}
            <RequiredMark />
          </label>
          <p id="estimate-details-hint" className="-mt-1 mb-2.5 text-sm text-muted">
            {form.detailsHint}
          </p>
          <textarea
            id={fieldId('details')}
            name="details"
            rows={5}
            required
            value={values.details}
            onChange={(event) => setField('details', event.target.value)}
            onBlur={() => handleBlur('details')}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={describedBy('details', 'estimate-details-hint')}
            className="field-input min-h-36 resize-y"
          />
          <FieldError name="details" message={message('details')} />
        </div>
      </div>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
        <label htmlFor="estimate-website">{form.honeypot}</label>
        <input
          id="estimate-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => setField('website', event.target.value)}
        />
      </div>

      {(status === 'not-configured' || status === 'error') && (
        <div className="mt-8">
          <Notice
            tone="warning"
            focusRef={noticeRef}
            title={status === 'error' ? form.failureTitle : form.notConfiguredTitle}
          >
            <p>{status === 'error' ? form.failureText : form.notConfiguredText}</p>
            <div className="mt-4">
              <ContactDetails compact />
            </div>
          </Notice>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === 'submitting'} className="mt-8 w-full">
        {status === 'submitting' ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            {form.submitting}
          </>
        ) : (
          <>
            {form.submit}
            <Send className="size-4 transition-transform group-hover/button:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  );
}
