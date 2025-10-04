import React from 'react'
import { getPayloadSingleton } from '@/utilities/payload-singleton'
import { ServiceCard } from '@/components/ServiceCard'
import { PricingSection } from '@/components/PricingSection'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { Header } from '@/components/Header'

export default async function HomePage() {
  const payload = await getPayloadSingleton()

  const homeData = await payload.find({
    collection: 'home',
    limit: 1,
    populate: {
      'hero.heroImage': true,
      'whoWeServe.image': true,
      'team.image': true,
    },
  })

  const home = homeData.docs[0]

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

        {/* Hero Section with Contact CTA */}
        <HeroImageToggle
          heroImageUrl={heroImageUrl}
          className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-slate-100"
          darkOverlay={false}
        >
          {/* Elegant geometric background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#62708A]/10 to-[#95997D]/5 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#95997D]/8 to-[#62708A]/3 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-[#A1B5B8]/6 to-[#95997D]/4 rounded-full blur-2xl"></div>

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 49%, rgba(44, 62, 81, 0.03) 50%, transparent 51%),
                linear-gradient(90deg, transparent 49%, rgba(149, 153, 125, 0.02) 50%, transparent 51%)
              `,
              backgroundSize: '80px 80px'
            }}
          />

          <div className="container max-w-7xl relative z-10">
            <div className="min-h-[90vh] flex items-center justify-center py-20">
              <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                {/* Left: Hero Content */}
                <div className="text-center lg:text-left">
                  <div className="h-px w-24 bg-[#62708A] mb-8 mx-auto lg:mx-0"></div>
                  <h1 className={`${home.hero?.styling?.headingSize || 'text-6xl md:text-7xl lg:text-8xl'} font-larken ${home.hero?.styling?.headingWeight || 'font-normal'} text-[#2C3E51] mb-6 tracking-tight leading-[0.9]`}>
                    {home.hero?.heading || 'Preece Financial Services'}
                  </h1>
                  <p className={`${home.hero?.styling?.taglineSize || 'text-lg md:text-xl'} font-sans text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0`}>
                    {home.hero?.tagline || 'Helping your money make sense (and dollars)'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="px-8 py-3 bg-[#62708A] text-white hover:bg-[#526078] transition-all duration-300 text-xs tracking-wider shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-sans font-semibold">
                      OUR SERVICES
                    </button>
                    <button className="px-8 py-3 border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white transition-all duration-300 text-xs tracking-wider font-sans font-semibold">
                      LEARN MORE
                    </button>
                  </div>
                </div>

                {/* Right: Contact Form */}
                <div className="w-full max-w-md mx-auto lg:ml-auto">
                  <div className="bg-white/80 backdrop-blur-sm p-8 shadow-2xl border border-gray-100">
                    <h3 className="text-2xl font-larken font-normal text-[#2C3E51] mb-2 text-center">Schedule Your Consultation</h3>
                    <p className="text-sm font-sans text-gray-600 mb-6 text-center">Free • No Obligation • 30 Minutes</p>

                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="px-4 py-3 bg-gray-50 border border-gray-200 text-[#2C3E51] placeholder:text-gray-400 focus:border-[#62708A] focus:outline-none transition text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="px-4 py-3 bg-gray-50 border border-gray-200 text-[#2C3E51] placeholder:text-gray-400 focus:border-[#62708A] focus:outline-none transition text-sm"
                        />
                      </div>

                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#2C3E51] placeholder:text-gray-400 focus:border-[#62708A] focus:outline-none transition text-sm"
                      />

                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#2C3E51] placeholder:text-gray-400 focus:border-[#62708A] focus:outline-none transition text-sm"
                      />

                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-[#2C3E51] focus:border-[#62708A] focus:outline-none transition text-sm">
                        <option value="">Service Interest</option>
                        <option value="planning">Financial Planning</option>
                        <option value="investment">Investment Management</option>
                        <option value="tax">Tax Strategy</option>
                        <option value="retirement">Retirement Planning</option>
                        <option value="business">Business Services</option>
                      </select>

                      <button className="w-full px-6 py-3 bg-[#62708A] text-white hover:bg-[#526078] transition-all duration-300 font-sans font-medium text-sm tracking-wider shadow-lg hover:shadow-xl">
                        SCHEDULE CONSULTATION
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        We'll contact you within 24 hours to confirm
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeroImageToggle>

        {/* Who We Serve Section */}
        {home.whoWeServe && home.whoWeServe.length > 0 && (
          <div className="border-t border-gray-200 bg-gradient-to-b from-white to-gray-50">
            <div className="container max-w-7xl py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-larken font-normal text-[#2C3E51] mb-4 tracking-tight">
                  Who We Serve
                </h2>
                <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {home.whoWeServe.map((item: any, index: number) => (
                  <div key={index} className="group bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-[16/9] overflow-hidden">
                      {typeof item.image === 'object' && item.image?.url && (
                        <img
                          src={item.image.url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-larken font-normal mb-4 text-[#2C3E51]">{item.title}</h3>
                      <p className="text-gray-600 font-sans text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Services Section */}
        {home.services && home.services.length > 0 && (
          <div id="services" className="bg-white border-t border-gray-200">
            <div className="container max-w-7xl py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-larken font-normal text-[#2C3E51] mb-4 tracking-tight">
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
                    titleSize={home.servicesStyling?.titleSize}
                    descriptionSize={home.servicesStyling?.descriptionSize}
                    cardPadding={home.servicesStyling?.cardPadding}
                    enableAnimation={home.servicesStyling?.enableAnimation}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        {home.about && (
          <div id="about" className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
            <div className="container max-w-6xl py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-larken font-normal text-[#2C3E51] mb-6 tracking-tight">
                  {home.about.heading}
                </h2>
                <div className="w-20 h-px bg-[#62708A] mx-auto mb-8"></div>
                <div className="max-w-4xl mx-auto space-y-6">
                  <p className="text-xl font-sans text-gray-700 leading-relaxed">
                    {home.about.description1}
                  </p>
                  <p className="text-lg font-sans text-gray-600 leading-relaxed">
                    {home.about.description2}
                  </p>
                </div>
              </div>

              {home.about.categories && (
                <div className="max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8">
                    {home.about.categories.map((category: any, index: number) => {
                      const colors = ['#62708A', '#95997D', '#A1B5B8']
                      const color = colors[index % colors.length]
                      return (
                        <div key={index} className="bg-white p-8 shadow-lg border-t-4 text-center hover:shadow-xl transition-all duration-300" style={{ borderTopColor: color }}>
                          <h3 className="text-2xl font-larken font-semibold text-[#2C3E51] mb-4">{category.title}</h3>
                          <p className="text-gray-600 font-sans leading-relaxed">{category.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Team Section */}
        {home.team && home.team.length > 0 && (
          <div id="team" className="bg-white border-t border-gray-200">
            <div className="container max-w-7xl py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-larken font-normal text-[#2C3E51] mb-4 tracking-tight">
                  Our Team
                </h2>
                <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {home.team.map((member: any, index: number) => {
                  const colors = ['#62708A', '#95997D', '#A1B5B8', '#62708A']
                  const color = colors[index % colors.length]

                  return (
                    <div key={index} className="group text-center">
                      <div className="aspect-[3/4] overflow-hidden mb-4 shadow-lg">
                        {typeof member.image === 'object' && member.image?.url && (
                          <img
                            src={member.image.url}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                      <h4 className="text-xl font-larken font-normal text-[#2C3E51] mb-2">
                        {member.name}{member.credentials ? `, ${member.credentials}` : ''}
                      </h4>
                      <p className="text-sm font-sans" style={{ color }}>{member.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Pricing Sections */}
        {home.pricing && home.pricing.length > 0 && (
          <div id="pricing" className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
            <div className="container max-w-7xl py-24 space-y-20">
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
            <div className="container max-w-7xl py-24">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-larken font-normal mb-6 leading-tight">{home.contact.heading}</h2>
                <p className="text-lg font-sans mb-10 text-gray-300 leading-relaxed">
                  {home.contact.description}
                </p>
                <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 bg-transparent border-2 border-[#62708A]/50 text-white placeholder:text-[#A1B5B8] focus:outline-none focus:border-[#62708A] transition text-sm"
                  />
                  <button className="px-10 py-4 bg-[#62708A] text-white hover:bg-[#526078] transition-all duration-300 whitespace-nowrap font-sans font-semibold tracking-wider text-xs">
                    GET STARTED
                  </button>
                </form>
                <p className="text-xs text-[#A1B5B8] tracking-wide">NO COMMITMENT REQUIRED</p>
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
                  <li><a href="#services" className="hover:text-[#62708A] transition">Financial Planning</a></li>
                  <li><a href="#services" className="hover:text-[#62708A] transition">Investment Management</a></li>
                  <li><a href="#services" className="hover:text-[#62708A] transition">Tax Strategy</a></li>
                  <li><a href="#services" className="hover:text-[#62708A] transition">Retirement Planning</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">COMPANY</h4>
                <ul className="space-y-3 text-sm text-[#A1B5B8]">
                  <li><a href="#about" className="hover:text-[#62708A] transition">About Us</a></li>
                  <li><a href="#team" className="hover:text-[#62708A] transition">Our Team</a></li>
                  <li><a href="#pricing" className="hover:text-[#62708A] transition">Pricing</a></li>
                  <li><a href="#contact" className="hover:text-[#62708A] transition">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">CONNECT</h4>
                <div className="space-y-3">
                  <p className="text-sm text-[#A1B5B8]">
                    <span className="block text-white mb-1">Phone</span>
                    (555) 123-4567
                  </p>
                  <p className="text-sm text-[#A1B5B8]">
                    <span className="block text-white mb-1">Email</span>
                    info@preecefinancial.com
                  </p>
                  <button className="px-6 py-2 bg-[#62708A] text-white hover:bg-[#526078] transition text-sm tracking-wide mt-4">
                    SCHEDULE MEETING
                  </button>
                </div>
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