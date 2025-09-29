import { revalidateTag, revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { CACHE_TAGS } from '@/utilities/cache'

// Secret token for revalidation (set in environment variables)
const REVALIDATION_TOKEN = process.env.CACHE_REVALIDATION_TOKEN || 'default-token'

export async function POST(request: NextRequest) {
  try {
    // Verify the revalidation token
    const headersList = await headers()
    const token = headersList.get('x-revalidation-token')

    if (token !== REVALIDATION_TOKEN) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()
    const { type, tag, path } = body

    if (type === 'tag' && tag) {
      // Revalidate by cache tag
      if (Object.values(CACHE_TAGS).includes(tag)) {
        revalidateTag(tag)
        return NextResponse.json({
          revalidated: true,
          type: 'tag',
          tag,
          message: `Cache tag "${tag}" revalidated successfully`
        })
      } else {
        return NextResponse.json({
          error: 'Invalid cache tag',
          availableTags: Object.values(CACHE_TAGS)
        }, { status: 400 })
      }
    }

    if (type === 'path' && path) {
      // Revalidate by path
      revalidatePath(path)
      return NextResponse.json({
        revalidated: true,
        type: 'path',
        path,
        message: `Path "${path}" revalidated successfully`
      })
    }

    if (type === 'all') {
      // Revalidate all cache tags
      Object.values(CACHE_TAGS).forEach(tag => {
        revalidateTag(tag)
      })
      return NextResponse.json({
        revalidated: true,
        type: 'all',
        message: 'All cache tags revalidated successfully'
      })
    }

    return NextResponse.json({
      error: 'Invalid request. Specify type: "tag", "path", or "all"'
    }, { status: 400 })

  } catch (error) {
    console.error('Cache revalidation error:', error)
    return NextResponse.json({
      error: 'Failed to revalidate cache',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// GET endpoint for testing/info
export async function GET() {
  return NextResponse.json({
    message: 'Cache revalidation endpoint',
    availableTags: Object.values(CACHE_TAGS),
    usage: {
      method: 'POST',
      headers: {
        'x-revalidation-token': 'your-token',
        'Content-Type': 'application/json'
      },
      body: {
        examples: [
          { type: 'tag', tag: 'home-data' },
          { type: 'path', path: '/' },
          { type: 'all' }
        ]
      }
    }
  })
}