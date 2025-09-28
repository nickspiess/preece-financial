'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    console.error('ErrorBoundary caught an error:', error)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary componentDidCatch:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      console.log('ErrorBoundary rendering error state')
      return (
        <div style={{ padding: '20px', background: '#fee', border: '1px solid #f00' }}>
          <h2>Something went wrong in admin panel.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <summary>Error details</summary>
            {this.state.error?.toString()}
            {this.state.error?.stack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary