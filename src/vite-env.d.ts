/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL that receives estimate requests as a JSON POST (Formspree, custom API, etc.). */
  readonly VITE_ESTIMATE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
