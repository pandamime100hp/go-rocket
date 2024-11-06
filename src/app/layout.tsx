// REACT
import React from 'react'

// NEXT
import type { Metadata } from 'next'

// TYPES
import { RootLayoutType } from '../types/layouts'

// CSS
import './globals.css'

// COMPONENTS
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
 
export const metadata: Metadata = {
  title: 'Go-Rocket',
  description: 'Exploring through data one of the most innovative and rapidly growing companies in in the world, SpaceX.',
}

export default function RootLayout({children}: RootLayoutType): React.ReactElement<RootLayoutType> {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Header />
          <div className='page__content'>
            {children}
          </div>
        <Footer />
        <Background />
      </body>
    </html>
  )
}
