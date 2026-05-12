/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRAPI_URL: string
  readonly VITE_STRAPI_TOKEN?: string
  readonly VITE_EHR_URL: string
  readonly VITE_PHONE: string
  readonly VITE_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
