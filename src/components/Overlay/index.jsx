// CSS
import './index.css'

export default function Overlay({item, ItemComponent, onClose}) {
    return (
        <div className="overlay">
            <ItemComponent item={item} onClose={onClose} />
        </div>
    )
}