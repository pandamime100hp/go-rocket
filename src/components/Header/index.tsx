// REACT
import React from 'react'

// COMPONENTS
import Navbar from '../Navbar'

// CSS
import './header.min.css'

const Header: React.FC = () => {
    return (
        <header>
            <h1 className="header__h1">G/R</h1>
            <Navbar />
        </header>
    )
}

export default Header;
