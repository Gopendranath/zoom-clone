import StreamVideoProvider from '@/providers/StreamClientProvider'
import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default layout