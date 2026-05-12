/**
 * Thin Strapi client. Configure via VITE_STRAPI_URL (+ optional VITE_STRAPI_TOKEN).
 * Falls back to a small set of demo posts when the CMS is unreachable so the UI
 * stays presentable in local/dev and during initial content seeding.
 */

export interface VlogPost {
  id: string | number
  slug: string
  title: string
  excerpt: string
  body?: string
  cover?: string
  category?: string
  publishedAt: string
  readMinutes?: number
  videoUrl?: string
}

const BASE = import.meta.env.VITE_STRAPI_URL?.replace(/\/$/, '') || ''
const TOKEN = import.meta.env.VITE_STRAPI_TOKEN

function headers(): HeadersInit {
  return TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}
}

interface StrapiEntity<T> { id: number; attributes: T }
interface StrapiResponse<T> { data: StrapiEntity<T>[] | StrapiEntity<T> | null }

interface RawVlog {
  slug: string
  title: string
  excerpt: string
  body?: string
  category?: string
  publishedAt: string
  readMinutes?: number
  videoUrl?: string
  cover?: { data?: { attributes?: { url: string } } }
}

function mediaUrl(url?: string) {
  if (!url) return undefined
  return url.startsWith('http') ? url : `${BASE}${url}`
}

function mapPost(e: StrapiEntity<RawVlog>): VlogPost {
  const a = e.attributes
  return {
    id: e.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    body: a.body,
    category: a.category,
    publishedAt: a.publishedAt,
    readMinutes: a.readMinutes,
    videoUrl: a.videoUrl,
    cover: mediaUrl(a.cover?.data?.attributes?.url),
  }
}

export async function fetchVlogPosts(limit = 12): Promise<VlogPost[]> {
  if (!BASE) return demoPosts.slice(0, limit)
  try {
    const url = `${BASE}/api/vlog-posts?populate=cover&sort=publishedAt:desc&pagination[limit]=${limit}`
    const res = await fetch(url, { headers: headers() })
    if (!res.ok) throw new Error(String(res.status))
    const json = (await res.json()) as StrapiResponse<RawVlog>
    const list = Array.isArray(json.data) ? json.data : []
    return list.map(mapPost)
  } catch {
    return demoPosts.slice(0, limit)
  }
}

export async function fetchVlogPost(slug: string): Promise<VlogPost | null> {
  if (!BASE) return demoPosts.find((p) => p.slug === slug) || null
  try {
    const url = `${BASE}/api/vlog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=cover`
    const res = await fetch(url, { headers: headers() })
    if (!res.ok) throw new Error(String(res.status))
    const json = (await res.json()) as StrapiResponse<RawVlog>
    const list = Array.isArray(json.data) ? json.data : []
    return list[0] ? mapPost(list[0]) : null
  } catch {
    return demoPosts.find((p) => p.slug === slug) || null
  }
}

const demoPosts: VlogPost[] = [
  {
    id: 1,
    slug: 'modern-primary-care-feels-different',
    title: 'What modern primary care should actually feel like',
    excerpt:
      'Longer visits, fewer interruptions, real follow-through. A look inside how we structure care at Grace Mountain.',
    category: 'Practice',
    publishedAt: '2026-04-22',
    readMinutes: 6,
  },
  {
    id: 2,
    slug: 'sleep-stress-mountain-living',
    title: 'Sleep, stress, and life at altitude',
    excerpt:
      'Three small habits we recommend to almost every patient settling into life in the high country.',
    category: 'Wellness',
    publishedAt: '2026-03-30',
    readMinutes: 4,
  },
  {
    id: 3,
    slug: 'understanding-your-labs',
    title: 'Understanding your labs without the panic',
    excerpt:
      'A plain-language guide to the numbers we look at most often — and what actually matters.',
    category: 'Education',
    publishedAt: '2026-03-12',
    readMinutes: 7,
  },
  {
    id: 4,
    slug: 'insurance-without-the-headache',
    title: 'Insurance, in-network, and what you’ll really pay',
    excerpt:
      'Five minutes of reading that will save you an hour on hold. Promise.',
    category: 'Pricing',
    publishedAt: '2026-02-18',
    readMinutes: 5,
  },
]
