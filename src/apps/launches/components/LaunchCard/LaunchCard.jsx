// CSS
import './LaunchCard.css'

export default function LaunchCard({ item }) {
    if (!item) return null

    console.log(item)

    return (
        <div className="card">
            <img src={item.links.patch.small} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.date_utc}</p>
            <p>{item.details}</p>
        </div>
    )
}