// PROPTYPES
import PropTypes from 'prop-types'

// CSS
import './index.css'

export default function Overlay({item, ItemComponent, onClose}) {
    return (
        <div className="overlay">
            <ItemComponent item={item} onClose={onClose} />
        </div>
    )
}

Overlay.propTypes = {
    item: PropTypes.object,
    ItemComponent: PropTypes.func,
    onClose: PropTypes.func
}