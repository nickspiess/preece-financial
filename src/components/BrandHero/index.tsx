'use client'

import React from 'react'
import RichText from '@/components/RichText'
import { BrandThemeSwitcher } from '@/components/BrandThemeSwitcher'

interface BrandHeroProps {
  richText?: any
  children?: React.ReactNode
}

export const BrandHero: React.FC<BrandHeroProps> = ({ richText, children }) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'var(--hero-bg)',
        }}
      />
      <div className="container relative py-24">
        <BrandThemeSwitcher />
        <div className="max-w-[48rem] mx-auto text-center mt-8">
          {children || (richText && <RichText data={richText} enableGutter={false} />)}
        </div>
      </div>
    </div>
  )
}