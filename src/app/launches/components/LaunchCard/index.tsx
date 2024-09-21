"use client"

// REACT
import { useState } from 'react'
import React from 'react'

// COMPONENTS
import Overlay from '../../../../components/Overlay'
import LaunchOverlay from '../LaunchOverlay'

// TYPES
import { Launch } from '../../../../types/launches/Launch'

// Next
import Image from 'next/image'

// Images
import spacex_logo from '../../../../assets/spacex_default_logo.png'

// CSS
import './index.css'

interface LaunchCardProps {
    item: Launch
}

const LaunchCard: React.FC<LaunchCardProps> = ({ item }) => {
    // Handles overlay visibility
    const [isOverlayVisible, setIsOverlayVisible] = useState(false)

    const handleDisplayOverlay = () => {
        setIsOverlayVisible(true)
    }

    const handleHideOverlay = () => {
        setIsOverlayVisible(false)
    }

    return (
        <>
            <div className="card">
                <Image src={item.links.patch.large || spacex_logo} alt={item.name} width={300} height={300} />
                <h2>{item.name}</h2>
                <p>{item.date_utc}</p>
                <button onClick={handleDisplayOverlay}>View Details</button>
            </div>
            {/* Makes sure we are using the Overlay styling which is globally scoped */}
            {isOverlayVisible && <Overlay item={item} ItemComponent={LaunchOverlay} onClose={handleHideOverlay} />}
        </>
    )
}

export default LaunchCard
