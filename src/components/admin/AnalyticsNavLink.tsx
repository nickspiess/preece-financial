'use client'

import Link from 'next/link'
import React from 'react'

export const AnalyticsNavLink: React.FC = () => {
  return (
    <div className="nav-group">
      <Link
        href="/admin/analytics"
        className="nav-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px 16px',
          color: '#9ca3af',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 500,
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff'
          e.currentTarget.style.backgroundColor = '#374151'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#9ca3af'
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ marginRight: '12px' }}
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
        Analytics
      </Link>
    </div>
  )
}

export default AnalyticsNavLink
