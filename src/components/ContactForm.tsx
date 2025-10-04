'use client'

import React, { useState } from 'react'

interface ContactFormProps {
  buttonText?: string
  successMessage?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  buttonText = 'Send',
  successMessage = "Thank you for your message! We'll be in touch soon.",
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl border border-gray-200 p-8 md:p-10">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62708A] focus:border-transparent transition"
            placeholder="John"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62708A] focus:border-transparent transition"
            placeholder="Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62708A] focus:border-transparent transition"
          placeholder="john@example.com"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#62708A] focus:border-transparent transition resize-none"
          placeholder="Tell us about your financial goals..."
        />
      </div>

      {/* Submit Button */}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-[#62708A] to-[#526078] text-white font-semibold rounded-lg hover:from-[#526078] hover:to-[#62708A] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            buttonText
          )}
        </button>

        {/* Success Message */}
        {status === 'success' && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
            <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            {errorMessage}
          </div>
        )}
      </div>
    </form>
  )
}
