'use client'

import React, { useState, useEffect } from 'react'

interface CarouselImage {
  image: {
    url?: string
  }
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div className="sticky top-8">
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] shadow-2xl">
        {/* Accent border frame */}
        <div className="absolute -inset-4 bg-gradient-to-br from-[#62708A]/20 to-[#A1B5B8]/20 rounded-lg blur-xl"></div>

        {/* Images */}
        <div className="relative w-full h-full">
          {images.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.image?.url && (
                <img
                  src={item.image.url}
                  alt={`Carousel image ${index + 1}`}
                  className="w-full h-full object-cover border-4 border-white rounded-lg"
                />
              )}
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
