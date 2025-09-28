import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { BrandThemeProvider } from './BrandTheme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <BrandThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </BrandThemeProvider>
    </ThemeProvider>
  )
}
