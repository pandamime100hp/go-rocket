// REACT
import React from 'react'

// CSS
import './footer.min.css'

// ICON
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    const year: number = new Date().getFullYear()

    return (
        <footer className="container">
            <p className="footer__content">Powered by Croissants</p>
            <p className="footer__copyright">Copyright &copy; {year}. All rights reserved.</p>
            <ul className="footer__socials">
                <li>
                    <h1>
                        <a href="https://github.com/pandamime100hp/go-rocket">
                            <DiGithubBadge />
                        </a>
                    </h1>
                </li>
                <li>
                    <h1>
                        <a href="https://linkedin.com/in/makarintosh">
                            <FaLinkedin />    
                        </a>
                    </h1>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
