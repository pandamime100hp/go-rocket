// REACT
import { useState } from 'react'

// COMPONENTS
import LaunchOverlay from '../LaunchOverlay'

// CSS
import './index.css'

export default function LaunchCard({ item }) {
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
                <img src={item.links.patch.small} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.date_utc}</p>
                <button onClick={handleDisplayOverlay}>View Details</button>
            </div>
            {isOverlayVisible && <LaunchOverlay item={item} onClose={handleHideOverlay} />}
        </>
    )
}