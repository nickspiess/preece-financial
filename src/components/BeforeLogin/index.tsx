import * as React from 'react'

const BeforeLogin: React.FC = () => {
  console.log('BeforeLogin component rendering')

  React.useEffect(() => {
    console.log('BeforeLogin component mounted')
    console.log('Environment check:', {
      serverUrl: process.env.NEXT_PUBLIC_SERVER_URL,
      nodeEnv: process.env.NODE_ENV,
      isClient: typeof window !== 'undefined'
    })
  }, [])

  return (
    <div>
      <p>
        <b>Welcome to your dashboard!</b>
        {' This is where site admins will log in to manage your website.'}
      </p>
    </div>
  )
}

export default BeforeLogin
