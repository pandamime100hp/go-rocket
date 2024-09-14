// REACT
import React from 'react'

// CSS
import './index.css'

interface LaunchOverlayProps {
    item: any[]
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
            <p className="overlay__content subtitle">{item.datetime_local}</p>
            <p className="overlay__content description">{item.details}</p>
            
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default LaunchOverlay
