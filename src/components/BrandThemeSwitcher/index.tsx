'use client'

import React from 'react'
import { useBrandTheme } from '@/providers/BrandTheme'

const themes = [
  { id: 'professional', label: 'Professional' },
  { id: 'warm', label: 'Warm & Cozy' },
  { id: 'minimal', label: 'Clean & Modern' },
  { id: 'bold', label: 'Bold & Confident' },
  { id: 'nature', label: 'Natural & Earthy' },
] as const

export const BrandThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useBrandTheme()

  return (
    <div className="w-full py-8 flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">Try different styles:</p>
      <div className="flex flex-wrap justify-center gap-2">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all
              ${
                theme === t.id
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'bg-card text-card-foreground hover:bg-secondary border border-border'
              }
            `}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}