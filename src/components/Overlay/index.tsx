// REACT
import React from 'react'

// TYPES
import { OverlayType } from '../../types/overlays'

// CSS
import './index.css'


export default function Overlay({item, ItemComponent, onClose}: OverlayType): React.ReactElement<OverlayType> {
    return (
        <div className="overlay">
            <ItemComponent item={item} onClose={onClose} />
        </div>
    )
}
