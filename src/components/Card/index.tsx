// REACT
import React from 'react'

// NEXT
import Image, { StaticImageData } from 'next/image'

// TYPES
import { CardType } from '../../types/cards'

// CSS
import './index.css'

// IMAGES
import spacex_logo from '../../assets/spacex_default_logo.png'

export default function Card({ title, subtitle, image, imageAlt, handleDisplayOverlay, ...props }: CardType): React.ReactElement<CardType> {
    const imageSrc: string | StaticImageData = image || spacex_logo

    return (
        <div className="card" {...props}>
            <h2 className='card__title'>{title}</h2>
            <Image className='card__image' src={imageSrc} alt={imageAlt} width={300} height={300} />
            <h3 className='card__subtitle'>{subtitle}</h3>
            <button onClick={handleDisplayOverlay}>View Details</button>
        </div>
    )
}
