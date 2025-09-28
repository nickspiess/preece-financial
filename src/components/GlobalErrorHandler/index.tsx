'use client'
import { useEffect } from 'react'

const GlobalErrorHandler = () => {
  useEffect(() => {
    console.log('GlobalErrorHandler mounted')

    // Handle unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
    }

    // Handle JavaScript errors
    const handleError = (event: ErrorEvent) => {
      console.error('JavaScript error:', event.error, event.message, event.filename, event.lineno)
    }

    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    // Log initial state
    console.log('Current URL:', window.location.href)
    console.log('User agent:', navigator.userAgent)

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [])

  return null
}

export default GlobalErrorHandler