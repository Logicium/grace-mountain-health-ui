/**
 * EHR / patient portal integration (Kareo).
 * The practice's Kareo patient portal uses a single login entry point. We wrap
 * it here so swapping vendors only changes one file. The URL is hardcoded as the
 * default and can be overridden via VITE_EHR_URL.
 */

export const PORTAL_URL = 'https://portal.kareo.com/pp-webapp/app/new/login'

const PORTAL = import.meta.env.VITE_EHR_URL || PORTAL_URL

export function openPortal() {
  window.open(portalUrl(), '_blank', 'noopener,noreferrer')
}

export function portalUrl() {
  return PORTAL
}
