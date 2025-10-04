'use client'

import React, { useState } from 'react'

interface ServiceOfferingCardProps {
  title: string
  badge?: string
  tagline?: string
  description: string
  features?: Array<{ feature: string }>
  ctaText?: string
  ctaLink?: string
  accentColor: string
  titleSize?: string
  titleWeight?: string
  descriptionSize?: string
  cardPadding?: string
  shadowIntensity?: string
}

export const ServiceOfferingCard: React.FC<ServiceOfferingCardProps> = ({
  title,
  badge,
  tagline,
  description,
  features,
  ctaText,
  ctaLink,
  accentColor,
  titleSize = 'text-3xl',
  titleWeight = 'font-normal',
  descriptionSize = 'text-base',
  cardPadding = 'p-10',
  shadowIntensity = 'shadow-lg',
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white ${cardPadding} ${shadowIntensity} hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border-t-4 flex flex-col h-full`}
      style={{ borderTopColor: accentColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Accent line animation */}
      <div
        className="absolute top-0 left-0 h-1 transition-all duration-500"
        style={{
          backgroundColor: accentColor,
          width: isHovered ? '100%' : '0%',
        }}
      />

      {/* Badge - Fixed height container */}
      <div className="h-8 mb-2">
        {badge && (
          <div
            className="inline-block px-4 py-1 text-xs font-semibold tracking-wider"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            {badge}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className={`${titleSize} font-larken ${titleWeight} text-[#2C3E51] mb-4 tracking-tight whitespace-pre-line`}>
        {title}
      </h3>

      {/* Tagline */}
      {tagline && (
        <p className="text-sm font-sans text-gray-500 mb-6 italic font-medium">
          {tagline}
        </p>
      )}

      {/* Divider */}
      <div className="w-16 h-px mb-6" style={{ backgroundColor: accentColor }} />

      {/* Description */}
      <div className={`text-gray-700 font-sans leading-relaxed mb-6 whitespace-pre-line ${descriptionSize}`}>
        {description}
      </div>

      {/* Features list - grows to fill space */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-8 flex-grow">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
              <span>{item.feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button - Always at bottom */}
      {ctaText && (
        <a
          href={ctaLink || '#'}
          className="inline-block px-8 py-3 border-2 transition-all duration-300 text-sm tracking-wider font-sans font-medium mt-auto"
          style={{
            borderColor: accentColor,
            backgroundColor: isHovered ? accentColor : 'transparent',
            color: isHovered ? 'white' : accentColor,
          }}
        >
          {ctaText}
        </a>
      )}
    </div>
  )
}
