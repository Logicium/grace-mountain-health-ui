import { createRouter, createWebHistory } from 'vue-router'
import { notFoundRoute, publicRoutes } from '@/routes'

/*
 * The public pages live in src/routes.ts with their SEO records; the
 * prerender reads the same list. The head (title, description, canonical,
 * share tags, JSON-LD) is applied by installSeo in main.ts on every
 * navigation, so nothing here touches document.title.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, notFoundRoute],
  scrollBehavior(_to, _from, saved) {
    if (saved) return saved
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
