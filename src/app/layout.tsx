// REACT
import React from 'react'

// NEXT
import type { Metadata } from 'next'

// CSS
import './index.css'

// COMPONENTS
import SiteLayout from '../components/SiteLayout'
 
export const metadata: Metadata = {
  title: 'Go-Rocket',
  description: 'Exploring through data one of the most innovative and rapidly growing companies in in the world, SpaceX.',
}

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <html lang="en">
          <body>
            <SiteLayout >
              {children}
            </ SiteLayout>
          </body>
        </html>
    )
  }

  export default RootLayout