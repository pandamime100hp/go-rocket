// REACT
import React from 'react'

// NEXT
import type { Metadata } from 'next'

// CSS
import './index.css'
 
export const metadata: Metadata = {
  title: 'Go-Rocket',
  description: 'Exploring through data one of the most innovative and rapidly growing companies in in the world, SpaceX.',
}

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <html lang="en">
          <body>
            <div id="root">{children}</div>
          </body>
        </html>
    )
  }

  export default Layout