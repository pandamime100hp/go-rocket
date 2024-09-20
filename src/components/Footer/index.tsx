// REACT
import React from 'react'

// CSS
import './footer.min.css'

const Footer: React.FC = () => {
    const year: number = new Date().getFullYear()

    return (
        <footer>
            <div>
                <p>Powered by Croissants</p>
                <p className='copyright'>Copyright &copy; {year}. All rights reserved.</p>
            </div>
            <a
                href="https://github.com/pandamime100hp/go-rocketp"
                target="_blank"
                rel="noopener noreferrer"
            >
                
            </a>
        </footer>
    )
}

export default Footer
