'use client'

import React from 'react'

export const NatureTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E3D3BD] via-[#A1B5B8] to-[#95997D]">
      <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-[#95997D]/30">
        <div className="container max-w-7xl">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <img src="/media/pfp.png" alt="Preece Financial" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-bold text-[#2C3E51] text-xl">Preece Financial</div>
                <div className="text-xs text-[#62708A]">Growing Together</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[#2C3E51] hover:text-[#95997D] transition font-medium">Services</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#95997D] transition font-medium">Philosophy</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#95997D] transition font-medium">Contact</a>
              <button className="px-6 py-2.5 bg-[#95997D] text-white rounded-full font-semibold hover:bg-[#85896D] transition shadow-md">
                Grow With Us
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container max-w-7xl py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="lg:sticky lg:top-20">
            <div className="bg-white/90 backdrop-blur rounded-3xl p-12 shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#95997D] to-[#A1B5B8] rounded-full mb-8"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#2C3E51] mb-6 leading-tight">
                Financial Growth,
                <br />
                <span className="text-[#95997D]">Naturally</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Like a tree that grows stronger each season, your financial future deserves
                patience, care, and expert guidance.
              </p>
              <button className="w-full px-8 py-4 bg-[#95997D] text-white rounded-full font-semibold hover:bg-[#85896D] transition shadow-lg">
                Plant Your Financial Seeds Today
              </button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-start gap-6 transform hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#95997D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#2C3E51] mb-3">Roots of Stability</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Strong foundations create lasting wealth. We help you build financial roots that
                  weather any storm—from emergency funds to diversified portfolios that grow
                  steadily over time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 transform hover:translate-x-2 transition-all duration-300 ml-20">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#A1B5B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#2C3E51] mb-3">Branching Out</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  As your life grows, so do your opportunities. We guide you through life's
                  branches—career changes, business ventures, family planning—with strategies that
                  adapt and flourish.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 transform hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0">
                <svg className="w-16 h-16 text-[#C48457]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#2C3E51] mb-3">Mature Growth</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Retirement is your tree's full bloom. We ensure you reap the fruits of decades of
                  growth—a comfortable retirement where you can enjoy life's harvest.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-[4rem] overflow-hidden shadow-2xl mb-20">
          <div className="grid lg:grid-cols-2">
            <div className="p-16 bg-gradient-to-br from-[#2C3E51] to-[#62708A] text-white">
              <h2 className="text-4xl font-bold mb-8">Our Services Grow With You</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Retirement Planning</h4>
                    <p className="text-white/80">
                      Cultivate a retirement that lets you enjoy life's golden years
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Investment Management</h4>
                    <p className="text-white/80">
                      Portfolios that grow organically with market-smart strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-6 border-b border-white/20">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Financial Wellness</h4>
                    <p className="text-white/80">
                      Holistic planning that nurtures every aspect of your financial life
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Legacy Planning</h4>
                    <p className="text-white/80">
                      Plant seeds for future generations with thoughtful estate planning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-16 flex flex-col justify-center">
              <div className="mb-8">
                <div className="inline-block px-6 py-2 bg-[#95997D] text-white rounded-full text-sm font-semibold mb-6">
                  THE PREECE PROMISE
                </div>
                <h3 className="text-3xl font-bold text-[#2C3E51] mb-6">
                  Financial Planning That Feels Human
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We believe money matters should feel natural, not overwhelming. Like tending a
                  garden, financial planning requires patience, knowledge, and a trusted guide.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#95997D] rounded-full"></span>
                    <span>No confusing jargon—just clear, honest conversations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#95997D] rounded-full"></span>
                    <span>Sustainable strategies that grow with you</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#95997D] rounded-full"></span>
                    <span>Support through every season of your financial journey</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-16 mb-20">
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-[#95997D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#2C3E51] mb-3">Sustainable Growth</h4>
            <p className="text-gray-600">
              Long-term strategies that prioritize steady, reliable growth over quick wins
            </p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-[#A1B5B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#2C3E51] mb-3">Nurturing Support</h4>
            <p className="text-gray-600">
              We're here through every season—guiding, supporting, and celebrating your growth
            </p>
          </div>
          <div className="text-center transform hover:scale-105 transition-all">
            <div className="flex justify-center mb-6">
              <svg className="w-20 h-20 text-[#C48457]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-[#2C3E51] mb-3">Holistic Approach</h4>
            <p className="text-gray-600">
              Your finances don't exist in isolation—we consider your whole life picture
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#2C3E51] via-[#62708A] to-[#2C3E51] rounded-[4rem] p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Together?</h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Every mighty oak started as a small seed. Let's plant yours today with a complimentary
            consultation.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Your name"
              className="flex-1 px-6 py-4 rounded-full text-[#2C3E51]"
            />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 rounded-full text-[#2C3E51]"
            />
            <button className="px-10 py-4 bg-[#C48457] text-white rounded-full font-bold hover:bg-[#B37547] transition whitespace-nowrap">
              Get Started
            </button>
          </form>
          <p className="text-sm mt-6 text-white/70">
            No pressure, no obligations—just an honest conversation about your financial future
          </p>
        </div>
      </div>
    </div>
  )
}