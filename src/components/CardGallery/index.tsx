"use client"

// REACT
import React from 'react'

// TYPES
import { CardGalleryType } from '../../types/card_galleries'

// CSS
import './index.css'
import Pagination from '../Pagination'

export default function CardGallery({ data, ItemComponent }: CardGalleryType): React.ReactElement<CardGalleryType> {
    // Generate card gallery based on the passed in ItemComponent such as 
    // LaunchCard or RocketsCard
    return (
        <Pagination data={data} ItemComponent={ItemComponent} />
    )
}
