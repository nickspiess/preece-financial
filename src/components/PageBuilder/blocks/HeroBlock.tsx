import React from 'react'

interface HeroBlockProps {
  settings: {
    layout?: string
    heading?: string
    subheading?: string
    content?: any
    image?: any
    ctaText?: string
    ctaLink?: string
  }
  globalData?: any
}

export const HeroBlock: React.FC<HeroBlockProps> = ({ settings, globalData }) => {
  const {
    layout = 'centered',
    heading = 'Welcome to Our Financial Services',
    subheading = 'Professional financial guidance you can trust',
    ctaText = 'Get Started',
    ctaLink = '#contact',
    image
  } = settings

  const layoutClasses = {
    centered: 'text-center',
    left: 'text-left',
    'split-form': 'grid lg:grid-cols-2 gap-16 items-center'
  }

  return (
    <div className="container max-w-7xl">
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className={`max-w-4xl w-full ${layoutClasses[layout as keyof typeof layoutClasses]}`}>
          {layout !== 'split-form' ? (
            // Centered or Left Layout
            <div>
              <h1 className="text-5xl lg:text-7xl font-light text-[#2C3E51] mb-8 leading-tight tracking-tight">
                {heading}
              </h1>
              <p className="text-2xl text-[#95997D] mb-12 leading-relaxed">
                {subheading}
              </p>
              <button className="px-12 py-4 bg-[#62708A] text-white hover:bg-[#85896D] transition-all duration-300 text-sm tracking-wider">
                {ctaText}
              </button>
            </div>
          ) : (
            // Split Layout
            <>
              <div>
                <h1 className="text-5xl lg:text-6xl font-light text-[#2C3E51] mb-8 leading-tight">
                  {heading}
                </h1>
                <p className="text-xl text-[#95997D] mb-10 leading-relaxed">
                  {subheading}
                </p>
                <button className="px-10 py-4 bg-[#62708A] text-white hover:bg-[#85896D] transition text-lg">
                  {ctaText}
                </button>
              </div>
              <div className="bg-white shadow-2xl border-l-8 border-[#95997D] p-12">
                <h3 className="text-3xl font-bold text-[#2C3E51] mb-6">Quick Contact</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#62708A] transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#62708A] transition"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#62708A] transition resize-none"
                  />
                  <button className="w-full px-6 py-3 bg-[#95997D] text-white hover:bg-[#62708A] transition">
                    Send Message
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}