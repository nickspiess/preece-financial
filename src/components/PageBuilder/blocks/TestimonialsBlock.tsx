import React from 'react'

interface TestimonialsBlockProps {
  settings: {
    heading?: string
    subheading?: string
    testimonials?: any[]
    layout?: string
    textColor?: string
    accentColor?: string
  }
}

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ({ settings }) => {
  const {
    heading = 'What Our Clients Say',
    subheading,
    testimonials = [],
    layout = 'cards',
    textColor = 'text-[#2C3E51]',
    accentColor = '#62708A'
  } = settings

  const getLayoutClasses = () => {
    switch (layout) {
      case 'single':
        return 'max-w-4xl mx-auto'
      case 'two-col':
        return 'grid md:grid-cols-2 gap-8'
      default: // cards
        return 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
    }
  }

  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      quote: "Exceptional service and expertise. They helped us plan for our retirement with confidence.",
      author: "Sarah Johnson",
      position: "Business Owner",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and always available when we need them.",
      author: "Michael Chen",
      position: "Engineer",
      rating: 5
    },
    {
      quote: "Their comprehensive approach to financial planning exceeded our expectations.",
      author: "Emily Davis",
      position: "Teacher",
      rating: 5
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-light ${textColor} mb-4 tracking-tight`}>
          {heading}
        </h2>
        {subheading && (
          <p className="text-xl text-[#95997D] max-w-3xl mx-auto mb-6">
            {subheading}
          </p>
        )}
        <div className="w-20 h-px mx-auto" style={{ backgroundColor: accentColor }}></div>
      </div>

      <div className={getLayoutClasses()}>
        {displayTestimonials.map((testimonial: any, index: number) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            {renderStars(testimonial.rating)}
            <blockquote className="text-[#95997D] text-lg leading-relaxed mb-6 italic">
              "{testimonial.quote || 'Add testimonial content in the admin panel.'}"
            </blockquote>
            <div className="border-t pt-4">
              <div className="font-semibold text-[#2C3E51]">
                {testimonial.author || 'Client Name'}
              </div>
              <div className="text-sm text-[#95997D]/80">
                {testimonial.position || 'Position/Title'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}