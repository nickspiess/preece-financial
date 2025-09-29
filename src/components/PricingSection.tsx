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
      <h2 className="text-5xl font-light text-[#2C3E51] mb-6 text-center leading-tight">
        {title}
        {subtitle && (
          <span className="font-semibold" style={{ color }}>
            {' '}
            {subtitle}
          </span>
        )}
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">{description}</p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
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
      className="bg-white p-10 rounded-xl border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{ borderColor: isHovered ? color : '#E3D3BD' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-2xl font-semibold text-[#2C3E51] mb-6">{tier.name}</h3>
      <p className="text-base text-gray-600 mb-8 leading-relaxed min-h-[80px]">{tier.description}</p>
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
      className={`px-10 py-4 border-2 transition font-semibold text-sm tracking-wide rounded-lg ${fullWidth ? 'w-full' : ''}`}
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