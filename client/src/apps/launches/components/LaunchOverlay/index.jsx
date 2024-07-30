// PROPTYPES
import PropTypes from 'prop-types'

// CSS
import './index.css'

export default function LaunchOverlay({ item, onClose }) {
    return (
        <div className="overlay__content">
            <iframe className='overlay__video'
                id="ytplayer" 
                type="text/html" 
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

LaunchOverlay.propTypes = {
    item: PropTypes.object,
    onClose: PropTypes.func
}