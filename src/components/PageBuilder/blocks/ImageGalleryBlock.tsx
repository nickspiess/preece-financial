import React from 'react'

interface ImageGalleryBlockProps {
  settings: {
    heading?: string
    subheading?: string
    images?: any[]
    layout?: string
    showCaptions?: boolean
    textColor?: string
    accentColor?: string
  }
}

export const ImageGalleryBlock: React.FC<ImageGalleryBlockProps> = ({ settings }) => {
  const {
    heading,
    subheading,
    images = [],
    layout = 'grid-3',
    showCaptions = true,
    textColor = 'text-[#2C3E51]',
    accentColor = '#62708A'
  } = settings

  const getGridClasses = () => {
    switch (layout) {
      case 'grid-2':
        return 'grid md:grid-cols-2 gap-6'
      case 'grid-4':
        return 'grid md:grid-cols-2 lg:grid-cols-4 gap-4'
      case 'masonry':
        return 'columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'
      default: // grid-3
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
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
            <p className="text-xl text-[#95997D] max-w-3xl mx-auto">
              {subheading}
            </p>
          )}
          <div className="w-20 h-px mx-auto mt-6" style={{ backgroundColor: accentColor }}></div>
        </div>
      )}

      {images.length > 0 ? (
        <div className={getGridClasses()}>
          {images.map((image: any, index: number) => (
            <div key={index} className={layout === 'masonry' ? 'break-inside-avoid' : ''}>
              {typeof image === 'object' && image?.url ? (
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={image.url}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {showCaptions && image.alt && (
                    <p className="text-sm text-[#95997D] mt-2 text-center">
                      {image.alt}
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Image placeholder</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-[#95997D]">No images added yet. Upload images in the admin panel to populate this gallery.</p>
        </div>
      )}
    </div>
  )
}