import React from 'react'

interface RichTextBlockProps {
  settings: {
    heading?: string
    content?: any
    layout?: string
  }
}

export const RichTextBlock: React.FC<RichTextBlockProps> = ({ settings }) => {
  const {
    heading,
    content,
    layout = 'single'
  } = settings

  const getLayoutClasses = () => {
    switch (layout) {
      case 'two-col':
        return 'grid md:grid-cols-2 gap-12'
      case 'three-col':
        return 'grid md:grid-cols-3 gap-8'
      default:
        return 'max-w-4xl mx-auto'
    }
  }

  return (
    <div className="container max-w-7xl">
      {heading && (
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#2C3E51] mb-4 tracking-tight">
            {heading}
          </h2>
          <div className="w-20 h-px bg-[#62708A] mx-auto"></div>
        </div>
      )}

      <div className={getLayoutClasses()}>
        <div className="prose prose-lg max-w-none">
          {content ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p className="text-gray-700 leading-relaxed">
              Add your content here using the rich text editor.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}