import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { NaturalServiceCard } from '@/components/NaturalServiceCard'
import { NaturalPricingSection } from '@/components/NaturalPricingSection'
import { Header } from '@/components/Header'

export default async function NaturalHomePage() {
  const payload = await getPayload({ config })

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

      <div className="min-h-screen bg-[#F5F2E8]">
        {/* Header Navigation */}
        <Header variant="natural" />

        {/* Hero Section */}
        <HeroImageToggle
          heroImageUrl={heroImageUrl}
          className="relative overflow-hidden"
          darkOverlay={false}
        >
        <div className="container max-w-7xl py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr,350px] gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#2C3E51] leading-tight drop-shadow-sm mb-4">
                {home.hero?.heading || 'Preece Financial Services'}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mb-8">
                {home.hero?.tagline || 'Helping your money make sense (and dollars)'}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-[#95997D] text-white rounded-full hover:bg-[#62708A] transition font-medium">
                  Start Your Journey
                </button>
                <button className="px-8 py-3 border-2 border-[#95997D] text-[#95997D] rounded-full hover:bg-[#95997D] hover:text-white transition font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Organic Contact Form */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-xl border border-[#95997D]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#95997D]/10 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#A1B5B8]/10 rounded-full -ml-8 -mb-8"></div>
              <div className="relative">
                <h3 className="text-2xl font-light text-[#2C3E51] mb-6 text-center">Free Consultation</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#95997D]/5 border border-[#95997D]/20 rounded-xl text-[#2C3E51] placeholder:text-[#95997D]/70 focus:border-[#95997D] focus:outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-[#95997D]/5 border border-[#95997D]/20 rounded-xl text-[#2C3E51] placeholder:text-[#95997D]/70 focus:border-[#95997D] focus:outline-none transition"
                  />
                  <select className="w-full px-4 py-3 bg-[#95997D]/5 border border-[#95997D]/20 rounded-xl text-[#2C3E51] focus:border-[#95997D] focus:outline-none transition">
                    <option value="">Service Interest</option>
                    <option value="planning">Financial Planning</option>
                    <option value="investment">Investment Management</option>
                    <option value="tax">Tax Services</option>
                    <option value="business">Business Services</option>
                  </select>
                  <button className="w-full px-6 py-3 bg-[#95997D] text-white rounded-xl hover:bg-[#62708A] transition font-medium">
                    Book Free Consultation
                  </button>
                  <p className="text-xs text-[#95997D] text-center">No commitment required</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </HeroImageToggle>

      {/* Who We Serve Section */}
      {home.whoWeServe && home.whoWeServe.length > 0 && (
        <div className="py-20 bg-white">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#2C3E51] mb-4">Who We Serve</h2>
              <div className="w-20 h-1 bg-[#95997D] mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {home.whoWeServe.map((item: any, index: number) => {
                const isLeft = index % 2 === 0
                return (
                  <div
                    key={index}
                    className={`flex gap-6 items-center ${isLeft ? '' : 'flex-row-reverse'} group`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#95997D]/20 group-hover:border-[#95997D] transition">
                        {typeof item.image === 'object' && item.image?.url && (
                          <img
                            src={item.image.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
                      <h3 className="text-xl font-medium text-[#2C3E51] mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      {home.services && home.services.length > 0 && (
        <div id="services" className="py-20 bg-gradient-to-br from-[#F5F2E8] to-[#95997D]/5">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#2C3E51] mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[#95997D] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {home.services.map((service: any, index: number) => (
                <NaturalServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {home.about && (
        <div id="about" className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold text-[#2C3E51] mb-8">{home.about.heading}</h2>
              <div className="w-20 h-1 bg-[#95997D] mx-auto rounded-full mb-8"></div>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">{home.about.description1}</p>
                <p className="text-lg text-gray-600 leading-relaxed">{home.about.description2}</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {home.about.categories?.map((category: any, index: number) => {
                  const colors = ['#95997D', '#62708A', '#A1B5B8']
                  const color = colors[index % colors.length]
                  return (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 text-center hover:shadow-xl transition-shadow" style={{ borderTopColor: color }}>
                      <h4 className="text-xl font-semibold text-[#2C3E51] mb-4">{category.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-base">{category.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Section */}
      {home.team && home.team.length > 0 && (
        <div id="team" className="py-20 bg-gradient-to-br from-[#F5F2E8] to-[#95997D]/5">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#2C3E51] mb-4">Our Team</h2>
              <div className="w-20 h-1 bg-[#95997D] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 gap-10 max-w-lg mx-auto">
              {home.team.map((member: any, index: number) => {
                return (
                  <div key={index} className="group">
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-3 relative">
                        {typeof member.image === 'object' && member.image?.url && (
                          <img
                            src={member.image.url}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        ></div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-lg font-medium text-[#2C3E51] mb-1">
                          {member.name}{member.credentials ? `, ${member.credentials}` : ''}
                        </h4>
                        <p className="text-sm font-medium text-[#95997D]">{member.title}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Pricing */}
      {home.pricing && home.pricing.length > 0 && (
        <div id="pricing" className="py-20 bg-white">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-[#2C3E51] mb-4">Pricing Plans</h2>
              <div className="w-20 h-1 bg-[#95997D] mx-auto rounded-full"></div>
            </div>

            <div className="space-y-20">
              {home.pricing.map((section: any, sectionIndex: number) => (
                <NaturalPricingSection
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
        </div>
      )}

      {/* Contact Section */}
      {home.contact && (
        <div id="contact" className="py-20 bg-gradient-to-br from-[#2C3E51] via-[#62708A] to-[#95997D] text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          <div className="container max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-6">{home.contact.heading}</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {home.contact.description}
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/70 focus:border-white/40 focus:outline-none transition backdrop-blur"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/70 focus:border-white/40 focus:outline-none transition backdrop-blur"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/70 focus:border-white/40 focus:outline-none transition backdrop-blur"
                />
                <textarea
                  placeholder="Tell us about your financial goals..."
                  rows={4}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/70 focus:border-white/40 focus:outline-none transition backdrop-blur resize-none"
                />
                <div className="text-center">
                  <button className="px-12 py-4 bg-white text-[#2C3E51] rounded-xl hover:bg-white/90 transition font-medium text-lg">
                    Get In Touch
                  </button>
                  <p className="text-sm text-white/70 mt-4">We'll respond within 24 hours</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2C3E51] text-white py-16">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src="/media/pfs.webp" alt="Preece Financial" className="w-14 h-14 object-contain" />
                <div className="font-medium text-lg">PREECE FINANCIAL SERVICES</div>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Helping your money make sense (and dollars)
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-[#95997D] transition">Financial Planning</a></li>
                <li><a href="#" className="hover:text-[#95997D] transition">Investment Management</a></li>
                <li><a href="#" className="hover:text-[#95997D] transition">Tax Services</a></li>
                <li><a href="#" className="hover:text-[#95997D] transition">Business Planning</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-[#95997D] transition">About Us</a></li>
                <li><a href="#team" className="hover:text-[#95997D] transition">Our Team</a></li>
                <li><a href="#" className="hover:text-[#95997D] transition">Resources</a></li>
                <li><a href="#contact" className="hover:text-[#95997D] transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                <li><a href="#" className="hover:text-[#95997D] transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[#95997D] transition">Facebook</a></li>
                <li><a href="#" className="hover:text-[#95997D] transition">Twitter</a></li>
              </ul>
              <button className="px-6 py-2 bg-[#95997D] text-white rounded-full hover:bg-[#62708A] transition text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              © 2025 Preece Financial Services. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#95997D] transition">Privacy Policy</a>
              <a href="#" className="hover:text-[#95997D] transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}