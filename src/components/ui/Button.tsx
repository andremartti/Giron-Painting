import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'light' | 'outline-light' | 'outline-dark';
type Size = 'md' | 'lg';

const base =
  'group/button inline-flex items-center justify-center gap-2.5 rounded-md font-display font-semibold tracking-[0.06em] uppercase transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out active:translate-y-px disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'bg-brick-600 text-white shadow-[0_10px_24px_-12px_rgb(165_58_36/0.9)] hover:bg-brick-700 hover:shadow-[0_14px_28px_-12px_rgb(165_58_36/0.95)]',
  light: 'bg-white text-ink hover:bg-sand',
  'outline-light': 'border border-white/55 text-white hover:border-white hover:bg-white/10',
  'outline-dark': 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white',
};

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-[0.8125rem]',
  lg: 'min-h-13 px-7 text-sm sm:min-h-14',
};

interface StyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function buttonClasses({ variant = 'primary', size = 'md', className = '' }: Omit<StyleProps, 'children'>) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...props
}: StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </a>
  );
}

export function Button({
  variant,
  size,
  className,
  children,
  type = 'button',
  ...props
}: StyleProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
