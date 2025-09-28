'use client'

import React, { useState } from 'react'

interface HeroImageToggleProps {
  heroImageUrl?: string
  children: React.ReactNode
  className?: string
  darkOverlay?: boolean
}

export const HeroImageToggle: React.FC<HeroImageToggleProps> = ({
  heroImageUrl,
  children,
  className = '',
  darkOverlay = false,
}) => {
  const [showImage, setShowImage] = useState(true)

  if (!heroImageUrl) {
    return <div className={className}>{children}</div>
  }

  const overlayColor = darkOverlay
    ? 'rgba(44, 62, 81, 0.6)'
    : 'rgba(255, 255, 255, 0.7)'

  return (
    <div
      className={`${className} relative`}
      style={{
        backgroundImage: showImage
          ? `linear-gradient(${overlayColor}, ${overlayColor}), url(${heroImageUrl})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: darkOverlay ? 'center bottom' : 'center',
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setShowImage(!showImage)}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/90 hover:bg-white text-gray-800 border border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm font-medium shadow-lg"
        style={{
          backdropFilter: 'blur(4px)',
        }}
      >
        {showImage ? '🖼️ Hide Image' : '🖼️ Show Image'}
      </button>

      {children}
    </div>
  )
}