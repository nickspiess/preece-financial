'use client'

import React from 'react'

export const MinimalTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-[#E3D3BD] sticky top-0 z-50 bg-white">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center gap-3">
              <img src="/media/pfs.webp" alt="Preece Financial" className="w-10 h-10 object-contain" />
              <div className="font-light text-2xl tracking-tight text-[#2C3E51]">
                PREECE
              </div>
            </div>
            <div className="hidden md:flex items-center gap-12">
              <a href="#services" className="text-sm tracking-wide text-[#95997D] hover:text-[#62708A] transition">SERVICES</a>
              <a href="#about" className="text-sm tracking-wide text-[#95997D] hover:text-[#62708A] transition">ABOUT</a>
              <a href="#team" className="text-sm tracking-wide text-[#95997D] hover:text-[#62708A] transition">TEAM</a>
              <a href="#pricing" className="text-sm tracking-wide text-[#95997D] hover:text-[#62708A] transition">PRICING</a>
              <a href="#contact" className="text-sm tracking-wide text-[#95997D] hover:text-[#62708A] transition">CONTACT</a>
              <button className="px-8 py-2 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition-all duration-300 text-sm tracking-wide font-medium">
                SCHEDULE MEETING
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container max-w-7xl">
        <div className="min-h-[85vh] flex items-center justify-center py-20">
          <div className="text-center max-w-4xl">
            <div className="h-px w-24 bg-[#62708A] mb-12 mx-auto"></div>
            <h1 className="text-7xl md:text-8xl font-light text-[#2C3E51] mb-8 tracking-tight leading-[0.9]">
              Preece Financial
              <br />
              <span className="font-semibold text-[#62708A]">Services</span>
            </h1>
            <p className="text-2xl text-[#95997D] mb-12 leading-relaxed">
              Helping your money make sense (and dollars)
            </p>
            <button className="px-12 py-4 bg-[#62708A] text-white hover:bg-[#85896D] transition-all duration-300 text-sm tracking-wider">
              SCHEDULE MEETING
            </button>
          </div>
        </div>
      </div>

      {/* Who We Serve Section */}
      <div className="border-t border-[#E3D3BD] bg-gradient-to-b from-white to-[#E3D3BD]/20">
        <div className="container max-w-7xl py-32">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border border-[#62708A]/30 text-xs tracking-[0.3em] mb-8 text-[#62708A] bg-[#E3D3BD]/30">
              WHO WE SERVE
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="group bg-white rounded-lg overflow-hidden border border-[#E3D3BD] hover:border-[#62708A] transition-all hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="/media/Screenshot 2025-01-11 at 3.11.52 PM-600x366.png" alt="Real Estate Investors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-4 text-[#2C3E51]">Real Estate Investors</h3>
                <p className="text-[#95997D] leading-relaxed mb-3">
                  Already own a portfolio of rental properties or you're just thinking about getting started?
                </p>
                <p className="text-[#95997D] leading-relaxed">
                  Whether it's current portfolio analysis, options for new purchases, or tax strategies unique to real estate, PFP has the answers. Work with someone who gets it.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden border border-[#E3D3BD] hover:border-[#95997D] transition-all hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="/media/Screenshot 2025-01-11 at 3.11.52 PM-600x366.png" alt="Young Professionals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-4 text-[#2C3E51]">Young Professionals</h3>
                <p className="text-[#95997D] leading-relaxed mb-3">
                  What down payment should you make on a house? How much to save for retirement? Which health plan is best? Want to travel more?
                </p>
                <p className="text-[#95997D] leading-relaxed">
                  Finance isn't one-size-fits-all. Find general tips on the PFP blog, or schedule a chat for tailored advice.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden border border-[#E3D3BD] hover:border-[#C48457] transition-all hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="/media/Screenshot 2025-01-11 at 3.11.52 PM-600x366.png" alt="Entrepreneurs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-4 text-[#2C3E51]">Entrepreneurs</h3>
                <p className="text-[#95997D] leading-relaxed">
                  Entrepreneurship is more than a job—it's a mindset. It's about the passion to create something new.
                </p>
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden border border-[#E3D3BD] hover:border-[#A1B5B8] transition-all hover:shadow-lg">
              <div className="aspect-[16/9] overflow-hidden">
                <img src="/media/Screenshot 2025-01-11 at 3.11.52 PM-600x366.png" alt="Retirees" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-4 text-[#2C3E51]">Retirees</h3>
                <p className="text-[#95997D] leading-relaxed mb-3">
                  You've spent your whole life working to build your nest egg. Now how do you turn that nest egg into an income stream?
                </p>
                <p className="text-[#95997D] leading-relaxed">
                  A lot changes in retirement. We help manage taxes, create income and enjoy the wealth you've built.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="px-10 py-3 bg-[#62708A] text-white hover:bg-[#85896D] transition text-sm tracking-wide">
              SCHEDULE MEETING
            </button>
            <button className="px-10 py-3 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition text-sm tracking-wide">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-[#E3D3BD]/30">
        <div className="container max-w-7xl py-32">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border border-[#62708A]/30 text-xs tracking-[0.3em] mb-8 text-[#62708A] bg-white">
              SERVICES
            </div>
          </div>

          <div className="space-y-px max-w-4xl mx-auto">
            <div className="bg-white p-12 hover:bg-[#62708A] hover:text-white transition-all duration-500 group cursor-pointer border-l-4 border-[#62708A]/30 hover:border-[#62708A]">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-light text-[#2C3E51] group-hover:text-white transition-colors mb-4">Bookkeeping & Payroll</h3>
                  <p className="text-[#95997D] group-hover:text-white/90 transition-colors leading-relaxed">Keep your business finances organized with professional bookkeeping and payroll services that give you more time to focus on growth.</p>
                </div>
                <button className="px-6 py-2 border border-[#2C3E51] text-[#2C3E51] group-hover:border-white group-hover:text-white transition text-sm tracking-wide whitespace-nowrap">
                  MORE INFO
                </button>
              </div>
            </div>

            <div className="bg-white p-12 hover:bg-[#95997D] hover:text-white transition-all duration-500 group cursor-pointer border-l-4 border-[#95997D]/30 hover:border-[#95997D]">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-light text-[#2C3E51] group-hover:text-white transition-colors mb-4">Financial Planning / Investment Management</h3>
                  <p className="text-[#95997D] group-hover:text-white/90 transition-colors leading-relaxed">Build and protect your wealth with comprehensive financial planning and investment strategies designed around your unique goals.</p>
                </div>
                <button className="px-6 py-2 border border-[#2C3E51] text-[#2C3E51] group-hover:border-white group-hover:text-white transition text-sm tracking-wide whitespace-nowrap">
                  MORE INFO
                </button>
              </div>
            </div>

            <div className="bg-white p-12 hover:bg-[#C48457] hover:text-white transition-all duration-500 group cursor-pointer border-l-4 border-[#C48457]/30 hover:border-[#C48457]">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-light text-[#2C3E51] group-hover:text-white transition-colors mb-4">Tax Prep & Planning</h3>
                  <p className="text-[#95997D] group-hover:text-white/90 transition-colors leading-relaxed">Maximize your returns with strategic tax preparation and planning that keeps you compliant while minimizing your tax liability.</p>
                </div>
                <button className="px-6 py-2 border border-[#2C3E51] text-[#2C3E51] group-hover:border-white group-hover:text-white transition text-sm tracking-wide whitespace-nowrap">
                  MORE INFO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container max-w-7xl py-32 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-6 py-2 border border-[#62708A]/30 text-xs tracking-[0.3em] mb-8 text-[#62708A] bg-[#E3D3BD]/30">
              ABOUT US
            </div>
            <h2 className="text-4xl font-light text-[#2C3E51] mb-6 leading-tight">
              Not Your Average <span className="font-semibold text-[#62708A]">Financial Firm</span>
            </h2>
            <p className="text-xl text-[#95997D] leading-relaxed mb-6">
              We don't like for things to get too stuffy - you can expect prompt responses, detailed explanations, and personalized advice.
            </p>
            <p className="text-lg text-[#95997D] leading-relaxed">
              Preece Financial Services brings together a team of experienced professionals who wants to help you improve your financial life - whether that's with your personal finances, business P&L, or a little bit of both.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#62708A]/10 to-[#E3D3BD]/30 p-8 rounded border-l-4 border-[#62708A]">
              <h3 className="text-2xl font-light text-[#2C3E51] mb-3">Personal</h3>
              <p className="text-[#95997D] leading-relaxed">Retirement planning, investment strategies, and wealth management tailored to your goals.</p>
            </div>
            <div className="bg-gradient-to-br from-[#95997D]/10 to-[#E3D3BD]/30 p-8 rounded border-l-4 border-[#95997D]">
              <h3 className="text-2xl font-light text-[#2C3E51] mb-3">Business</h3>
              <p className="text-[#95997D] leading-relaxed">Bookkeeping, payroll, tax optimization, and strategic financial planning for entrepreneurs.</p>
            </div>
            <div className="bg-gradient-to-br from-[#C48457]/10 to-[#E3D3BD]/30 p-8 rounded border-l-4 border-[#C48457]">
              <h3 className="text-2xl font-light text-[#2C3E51] mb-3">Both</h3>
              <p className="text-[#95997D] leading-relaxed">Comprehensive solutions that bridge your personal wealth and business finances seamlessly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="bg-gradient-to-b from-white to-[#E3D3BD]/20 border-t border-[#E3D3BD]">
        <div className="container max-w-7xl py-32">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 border border-[#62708A]/30 text-xs tracking-[0.3em] mb-8 text-[#62708A] bg-[#E3D3BD]/30">
              OUR TEAM
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="relative group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded">
                <img src="/media/austin.webp" alt="Austin Preece" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-4 m-3 rounded border-l-4 border-[#62708A] transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-light text-[#2C3E51] mb-1">Austin Preece, CFP®, EA</h4>
                <p className="text-xs text-[#95997D]">Financial Planner and Tax Advisor</p>
              </div>
            </div>

            <div className="relative group cursor-pointer mt-8">
              <div className="aspect-[3/4] overflow-hidden rounded">
                <img src="/media/brooks.webp" alt="Brooks Larson" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-4 m-3 rounded border-l-4 border-[#95997D] transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-light text-[#2C3E51] mb-1">Brooks Larson, AIF, ChFC, RICP</h4>
                <p className="text-xs text-[#95997D]">Retirement Income Planner</p>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded">
                <img src="/media/nolan.webp" alt="Nolan Baier" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-4 m-3 rounded border-l-4 border-[#C48457] transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-light text-[#2C3E51] mb-1">Nolan Baier</h4>
                <p className="text-xs text-[#95997D]">Bookkeeping & Payroll Advisor</p>
              </div>
            </div>

            <div className="relative group cursor-pointer mt-8">
              <div className="aspect-[3/4] overflow-hidden rounded">
                <img src="/media/joe.webp" alt="Joe Hoffart" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-4 m-3 rounded border-l-4 border-[#62708A] transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="text-lg font-light text-[#2C3E51] mb-1">Joe Hoffart</h4>
                <p className="text-xs text-[#95997D]">Paraplanner</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Sections */}
      <div id="pricing" className="bg-[#E3D3BD]/30">
        <div className="container max-w-7xl py-32 space-y-24">
          {/* Financial Planning & Investment Management */}
          <div>
            <h2 className="text-4xl font-light text-[#2C3E51] mb-4 text-center">Financial Planning & Investment <span className="font-semibold text-[#62708A]">Management</span></h2>
            <p className="text-center text-[#95997D] mb-12 max-w-2xl mx-auto">Comprehensive planning and investment strategies tailored to your goals</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#62708A] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Investments Only</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Portfolio management services tailored to your investment goals</p>
                <button className="w-full px-6 py-3 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>

              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#62708A] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Fee Plan Only</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Financial planning without investment management</p>
                <button className="w-full px-6 py-3 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>

              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#62708A] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Investment + Planning</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Comprehensive wealth management combining both services</p>
                <button className="w-full px-6 py-3 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-10 py-3 bg-[#62708A] text-white hover:bg-[#85896D] transition text-sm tracking-wide">
                START YOUR PLAN
              </button>
              <button className="px-10 py-3 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition text-sm tracking-wide">
                SCHEDULE MEETING
              </button>
            </div>
          </div>

          {/* Bookkeeping & Payroll */}
          <div>
            <h2 className="text-4xl font-light text-[#2C3E51] mb-4 text-center">Bookkeeping & <span className="font-semibold text-[#95997D]">Payroll</span></h2>
            <p className="text-center text-[#95997D] mb-12 max-w-2xl mx-auto">Professional bookkeeping services to keep your business running smoothly</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#95997D] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Monthly</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Monthly bookkeeping services to keep your finances organized</p>
                <button className="w-full px-6 py-3 border-2 border-[#95997D] text-[#95997D] hover:bg-[#95997D] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>

              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#95997D] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Hourly</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">As-needed bookkeeping support when you need it</p>
                <button className="w-full px-6 py-3 border-2 border-[#95997D] text-[#95997D] hover:bg-[#95997D] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>

              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#95997D] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Payroll + Monthly</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Full-service bookkeeping and payroll management</p>
                <button className="w-full px-6 py-3 border-2 border-[#95997D] text-[#95997D] hover:bg-[#95997D] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-10 py-3 bg-[#95997D] text-white hover:bg-[#526078] transition text-sm tracking-wide">
                START YOUR PLAN
              </button>
              <button className="px-10 py-3 border-2 border-[#95997D] text-[#95997D] hover:bg-[#95997D] hover:text-white transition text-sm tracking-wide">
                SCHEDULE MEETING
              </button>
            </div>
          </div>

          {/* Tax Prep & Planning */}
          <div>
            <h2 className="text-4xl font-light text-[#2C3E51] mb-4 text-center">Tax Prep & <span className="font-semibold text-[#C48457]">Planning</span></h2>
            <p className="text-center text-[#95997D] mb-12 max-w-2xl mx-auto">Strategic tax planning to maximize your returns</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#C48457] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Tax Prep</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Professional tax preparation to maximize your returns</p>
                <button className="w-full px-6 py-3 border-2 border-[#C48457] text-[#C48457] hover:bg-[#C48457] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>

              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#C48457] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Tax Planning</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Proactive tax strategy to minimize your liability</p>
                <button className="w-full px-6 py-3 border-2 border-[#C48457] text-[#C48457] hover:bg-[#C48457] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>

              <div className="bg-white p-8 rounded border-2 border-[#E3D3BD] hover:border-[#C48457] hover:shadow-lg transition-all group">
                <h3 className="text-xl font-light text-[#2C3E51] mb-4">Return Review</h3>
                <p className="text-sm text-[#95997D] mb-6 leading-relaxed min-h-[60px]">Second opinion on your returns for peace of mind</p>
                <button className="w-full px-6 py-3 border-2 border-[#C48457] text-[#C48457] hover:bg-[#C48457] hover:text-white transition font-medium text-xs tracking-wide">
                  CONTACT US
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-10 py-3 bg-[#C48457] text-white hover:bg-[#B37547] transition text-sm tracking-wide">
                START YOUR PLAN
              </button>
              <button className="px-10 py-3 border-2 border-[#C48457] text-[#C48457] hover:bg-[#C48457] hover:text-white transition text-sm tracking-wide">
                SCHEDULE MEETING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-[#2C3E51] text-white border-t-4 border-[#62708A]">
        <div className="container max-w-7xl py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-6xl font-light mb-8 leading-tight">Let's Talk</h2>
            <p className="text-xl mb-12 text-[#A1B5B8] leading-relaxed">
              Ready to take control of your financial future? Schedule a complimentary consultation.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-5 bg-transparent border-2 border-[#62708A]/50 text-white placeholder:text-[#A1B5B8] focus:outline-none focus:border-[#62708A] transition"
              />
              <button className="px-12 py-5 bg-[#62708A] text-white hover:bg-[#85896D] transition whitespace-nowrap font-medium tracking-wide">
                GET STARTED
              </button>
            </form>
            <p className="text-sm text-[#A1B5B8] tracking-wide">NO COMMITMENT REQUIRED</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2C3E51] text-white border-t border-[#62708A]/20">
        <div className="container max-w-7xl py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/media/pfs.webp" alt="Preece Financial" className="w-10 h-10 object-contain opacity-80" />
                <div className="font-light text-lg tracking-tight text-white/80">
                  PREECE FINANCIAL SERVICES
                </div>
              </div>
              <p className="text-sm text-[#A1B5B8] leading-relaxed">
                Helping your money make sense (and dollars)
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">SERVICES</h4>
              <ul className="space-y-3 text-sm text-[#A1B5B8]">
                <li><a href="#" className="hover:text-[#62708A] transition">Financial Planning</a></li>
                <li><a href="#" className="hover:text-[#62708A] transition">Investment Management</a></li>
                <li><a href="#" className="hover:text-[#62708A] transition">Bookkeeping & Payroll</a></li>
                <li><a href="#" className="hover:text-[#62708A] transition">Tax Prep & Planning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">COMPANY</h4>
              <ul className="space-y-3 text-sm text-[#A1B5B8]">
                <li><a href="#about" className="hover:text-[#62708A] transition">About Us</a></li>
                <li><a href="#team" className="hover:text-[#62708A] transition">Our Team</a></li>
                <li><a href="#" className="hover:text-[#62708A] transition">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#62708A] transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">CONNECT</h4>
              <ul className="space-y-3 text-sm text-[#A1B5B8] mb-6">
                <li><a href="#" className="hover:text-[#62708A] transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#62708A] transition">Facebook</a></li>
                <li><a href="#" className="hover:text-[#62708A] transition">Twitter</a></li>
              </ul>
              <button className="px-6 py-2 bg-[#62708A] text-white hover:bg-[#85896D] transition text-sm tracking-wide">
                SCHEDULE MEETING
              </button>
            </div>
          </div>

          <div className="border-t border-[#62708A]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A1B5B8]">
            <div>
              © 2025 Preece Financial Services. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#62708A] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#62708A] transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}