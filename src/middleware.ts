import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Create response with original request
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Add cache headers for static assets
  if (request.nextUrl.pathname.startsWith('/_next/static') ||
      request.nextUrl.pathname.startsWith('/media') ||
      request.nextUrl.pathname.endsWith('.png') ||
      request.nextUrl.pathname.endsWith('.jpg') ||
      request.nextUrl.pathname.endsWith('.jpeg') ||
      request.nextUrl.pathname.endsWith('.webp') ||
      request.nextUrl.pathname.endsWith('.svg')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  }

  // Add cache headers for pages (1 hour)
  if (request.nextUrl.pathname === '/' ||
      request.nextUrl.pathname.startsWith('/home-')) {
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=59')
  }

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - admin routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|admin|_next/static|_next/image|favicon.ico).*)',
  ],
}