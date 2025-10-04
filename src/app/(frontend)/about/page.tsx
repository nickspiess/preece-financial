import React from 'react'
import { getPayloadSingleton } from '@/utilities/payload-singleton'
import { HeroImageToggle } from '@/components/HeroImageToggle'
import { Header } from '@/components/Header'
import RichText from '@/components/RichText'
import { TeamSection } from '@/components/TeamSection'
import { ImageCarousel } from '@/components/ImageCarousel'

export default async function AboutPage() {
  const payload = await getPayloadSingleton()

  const aboutData = await payload.find({
    collection: 'about',
    limit: 1,
    populate: {
      'hero.heroImage': true,
      'mainStory.image': true,
      'mainStory.carouselImages.image': true,
      'teamMembers.image': true,
    },
  })

  const about = aboutData.docs[0]

  if (!about) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">No About Page Content Found</h1>
          <p className="text-gray-600 mb-6">Please create an about page entry in the Payload admin panel.</p>
          <a href="/admin/collections/about" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Admin
          </a>
        </div>
      </div>
    )
  }

  const heroImageUrl = typeof about.hero?.heroImage === 'object' && about.hero?.heroImage?.url ? about.hero.heroImage.url : undefined

  return (
    <>
      {/* Preload critical hero image */}
      {heroImageUrl && (
        <link rel="preload" as="image" href={heroImageUrl} />
      )}

      <div className="min-h-screen bg-white">
        {/* Header Navigation */}
        <Header variant="minimal" />

        {/* Hero Section - Redesigned */}
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

          <div className={`container max-w-6xl relative z-10 ${about.hero?.styling?.spacing || 'py-20'}`}>
            <div className="flex items-center">
              <div className="max-w-5xl">
                <div className="flex items-start gap-6 mb-6">
                  {/* Vertical accent bar to the left of heading */}
                  <div className="h-20 w-1 bg-gradient-to-b from-[#62708A] to-[#A1B5B8] flex-shrink-0 mt-2"></div>

                  <h1 className={`${about.hero?.styling?.headingSize || 'text-5xl md:text-6xl lg:text-7xl'} font-larken ${about.hero?.styling?.headingWeight || 'font-medium'} text-white tracking-tight leading-none`}>
                    {about.hero?.heading || 'About'}
                  </h1>
                </div>

                {about.hero?.subheading && (
                  <p className={`${about.hero?.styling?.subheadingSize || 'text-xl md:text-2xl'} font-sans text-[#A1B5B8] font-normal leading-relaxed max-w-3xl ml-10`}>
                    {about.hero.subheading}
                  </p>
                )}
              </div>
            </div>
          </div>
        </HeroImageToggle>

        {/* Main Story Section - Clean Content Layout */}
        {about.mainStory && (
          <div className={`${about.mainStory.styling?.backgroundColor || 'bg-white'} relative overflow-hidden`}>
            {/* Subtle decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-bl from-[#62708A]/6 to-transparent rounded-full blur-3xl"></div>

            <div className={`container max-w-7xl ${about.mainStory.styling?.spacing || 'py-24'} relative z-10`}>

              <div className={`${
                about.mainStory.imagePosition === 'left' || about.mainStory.imagePosition === 'right'
                  ? 'grid md:grid-cols-5 gap-12 items-start'
                  : ''
              }`}>
                {(about.mainStory.carouselImages?.length > 0 || about.mainStory.image) && (about.mainStory.imagePosition === 'left' || about.mainStory.imagePosition === 'right') && (
                  <div className={`${about.mainStory.imagePosition === 'right' ? 'md:order-2 md:col-span-2' : 'md:col-span-2'}`}>
                    {about.mainStory.carouselImages?.length > 0 ? (
                      <ImageCarousel images={about.mainStory.carouselImages} />
                    ) : about.mainStory.image ? (
                      <div className="sticky top-8">
                        <div className="relative">
                          {/* Accent border frame */}
                          <div className="absolute -inset-4 bg-gradient-to-br from-[#62708A]/20 to-[#A1B5B8]/20 rounded-lg blur-xl"></div>
                          <img
                            src={typeof about.mainStory.image === 'object' ? about.mainStory.image.url : ''}
                            alt={about.mainStory.heading || 'About'}
                            className="relative w-full h-auto rounded-lg shadow-2xl border-4 border-white"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}

                <div className={`${
                  about.mainStory.imagePosition === 'left' || about.mainStory.imagePosition === 'right'
                    ? 'md:col-span-3'
                    : 'max-w-4xl mx-auto'
                }`}>
                  {about.mainStory.image && about.mainStory.imagePosition === 'top' && (
                    <div className="mb-12">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#62708A]/20 to-[#A1B5B8]/20 rounded-lg blur-xl"></div>
                        <img
                          src={typeof about.mainStory.image === 'object' ? about.mainStory.image.url : ''}
                          alt={about.mainStory.heading || 'About'}
                          className="relative w-full h-auto rounded-lg shadow-2xl border-4 border-white"
                        />
                      </div>
                    </div>
                  )}

                  <div className={`${about.mainStory.styling?.contentSize || 'text-lg'} font-sans text-gray-800 leading-relaxed prose prose-lg max-w-none [&_p]:text-gray-800 [&_p]:mb-6 [&_p:first-of-type]:text-xl [&_p:first-of-type]:font-medium [&_p:first-of-type]:text-[#2C3E51]`}>
                    {about.mainStory.content && <RichText data={about.mainStory.content} enableGutter={false} />}
                  </div>

                  {about.mainStory.image && about.mainStory.imagePosition === 'bottom' && (
                    <div className="mt-12">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#62708A]/20 to-[#A1B5B8]/20 rounded-lg blur-xl"></div>
                        <img
                          src={typeof about.mainStory.image === 'object' ? about.mainStory.image.url : ''}
                          alt={about.mainStory.heading || 'About'}
                          className="relative w-full h-auto rounded-lg shadow-2xl border-4 border-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education & Experience Section - Polished Card Design */}
        {about.education && (
          <div className={`${about.education.styling?.backgroundColor || 'bg-gradient-to-b from-gray-50 to-white'} relative`}>
            <div className={`container max-w-6xl ${about.education.styling?.spacing || 'py-24'} relative z-10`}>
              {/* Polished card container */}
              <div className="relative group">
                {/* Left gradient accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#62708A] via-[#95997D] to-[#A1B5B8] rounded-full"></div>

                <div className="ml-8 p-12 bg-white border border-gray-200 rounded-r-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                  {/* Elegant corner accent - smaller */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#62708A]/10 to-transparent"></div>

                  {/* Subtle dot pattern background */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #2C3E51 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                  }}></div>

                  {about.education.heading && (
                    <div className="mb-8 relative">
                      <h2 className={`${about.education.styling?.headingSize || 'text-3xl md:text-4xl'} font-larken ${about.education.styling?.headingWeight || 'font-medium'} text-[#2C3E51] tracking-tight`}>
                        {about.education.heading}
                      </h2>
                    </div>
                  )}

                  <div className={`${about.education.styling?.contentSize || 'text-lg'} font-sans text-gray-800 leading-relaxed prose prose-lg max-w-none [&_p]:text-gray-800 [&_p]:mb-6 relative`}>
                    {about.education.content && <RichText data={about.education.content} enableGutter={false} />}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#62708A]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Members Section */}
        {about.showTeam && about.teamMembers && about.teamMembers.length > 0 && (
          <TeamSection
            teamMembers={about.teamMembers}
            teamHeading={about.teamHeading}
            teamSubheading={about.teamSubheading}
            teamStyling={about.teamStyling}
          />
        )}

        {/* Contact Info Section */}
        {about.contactInfo?.showContactInfo && (
          <div className={`${about.contactInfo.styling?.backgroundColor || 'bg-[#2C3E51]'} border-t border-gray-200`}>
            <div className={`container max-w-6xl ${about.contactInfo.styling?.spacing || 'py-20'}`}>
              <div className="text-center">
                {about.contactInfo.heading && (
                  <h2 className="text-4xl md:text-5xl font-larken font-normal text-white mb-8 tracking-tight">
                    {about.contactInfo.heading}
                  </h2>
                )}

                <div className="space-y-4 mb-8">
                  {about.contactInfo.email && (
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Email</p>
                      <a href={`mailto:${about.contactInfo.email}`} className="text-xl text-white hover:text-[#A1B5B8] transition">
                        {about.contactInfo.email}
                      </a>
                    </div>
                  )}
                  {about.contactInfo.phone && (
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                      <a href={`tel:${about.contactInfo.phone}`} className="text-xl text-white hover:text-[#A1B5B8] transition">
                        {about.contactInfo.phone}
                      </a>
                    </div>
                  )}
                  {about.contactInfo.officeAddress && (
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">Office</p>
                      <p className="text-lg text-gray-300 whitespace-pre-line">
                        {about.contactInfo.officeAddress}
                      </p>
                    </div>
                  )}
                </div>

                <a
                  href="/contact"
                  className="inline-block px-10 py-4 bg-[#62708A] text-white hover:bg-[#526078] transition-all duration-300 text-sm tracking-wider shadow-lg hover:shadow-xl font-sans"
                >
                  SCHEDULE A MEETING
                </a>
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
