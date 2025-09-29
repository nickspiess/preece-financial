import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

// Cache tags for different collections
export const CACHE_TAGS = {
  home: 'home-data',
  pages: 'pages-data',
  posts: 'posts-data',
  media: 'media-data',
  global: 'global-data',
} as const

// Cache revalidation times (in seconds)
export const CACHE_TIMES = {
  short: 60, // 1 minute
  medium: 300, // 5 minutes
  long: 3600, // 1 hour
  day: 86400, // 24 hours
} as const

/**
 * Cached function to get home page data
 */
export const getCachedHomeData = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const homeData = await payload.find({
      collection: 'home',
      limit: 1,
      populate: {
        'hero.heroImage': true,
        'whoWeServe.image': true,
        'team.image': true,
      },
    })

    return homeData.docs[0] || null
  },
  ['home-data'], // Cache key
  {
    revalidate: CACHE_TIMES.long, // Revalidate every hour
    tags: [CACHE_TAGS.home], // Cache tags for invalidation
  }
)

/**
 * Cached function to get page by slug
 */
export const getCachedPageBySlug = unstable_cache(
  async (slug: string, draft: boolean = false) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      overrideAccess: draft,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
  ['page-by-slug'], // Cache key prefix
  {
    revalidate: CACHE_TIMES.long,
    tags: [CACHE_TAGS.pages],
  }
)

/**
 * Cached function to get all pages (for static generation)
 */
export const getCachedAllPages = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const pages = await payload.find({
      collection: 'pages',
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    })

    return pages.docs
  },
  ['all-pages'],
  {
    revalidate: CACHE_TIMES.day, // Revalidate once per day
    tags: [CACHE_TAGS.pages],
  }
)

/**
 * Cached function to get posts
 */
export const getCachedPosts = unstable_cache(
  async (limit: number = 10, page: number = 1) => {
    const payload = await getPayload({ config: configPromise })

    const posts = await payload.find({
      collection: 'posts',
      draft: false,
      limit,
      page,
      overrideAccess: false,
      sort: '-publishedAt',
    })

    return posts
  },
  ['posts-list'],
  {
    revalidate: CACHE_TIMES.medium, // Revalidate every 5 minutes
    tags: [CACHE_TAGS.posts],
  }
)

/**
 * Cached function to get post by slug
 */
export const getCachedPostBySlug = unstable_cache(
  async (slug: string) => {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
      collection: 'posts',
      draft: false,
      limit: 1,
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    return result.docs?.[0] || null
  },
  ['post-by-slug'],
  {
    revalidate: CACHE_TIMES.long,
    tags: [CACHE_TAGS.posts],
  }
)

/**
 * Cached function to get global settings (header/footer)
 */
export const getCachedGlobalSettings = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise })

    const [header, footer] = await Promise.all([
      payload.findGlobal({
        slug: 'header',
        draft: false,
      }),
      payload.findGlobal({
        slug: 'footer',
        draft: false,
      }),
    ])

    return { header, footer }
  },
  ['global-settings'],
  {
    revalidate: CACHE_TIMES.long,
    tags: [CACHE_TAGS.global],
  }
)