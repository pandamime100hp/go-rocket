// REACT
import React from 'react'

// Types
import { Launch } from '../../../../types/launches'

// CSS
import './index.css'

interface LaunchOverlayProps {
    item: Launch
    onClose: () => void
}

const LaunchOverlay: React.FC<LaunchOverlayProps> = ({item, onClose}) => {
    return (
        <div className="overlay__content">
            <iframe className='overlay__video'
                id="ytplayer" 
                src={`https://www.youtube.com/embed/${item.links.youtube_id}`}
                allowFullScreen>
            </iframe>
            
            <h1 className="overlay__content title">{item.name}</h1>
            <p className="overlay__content subtitle">{item.date_local}</p>
            <p className="overlay__content description">{item.details}</p>
            
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default LaunchOverlay
