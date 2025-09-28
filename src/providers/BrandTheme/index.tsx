'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type BrandTheme = 'professional' | 'warm' | 'minimal' | 'bold' | 'nature'

interface BrandThemeContextType {
  theme: BrandTheme
  setTheme: (theme: BrandTheme) => void
}

const BrandThemeContext = createContext<BrandThemeContextType | undefined>(undefined)

export const BrandThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<BrandTheme>('warm')

  useEffect(() => {
    const stored = localStorage.getItem('brand-theme') as BrandTheme
    if (stored) {
      setTheme(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-brand-theme', theme)
    localStorage.setItem('brand-theme', theme)
  }, [theme])

  return (
    <BrandThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </BrandThemeContext.Provider>
  )
}

export const useBrandTheme = () => {
  const context = useContext(BrandThemeContext)
  if (context === undefined) {
    throw new Error('useBrandTheme must be used within a BrandThemeProvider')
  }
  return context
}