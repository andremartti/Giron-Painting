import { useEffect } from 'react';

let locks = 0;

/** Prevents the page behind a menu or dialog from scrolling while `locked` is true. */
export function useScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    locks += 1;
    document.documentElement.classList.add('scroll-locked');
    return () => {
      locks -= 1;
      if (locks === 0) document.documentElement.classList.remove('scroll-locked');
    };
  }, [locked]);
}
