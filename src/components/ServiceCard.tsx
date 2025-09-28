'use client'

import React, { useState } from 'react'

interface ServiceCardProps {
  title: string
  description: string
  hoverColor: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white p-12 transition-all duration-500 group cursor-pointer border-l-4"
      style={{
        backgroundColor: isHovered ? hoverColor : 'white',
        borderColor: isHovered ? hoverColor : `${hoverColor}30`,
        color: isHovered ? 'white' : 'inherit',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <h3
            className="text-3xl font-light transition-colors mb-4"
            style={{ color: isHovered ? 'white' : '#2C3E51' }}
          >
            {title}
          </h3>
          <p
            className="leading-relaxed transition-colors"
            style={{ color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#95997D' }}
          >
            {description}
          </p>
        </div>
        <button
          className="px-6 py-2 border transition text-sm tracking-wide whitespace-nowrap"
          style={{
            borderColor: isHovered ? 'white' : '#2C3E51',
            color: isHovered ? 'white' : '#2C3E51',
          }}
        >
          MORE INFO
        </button>
      </div>
    </div>
  )
}