'use client'

import React from 'react'
import Link from 'next/link'

interface HeaderProps {
  variant?: 'professional' | 'natural' | 'minimal'
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  variant = 'professional',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'natural':
        return {
          containerClass: 'bg-white/95 backdrop-blur-sm border-b border-[#95997D]/20',
          logoTextClass: 'text-[#2C3E51]',
          subTextClass: 'text-[#62708A]',
          linkClass: 'text-[#2C3E51] hover:text-[#95997D] transition-colors',
          buttonClass: 'px-6 py-2 bg-[#95997D] text-white rounded-full hover:bg-[#62708A] transition-colors'
        }
      case 'minimal':
        return {
          containerClass: 'bg-white border-b border-gray-200',
          logoTextClass: 'text-gray-900',
          subTextClass: 'text-gray-600',
          linkClass: 'text-gray-700 hover:text-gray-900 transition-colors',
          buttonClass: 'px-6 py-2 bg-[#62708A] text-white hover:bg-[#85896D] transition-colors'
        }
      default: // professional
        return {
          containerClass: 'bg-white border-b-2 border-[#62708A]',
          logoTextClass: 'text-[#2C3E51]',
          subTextClass: 'text-[#62708A]',
          linkClass: 'text-[#2C3E51] hover:text-[#62708A] transition text-sm font-semibold tracking-wide',
          buttonClass: 'px-8 py-3 bg-[#62708A] text-white font-semibold hover:bg-[#526078] transition text-sm tracking-wide'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <nav className={`${styles.containerClass} sticky top-0 z-50 ${className}`}>
      <div className="container max-w-7xl">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <img src="/media/pfs.webp" alt="Preece Financial" className="w-12 h-12 object-contain" />
            <div>
              <div className={`font-bold text-xl ${styles.logoTextClass}`}>PREECE FINANCIAL</div>
              <div className={`text-sm font-medium tracking-wide ${styles.subTextClass}`}>
                SERVICES
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/home-professional" className={styles.linkClass}>
              PROFESSIONAL
            </Link>
            <Link href="/home-natural" className={styles.linkClass}>
              NATURAL
            </Link>
            <Link href="/home-minimal" className={styles.linkClass}>
              MINIMAL
            </Link>
            <a href="/admin" className={styles.buttonClass}>
              ADMIN
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={`p-2 ${styles.linkClass}`}>
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}