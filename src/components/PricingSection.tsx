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
      <h2 className="text-4xl md:text-5xl font-larken font-medium text-[#2C3E51] mb-6 text-center leading-tight">
        {title}
        {subtitle && (
          <span className="font-larken font-semibold" style={{ color }}>
            {' '}
            {subtitle}
          </span>
        )}
      </h2>
      <p className="text-center font-sans text-gray-600 mb-12 max-w-3xl mx-auto text-base leading-relaxed">{description}</p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {tiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} color={color} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          className="px-8 py-3 text-white transition text-xs tracking-wide font-sans font-semibold"
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
      className="bg-white p-10 rounded-xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: isHovered ? color : '#E3D3BD' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-larken font-medium text-[#2C3E51] mb-4">{tier.name}</h3>
      <p className="text-sm font-sans text-gray-600 mb-6 leading-relaxed min-h-[60px]">{tier.description}</p>
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
      className={`px-8 py-3 border-2 transition font-sans font-semibold text-xs tracking-wide rounded-lg ${fullWidth ? 'w-full' : ''}`}
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