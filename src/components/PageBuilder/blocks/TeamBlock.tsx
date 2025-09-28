import React from 'react'

interface TeamBlockProps {
  settings: {
    layout?: string
    heading?: string
    subheading?: string
  }
  globalData?: any
}

export const TeamBlock: React.FC<TeamBlockProps> = ({ settings, globalData }) => {
  const {
    layout = 'grid-4col',
    heading = 'Our Team',
    subheading = 'Meet the professionals who make it happen'
  } = settings

  // Mock team data - in real app this would come from globalData
  const teamMembers = globalData?.team || [
    {
      name: 'John Smith',
      title: 'Financial Advisor',
      credentials: 'CFP',
      image: { url: '/api/placeholder/300/400' }
    },
    {
      name: 'Sarah Johnson',
      title: 'Investment Manager',
      credentials: 'CFA',
      image: { url: '/api/placeholder/300/400' }
    },
    {
      name: 'Mike Davis',
      title: 'Tax Specialist',
      credentials: 'CPA',
      image: { url: '/api/placeholder/300/400' }
    },
    {
      name: 'Lisa Chen',
      title: 'Planning Specialist',
      credentials: 'CFP',
      image: { url: '/api/placeholder/300/400' }
    }
  ]

  const getGridClasses = () => {
    switch (layout) {
      case 'grid-2x2':
        return 'grid grid-cols-2 gap-8 max-w-md mx-auto'
      case 'grid-3col':
        return 'grid md:grid-cols-3 gap-8'
      case 'grid-4col':
        return 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'
      case 'list':
        return 'space-y-8 max-w-2xl mx-auto'
      default:
        return 'grid md:grid-cols-2 lg:grid-cols-4 gap-8'
    }
  }

  return (
    <div className="container max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
          {heading}
        </h2>
        {subheading && (
          <p className="text-xl text-[#95997D] leading-relaxed">
            {subheading}
          </p>
        )}
        <div className="w-20 h-px bg-[#62708A] mx-auto mt-6"></div>
      </div>

      <div className={getGridClasses()}>
        {teamMembers.map((member: any, index: number) => {
          const colors = ['#62708A', '#95997D', '#A1B5B8', '#2C3E51']
          const color = colors[index % colors.length]

          if (layout === 'list') {
            return (
              <div key={index} className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  {member.image?.url && (
                    <img
                      src={member.image.url}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-medium text-[#2C3E51] mb-1">
                    {member.name}{member.credentials ? `, ${member.credentials}` : ''}
                  </h4>
                  <p className="text-sm font-medium" style={{ color }}>{member.title}</p>
                </div>
              </div>
            )
          }

          return (
            <div key={index} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                {member.image?.url && (
                  <img
                    src={member.image.url}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="text-center">
                <h4 className="text-lg font-medium text-[#2C3E51] mb-1">
                  {member.name}{member.credentials ? `, ${member.credentials}` : ''}
                </h4>
                <p className="text-sm font-medium" style={{ color }}>{member.title}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}