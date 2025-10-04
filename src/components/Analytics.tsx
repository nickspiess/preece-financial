'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Track page views
export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Track custom events
export function event({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (!GA_MEASUREMENT_ID) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Analytics component
export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    pageview(url)
  }, [pathname, searchParams])

  if (!GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}
