'use client'

import React, { useState } from 'react'
import { ProfessionalTheme } from '@/components/themes/ProfessionalTheme'
import { WarmTheme } from '@/components/themes/WarmTheme'
import { MinimalTheme } from '@/components/themes/MinimalTheme'
import { BoldTheme } from '@/components/themes/BoldTheme'
import { NatureTheme } from '@/components/themes/NatureTheme'
import { Header } from '@/components/Header'

type Theme = 'professional' | 'warm' | 'minimal' | 'bold' | 'nature'

const themes = [
  { id: 'professional', label: 'Professional & Corporate', component: ProfessionalTheme },
  { id: 'warm', label: 'Warm & Personal', component: WarmTheme },
  { id: 'minimal', label: 'Clean & Modern', component: MinimalTheme },
  { id: 'bold', label: 'Bold & Confident', component: BoldTheme },
  { id: 'nature', label: 'Natural & Organic', component: NatureTheme },
] as const

export default function DemoPage() {
  const [activeTheme, setActiveTheme] = useState<Theme>('warm')

  const ActiveComponent = themes.find(t => t.id === activeTheme)?.component || WarmTheme

  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header variant="professional" />

      <div className="bg-black/95 backdrop-blur border-b border-white/10 shadow-2xl">
        <div className="container py-6">
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h2 className="text-white font-bold text-lg mb-1">Preece Financial - Theme Demo</h2>
              <p className="text-white/60 text-sm">Choose your preferred style below</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`
                    px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200
                    ${
                      activeTheme === theme.id
                        ? 'bg-white text-black scale-105 shadow-lg'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }
                  `}
                >
                  {theme.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ActiveComponent />

      <div className="sticky bottom-0 left-0 right-0 z-50 pointer-events-none py-4">
        <div className="container flex justify-center">
          <div className="bg-black/90 backdrop-blur text-white px-6 py-3 rounded-full text-sm shadow-2xl border border-white/20">
            <span className="text-white/60">Currently viewing:</span>{' '}
            <span className="font-bold">{themes.find(t => t.id === activeTheme)?.label}</span>
          </div>
        </div>
      </div>
    </div>
  )
}