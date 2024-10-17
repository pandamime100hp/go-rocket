import React from 'react'
import Image from 'next/image'

// TYPES
import { CardType } from '../../types/cards'

// CSS
import './index.css'

// Images
import spacex_logo from '../../assets/spacex_default_logo.png'

const Card: React.FC<CardType> = ({ title, subtitle, image, imageAlt, handleDisplayOverlay, ...props }) => {
    const imageSrc = image || spacex_logo

    return (
        <div className="card" {...props}>
            <h2 className='card__title'>{title}</h2>
            <Image className='card__image' src={imageSrc} alt={imageAlt} width={300} height={300} />
            <h3 className='card__subtitle'>{subtitle}</h3>
            <button onClick={handleDisplayOverlay}>View Details</button>
        </div>
    )
}

export default Card
