import React from 'react'
import { Header } from '@/components/Header'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function HomeProfessionalPage() {
  const payload = await getPayload({ config })

  const homeData = await payload.find({
    collection: 'home',
    limit: 1,
  })

  const home = homeData.docs[0]

  // Preload hero image
  const heroImageUrl = typeof home.hero?.heroImage === 'object' && home.hero?.heroImage?.url ? home.hero.heroImage.url : undefined

  return (
    <>
      {/* Preload critical hero image */}
      {heroImageUrl && (
        <link rel="preload" as="image" href={heroImageUrl} />
      )}

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header variant="professional" />

        {/* Hero Section */}
        <HeroImageToggle
          heroImageUrl={heroImageUrl}
          className="relative bg-gradient-to-br from-[#2C3E51] to-[#62708A] text-white"
          darkOverlay={true}
        >
        <div className="container max-w-7xl py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8">
                {home.hero?.heading || 'Professional Financial Services'}
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
                {home.hero?.tagline || 'Expert guidance for your financial future'}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#95997D] text-white hover:bg-[#85896D] transition-all duration-300 text-lg">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2C3E51] transition-all duration-300 text-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 p-8 lg:p-10">
              <h3 className="text-2xl font-light mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white transition"
                />
                <button className="w-full px-4 py-3 bg-white text-[#2C3E51] hover:bg-white/90 transition font-semibold">
                  Request Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </HeroImageToggle>

      {/* Who We Serve */}
      {home.whoWeServe && home.whoWeServe.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="container max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E51] tracking-tight mb-4">
                Who We Serve
              </h2>
              <div className="w-24 h-px bg-[#62708A] mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {home.whoWeServe.map((item: any, index: number) => {
                const colors = ['#62708A', '#95997D', '#85896D']
                const accentColor = colors[index % colors.length]
                return (
                  <div key={`who-we-serve-${index}`} className="group">
                    <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {typeof item.image === 'object' && item.image?.url && (
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image.url}
                            alt={item.title || 'Service'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="w-12 h-1 mb-4" style={{ backgroundColor: accentColor }}></div>
                        <h3 className="text-xl font-light text-[#2C3E51] mb-3 tracking-tight">
                          {item.title || 'Service'}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {item.description || ''}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Services */}
      {home.services && home.services.length > 0 && (
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E51] tracking-tight mb-4">
                Our Services
              </h2>
              <div className="w-24 h-px bg-[#95997D] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {home.services.map((service: any, index: number) => {
                const colors = ['#62708A', '#95997D', '#85896D', '#A1B5B8']
                const borderColor = colors[index % colors.length]
                return (
                  <div
                    key={`service-${index}`}
                    className="bg-white p-8 border-l-4 hover:shadow-lg transition-all duration-300"
                    style={{ borderLeftColor: borderColor }}
                  >
                    <h3 className="text-2xl font-light text-[#2C3E51] mb-4 tracking-tight">
                      {service.title || 'Service'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description || ''}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {home.about && (
        <section className="py-20 lg:py-24">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E51] tracking-tight mb-6">
                About Preece Financial
              </h2>
              <div className="w-24 h-px bg-[#62708A] mx-auto mb-8"></div>
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-light text-[#2C3E51] mb-6 tracking-tight">
                  {home.about.heading}
                </h3>
                <div className="space-y-6">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {home.about.description1}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {home.about.description2}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {home.about.categories?.map((category: any, index: number) => {
                  const colors = ['#62708A', '#95997D', '#85896D']
                  const borderColor = colors[index % colors.length]
                  return (
                    <div
                      key={`category-${index}`}
                      className="bg-white p-8 rounded-xl shadow-lg border-t-4 text-center hover:shadow-xl transition-shadow"
                      style={{ borderTopColor: borderColor }}
                    >
                      <h4 className="text-xl font-semibold text-[#2C3E51] mb-4">
                        {category.title || 'Category'}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {category.description || ''}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {home.team && home.team.length > 0 && (
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E51] tracking-tight mb-4">
                Our Team
              </h2>
              <div className="w-24 h-px bg-[#62708A] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {home.team.map((member: any, index: number) => (
                <div key={`team-${index}`} className="group">
                  <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                      {typeof member.image === 'object' && member.image?.url && (
                        <img
                          src={member.image.url}
                          alt={member.name || 'Team member'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-lg font-semibold text-[#2C3E51] mb-1">
                        {member.name || 'Team Member'}
                        {member.credentials && `, ${member.credentials}`}
                      </h4>
                      <p className="text-gray-600">
                        {member.title || 'Position'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {home.pricing && home.pricing.length > 0 && (
        <section className="py-20 lg:py-24">
          <div className="container max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl lg:text-5xl font-light text-[#2C3E51] tracking-tight mb-4">
                Investment & Pricing
              </h2>
              <div className="w-24 h-px bg-[#95997D] mx-auto"></div>
            </div>

            <div className="space-y-32">
              {home.pricing.map((section: any, sectionIndex: number) => {
                const sectionColors = ['#E3D3BD', '#A1B5B8', '#95997D']
                const sectionBg = sectionColors[sectionIndex % sectionColors.length]
                return (
                <div key={`pricing-${sectionIndex}`} className="border-4 p-12 rounded-lg" style={{ borderColor: `${sectionBg}60`, backgroundColor: `${sectionBg}08` }}>
                  <h3 className="text-4xl font-light text-[#2C3E51] mb-4 text-center tracking-tight">
                    {section.title}
                  </h3>
                  <div className="w-32 h-px mx-auto mb-12" style={{ backgroundColor: sectionBg }}></div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.tiers?.map((tier: any, tierIndex: number) => {
                      const colors = ['#62708A', '#95997D', '#85896D']
                      const borderColor = colors[tierIndex % colors.length]
                      return (
                        <div
                          key={`tier-${tierIndex}`}
                          className="bg-white border-t-4 shadow-lg hover:shadow-xl transition-all duration-300 p-8"
                          style={{ borderTopColor: borderColor }}
                        >
                          <h4 className="text-2xl font-semibold text-[#2C3E51] mb-2">
                            {tier.name}
                          </h4>
                          <div className="text-3xl font-light text-gray-700 mb-4">
                            {tier.price}
                          </div>
                          {tier.description && (
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {tier.description}
                            </p>
                          )}
                          <ul className="space-y-3 mb-8">
                            {tier.features?.map((feature: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-[#62708A] mr-2">✓</span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            className="w-full py-3 border-2 transition-all duration-300 hover:shadow-md hover:opacity-80"
                            style={{
                              borderColor: borderColor,
                              color: borderColor,
                              backgroundColor: 'transparent'
                            }}
                          >
                            Select Plan
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[#2C3E51]">
        <div className="container max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
            Ready to Take Control of Your Financial Future?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Schedule a complimentary consultation to discuss your financial goals and learn how we can help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-[#95997D] text-white hover:bg-[#85896D] transition-all duration-300 text-lg">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#2C3E51] transition-all duration-300 text-lg">
              Download Our Guide
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E51] border-t border-white/10 py-12">
        <div className="container max-w-7xl">
          <div className="text-center">
            <p className="text-white/60">
              © 2024 Preece Financial Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}