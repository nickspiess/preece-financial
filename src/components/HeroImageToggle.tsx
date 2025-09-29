'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

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
  const [imageLoaded, setImageLoaded] = useState(false)

  // Preload the image
  useEffect(() => {
    if (heroImageUrl) {
      const img = new window.Image()
      img.onload = () => setImageLoaded(true)
      img.src = heroImageUrl
    }
  }, [heroImageUrl])

  if (!heroImageUrl) {
    return <div className={className}>{children}</div>
  }

  const overlayColor = darkOverlay
    ? 'rgba(44, 62, 81, 0.75)'
    : 'rgba(255, 255, 255, 0.85)'

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Optimized Hero Image */}
      {showImage && (
        <div className="absolute inset-0">
          <Image
            src={heroImageUrl}
            alt="Hero background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`object-cover transition-opacity duration-500 ${
              darkOverlay ? 'object-center object-bottom' : 'object-center'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              backgroundColor: overlayColor,
              opacity: imageLoaded ? 1 : 0
            }}
          />
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowImage(!showImage)}
        className="absolute top-4 right-4 z-20 px-4 py-2 bg-white/90 hover:bg-white text-gray-800 border border-gray-300 hover:border-gray-400 transition-all duration-200 text-sm font-medium shadow-lg backdrop-blur-sm"
      >
        {showImage ? '🖼️ Hide Image' : '🖼️ Show Image'}
      </button>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}