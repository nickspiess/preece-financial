import React from 'react'

interface FaqBlockProps {
  settings: {
    heading?: string
    subheading?: string
    faqs?: any[]
    layout?: string
    textColor?: string
    accentColor?: string
  }
}

export const FaqBlock: React.FC<FaqBlockProps> = ({ settings }) => {
  const {
    heading = 'Frequently Asked Questions',
    subheading,
    faqs = [],
    layout = 'accordion',
    textColor = 'text-[#2C3E51]',
    accentColor = '#62708A'
  } = settings

  // Default FAQs if none provided
  const defaultFaqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive financial planning services including retirement planning, investment management, estate planning, and tax strategies."
    },
    {
      question: "How do I get started?",
      answer: "Schedule a free initial consultation where we'll discuss your financial goals and determine how we can best help you achieve them."
    },
    {
      question: "What are your fees?",
      answer: "Our fee structure is transparent and varies based on the services you need. We'll provide a clear breakdown during your consultation."
    },
    {
      question: "How often will we meet?",
      answer: "We typically meet quarterly to review your portfolio and adjust strategies as needed, but we're always available when you have questions."
    }
  ]

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs

  const getLayoutClasses = () => {
    switch (layout) {
      case 'grid':
        return 'grid md:grid-cols-2 gap-8'
      default: // accordion
        return 'max-w-4xl mx-auto space-y-4'
    }
  }

  if (layout === 'grid') {
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
          {displayFaqs.map((faq: any, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <h3 className={`text-lg font-semibold ${textColor} mb-3`}>
                {faq.question || 'Question goes here'}
              </h3>
              <p className="text-[#95997D] leading-relaxed">
                {faq.answer || 'Answer content goes here'}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Accordion layout
  return (
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
          {heading}
        </h2>
        {subheading && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {subheading}
          </p>
        )}
        <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
      </div>

      <div className={getLayoutClasses()}>
        {displayFaqs.map((faq: any, index: number) => (
          <details
            key={index}
            className="group bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
          >
            <summary className="cursor-pointer p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className={`text-lg font-semibold ${textColor}`}>
                  {faq.question || 'Question goes here'}
                </h3>
                <svg
                  className="w-5 h-5 transform group-open:rotate-180 transition-transform"
                  style={{ color: accentColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-[#95997D] leading-relaxed">
                {faq.answer || 'Answer content goes here'}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  )
}