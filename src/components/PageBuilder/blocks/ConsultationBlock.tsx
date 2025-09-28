import React from 'react'

interface ConsultationBlockProps {
  settings: {
    heading?: string
    subheading?: string
  }
}

export const ConsultationBlock: React.FC<ConsultationBlockProps> = ({ settings }) => {
  const {
    heading = 'Free Consultation',
    subheading = 'Get expert financial guidance at no cost'
  } = settings

  return (
    <div className="container max-w-7xl">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-2xl border-l-8 border-[#95997D] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#95997D]/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#62708A]/10 rounded-full -ml-12 -mb-12"></div>
          <div className="relative p-12">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[#95997D] text-white text-xs font-bold tracking-widest mb-4">
                COMPLIMENTARY
              </div>
              <h2 className="text-4xl font-bold text-[#2C3E51] mb-2">{heading}</h2>
              <p className="text-[#95997D] font-medium">{subheading}</p>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-6 py-4 bg-[#95997D]/5 border-2 border-[#95997D]/30 text-[#2C3E51] placeholder:text-[#95997D]/70 font-medium focus:border-[#95997D] focus:bg-white transition rounded-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-6 py-4 bg-[#95997D]/5 border-2 border-[#95997D]/30 text-[#2C3E51] placeholder:text-[#95997D]/70 font-medium focus:border-[#95997D] focus:bg-white transition rounded-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-[#95997D]/5 border-2 border-[#95997D]/30 text-[#2C3E51] placeholder:text-[#95997D]/70 font-medium focus:border-[#95997D] focus:bg-white transition rounded-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 bg-[#95997D]/5 border-2 border-[#95997D]/30 text-[#2C3E51] placeholder:text-[#95997D]/70 font-medium focus:border-[#95997D] focus:bg-white transition rounded-none"
              />
              <textarea
                placeholder="Tell us about your financial goals..."
                rows={3}
                className="w-full px-6 py-4 bg-[#95997D]/5 border-2 border-[#95997D]/30 text-[#2C3E51] placeholder:text-[#95997D]/70 font-medium focus:border-[#95997D] focus:bg-white transition rounded-none resize-none"
              />
              <button className="w-full px-8 py-5 bg-[#95997D] text-white font-bold hover:bg-[#62708A] transition text-lg tracking-wide border-4 border-[#95997D] hover:border-[#62708A] rounded-none shadow-lg">
                SCHEDULE MY FREE CONSULTATION
              </button>
              <div className="text-center space-y-2">
                <p className="text-xs text-[#95997D] font-bold tracking-widest">✓ NO OBLIGATION ✓ CONFIDENTIAL ✓ 30 MINUTES</p>
                <p className="text-xs text-[#2C3E51]/70">Typically scheduled within 24-48 hours</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}