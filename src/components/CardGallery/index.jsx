// PROPTYPES
import PropTypes from 'prop-types'

// CSS
import './index.css'

export default function CardGallery({data, ItemComponent}) {
    // Generate card gallery based on the passed in ItemComponent such as 
    // LaunchCard or RocketsCard
    return (
        <div className="card-gallery">
            {data?.map((item) => (
                <ItemComponent key={item.id} item={item} />
            ))}
        </div>
    )
}

CardGallery.propTypes = {
    data: PropTypes.array,
    ItemComponent: PropTypes.func
}