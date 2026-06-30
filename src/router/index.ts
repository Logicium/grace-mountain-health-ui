import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Grace Mountain Health & Wellness — Modern primary care in Trinidad, Colorado',
      description:
        'Modern primary care and whole-person wellness in Trinidad, Colorado. Long visits, secure messaging, and care plans you can actually follow.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About — Grace Mountain Health & Wellness',
      description: 'Meet the care team and the values behind Grace Mountain Health & Wellness.',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'Services — Grace Mountain Health & Wellness',
      description:
        'Primary care, wellness, women’s health, pediatrics, chronic conditions, and behavioral support in Trinidad, Colorado.',
    },
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue'),
    meta: {
      title: 'Pricing & Insurance — Grace Mountain Health & Wellness',
      description:
        'Transparent cash pricing and a flexible membership for deeper access. Insurance coming soon.',
    },
  },
  {
    path: '/vlog',
    name: 'vlog',
    component: () => import('@/views/VlogView.vue'),
    meta: {
      title: 'Vlog — Grace Mountain Health & Wellness',
      description: 'Short reads and videos on the questions our patients ask most.',
    },
  },
  {
    path: '/vlog/:slug',
    name: 'vlog-post',
    component: () => import('@/views/VlogPostView.vue'),
    meta: { title: 'Vlog — Grace Mountain Health & Wellness' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact — Grace Mountain Health & Wellness',
      description: 'Call, email, or message us. A real person reads every message.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Page not found — Grace Mountain Health & Wellness' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, saved) {
    if (saved) return saved
    return { top: 0, behavior: 'smooth' }
  },
})

function applyMeta(to: RouteLocationNormalized) {
  const title = (to.meta.title as string) || 'Grace Mountain Health & Wellness'
  document.title = title
  const desc = to.meta.description as string | undefined
  if (desc) {
    let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', desc)
  }
}

router.afterEach(applyMeta)

export default router
