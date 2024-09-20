// REACT
import React from 'react'

// COMPONENTS
import Navbar from '../Navbar'

// CSS
import './header.min.css'

const Header: React.FC = () => {
    return (
        <header>
            <h1>Header</h1>
            <Navbar />
        </header>
    )
}

export default Header;
