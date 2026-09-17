import '@fontsource-variable/archivo';
import '@fontsource-variable/hanken-grotesk';
import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './i18n/LanguageContext';

// Enables scroll-reveal styles only when JavaScript runs, so content is never hidden without it.
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
