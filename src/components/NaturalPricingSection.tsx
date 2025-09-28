'use client'

import React, { useState } from 'react'

interface PricingTier {
  name: string
  description: string
}

interface NaturalPricingSectionProps {
  title: string
  subtitle?: string
  description: string
  color: string
  tiers: PricingTier[]
}

export const NaturalPricingSection: React.FC<NaturalPricingSectionProps> = ({
  title,
  subtitle,
  description,
  color,
  tiers,
}) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-3xl font-light text-[#2C3E51] mb-4">
          {title}
          {subtitle && (
            <span className="font-medium" style={{ color }}>
              {' '}
              {subtitle}
            </span>
          )}
        </h3>
        <p className="text-[#62708A] max-w-2xl mx-auto leading-relaxed">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {tiers.map((tier, index) => (
          <NaturalPricingCard key={index} tier={tier} color={color} index={index} />
        ))}
      </div>

      <div className="flex justify-center gap-4">
        <button
          className="px-10 py-3 text-white rounded-full transition font-medium"
          style={{ backgroundColor: color }}
        >
          Start Your Plan
        </button>
        <NaturalPricingButton color={color} text="Schedule Meeting" />
      </div>
    </div>
  )
}

const NaturalPricingCard: React.FC<{ tier: PricingTier; color: string; index: number }> = ({ tier, color, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-white p-8 rounded-3xl border-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      style={{ borderColor: isHovered ? color : '#E3D3BD' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 transition-opacity"
        style={{
          backgroundColor: `${color}10`,
          opacity: isHovered ? 1 : 0.5,
        }}
      ></div>
      <div className="relative">
        <div
          className="w-12 h-1 rounded-full mb-6"
          style={{ backgroundColor: color }}
        ></div>
        <h4 className="text-xl font-medium text-[#2C3E51] mb-4">{tier.name}</h4>
        <p className="text-[#62708A] mb-8 leading-relaxed min-h-[60px]">{tier.description}</p>
        <NaturalPricingButton color={color} text="Contact Us" fullWidth />
      </div>
    </div>
  )
}

const NaturalPricingButton: React.FC<{ color: string; text: string; fullWidth?: boolean }> = ({
  color,
  text,
  fullWidth,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`px-8 py-3 border-2 rounded-full transition font-medium text-sm ${fullWidth ? 'w-full' : ''}`}
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