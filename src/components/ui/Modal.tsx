import { useEffect, useRef, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** id of the element that names the dialog. */
  labelledBy?: string;
  /** Accessible name when there is no visible title. */
  label?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Accessible modal built on the native <dialog> element, which provides focus
 * trapping, Escape-to-close, and focus restoration out of the box.
 *
 * Clicking the backdrop — or any element marked with `data-dismiss` — closes it.
 */
export function Modal({ open, onClose, labelledBy, label, className = '', children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  useScrollLock(open);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const handleClick = (event: MouseEvent<HTMLDialogElement>) => {
    const target = event.target as HTMLElement;
    if (target === event.currentTarget || target.hasAttribute('data-dismiss')) onClose();
  };

  // Browsers close modal dialogs on Escape natively, but not every embedded browser does — handle it explicitly.
  const handleKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
    }
  };

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      aria-label={label}
      onClose={onClose}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`m-auto max-h-none max-w-none border-0 p-0 open:animate-pop-in backdrop:animate-fade-in ${className}`}
    >
      {open && children}
    </dialog>
  );
}
