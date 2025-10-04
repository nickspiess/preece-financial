'use client'

import React, { useState, useEffect } from 'react'
import RichText from '@/components/RichText'

interface TeamMember {
  name: string
  credentials?: string
  title: string
  bio?: any
  image?: any
  email?: string
  phone?: string
  linkedIn?: string
}

interface TeamSectionProps {
  teamMembers: TeamMember[]
  teamHeading?: string
  teamSubheading?: string
  teamStyling?: {
    layout?: string
    headingSize?: string
    nameSize?: string
    nameWeight?: string
    titleSize?: string
    bioSize?: string
    cardPadding?: string
    backgroundColor?: string
    spacing?: string
  }
}

const layoutOptions = [
  { value: 'horizontal', label: 'Wide Horizontal' },
  { value: 'grid-2', label: '2 Columns' },
  { value: 'stacked', label: 'Stacked' },
]

export const TeamSection: React.FC<TeamSectionProps> = ({
  teamMembers,
  teamHeading,
  teamSubheading,
  teamStyling,
}) => {
  const [selectedLayout, setSelectedLayout] = useState<string>('horizontal')

  useEffect(() => {
    // Only use teamStyling.layout if it's a valid option, otherwise default to 'horizontal'
    const validLayouts = ['horizontal', 'grid-2', 'stacked']
    if (teamStyling?.layout && validLayouts.includes(teamStyling.layout)) {
      setSelectedLayout(teamStyling.layout)
    } else {
      setSelectedLayout('horizontal')
    }
  }, [teamStyling?.layout])

  return (
    <div className={`${teamStyling?.backgroundColor || 'bg-white'} border-t border-gray-200 relative overflow-hidden`}>
      {/* Multiple color accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-bl from-[#95997D]/12 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-[#62708A]/8 to-transparent rounded-full blur-3xl"></div>

      <div className={`container max-w-7xl ${teamStyling?.spacing || 'py-20'} relative z-10`}>
        {teamHeading && (
          <div className="text-center mb-12">
            <h2 className={`${teamStyling?.headingSize || 'text-4xl md:text-5xl'} font-larken font-medium text-[#2C3E51] mb-4 tracking-tight`}>
              {teamHeading}
            </h2>
            <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
            {teamSubheading && (
              <p className="mt-6 text-lg text-gray-700 font-medium max-w-3xl mx-auto">
                {teamSubheading}
              </p>
            )}
          </div>
        )}

        {/* Layout Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-1.5 bg-gray-100 rounded-lg border border-gray-200">
            <span className="text-sm font-medium text-gray-600 px-3">Layout:</span>
            {layoutOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setSelectedLayout(option.value)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  selectedLayout === option.value
                    ? 'bg-white text-[#2C3E51] shadow-md'
                    : 'text-gray-600 hover:text-[#2C3E51] hover:bg-white/50'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`flex flex-wrap justify-center gap-8 ${
          teamMembers.length === 1 ? 'max-w-2xl mx-auto' : ''
        }`}>
          {teamMembers.map((member: TeamMember, index: number) => {
            const accentColors = ['#62708A', '#95997D', '#A1B5B8']
            const accentColor = accentColors[index % accentColors.length]

            const isHorizontal = selectedLayout === 'horizontal'

            const cardWidth = selectedLayout === 'grid-2'
              ? 'w-full md:w-[calc(50%-1rem)] md:max-w-sm'
              : selectedLayout === 'stacked'
              ? 'w-full max-w-xl'
              : isHorizontal
              ? 'w-full max-w-5xl'
              : 'w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] lg:max-w-sm'

            return (
              <div
                key={index}
                className={`${cardWidth} bg-white ${teamStyling?.cardPadding || 'p-8'} shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-200 rounded-lg relative overflow-hidden ${
                  isHorizontal ? 'flex flex-col md:flex-row gap-8' : 'flex flex-col'
                }`}
              >
                {/* Top gradient accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl opacity-10 transition-opacity duration-300 group-hover:opacity-20" style={{ backgroundColor: accentColor }}></div>

                {/* Left accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b transition-all duration-300" style={{
                  backgroundImage: `linear-gradient(to bottom, ${accentColor}, ${accentColor}80)`
                }}></div>

                {member.image && typeof member.image === 'object' && member.image.url && (
                  <div className={`${isHorizontal ? 'md:w-64 flex-shrink-0' : selectedLayout === 'grid-2' ? 'max-w-xs mx-auto' : ''} overflow-hidden rounded-lg ${isHorizontal ? 'aspect-square' : 'aspect-[4/5]'} mb-6 relative`}>
                    {/* Image glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg rounded-lg" style={{
                      backgroundImage: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`
                    }}></div>
                    <img
                      src={member.image.url}
                      alt={member.name}
                      className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <div className={`flex-grow ${isHorizontal ? 'flex flex-col justify-between' : ''}`}>
                  <div>
                    <h3 className={`${teamStyling?.nameSize || 'text-2xl'} font-larken ${teamStyling?.nameWeight || 'font-medium'} text-[#2C3E51] mb-1 relative`}>
                      {member.name}
                      {member.credentials && (
                        <span className="ml-2" style={{ color: accentColor }}>{member.credentials}</span>
                      )}
                    </h3>

                    <p className={`${teamStyling?.titleSize || 'text-sm'} font-sans text-gray-500 uppercase tracking-wider mb-4`}>
                      {member.title}
                    </p>

                    {member.bio && (
                      <div className={`${teamStyling?.bioSize || 'text-base'} font-sans text-gray-800 leading-relaxed prose prose-sm max-w-none mb-6 [&_p]:text-gray-800 relative`}>
                        <RichText data={member.bio} enableGutter={false} />
                      </div>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-auto pt-4 border-t border-gray-200 space-y-2 relative">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="block text-sm hover:text-[#526078] transition" style={{ color: accentColor }}>
                        {member.email}
                      </a>
                    )}
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="block text-sm text-gray-600 hover:text-gray-800 transition">
                        {member.phone}
                      </a>
                    )}
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm hover:opacity-80 transition"
                        style={{ color: accentColor }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
