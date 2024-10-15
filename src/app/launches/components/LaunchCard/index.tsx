"use client"

// REACT
import { useState } from 'react'
import React from 'react'

// COMPONENTS
import Overlay from '../../../../components/Overlay'
import LaunchOverlay from '../LaunchOverlay'
import Card from '../../../../components/Card'

// TYPES
import { LaunchCardType } from '../../../../types/launches'

// CSS
import './index.css'
import parseDate from '../../../../utility/date/parseDate'

const LaunchCard: React.FC<LaunchCardType> = ({ item }) => {
    // Handles overlay visibility
    const [isOverlayVisible, setIsOverlayVisible] = useState(false)

    const handleDisplayOverlay = () => {
        setIsOverlayVisible(true)
    }

    const handleHideOverlay = () => {
        setIsOverlayVisible(false)
    }

    const date: string = parseDate(item.date_utc)

    return (
        <>
            <Card 
                title={item.name} 
                subtitle={`Launch Date: ${date} UTC`} 
                image={item.links.patch.small} 
                imageAlt={item.name} 
                handleDisplayOverlay={handleDisplayOverlay} 
            />
            {// Renders overlay if isOverlayVisible is true
                isOverlayVisible && 
                <Overlay 
                    item={item} 
                    ItemComponent={LaunchOverlay} 
                    onClose={handleHideOverlay} 
                />
            }
        </>
    )
}

export default LaunchCard
