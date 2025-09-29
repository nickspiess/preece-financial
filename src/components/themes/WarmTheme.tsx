'use client'

import React from 'react'

export const WarmTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#E3D3BD]">
      <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-[#C48457]/20">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <img src="/pfp.png" alt="Preece Financial" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-bold text-[#2C3E51] text-xl">Preece Financial</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition">Services</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition">About</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition">Contact</a>
              <button className="px-6 py-2.5 bg-[#C48457] text-white rounded-full font-semibold hover:bg-[#B37547] transition shadow-md">
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container max-w-4xl py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-[#2C3E51] mb-6" style={{ lineHeight: 1.1 }}>
            Your Money,
            <br />
            <span className="text-[#C48457]">Simplified</span>
          </h1>
          <p className="text-2xl text-[#62708A] max-w-2xl mx-auto leading-relaxed">
            Financial planning that feels like chatting with a trusted friend over coffee
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="p-12 md:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C48457] to-[#95997D]"></div>
              <div>
                <h2 className="text-2xl font-bold text-[#2C3E51]">Hi, I'm here to help</h2>
                <p className="text-[#62708A]">Let's talk about your financial journey</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Money conversations don't have to be stressful. At Preece Financial Services, we're
                like your favorite flannel—<strong>warm, grounded, and reliable</strong>. No jargon,
                no pressure, just honest guidance tailored to where you are right now.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're just starting out, building a family, growing a business, or planning
                for retirement, we're here to make sense of it all. Think of us as your financial
                co-pilot—supporting you through every season of life.
              </p>
            </div>
          </div>

          <div className="bg-[#2C3E51] p-12 md:p-16 text-white">
            <h3 className="text-3xl font-bold mb-8">What Makes Us Different?</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Real Conversations</h4>
                <p className="text-white/80 leading-relaxed">
                  We cut out the jargon and meet you where you are. Plain English, every time.
                </p>
              </div>
              <div className="h-px bg-white/20"></div>
              <div>
                <h4 className="text-xl font-semibold mb-2">True Partnership</h4>
                <p className="text-white/80 leading-relaxed">
                  Your goals become our goals. We're in this together for the long haul.
                </p>
              </div>
              <div className="h-px bg-white/20"></div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Growth Through Seasons</h4>
                <p className="text-white/80 leading-relaxed">
                  Life changes, and so do your financial needs. We adapt with you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-10 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-[#2C3E51]">For Individuals & Families</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                <svg className="w-6 h-6 text-[#95997D] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Retirement planning that makes sense</span>
              </li>
              <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                <svg className="w-6 h-6 text-[#95997D] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>College savings strategies</span>
              </li>
              <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                <svg className="w-6 h-6 text-[#95997D] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Building an emergency fund</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#95997D] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Investment guidance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-10 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-[#2C3E51]">For Entrepreneurs</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                <svg className="w-6 h-6 text-[#C48457] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Business financial strategy</span>
              </li>
              <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                <svg className="w-6 h-6 text-[#C48457] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tax planning & optimization</span>
              </li>
              <li className="flex items-start gap-3 pb-4 border-b border-gray-100">
                <svg className="w-6 h-6 text-[#C48457] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cash flow management</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#C48457] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Succession planning</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#2C3E51] text-white rounded-3xl p-12 md:p-16 text-center shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Start a Conversation</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your first consultation is complimentary—no strings attached. Let's chat about your
            goals and see if we're a good fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-6 py-4 rounded-full text-[#2C3E51] text-lg"
            />
            <button className="px-8 py-4 bg-[#C48457] rounded-full font-bold text-lg hover:bg-[#B37547] transition">
              Schedule a Chat
            </button>
          </div>
          <p className="text-sm mt-6 text-white/70">
            Typically respond within 24 hours • No pushy sales tactics, promise
          </p>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl italic text-[#62708A] mb-4">
            "Finally, a financial advisor who speaks like a human being. They made our retirement
            plan feel achievable, not overwhelming."
          </blockquote>
          <p className="text-lg font-semibold text-[#2C3E51]">— Jamie & Alex R.</p>
        </div>
      </div>
    </div>
  )
}