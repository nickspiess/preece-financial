import React from 'react'
import { getPayloadSingleton } from '@/utilities/payload-singleton'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { Header } from '@/components/Header'
import { ContactForm } from '@/components/ContactForm'

export default async function ContactPage() {
  const payload = await getPayloadSingleton()

  const contactData = await payload.find({
    collection: 'contact',
    limit: 1,
    populate: {
      'heroImage': true,
    },
  })

  const contact = contactData.docs[0]

  if (!contact) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No Contact Page Content Found</h1>
          <p className="text-gray-600 mb-6">Please create a contact page entry in the Payload admin panel.</p>
          <a href="/admin/collections/contact" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Admin
          </a>
        </div>
      </div>
    )
  }

  const heroImageUrl = typeof contact.heroImage === 'object' && contact.heroImage?.url ? contact.heroImage.url : undefined

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
          className="relative overflow-hidden bg-gradient-to-br from-[#2C3E51] via-[#3a4f66] to-[#2C3E51]"
          darkOverlay={true}
        >
          {/* Sophisticated overlay pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          {/* Animated gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#62708A]/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#A1B5B8]/20 to-transparent rounded-full blur-3xl"></div>

          <div className="container max-w-6xl relative z-10 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-larken font-medium text-white tracking-tight leading-none mb-6">
                {contact.heroHeading || "Let's Chat"}
              </h1>

              {contact.heroSubheading && (
                <p className="text-xl md:text-2xl font-sans text-[#A1B5B8] font-normal leading-relaxed max-w-3xl mx-auto">
                  {contact.heroSubheading}
                </p>
              )}
            </div>
          </div>
        </HeroImageToggle>

        {/* Contact Information Section */}
        {contact.contactInfo?.showContactInfo && (
          <div className={`${contact.contactInfo.styling?.backgroundColor || 'bg-white'} border-b border-gray-200 relative overflow-hidden`}>
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-bl from-[#62708A]/6 to-transparent rounded-full blur-3xl"></div>

            <div className={`container max-w-6xl ${contact.contactInfo.styling?.spacing || 'py-16'} relative z-10`}>
              {contact.contactInfo.sectionHeading && (
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-larken font-medium text-[#2C3E51] mb-4 tracking-tight">
                    {contact.contactInfo.sectionHeading}
                  </h2>
                  <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Phone */}
                {contact.contactInfo.phone && (
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#62708A] to-[#526078] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
                    <a href={`tel:${contact.contactInfo.phone}`} className="text-xl font-medium text-[#2C3E51] hover:text-[#62708A] transition">
                      {contact.contactInfo.phone}
                    </a>
                  </div>
                )}

                {/* Email */}
                {contact.contactInfo.email && (
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#95997D] to-[#7a7e64] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</h3>
                    <a href={`mailto:${contact.contactInfo.email}`} className="text-xl font-medium text-[#2C3E51] hover:text-[#62708A] transition break-all">
                      {contact.contactInfo.email}
                    </a>
                  </div>
                )}

                {/* Office Address */}
                {contact.contactInfo.officeAddress && (
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#A1B5B8] to-[#8a9fa2] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Office</h3>
                    <p className="text-lg font-medium text-[#2C3E51] whitespace-pre-line">
                      {contact.contactInfo.officeAddress}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Booking/Schedule Section */}
        {contact.booking?.showBooking && (
          <div className={`${contact.booking.styling?.backgroundColor || 'bg-gray-50'} relative overflow-hidden`}>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#62708A]/8 to-transparent rounded-full blur-3xl"></div>

            <div className={`container max-w-4xl ${contact.booking.styling?.spacing || 'py-16'} relative z-10`}>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-larken font-medium text-[#2C3E51] mb-4 tracking-tight">
                  {contact.booking?.heading || 'Schedule Meeting'}
                </h2>
                <div className="w-20 h-px bg-[#62708A] mx-auto mb-4"></div>
                {contact.booking.description && (
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    {contact.booking.description}
                  </p>
                )}
              </div>

              <ContactForm
                buttonText={contact.booking?.buttonText || 'Send'}
                successMessage={contact.booking?.successMessage || "Thank you for your message! We'll be in touch soon."}
              />
            </div>
          </div>
        )}

        {/* Additional Content Section */}
        {contact.additional?.showAdditionalContent && contact.additional.content && (
          <div className={`${contact.additional.styling?.backgroundColor || 'bg-white'} border-t border-gray-200`}>
            <div className={`container max-w-4xl ${contact.additional.styling?.spacing || 'py-16'}`}>
              {contact.additional.heading && (
                <h2 className="text-3xl md:text-4xl font-larken font-medium text-[#2C3E51] mb-8 text-center">
                  {contact.additional.heading}
                </h2>
              )}
              <div className="prose prose-lg max-w-none [&_p]:text-gray-800">
                {/* Rich text content would go here */}
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
                  <li><a href="/services" className="hover:text-[#62708A] transition">Financial Planning</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Investment Management</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Tax Strategy</a></li>
                  <li><a href="/services" className="hover:text-[#62708A] transition">Accounting Services</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm tracking-wider">COMPANY</h4>
                <ul className="space-y-3 text-sm text-[#A1B5B8]">
                  <li><a href="/about" className="hover:text-[#62708A] transition">About</a></li>
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
                    {contact.contactInfo?.phone || '(715) 903-6125'}
                  </p>
                  <p className="text-sm text-[#A1B5B8]">
                    <span className="block text-white mb-1">Email</span>
                    {contact.contactInfo?.email || 'Austin.Preece@PreeceFP.com'}
                  </p>
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
