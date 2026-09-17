import { useEffect, useState } from 'react';

/**
 * Id of the section the reader is currently "inside": the one whose top edge
 * most recently scrolled past 40% of the viewport height.
 */
export function useActiveSection(ids: readonly string[], enabled = true): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      let closestTop = -Infinity;
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > closestTop) {
          closestTop = top;
          current = id;
        }
      }
      // At the very bottom of the page, the last section is active even if it's short.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = ids[ids.length - 1] ?? current;
      }
      setActive(current);
    };

    // A handful of rect reads per scroll event is cheap; React skips re-renders when the id is unchanged.
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids, enabled]);

  return enabled ? active : null;
}
