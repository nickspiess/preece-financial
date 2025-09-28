import React from 'react'

interface ServicesBlockProps {
  settings: {
    layout?: string
    heading?: string
    subheading?: string
  }
  globalData?: any
}

export const ServicesBlock: React.FC<ServicesBlockProps> = ({ settings, globalData }) => {
  const {
    layout = 'cards',
    heading = 'Our Services',
    subheading = 'Comprehensive financial solutions'
  } = settings

  // Mock services data
  const services = globalData?.services || [
    {
      title: 'Financial Planning',
      description: 'Comprehensive financial planning to help you reach your goals.'
    },
    {
      title: 'Investment Management',
      description: 'Professional investment strategies tailored to your needs.'
    },
    {
      title: 'Tax Services',
      description: 'Expert tax preparation and planning services.'
    }
  ]

  return (
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
          {heading}
        </h2>
        {subheading && (
          <p className="text-xl text-[#95997D] leading-relaxed">
            {subheading}
          </p>
        )}
        <div className="w-20 h-px bg-[#62708A] mx-auto mt-6"></div>
      </div>

      {layout === 'cards' ? (
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium text-[#2C3E51] mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {services.map((service: any, index: number) => (
            <div key={index} className="border-l-4 border-[#62708A] pl-8 py-6 bg-gray-50">
              <h3 className="text-2xl font-medium text-[#2C3E51] mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}