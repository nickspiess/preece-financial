'use client'

import React, { useState } from 'react'

interface NaturalServiceCardProps {
  title: string
  description: string
  index: number
}

export const NaturalServiceCard: React.FC<NaturalServiceCardProps> = ({ title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const colors = ['#95997D', '#62708A', '#A1B5B8', '#2C3E51']
  const color = colors[index % colors.length]
  const isEven = index % 2 === 0

  return (
    <div
      className={`flex items-center gap-8 p-8 rounded-3xl transition-all duration-500 group cursor-pointer ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
      style={{
        backgroundColor: isHovered ? color : 'white',
        borderLeft: `6px solid ${color}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
        <h3
          className="text-2xl font-medium mb-4 transition-colors"
          style={{ color: isHovered ? 'white' : '#2C3E51' }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed transition-colors"
          style={{ color: isHovered ? 'rgba(255, 255, 255, 0.9)' : '#525252' }}
        >
          {description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center transition-all"
          style={{
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : `${color}20`,
          }}
        >
          <div
            className="w-8 h-8 rounded-full transition-all"
            style={{
              backgroundColor: isHovered ? 'white' : color,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}