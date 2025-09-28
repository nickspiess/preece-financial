import React from 'react'

interface ContactInfoBlockProps {
  settings: {
    heading?: string
    subheading?: string
    layout?: string
    showPhone?: boolean
    showEmail?: boolean
    showAddress?: boolean
    showHours?: boolean
    phone?: string
    email?: string
    address?: string
    hours?: string
    mapEmbed?: string
    textColor?: string
    accentColor?: string
  }
}

export const ContactInfoBlock: React.FC<ContactInfoBlockProps> = ({ settings }) => {
  const {
    heading = 'Contact Information',
    subheading,
    layout = 'cards',
    showPhone = true,
    showEmail = true,
    showAddress = true,
    showHours = true,
    phone = '(555) 123-4567',
    email = 'info@preecefinancial.com',
    address = '123 Main Street, Suite 100\nYour City, State 12345',
    hours = 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 12:00 PM\nSunday: Closed',
    mapEmbed,
    textColor = 'text-[#2C3E51]',
    accentColor = '#62708A'
  } = settings

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      content: phone,
      show: showPhone,
      link: `tel:${phone}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      content: email,
      show: showEmail,
      link: `mailto:${email}`
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      content: address,
      show: showAddress
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Hours',
      content: hours,
      show: showHours
    }
  ].filter(item => item.show)

  const getLayoutClasses = () => {
    switch (layout) {
      case 'list':
        return 'max-w-2xl mx-auto space-y-6'
      case 'grid':
        return 'grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'
      default: // cards
        return 'grid md:grid-cols-2 lg:grid-cols-4 gap-6'
    }
  }

  return (
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-light ${textColor} mb-4 tracking-tight`}>
          {heading}
        </h2>
        {subheading && (
          <p className="text-xl text-[#95997D] max-w-3xl mx-auto mb-6">
            {subheading}
          </p>
        )}
        <div className="w-20 h-px mx-auto" style={{ backgroundColor: accentColor }}></div>
      </div>

      <div className={getLayoutClasses()}>
        {contactItems.map((item, index) => {
          const content = (
            <div
              key={index}
              className={`${
                layout === 'cards'
                  ? 'bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center'
                  : layout === 'list'
                  ? 'flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm'
                  : 'bg-white p-6 rounded-lg shadow-md'
              }`}
            >
              <div className={`${
                layout === 'cards'
                  ? 'w-12 h-12 text-white rounded-full flex items-center justify-center mx-auto mb-4'
                  : layout === 'list'
                  ? 'w-10 h-10 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1'
                  : 'w-10 h-10 text-white rounded-full flex items-center justify-center mb-4'
              }`} style={{ backgroundColor: accentColor }}>
                {item.icon}
              </div>
              <div className={layout === 'list' ? 'flex-1' : ''}>
                <h3 className={`font-semibold ${textColor} ${
                  layout === 'cards' ? 'text-xl mb-3' : 'text-lg mb-2'
                }`}>
                  {item.title}
                </h3>
                <div className="text-[#95997D] whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            </div>
          )

          return item.link ? (
            <a key={index} href={item.link} className="block hover:opacity-80 transition-opacity">
              {content}
            </a>
          ) : content
        })}
      </div>

      {mapEmbed && (
        <div className="mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div dangerouslySetInnerHTML={{ __html: mapEmbed }} />
          </div>
        </div>
      )}
    </div>
  )
}