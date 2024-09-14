// REACT
import React from 'react'

// CSS
import './index.css'

type OverlayProps = {
    item: any
    ItemComponent: React.FC<any>
    onClose: () => void
}

const Overlay: React.FC<OverlayProps> = ({item, ItemComponent, onClose}) => {
    return (
        <div className="overlay">
            <ItemComponent item={item} onClose={onClose} />
        </div>
    )
}

export default Overlay
