import React from 'react'

interface AboutBlockProps {
  settings: {
    layout?: string
    heading?: string
    subheading?: string
    content?: any
    image?: any
  }
  globalData?: any
}

export const AboutBlock: React.FC<AboutBlockProps> = ({ settings, globalData }) => {
  const {
    layout = 'single',
    heading = 'About Us',
    subheading,
    content,
    image
  } = settings

  return (
    <div className="container max-w-7xl">
      <div className={layout === 'two-col' ? 'grid lg:grid-cols-2 gap-16 items-center' : 'max-w-4xl mx-auto'}>
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-6 tracking-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="text-xl text-[#95997D] mb-8 leading-relaxed">
              {subheading}
            </p>
          )}
          <div className="prose prose-lg max-w-none">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p className="text-gray-700 leading-relaxed">
                We are a trusted financial services firm dedicated to helping our clients achieve their financial goals.
                With years of experience and a commitment to excellence, we provide comprehensive financial solutions
                tailored to your unique needs.
              </p>
            )}
          </div>
        </div>
        {layout === 'two-col' && image?.url && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={image.url}
              alt={heading}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}