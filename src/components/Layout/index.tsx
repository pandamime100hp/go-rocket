// REACT
import React from 'react'

// COMPONENTS
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'

// CSS
import './index.css'

const Layout: React.FC = () => {
  return (
    <>      
        <Header />
        <Body />
        <Footer />
    </>
  )
};

export default Layout;
