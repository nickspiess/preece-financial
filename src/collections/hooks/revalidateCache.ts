import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

const REVALIDATION_TOKEN = process.env.CACHE_REVALIDATION_TOKEN || 'default-token'
const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/**
 * Revalidate cache after a collection document changes
 */
export const revalidateCacheAfterChange: CollectionAfterChangeHook = async ({
  doc,
  collection,
  req,
}) => {
  try {
    // Map collection slugs to cache tags
    const collectionToCacheTag: Record<string, string> = {
      'home': 'home-data',
      'pages': 'pages-data',
      'posts': 'posts-data',
      'media': 'media-data',
    }

    const cacheTag = collectionToCacheTag[collection.slug]

    if (cacheTag) {
      // Call the revalidation API endpoint
      const response = await fetch(`${SITE_URL}/api/revalidate-cache`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-revalidation-token': REVALIDATION_TOKEN,
        },
        body: JSON.stringify({
          type: 'tag',
          tag: cacheTag,
        }),
      })

      if (!response.ok) {
        console.error(`Failed to revalidate cache for ${collection.slug}:`, await response.text())
      } else {
        console.log(`Cache revalidated for ${collection.slug} (tag: ${cacheTag})`)
      }
    }

    // Also revalidate specific paths if needed
    if (collection.slug === 'pages' && doc.slug) {
      await fetch(`${SITE_URL}/api/revalidate-cache`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-revalidation-token': REVALIDATION_TOKEN,
        },
        body: JSON.stringify({
          type: 'path',
          path: `/${doc.slug}`,
        }),
      })
    }
  } catch (error) {
    console.error('Error revalidating cache:', error)
  }

  return doc
}

/**
 * Revalidate cache after a collection document is deleted
 */
export const revalidateCacheAfterDelete: CollectionAfterDeleteHook = async ({
  doc,
  collection,
  req,
}) => {
  try {
    // Map collection slugs to cache tags
    const collectionToCacheTag: Record<string, string> = {
      'home': 'home-data',
      'pages': 'pages-data',
      'posts': 'posts-data',
      'media': 'media-data',
    }

    const cacheTag = collectionToCacheTag[collection.slug]

    if (cacheTag) {
      // Call the revalidation API endpoint
      const response = await fetch(`${SITE_URL}/api/revalidate-cache`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-revalidation-token': REVALIDATION_TOKEN,
        },
        body: JSON.stringify({
          type: 'tag',
          tag: cacheTag,
        }),
      })

      if (!response.ok) {
        console.error(`Failed to revalidate cache for ${collection.slug}:`, await response.text())
      } else {
        console.log(`Cache revalidated for ${collection.slug} (tag: ${cacheTag}) after deletion`)
      }
    }
  } catch (error) {
    console.error('Error revalidating cache after delete:', error)
  }

  return doc
}

/**
 * Revalidate global cache (for header/footer)
 */
export const revalidateGlobalCache = async () => {
  try {
    const response = await fetch(`${SITE_URL}/api/revalidate-cache`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-revalidation-token': REVALIDATION_TOKEN,
      },
      body: JSON.stringify({
        type: 'tag',
        tag: 'global-data',
      }),
    })

    if (!response.ok) {
      console.error('Failed to revalidate global cache:', await response.text())
    } else {
      console.log('Global cache revalidated successfully')
    }
  } catch (error) {
    console.error('Error revalidating global cache:', error)
  }
}