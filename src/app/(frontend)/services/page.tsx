import React from 'react'
import { getPayloadSingleton } from '@/utilities/payload-singleton'
import { ServiceOfferingCard } from '@/components/ServiceOfferingCard'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { Header } from '@/components/Header'

export default async function ServicesPage() {
  const payload = await getPayloadSingleton()

  const servicesData = await payload.find({
    collection: 'services',
    limit: 1,
    populate: {
      'hero.heroImage': true,
      'selectedTestimonials': true,
    },
  })

  const services = servicesData.docs[0]

  if (!services) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Services Page Content Found</h1>
          <p className="text-gray-600 mb-6">Please create a services page entry in the Payload admin panel.</p>
          <a href="/admin/collections/services" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Admin
          </a>
        </div>
      </div>
    )
  }

  const heroImageUrl = typeof services.hero?.heroImage === 'object' && services.hero?.heroImage?.url ? services.hero.heroImage.url : undefined

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
          className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-slate-50"
          darkOverlay={false}
        >
          {/* Elegant geometric background elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#62708A]/10 to-[#95997D]/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#A1B5B8]/8 to-[#62708A]/3 rounded-full blur-2xl"></div>

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

          <div className="container max-w-6xl relative z-10">
            <div className="min-h-[70vh] flex items-center justify-center py-20">
              <div className="text-center max-w-4xl">
                <div className="h-px w-24 bg-[#62708A] mb-8 mx-auto"></div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-larken font-normal text-[#2C3E51] mb-8 tracking-tight leading-tight">
                  {services.hero?.heading || 'Our Services'}
                </h1>

                <p className="text-lg md:text-xl font-sans text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                  {services.hero?.description || 'Comprehensive financial services tailored to your unique needs'}
                </p>

                {/* CTA Buttons */}
                {services.ctaButtons && services.ctaButtons.length > 0 && (
                  <div className="flex flex-wrap gap-4 justify-center">
                    {services.ctaButtons.map((button: any, index: number) => {
                      const isPrimary = button.style === 'primary'
                      const isSecondary = button.style === 'secondary'

                      return (
                        <a
                          key={index}
                          href={button.link}
                          className={`px-8 py-3 text-xs tracking-wider font-sans font-semibold transition-all duration-300 ${
                            isPrimary
                              ? 'bg-[#62708A] text-white hover:bg-[#526078] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                              : isSecondary
                              ? 'border-2 border-[#62708A] text-[#62708A] hover:bg-[#62708A] hover:text-white'
                              : 'text-[#62708A] hover:text-[#526078] underline underline-offset-4'
                          }`}
                        >
                          {button.text}
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </HeroImageToggle>

        {/* Service Offerings Section */}
        {services.serviceOfferings && services.serviceOfferings.length > 0 && (
          <div className="bg-white border-t border-gray-200">
            <div className="container max-w-7xl py-24">
              <div className={`grid gap-8 ${
                services.serviceOfferings.length === 4
                  ? 'md:grid-cols-2'
                  : services.serviceOfferings.length === 5 || services.serviceOfferings.length === 6
                  ? 'md:grid-cols-2 lg:grid-cols-3'
                  : services.serviceOfferings.length >= 7
                  ? 'md:grid-cols-2 lg:grid-cols-3'
                  : 'md:grid-cols-3'
              }`}>
                {services.serviceOfferings.map((offering: any, index: number) => (
                  <ServiceOfferingCard
                    key={index}
                    title={offering.title}
                    badge={offering.badge}
                    tagline={offering.tagline}
                    description={offering.description}
                    features={offering.features}
                    ctaText={offering.ctaText}
                    ctaLink={offering.ctaLink}
                    accentColor={offering.accentColor || '#62708A'}
                    titleSize={offering.cardStyling?.titleSize}
                    titleWeight={offering.cardStyling?.titleWeight}
                    descriptionSize={offering.cardStyling?.descriptionSize}
                    cardPadding={offering.cardStyling?.cardPadding}
                    shadowIntensity={offering.cardStyling?.shadowIntensity}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Additional Services Section - Accounting */}
        {services.additionalServices && services.additionalServices.length > 0 && (
          <div className="border-t border-gray-200">
            {services.additionalServices.map((service: any, index: number) => (
              <div key={index} className={`${service.backgroundColor || 'bg-gray-50'}`}>
                <div className="container max-w-6xl py-20">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-larken font-normal text-[#2C3E51] mb-6 tracking-tight">
                      {service.title}
                    </h2>
                    <div className="w-20 h-px bg-[#62708A] mx-auto mb-8"></div>

                    <div className="text-lg font-sans text-gray-700 leading-relaxed mb-8">
                      <p className="mb-4">Yes, accounting too! Tax preparation and advisory, bookkeeping, payroll - we've got you covered!</p>
                      <p className="mb-6">Preece Accounting Services LLC can help with:</p>

                      <ul className="inline-block text-left space-y-3 mb-8">
                        {service.features && service.features.map((item: any, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-[#62708A] rounded-full flex-shrink-0 mt-2.5" />
                            <span>{item.item}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-gray-600 italic">
                        Tax preparation and bookkeeping offered through Preece Accounting Services LLC. Check out our site to get started!
                      </p>
                    </div>

                    {service.ctaText && (
                      <a
                        href={service.ctaLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-[#62708A] text-white hover:bg-[#526078] transition-all duration-300 text-sm tracking-wider shadow-lg hover:shadow-xl font-sans"
                      >
                        {service.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials Section */}
        {services.showTestimonials && (
          <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
            <div className="container max-w-7xl py-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-larken font-normal text-[#2C3E51] mb-4 tracking-tight">
                  {services.testimonialsHeading || 'What Our Clients Say'}
                </h2>
                <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
              </div>

              {services.selectedTestimonials && services.selectedTestimonials.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.selectedTestimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl text-[#62708A] mb-4">"</div>
                      <p className="text-gray-700 font-sans leading-relaxed mb-6 italic">
                        {typeof testimonial === 'object' ? testimonial.quote : ''}
                      </p>
                      <div className="flex items-center gap-4">
                        {typeof testimonial === 'object' && testimonial.image && typeof testimonial.image === 'object' && testimonial.image.url && (
                          <img
                            src={testimonial.image.url}
                            alt={testimonial.clientName}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <p className="font-sans font-medium text-[#2C3E51]">
                            {typeof testimonial === 'object' ? testimonial.clientName : ''}
                          </p>
                          {typeof testimonial === 'object' && testimonial.clientTitle && (
                            <p className="text-sm font-sans text-gray-600">{testimonial.clientTitle}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">No testimonials available yet.</p>
              )}
            </div>
          </div>
        )}

        {/* Disclaimer Section */}
        {services.disclaimer?.showDisclaimer && services.disclaimer?.disclaimerText && (
          <div className="bg-gray-100 border-t border-gray-200">
            <div className="container max-w-6xl py-12">
              <p className="text-sm font-sans text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                {services.disclaimer.disclaimerText}
              </p>
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
                  <li><a href="/services" className="hover:text-[#62708A] transition">Financial Planning</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Investment Management</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Tax Strategy</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Accounting Services</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">COMPANY</h4>
                <ul className="space-y-3 text-sm text-[#A1B5B8]">
                  <li><a href="/about" className="hover:text-[#62708A] transition">About Us</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Services</a></li>
                  <li><a href="/blog" className="hover:text-[#62708A] transition">Blog</a></li>
                  <li><a href="/contact" className="hover:text-[#62708A] transition">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">CONNECT</h4>
                <div className="space-y-3">
                  <p className="text-sm text-[#A1B5B8]">
                    <span className="block text-white mb-1">Phone</span>
                    (715) 903-6125
                  </p>
                  <p className="text-sm text-[#A1B5B8]">
                    <span className="block text-white mb-1">Email</span>
                    Austin.Preece@PreeceFP.com
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
