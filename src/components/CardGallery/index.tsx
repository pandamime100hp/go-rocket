// REACT
import React from 'react'

// CSS
import './index.css'

interface CardGalleryProps {
    data: any[]
    ItemComponent: React.FC<any>
}

const CardGallery: React.FC<CardGalleryProps> = ({ data, ItemComponent }) => {
    // Generate card gallery based on the passed in ItemComponent such as 
    // LaunchCard or RocketsCard
    return (
        <div className="card-gallery">
            {data?.map((item) => (
                <ItemComponent key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CardGallery
