import React from 'react'

interface SpacerBlockProps {
  settings: {
    spacerHeight?: string
  }
}

export const SpacerBlock: React.FC<SpacerBlockProps> = ({ settings }) => {
  const { spacerHeight = 'h-24' } = settings

  return (
    <div className={spacerHeight}></div>
  )
}