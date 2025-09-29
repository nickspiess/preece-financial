'use client'

import React from 'react'

export const BoldTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2C3E51] text-white">
      <nav className="bg-[#2C3E51] border-b border-white/10 sticky top-0 z-50">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <img src="/media/pfs.webp" alt="Preece Financial" className="w-10 h-10 object-contain" />
              <div className="font-black text-2xl tracking-tight">PREECE</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-[#C48457] transition font-semibold text-sm tracking-wide">SERVICES</a>
              <a href="#" className="text-white/80 hover:text-[#C48457] transition font-semibold text-sm tracking-wide">RESULTS</a>
              <a href="#" className="text-white/80 hover:text-[#C48457] transition font-semibold text-sm tracking-wide">CONTACT</a>
              <button className="px-8 py-3 bg-[#C48457] text-white font-black hover:bg-[#B37547] transition transform hover:scale-105 text-sm">
                GET STARTED →
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="container max-w-6xl relative py-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-[#C48457]"></div>
            <span className="text-[#C48457] font-bold tracking-widest text-sm">EST. 2010</span>
            <div className="h-px flex-1 bg-[#C48457]"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            BUILD YOUR
            <br />
            <span className="text-[#C48457]">FINANCIAL FUTURE</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-white/80 max-w-3xl font-light">
            Strategic financial planning for professionals ready to take their wealth seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-10 py-5 bg-[#C48457] text-white font-bold text-lg hover:bg-[#B37547] transition transform hover:scale-105">
              BOOK CONSULTATION →
            </button>
            <button className="px-10 py-5 border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 transition">
              VIEW SERVICES
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#2C3E51] py-24">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-3 gap-1 mb-16">
            <div className="bg-[#C48457] text-white p-12 text-center">
              <div className="text-5xl font-black mb-2">98%</div>
              <div className="text-sm tracking-wider">CLIENT SATISFACTION</div>
            </div>
            <div className="bg-[#62708A] text-white p-12 text-center">
              <div className="text-5xl font-black mb-2">500+</div>
              <div className="text-sm tracking-wider">CLIENTS SERVED</div>
            </div>
            <div className="bg-[#95997D] text-white p-12 text-center">
              <div className="text-5xl font-black mb-2">15+</div>
              <div className="text-sm tracking-wider">YEARS EXPERIENCE</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#C48457] font-bold tracking-widest mb-4">WHY PREECE</div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                FINANCIAL PLANNING THAT DELIVERS RESULTS
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Clear strategies. Real results. We built Preece Financial for professionals who
                take their financial future seriously.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive planning process combines proven strategies with personalized
                execution. The result? Clients who achieve their financial goals with confidence.
              </p>
            </div>
            <div className="bg-[#2C3E51] text-white p-10">
              <h3 className="text-2xl font-bold mb-6 border-b-2 border-[#C48457] pb-4">
                WHAT YOU GET
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#C48457] font-bold text-xl">▸</span>
                  <span>
                    <strong>Custom Strategy:</strong> No cookie-cutter plans. Your situation is
                    unique.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C48457] font-bold text-xl">▸</span>
                  <span>
                    <strong>Tax Optimization:</strong> Keep more of what you earn, legally.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C48457] font-bold text-xl">▸</span>
                  <span>
                    <strong>Portfolio Management:</strong> Active oversight, not set-it-and-forget-it.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C48457] font-bold text-xl">▸</span>
                  <span>
                    <strong>Direct Access:</strong> Real advisor, not a call center.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C48457] font-bold text-xl">▸</span>
                  <span>
                    <strong>Quarterly Reviews:</strong> Stay on track, adjust as needed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#C48457] text-white py-24">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-white/80 font-bold tracking-widest mb-4">SERVICES</div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">FULL-SPECTRUM FINANCIAL POWER</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur p-8 hover:bg-white/20 transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Wealth Management</h3>
              <p className="text-white/90">Grow and protect your assets with institutional-grade strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Business Planning</h3>
              <p className="text-white/90">Scale your business while optimizing your personal wealth</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3">Retirement Strategy</h3>
              <p className="text-white/90">Retire early, retire well. Build the retirement you deserve</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 hover:bg-white/20 transition">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Risk Management</h3>
              <p className="text-white/90">Protect your wealth from market volatility and life's uncertainties</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2C3E51] py-24 border-t-4 border-[#C48457]">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">WHAT CLIENTS SAY</h2>
          <div className="bg-white/5 p-10 rounded-lg mb-8">
            <div className="flex gap-1 justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C48457] text-3xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-2xl mb-6 leading-relaxed">
              "Preece Financial helped us create a clear path to retirement. Their strategic approach
              gave us the confidence we needed."
            </p>
            <p className="font-bold text-[#C48457] text-lg">— MICHAEL & SARAH</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#C48457] to-[#95997D] py-20">
        <div className="container max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">READY TO START?</h2>
          <p className="text-2xl mb-10 text-white/90">
            Take the first step toward your financial goals with a complimentary consultation.
          </p>
          <button className="px-12 py-5 bg-[#2C3E51] text-white font-black text-xl hover:bg-[#1a2633] transition transform hover:scale-105 shadow-2xl">
            GET STARTED →
          </button>
          <p className="text-sm mt-6 text-white/70">
            Complimentary initial consultation • No obligation
          </p>
        </div>
      </div>
    </div>
  )
}