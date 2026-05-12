/**
 * EHR / patient portal integration.
 * The practice's existing EHR exposes a deep-link patient portal. We wrap it
 * here so swapping vendors only changes one file.
 */

const PORTAL = import.meta.env.VITE_EHR_URL || '#'

export function openPortal(target: 'home' | 'book' | 'messages' = 'home') {
  const url = portalUrl(target)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function portalUrl(target: 'home' | 'book' | 'messages' = 'home') {
  if (PORTAL === '#') return PORTAL
  const path = target === 'book' ? '/appointments/new' : target === 'messages' ? '/messages' : ''
  return `${PORTAL.replace(/\/$/, '')}${path}`
}
