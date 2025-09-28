'use client'

import React from 'react'

interface PricingTier {
  name: string
  description: string
}

interface PricingSectionProps {
  title: string
  subtitle?: string
  description: string
  color: string
  tiers: PricingTier[]
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  subtitle,
  description,
  color,
  tiers,
}) => {
  return (
    <div>
      <h2 className="text-4xl font-light text-[#2C3E51] mb-4 text-center">
        {title}
        {subtitle && (
          <span className="font-semibold" style={{ color }}>
            {' '}
            {subtitle}
          </span>
        )}
      </h2>
      <p className="text-center text-[#95997D] mb-12 max-w-2xl mx-auto">{description}</p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {tiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} color={color} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          className="px-10 py-3 text-white transition text-sm tracking-wide"
          style={{ backgroundColor: color }}
        >
          START YOUR PLAN
        </button>
        <PricingButton color={color} text="SCHEDULE MEETING" />
      </div>
    </div>
  )
}

const PricingCard: React.FC<{ tier: PricingTier; color: string }> = ({ tier, color }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className="bg-white p-8 rounded border-2 hover:shadow-lg transition-all"
      style={{ borderColor: isHovered ? color : '#E3D3BD' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-light text-[#2C3E51] mb-4">{tier.name}</h3>
      <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">{tier.description}</p>
      <PricingButton color={color} text="CONTACT US" fullWidth />
    </div>
  )
}

const PricingButton: React.FC<{ color: string; text: string; fullWidth?: boolean }> = ({
  color,
  text,
  fullWidth,
}) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <button
      className={`px-10 py-3 border-2 transition font-medium text-xs tracking-wide ${fullWidth ? 'w-full' : ''}`}
      style={{
        borderColor: color,
        backgroundColor: isHovered ? color : 'transparent',
        color: isHovered ? 'white' : color,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  )
}