// REACT
import React from 'react'

// TYPES
import { LaunchOverlayType } from '../../../../types/overlays'

// CSS
import './index.css'

export default function LaunchOverlay({item, onClose}: LaunchOverlayType): React.ReactElement<LaunchOverlayType> {
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
