export default function CardGallery({data, ItemComponent}) {
    if (!data) return null
    
    return (
        <div className="card-gallery">
            {data?.map((item) => (
                <ItemComponent key={item.id} item={item} />
            ))}
        </div>
    )
}