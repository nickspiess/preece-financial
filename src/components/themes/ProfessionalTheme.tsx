'use client'

import React from 'react'

export const ProfessionalTheme: React.FC = () => {
  return (
    <div className="min-h-screen">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <img src="/media/pfp.png" alt="Preece Financial" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-bold text-[#2C3E51] text-lg leading-tight">Preece Financial</div>
                <div className="text-xs text-gray-500">Financial Services</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition text-sm font-medium">Services</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition text-sm font-medium">About</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition text-sm font-medium">Resources</a>
              <a href="#" className="text-[#2C3E51] hover:text-[#C48457] transition text-sm font-medium">Contact</a>
              <button className="px-6 py-2 bg-[#C48457] text-white rounded font-semibold hover:bg-[#B37547] transition text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-gradient-to-br from-[#62708A] to-[#2C3E51] text-white py-20">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm mb-6">
                Trusted Financial Planning Since 2010
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional Financial Services for Your Future
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Expert guidance. Proven strategies. Your financial success.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-[#C48457] text-white rounded font-semibold hover:bg-[#B37547] transition">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded font-semibold hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder:text-white/60"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder:text-white/60"
                />
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full px-4 py-3 rounded bg-white/20 border border-white/30 text-white placeholder:text-white/60"
                />
                <button className="w-full px-8 py-3 bg-[#C48457] text-white rounded font-semibold hover:bg-[#B37547] transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl py-20">
        <div className="grid lg:grid-cols-[300px,1fr] gap-12">
          <aside className="space-y-8">
            <div>
              <h3 className="font-bold text-xl mb-6 text-[#2C3E51] border-b-2 border-[#C48457] pb-3">Our Services</h3>
              <nav className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-[#2C3E51] hover:text-[#C48457] transition group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62708A] group-hover:bg-[#C48457] transition"></span>
                  Retirement Planning
                </a>
                <a href="#" className="flex items-center gap-3 text-[#2C3E51] hover:text-[#C48457] transition group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62708A] group-hover:bg-[#C48457] transition"></span>
                  Investment Management
                </a>
                <a href="#" className="flex items-center gap-3 text-[#2C3E51] hover:text-[#C48457] transition group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62708A] group-hover:bg-[#C48457] transition"></span>
                  Tax Strategy
                </a>
                <a href="#" className="flex items-center gap-3 text-[#2C3E51] hover:text-[#C48457] transition group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62708A] group-hover:bg-[#C48457] transition"></span>
                  Estate Planning
                </a>
                <a href="#" className="flex items-center gap-3 text-[#2C3E51] hover:text-[#C48457] transition group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#62708A] group-hover:bg-[#C48457] transition"></span>
                  Business Planning
                </a>
              </nav>
            </div>

            <div className="border-l-4 border-[#C48457] pl-6 py-4">
              <h3 className="font-bold text-lg mb-4 text-[#2C3E51]">Office Hours</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="text-gray-500">Monday - Friday</p>
                  <p className="font-semibold text-[#2C3E51]">9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-500">Saturday</p>
                  <p className="font-semibold text-[#2C3E51]">By Appointment</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-16">
            <section>
              <h2 className="text-4xl font-bold mb-6 text-[#2C3E51]">
                Why Choose Preece Financial?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative group">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#62708A] to-transparent opacity-50"></div>
                  <div className="text-6xl font-bold text-[#E3D3BD] mb-4">01</div>
                  <h3 className="text-xl font-bold mb-3 text-[#2C3E51]">Expert Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certified financial planners with decades of combined experience.
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#95997D] to-transparent opacity-50"></div>
                  <div className="text-6xl font-bold text-[#E3D3BD] mb-4">02</div>
                  <h3 className="text-xl font-bold mb-3 text-[#2C3E51]">Proven Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track record of helping clients achieve their financial goals.
                  </p>
                </div>
                <div className="relative group">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#C48457] to-transparent opacity-50"></div>
                  <div className="text-6xl font-bold text-[#E3D3BD] mb-4">03</div>
                  <h3 className="text-xl font-bold mb-3 text-[#2C3E51]">Personalized Plans</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Customized strategies tailored to your unique situation.
                  </p>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br from-[#E3D3BD] via-white to-[#E3D3BD]">
              <h2 className="text-3xl font-bold mb-8 text-[#2C3E51]">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-[#62708A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#2C3E51]">
                      Comprehensive Analysis
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      We begin with a thorough review of your current financial situation, goals, and
                      risk tolerance.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#62708A]/30 to-transparent"></div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-[#95997D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#2C3E51]">Strategic Planning</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Develop a customized roadmap aligned with your short and long-term objectives.
                    </p>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-[#95997D]/30 to-transparent"></div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-[#C48457]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-[#2C3E51]">Ongoing Support</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Regular reviews and adjustments to keep you on track as life changes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-8 text-[#2C3E51]">Client Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#62708A]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C48457] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed italic">
                    "Professional, knowledgeable, and always available. They've helped us secure our
                    retirement with confidence."
                  </p>
                  <p className="font-semibold text-[#2C3E51]">— Sarah & John M.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-[#C48457]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C48457] text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed italic">
                    "Outstanding service and expertise. My business finances have never been in better
                    shape."
                  </p>
                  <p className="font-semibold text-[#2C3E51]">— Michael T.</p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}