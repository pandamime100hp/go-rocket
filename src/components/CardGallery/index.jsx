// CSS
import './index.css'

export default function CardGallery({data, ItemComponent}) {
    return (
        <div className="card-gallery">
            {data?.map((item) => (
                <ItemComponent key={item.id} item={item} />
            ))}
        </div>
    )
}