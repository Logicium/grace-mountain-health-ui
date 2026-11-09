/**
 * Who this site is, for search engines and assistants.
 *
 * The one record behind every title suffix, canonical, share card, robots
 * policy and the MedicalBusiness node on the home page. Pure data: the
 * prerender imports it under Node and the app imports it in the browser.
 *
 * Every fact here was already on the site (the footer, the contact page and
 * the structured data index.html used to carry). The client's published
 * Search settings from the portal lay over this at build; see
 * scripts/prerender.ts.
 */
import type { SiteConfig } from '@/kit/seo'

export const site: SiteConfig = {
  siteUrl: 'https://www.gracemountainhealth.co',
  name: 'Grace Mountain Health & Wellness',
  tagline: 'Primary care in Trinidad, Colorado',
  description:
    'Modern primary care and whole-person wellness in Trinidad, Colorado. Long visits, same-week appointments, telehealth and transparent cash pricing.',
  lang: 'en',
  locale: 'en_US',
  image: { url: '/og/default.png', width: 1200, height: 630, alt: 'Grace Mountain Health & Wellness, modern primary care in Trinidad, Colorado' },
  entity: {
    type: 'MedicalBusiness',
    name: 'Grace Mountain Health & Wellness',
    description:
      'Modern primary care and whole-person wellness at the foot of the Sangre de Cristo Mountains in Trinidad, Colorado. Founded by Jeff and Dena Lewis for the families of Southern Colorado and Northern New Mexico.',
    logo: '/logo.png',
    image: '/og/default.png',
    email: 'info@gracemountainhealth.co',
    telephone: '+1-719-752-0250',
    address: {
      streetAddress: '107 Moores Canyon Rd, Suite 4',
      addressLocality: 'Trinidad',
      addressRegion: 'CO',
      postalCode: '81082',
      addressCountry: 'US',
    },
    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
      { days: ['Saturday'], opens: '09:00', closes: '12:00' },
    ],
    areaServed: ['Trinidad, Colorado', 'Southern Colorado', 'Northern New Mexico'],
    knowsAbout: [
      'Primary care',
      'Same-day sick visits',
      'Chronic disease management',
      'Weight management',
      'Telehealth',
      'Direct primary care',
      'IV hydration',
      'Point-of-care testing',
    ],
    extra: {
      faxNumber: '+1-719-435-9807',
      founder: [
        { '@type': 'Person', name: 'Jeff Lewis', jobTitle: 'Co-Founder' },
        { '@type': 'Person', name: 'Dena Lewis', jobTitle: 'Co-Founder & Provider' },
      ],
    },
  },
  crawlers: { training: 'allow' },
  llmsSummary:
    'Grace Mountain Health & Wellness is a locally owned primary care practice in Trinidad, Colorado, founded by Jeff Lewis, BSN, RN, NRP and Dena Lewis, DNP, AGACNP-BC, RN. It offers primary care, same-day sick visits, chronic disease management, weight and wellness programs and telehealth for families across Southern Colorado and Northern New Mexico, with transparent cash pricing, care bundles and a direct primary care membership.',
}
