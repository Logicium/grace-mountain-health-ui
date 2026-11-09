/**
 * Post-build: one HTML file per public route, sitemap.xml, robots.txt,
 * llms.txt and 404.html, from the route table and site config.
 *
 *   npm run build        runs this through the postbuild hook
 *   npx vite-node scripts/prerender.ts
 *
 * The repo config in src/seo.site.ts is the base. The client's published
 * Search settings from the Apotome portal lay over it: their titles,
 * descriptions and business record win when they have published any. The
 * Apotome Labs SEO + AEO Standard, section 13.
 */
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'
import { prerender } from '../src/kit/seo/node'
import { applyPortalPages, fetchPortalSeo, mergePortalSeo } from '../src/kit/seo'
import { publicRoutes } from '../src/routes'
import { site } from '../src/seo.site'

const root = fileURLToPath(new URL('..', import.meta.url))
// .env.production (and Vercel's variables) decide which API the build reads from
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env }

const settings = await fetchPortalSeo(env.VITE_APOTOME_API_URL ?? env.VITE_API_URL, env.VITE_APOTOME_SITE_KEY ?? env.VITE_ANALYTICS_SITE_KEY).catch(() => null)
console.log(settings ? '[seo] portal Search settings found; laying them over the repo config' : '[seo] no published portal Search settings; using the repo config')

await prerender({
  apiUrl: env.VITE_API_URL,
  site: mergePortalSeo(site, settings),
  routes: applyPortalPages(publicRoutes, settings),
  root: new URL('..', import.meta.url),
})
