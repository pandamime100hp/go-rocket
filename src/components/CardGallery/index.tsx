// REACT
import React from 'react'

// TYPES
import { CardGalleryType } from '../../types/card_galleries'

// CSS
import './index.css'

export default function CardGallery({ data, ItemComponent }: CardGalleryType): React.ReactElement<CardGalleryType> {
    // Generate card gallery based on the passed in ItemComponent such as 
    // LaunchCard or RocketsCard
    return (
        <div className="card-gallery">
            {data?.map((item: any) => (
                <ItemComponent key={item.id} item={item} />
            ))}
        </div>
    )
}
