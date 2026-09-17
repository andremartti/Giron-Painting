import type { ContactMethod, ProjectType, PropertyType } from '../data/projectTypes';
import type { Translations } from '../i18n/en';

export interface EstimateFormValues {
  fullName: string;
  email: string;
  phone: string;
  projectType: ProjectType | '';
  propertyType: PropertyType | '';
  contactMethod: ContactMethod | '';
  details: string;
  /** Honeypot: hidden from people, often filled in by spam bots. */
  website: string;
}

export type FieldName = Exclude<keyof EstimateFormValues, 'website'>;

/** Error message keys (not text), so errors re-translate when the language changes. */
export type ValidationKey = keyof Translations['contact']['validation'];
export type FormErrors = Partial<Record<FieldName, ValidationKey>>;

export const DETAILS_MIN_LENGTH = 20;

/** Order used to focus the first invalid field. */
export const FIELD_ORDER: readonly FieldName[] = [
  'fullName',
  'email',
  'phone',
  'projectType',
  'propertyType',
  'contactMethod',
  'details',
];

export const emptyEstimateForm: EstimateFormValues = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  propertyType: '',
  contactMethod: '',
  details: '',
  website: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidUsPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

export function validateField(name: FieldName, values: EstimateFormValues): ValidationKey | undefined {
  const value = values[name].trim();
  switch (name) {
    case 'fullName':
      return value.length < 2 ? 'nameRequired' : undefined;
    case 'email':
      if (!value) return 'emailRequired';
      return EMAIL_PATTERN.test(value) ? undefined : 'emailInvalid';
    case 'phone':
      if (!value) return 'phoneRequired';
      return isValidUsPhone(value) ? undefined : 'phoneInvalid';
    case 'projectType':
      return value ? undefined : 'projectTypeRequired';
    case 'propertyType':
      return value ? undefined : 'propertyTypeRequired';
    case 'contactMethod':
      return value ? undefined : 'contactMethodRequired';
    case 'details':
      if (!value) return 'detailsRequired';
      return value.length < DETAILS_MIN_LENGTH ? 'detailsShort' : undefined;
  }
}

export function validateForm(values: EstimateFormValues): FormErrors {
  const errors: FormErrors = {};
  for (const name of FIELD_ORDER) {
    const error = validateField(name, values);
    if (error) errors[name] = error;
  }
  return errors;
}

/** Formats U.S. numbers as (972) 555-0123 while typing. */
export function formatPhone(value: string): string {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  digits = digits.slice(0, 10);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
