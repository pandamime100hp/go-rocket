import React from 'react'
import Image from 'next/image'

// TYPES
import { CardType } from '../../types/cards'

// CSS
import './index.css'

// Images
import spacex_logo from '../../assets/spacex_default_logo.png'

const Card: React.FC<CardType> = ({ title, subtitle, image, imageAlt, handleDisplayOverlay }) => {
    return (
        <div className="card">
            <h2 className='card__title'>{title}</h2>
            <Image className='card__image' src={image || spacex_logo} alt={imageAlt} width={300} height={300} />
            <p className='card__subtitle'>{subtitle}</p>
            <button onClick={handleDisplayOverlay}>View Details</button>
        </div>
    )
}

export default Card
