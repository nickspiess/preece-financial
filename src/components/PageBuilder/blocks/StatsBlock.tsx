import React from 'react'

interface StatsBlockProps {
  settings: {
    heading?: string
    subheading?: string
    stats?: any[]
    layout?: string
    backgroundColor?: string
    textColor?: string
    accentColor?: string
  }
}

export const StatsBlock: React.FC<StatsBlockProps> = ({ settings }) => {
  const {
    heading,
    subheading,
    stats = [],
    layout = 'horizontal',
    textColor = 'text-[#2C3E51]',
    accentColor = '#62708A'
  } = settings

  // Default stats if none provided
  const defaultStats = [
    {
      number: '500+',
      label: 'Satisfied Clients',
      description: 'Families we\'ve helped achieve their financial goals'
    },
    {
      number: '25+',
      label: 'Years Experience',
      description: 'Decades of trusted financial expertise'
    },
    {
      number: '$100M+',
      label: 'Assets Under Management',
      description: 'Total value of portfolios we manage'
    },
    {
      number: '98%',
      label: 'Client Retention',
      description: 'Clients who continue working with us year after year'
    }
  ]

  const displayStats = stats.length > 0 ? stats : defaultStats

  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid-2x2':
        return 'grid grid-cols-2 lg:grid-cols-2 gap-8'
      case 'vertical':
        return 'space-y-8 max-w-2xl mx-auto'
      default: // horizontal
        return 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'
    }
  }

  return (
    <div className="container max-w-7xl">
      {(heading || subheading) && (
        <div className="text-center mb-16">
          {heading && (
            <h2 className={`text-4xl md:text-5xl font-light ${textColor} mb-4 tracking-tight`}>
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-xl text-[#95997D] max-w-3xl mx-auto mb-6">
              {subheading}
            </p>
          )}
          <div className="w-20 h-px mx-auto" style={{ backgroundColor: accentColor }}></div>
        </div>
      )}

      <div className={getLayoutClasses()}>
        {displayStats.map((stat: any, index: number) => (
          <div
            key={index}
            className={`text-center ${
              layout === 'vertical'
                ? 'border-l-4 pl-8 text-left'
                : 'p-6'
            }`}
            style={layout === 'vertical' ? { borderLeftColor: accentColor } : {}}
          >
            <div className={`text-4xl md:text-5xl font-light mb-2 ${
              layout === 'vertical' ? 'text-left' : 'text-center'
            }`} style={{ color: accentColor }}>
              {stat.number || '0'}
            </div>
            <h3 className={`text-xl font-semibold ${textColor} mb-2 ${
              layout === 'vertical' ? 'text-left' : 'text-center'
            }`}>
              {stat.label || 'Statistic'}
            </h3>
            {stat.description && (
              <p className={`text-[#95997D] leading-relaxed ${
                layout === 'vertical' ? 'text-left' : 'text-center'
              }`}>
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}