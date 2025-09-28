import React from 'react'

interface CtaBlockProps {
  settings: {
    heading?: string
    subheading?: string
    ctaText?: string
    ctaLink?: string
    accentColor?: string
  }
}

export const CtaBlock: React.FC<CtaBlockProps> = ({ settings }) => {
  const {
    heading = 'Ready to Get Started?',
    subheading = 'Contact us today for a free consultation',
    ctaText = 'Contact Us',
    ctaLink = '#contact',
    accentColor = '#62708A'
  } = settings

  return (
    <div className="container max-w-7xl">
      <div className="text-center bg-[#2C3E51] text-white py-20 px-12 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
          {heading}
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {subheading}
        </p>
        <a
          href={ctaLink}
          className="inline-block px-12 py-4 text-white hover:opacity-90 transition-all duration-300 text-lg"
          style={{ backgroundColor: accentColor }}
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}