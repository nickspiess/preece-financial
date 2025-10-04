'use client'

import React, { useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  hoverColor: string
  titleSize?: string
  descriptionSize?: string
  cardPadding?: string
  enableAnimation?: boolean
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  hoverColor,
  titleSize = 'text-3xl',
  descriptionSize = 'text-base',
  cardPadding = 'p-12',
  enableAnimation = true
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`${cardPadding} transition-all duration-500 group cursor-pointer border-l-4 ${enableAnimation ? 'hover:translate-x-1' : ''}`}
      style={{
        backgroundColor: isHovered ? hoverColor : `${hoverColor}08`,
        borderColor: isHovered ? hoverColor : `${hoverColor}40`,
        color: isHovered ? 'white' : 'inherit',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <h3
            className={`${titleSize} font-larken font-normal transition-colors mb-4`}
            style={{ color: isHovered ? 'white' : '#2C3E51' }}
          >
            {title}
          </h3>
          <p
            className={`leading-relaxed font-sans transition-colors ${descriptionSize}`}
            style={{ color: isHovered ? 'white' : '#525252' }}
          >
            {description}
          </p>
        </div>
        <button
          className="px-6 py-2 border transition-all duration-300 text-sm tracking-wide whitespace-nowrap hover:shadow-lg font-sans"
          style={{
            borderColor: isHovered ? 'white' : '#2C3E51',
            color: isHovered ? 'white' : '#2C3E51',
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        >
          MORE INFO
        </button>
      </div>
    </div>
  )
}