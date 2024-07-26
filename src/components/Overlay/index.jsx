// CSS
import './index.css'

// COMPONENTS
import Error from '../Error'


export default function Overlay({data, ItemComponent}) {
    if (!data) return <Error error={"Error loading data to overlay."} />

    return (
        <div className="overlay">
            <ItemComponent item={data} />
        </div>
    )
}