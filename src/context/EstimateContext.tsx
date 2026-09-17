import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { ProjectType } from '../data/projectTypes';

interface EstimateRequest {
  projectType: ProjectType;
  /** Changes on every request so the form reacts even if the type is the same. */
  nonce: number;
}

interface EstimateContextValue {
  request: EstimateRequest | null;
  /** Pre-selects a project type in the estimate form and scrolls to it. */
  startEstimate: (projectType: ProjectType) => void;
}

const EstimateContext = createContext<EstimateContextValue | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<EstimateRequest | null>(null);

  const startEstimate = useCallback((projectType: ProjectType) => {
    setRequest({ projectType, nonce: Date.now() });
    document.getElementById('contact')?.scrollIntoView({ block: 'start' });
  }, []);

  const value = useMemo(() => ({ request, startEstimate }), [request, startEstimate]);

  return <EstimateContext.Provider value={value}>{children}</EstimateContext.Provider>;
}

export function useEstimate(): EstimateContextValue {
  const context = useContext(EstimateContext);
  if (!context) throw new Error('useEstimate must be used inside <EstimateProvider>');
  return context;
}
