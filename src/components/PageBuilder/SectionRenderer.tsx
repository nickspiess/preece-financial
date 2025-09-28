import React from 'react'
import { HeroBlock } from './blocks/HeroBlock'
import { ServicesBlock } from './blocks/ServicesBlock'
import { TeamBlock } from './blocks/TeamBlock'
import { AboutBlock } from './blocks/AboutBlock'
import { ConsultationBlock } from './blocks/ConsultationBlock'
import { RichTextBlock } from './blocks/RichTextBlock'
import { CtaBlock } from './blocks/CtaBlock'
import { SpacerBlock } from './blocks/SpacerBlock'
import { ImageGalleryBlock } from './blocks/ImageGalleryBlock'
import { TestimonialsBlock } from './blocks/TestimonialsBlock'
import { FaqBlock } from './blocks/FaqBlock'
import { ContactInfoBlock } from './blocks/ContactInfoBlock'
import { StatsBlock } from './blocks/StatsBlock'

interface SectionData {
  blockType: string
  sectionSettings: {
    sectionTitle?: string
    backgroundColor?: string
    padding?: string
    textColor?: string
    accentColor?: string
    layout?: string
    heading?: string
    subheading?: string
    content?: any
    image?: any
    ctaText?: string
    ctaLink?: string
    spacerHeight?: string
    testimonialsToShow?: any[]
    faqsToShow?: any[]
    faqCategory?: string
    galleryImages?: any[]
    showCaptions?: boolean
  }
}

interface SectionRendererProps {
  section: SectionData
  globalData?: any
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ section, globalData }) => {
  const { blockType, sectionSettings } = section
  const {
    backgroundColor = 'bg-white',
    padding = 'py-20',
    sectionTitle,
  } = sectionSettings

  const renderBlock = () => {
    switch (blockType) {
      case 'hero':
        return <HeroBlock settings={sectionSettings} globalData={globalData} />
      case 'services':
        return <ServicesBlock settings={sectionSettings} globalData={globalData} />
      case 'team':
        return <TeamBlock settings={sectionSettings} globalData={globalData} />
      case 'about':
        return <AboutBlock settings={sectionSettings} globalData={globalData} />
      case 'consultation':
        return <ConsultationBlock settings={sectionSettings} />
      case 'richText':
        return <RichTextBlock settings={sectionSettings} />
      case 'cta':
        return <CtaBlock settings={sectionSettings} />
      case 'spacer':
        return <SpacerBlock settings={sectionSettings} />
      case 'imageGallery':
        return <ImageGalleryBlock settings={sectionSettings} />
      case 'testimonials':
        return <TestimonialsBlock settings={sectionSettings} />
      case 'faq':
        return <FaqBlock settings={sectionSettings} />
      case 'contactInfo':
        return <ContactInfoBlock settings={sectionSettings} />
      case 'stats':
        return <StatsBlock settings={sectionSettings} />
      default:
        return (
          <div className="container max-w-7xl">
            <p className="text-gray-500 italic">Unknown block type: {blockType}</p>
          </div>
        )
    }
  }

  return (
    <section className={`${backgroundColor} ${padding}`}>
      {sectionTitle && (
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
              {sectionTitle}
            </h2>
            <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
          </div>
        </div>
      )}
      {renderBlock()}
    </section>
  )
}