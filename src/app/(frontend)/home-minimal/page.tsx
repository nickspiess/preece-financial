import React from 'react'
import { ServiceCard } from '@/components/ServiceCard'
import { PricingSection } from '@/components/PricingSection'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { Header } from '@/components/Header'
import { getCachedHomeData } from '@/utilities/cache'

export default async function MinimalHomePage() {
  const home = await getCachedHomeData()

  if (!home) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Home Page Content Found</h1>
          <p className="text-gray-600 mb-6">Please create a home page entry in the Payload admin panel.</p>
          <a href="/admin/collections/home" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Admin
          </a>
        </div>
      </div>
    )
  }

  // Preload hero image
  const heroImageUrl = typeof home.hero?.heroImage === 'object' && home.hero?.heroImage?.url ? home.hero.heroImage.url : undefined

  return (
    <>
      {/* Preload critical hero image */}
      {heroImageUrl && (
        <link rel="preload" as="image" href={heroImageUrl} />
      )}

      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
        <Header variant="minimal" />

        {/* Hero Section */}
        <HeroImageToggle
          heroImageUrl={heroImageUrl}
          className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100"
          darkOverlay={false}
        >
        {/* Elegant circular elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#62708A]/10 to-[#95997D]/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#95997D]/8 to-[#62708A]/3 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-[#A1B5B8]/6 to-[#95997D]/4 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-[#62708A]/5 to-transparent rounded-full blur-lg"></div>

        {/* Sophisticated line pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 49%, rgba(44, 62, 81, 0.03) 50%, transparent 51%),
              linear-gradient(90deg, transparent 49%, rgba(149, 153, 125, 0.02) 50%, transparent 51%)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Clean geometric accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#62708A]/20 via-[#95997D]/10 to-[#A1B5B8]/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#62708A]/30 to-transparent"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-8 w-3 h-3 bg-[#62708A]/20 rotate-45 rounded-sm"></div>
        <div className="absolute top-2/3 right-12 w-2 h-2 bg-[#95997D]/25 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-8 bg-[#A1B5B8]/15 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-1 bg-[#62708A]/15 rounded-full"></div>

        <div className="container max-w-7xl relative z-10">
          <div className="min-h-[85vh] flex items-center justify-center py-20">
            <div className="text-center max-w-4xl relative">
              {/* Decorative elements around content */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#62708A]/40 to-transparent"></div>

              <div className="h-px w-24 bg-[#62708A] mb-12 mx-auto"></div>
              <h1 className="text-7xl md:text-8xl font-light text-[#2C3E51] mb-8 tracking-tight leading-[0.9] relative">
                {home.hero?.heading || 'Preece Financial Services'}
                {/* Subtle text shadow effect */}
                <div className="absolute inset-0 text-[#62708A]/5 transform translate-x-1 translate-y-1 -z-10">
                  {home.hero?.heading || 'Preece Financial Services'}
                </div>
              </h1>
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
                {home.hero?.tagline || 'Helping your money make sense (and dollars)'}
              </p>
              <button className="px-12 py-4 bg-[#62708A] text-white hover:bg-[#85896D] transition-all duration-300 text-sm tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                SCHEDULE MEETING
              </button>

              {/* Bottom decorative line */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-[#95997D]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </HeroImageToggle>

      {/* Who We Serve Section */}
      {home.whoWeServe && home.whoWeServe.length > 0 && (
        <div className="border-t border-[#E3D3BD] bg-gradient-to-b from-white to-[#E3D3BD]/20">
          <div className="container max-w-7xl py-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
                Who We Serve
              </h2>
              <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              {home.whoWeServe.map((item: any, index: number) => (
                <div key={index} className="group bg-white rounded-lg overflow-hidden border border-[#E3D3BD] hover:border-[#62708A] transition-all hover:shadow-lg">
                  <div className="aspect-[16/18] overflow-hidden h-32">
                    {typeof item.image === 'object' && item.image?.url && (
                      <img
                        src={item.image.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-light mb-4 text-[#2C3E51]">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.description}</p>
                  </div>
                </div>
              ))}
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
      )}

      {/* Services Section */}
      {home.services && home.services.length > 0 && (
        <div id="services" className="bg-[#E3D3BD]/30">
          <div className="container max-w-7xl py-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
                Our Services
              </h2>
              <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
            </div>

            <div className="space-y-px max-w-4xl mx-auto">
              {home.services.map((service: any, index: number) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  hoverColor={service.hoverColor}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {home.about && (
        <div id="about" className="container max-w-6xl py-32 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-6 leading-tight tracking-tight">
              {home.about.heading}
            </h2>
            <div className="w-20 h-px bg-[#62708A] mx-auto mb-8"></div>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {home.about.description1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {home.about.description2}
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {home.about.categories && home.about.categories.map((category: any, index: number) => {
                const colors = ['#62708A', '#95997D', '#A1B5B8']
                const color = colors[index % colors.length]
                return (
                  <div key={index} className="bg-gradient-to-br p-8 rounded-xl border-l-4 text-center" style={{
                    background: `linear-gradient(to bottom right, ${color}1A, #E3D3BD4D)`,
                    borderLeftColor: color
                  }}>
                    <h3 className="text-2xl font-semibold text-[#2C3E51] mb-4">{category.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{category.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Team Section */}
      {home.team && home.team.length > 0 && (
        <div id="team" className="bg-gradient-to-b from-white to-[#E3D3BD]/20 border-t border-[#E3D3BD]">
          <div className="container max-w-7xl py-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
                Our Team
              </h2>
              <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {home.team.map((member: any, index: number) => {
                const colors = ['#62708A', '#95997D', '#A1B5B8', '#62708A']
                const color = colors[index % colors.length]

                return (
                  <div key={index} className="relative group cursor-pointer">
                    <div className="aspect-[4/5] overflow-hidden rounded h-64">
                      {typeof member.image === 'object' && member.image?.url && (
                        <img
                          src={member.image.url}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div
                      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg border-l-4 translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300 shadow-lg flex flex-col items-center justify-center min-w-[180px]"
                      style={{ borderLeftColor: color }}
                    >
                      <h4 className="text-lg font-medium text-[#2C3E51] mb-1 text-center leading-tight">
                        {member.name}{member.credentials ? `, ${member.credentials}` : ''}
                      </h4>
                      <p className="text-sm text-gray-600 text-center font-medium">{member.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Pricing Sections */}
      {home.pricing && home.pricing.length > 0 && (
        <div id="pricing" className="bg-[#E3D3BD]/30">
          <div className="container max-w-7xl py-32 space-y-24">
            {home.pricing.map((section: any, sectionIndex: number) => (
              <PricingSection
                key={sectionIndex}
                title={section.title}
                subtitle={section.subtitle}
                description={section.description}
                color={section.color}
                tiers={section.tiers || []}
              />
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      {home.contact && (
        <div id="contact" className="bg-[#2C3E51] text-white border-t-4 border-[#62708A]">
          <div className="container max-w-7xl py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-6xl font-light mb-8 leading-tight">{home.contact.heading}</h2>
              <p className="text-xl mb-12 text-gray-300 leading-relaxed">
                {home.contact.description}
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
      )}

      {/* Footer */}
      <footer className="bg-[#2C3E51] text-white border-t border-[#62708A]/20">
        <div className="container max-w-7xl py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/pfp.png" alt="Preece Financial" className="w-14 h-14 object-contain opacity-80" />
                <div className="font-light text-lg tracking-tight text-white/80">
                  PREECE FINANCIAL SERVICES
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
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
    </>
  )
}