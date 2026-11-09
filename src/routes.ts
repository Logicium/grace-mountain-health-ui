/**
 * The public route table, with each page's SEO record.
 *
 * This is the only list of public routes. The router spreads it; the
 * prerender (scripts/prerender.ts) walks it to write one HTML file per page,
 * the sitemap, robots.txt and llms.txt; the runtime applies the same records on
 * navigation. No browser dependency here: the prerender imports this under
 * Node, so every body is built from the data modules rather than from the
 * rendered views.
 */
import type { RouteRecordRaw } from 'vue-router'
import { articleNode, esc, faqNode, itemListNode, serviceNode, truncate, type RouteSeo } from '@/kit/seo'
import { aboutClosing, aboutValues, founderBios } from '@/data/about'
import { bundles, dpc, insurers, payAsYouGo, pricingFaqs, weight } from '@/data/pricing'
import { detailedServices, journey, pillars, serviceTags } from '@/data/services'
import { content } from '@/data/site'
import { demoPosts, loadVlogPosts, type VlogPost } from '@/services/strapi'

const list = (items: string[]) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`
const paras = (items: string[]) => items.map((p) => `<p>${esc(p)}</p>`).join('')

/* ------------------------------ vlog ------------------------------ */

let postsCache: Promise<VlogPost[]> | null = null

/** Published posts at build: the CMS when it answers, the bundled set otherwise. */
function loadPosts(fetchFn: typeof fetch): Promise<VlogPost[]> {
  if (!postsCache) {
    postsCache = loadVlogPosts(50, fetchFn).catch((err: unknown) => {
      console.warn(`[seo] vlog CMS unavailable (${err instanceof Error ? err.message : String(err)}); prerendering the bundled posts`)
      return demoPosts
    })
  }
  return postsCache
}

const postSeo: RouteSeo<VlogPost> = {
  expand: async ({ fetch }) => (await loadPosts(fetch)).map((p) => ({ params: { slug: p.slug }, data: p })),
  title: ({ data }) => data.title,
  description: ({ data }) => truncate(data.excerpt, 160),
  image: ({ data }) => (data.cover ? { url: data.cover, alt: data.title } : undefined),
  type: 'article',
  // a post the CMS has not published a body for is a stub, not a page to rank
  noindex: ({ data }) => !data.body,
  lastmod: ({ data }) => data.publishedAt,
  article: ({ data }) => ({ publishedTime: data.publishedAt, section: data.category }),
  breadcrumb: ({ data }) => [{ name: 'Vlog', path: '/vlog' }, { name: data.title }],
  schema: ({ site, path, data }) =>
    articleNode(site, {
      path,
      headline: data.title,
      description: data.excerpt,
      image: data.cover,
      datePublished: data.publishedAt,
      section: data.category,
    }),
  body: ({ data }) =>
    `<article><p>${esc(data.category ?? 'Vlog')}</p><h1>${esc(data.title)}</h1><p>${esc(data.publishedAt.slice(0, 10))} · ${data.readMinutes ?? 4} min read</p><p>${esc(data.excerpt)}</p>${data.body ?? ''}<p><a href="/vlog">All posts</a></p></article>`,
}

/* ------------------------------ the table ------------------------------ */

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      seo: {
        description:
          'Modern primary care and whole-person wellness in Trinidad, Colorado. Long visits, same-week appointments, telehealth and transparent cash pricing.',
        body: ({ site }) =>
          `<main><h1>${esc(site.name)}</h1><p>${esc(content.hero.sub)}</p>` +
          `<h2>${esc(content.services.title)}</h2><p>${esc(content.services.subtitle)}</p>` +
          content.services.items.map((s) => `<h3>${esc(s.title)}</h3><p>${esc(s.description)}</p>`).join('') +
          `<h2>${esc(content.approach.title)}</h2><p>${esc(content.approach.subtitle)}</p>` +
          list(content.approach.steps.map((s) => `${s.t}: ${s.d}`)) +
          `<h2>${esc(content.founders.title)}</h2><p>${esc(content.founders.subtitle)}</p>` +
          content.founders.people.map((p) => `<h3>${esc(p.name)}, ${esc(p.role)}</h3><p>${esc(p.bio)}</p>`).join('') +
          `<p><a href="/services">Services</a> · <a href="/pricing">Pricing and insurance</a> · <a href="/about">About</a> · <a href="/vlog">Vlog</a> · <a href="/contact">Contact</a></p></main>`,
      },
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      seo: {
        title: 'About the practice and its founders',
        description:
          'Grace Mountain Health & Wellness is a locally owned primary care practice in Trinidad, Colorado, founded by Jeff and Dena Lewis for Southern Colorado families.',
        body: () =>
          `<main><h1>Guided by Grace. Committed to wellness.</h1>` +
          `<p>Grace Mountain Health & Wellness was founded on a simple belief: rural families deserve high-quality healthcare close to home, delivered by providers who understand the people, values, and challenges of the region.</p>` +
          `<p>We are a small, locally owned primary care practice rooted in Trinidad, Colorado, serving communities across Southern Colorado and Northern New Mexico.</p>` +
          `<h2>Four ideas that shape every visit.</h2>${list(aboutValues.map((v) => `${v.t}: ${v.d}`))}` +
          `<h2>A husband-and-wife team rooted in the community.</h2>` +
          founderBios.map((b) => `<h3>${esc(b.name)}</h3><p>${esc(b.role)}</p>${paras(b.paragraphs)}`).join('') +
          `<h2>${esc(aboutClosing.title)}</h2><p>${esc(aboutClosing.body)}</p><p>${esc(aboutClosing.quote)}</p>` +
          `<p><a href="/contact">Contact the practice</a></p></main>`,
      },
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      seo: {
        title: 'Primary care and wellness services',
        description:
          'Primary care in Trinidad, Colorado: annual exams, same-day sick visits, chronic disease management, weight management, IV hydration, testing and telehealth.',
        schema: ({ site, path }) => pillars.map((p) => serviceNode(site, { path, name: p.title, description: p.body, type: 'Primary care' })),
        body: () =>
          `<main><h1>Primary care, walk-in visits, and whole-person wellness.</h1>` +
          `<p>Comprehensive primary care for families across Southern Colorado, from annual exams and chronic disease management to sick visits, minor injury care, weight management, and telehealth.</p>` +
          `<h2>What we treat</h2>${list(serviceTags)}` +
          `<h2>Four pillars. One care relationship.</h2>` +
          pillars.map((p) => `<h3>${esc(p.title)}</h3><p>${esc(p.body)}</p>${list(p.bullets)}`).join('') +
          `<h2>A closer look at what we offer.</h2>` +
          detailedServices.map((s) => `<h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>${list(s.bullets)}`).join('') +
          `<h2>What to expect</h2>${list(journey.map((j) => `${j.t}: ${j.d}`))}` +
          `<p><a href="/pricing">Pricing and insurance</a> · <a href="/contact">Contact</a></p></main>`,
      },
    },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: {
      seo: {
        title: 'Pricing and insurance',
        description:
          'Cash pricing in Trinidad, Colorado: new patient visits from $120, prepaid care bundles, a direct primary care membership by age, and insurance coming soon.',
        schema: ({ site, path }) => faqNode(site, path, pricingFaqs),
        body: () =>
          `<main><h1>Simple, transparent pricing for our community.</h1>` +
          `<p>All prices subject to change. Insurance coming soon. Cash options always available. Super bills available upon request.</p>` +
          `<h2>Care Bundles</h2><p>Prepaid visit bundles. Lock in a lower per-visit rate. Use bundles for in-office or telehealth visits.</p>` +
          bundles.map((b) => `<h3>${esc(b.name)}: ${esc(b.price)}</h3><p>${esc(b.cadence)}. ${esc(b.description)}</p>${list(b.features)}`).join('') +
          `<h2>Pay-As-You-Go</h2><p>Pay only for the visit you need. No membership required.</p>${list(payAsYouGo.map((r) => `${r.service}: ${r.price}`))}` +
          `<h2>Direct Primary Care membership</h2><p>A predictable monthly rate for ongoing access to primary care, with pricing tiered by age.</p>${list(dpc.map((r) => `${r.tier}: ${r.price}`))}` +
          `<h2>Weight and Wellness Program</h2><p>Clinical support with optional GLP-1 medication programs when appropriate.</p>${list(weight.map((r) => `${r.program}: ${r.price}`))}` +
          `<p>Medication pricing may vary by dose, formulation, pharmacy sourcing, and availability. All services and pricing subject to clinical appropriateness and change.</p>` +
          `<h2>Insurance coming soon.</h2><p>We do not accept insurance just yet. For now, cash options are always available and super bills are provided upon request. Plans we are working to accept:</p>${list(insurers.map((i) => i.name))}` +
          `<h2>Common questions</h2>${pricingFaqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}` +
          `<p><a href="/services">Services</a> · <a href="/contact">Contact</a></p></main>`,
      },
    },
  },
  {
    path: '/vlog',
    name: 'vlog',
    component: () => import('@/views/VlogView.vue'),
    meta: {
      seo: {
        title: 'Vlog: notes from the exam room',
        description:
          'Short reads and videos from the Grace Mountain Health & Wellness team in Trinidad, Colorado, on the health questions patients ask most.',
        schema: ({ site, path }) =>
          itemListNode(
            site,
            path,
            'Posts from Grace Mountain Health & Wellness',
            demoPosts.map((p) => ({ name: p.title, path: `/vlog/${p.slug}` })),
          ),
        body: () =>
          `<main><h1>Notes from the exam room.</h1><p>Short reads and videos on the questions our patients ask most, from the Grace Mountain team.</p>` +
          `<ul>${demoPosts.map((p) => `<li><a href="/vlog/${esc(p.slug)}">${esc(p.title)}</a>: ${esc(p.excerpt)}</li>`).join('')}</ul></main>`,
      },
    },
  },
  { path: '/vlog/:slug', name: 'vlog-post', component: () => import('@/views/VlogPostView.vue'), meta: { seo: postSeo } },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      seo: {
        title: 'Contact and hours',
        description:
          'Call (719) 752-0250, email info@gracemountainhealth.co, or visit 107 Moores Canyon Rd, Suite 4, Trinidad, CO. Open Monday to Friday 8 to 5 and Saturday 9 to 12.',
        body: ({ site }) => {
          const e = site.entity
          const a = e.address
          return (
            `<main><h1>Let’s talk.</h1><p>Whether you’re joining the practice, a long-time patient, or just have a question, we’re an easy phone call or message away.</p>` +
            `<h2>Reach us</h2><ul>` +
            (e.telephone ? `<li>Call <a href="tel:${esc(e.telephone)}">${esc(e.telephone)}</a></li>` : '') +
            `<li>Fax +1-719-435-9807</li>` +
            (e.email ? `<li>Email <a href="mailto:${esc(e.email)}">${esc(e.email)}</a></li>` : '') +
            (a ? `<li>Visit ${esc(a.streetAddress ?? '')}, ${esc(a.addressLocality)}, ${esc(a.addressRegion)} ${esc(a.postalCode ?? '')}</li>` : '') +
            `</ul><h2>Hours</h2><p>Monday to Friday 8 am to 5 pm. Saturday 9 am to 12 pm. Additional hours available based on need and urgency.</p>` +
            `<h2>New patient?</h2><p>Booking online through the patient portal takes about two minutes. Already a patient? Use the portal for refills, results, and secure messaging.</p></main>`
          )
        },
      },
    },
  },
]

/** The catch-all: a real not-found page, noindex, never a redirect home. */
export const notFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('@/views/NotFoundView.vue'),
  meta: { seo: { title: 'Page not found', description: 'That page is not on gracemountainhealth.co.', noindex: true } },
}
