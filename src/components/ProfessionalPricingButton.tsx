'use client'

import React, { useState } from 'react'

interface ProfessionalPricingButtonProps {
  color: string
  text: string
  className?: string
}

export const ProfessionalPricingButton: React.FC<ProfessionalPricingButtonProps> = ({
  color,
  text,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`px-12 py-4 border-2 hover:text-white transition font-bold text-lg ${className}`}
      style={{
        borderColor: color,
        color: isHovered ? 'white' : color,
        backgroundColor: isHovered ? color : 'transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  )
}