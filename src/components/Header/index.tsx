// REACT
import React from 'react'

// COMPONENTS
import Navbar from '../Navbar'

// CSS
import './header.min.css'

export default function Header(): React.ReactElement {
    return (
        <header>
            <h1>G/R</h1>
            <Navbar />
        </header>
    )
}
