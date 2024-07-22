// COMPONENTS
import CardGallery from '../../components/CardGallery/CardGallery'
import LaunchCard from './components/LaunchCard/LaunchCard'

// HOOKS
import useGetData from '../../utility/hooks/useGetData'

function Launches() {
    const url = import.meta.env.VITE_APP_BASE_URL
    const endpoint = `${url}/launches`

    const { data: launches, loading, error } = useGetData(endpoint)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.stack}</p>

    return (
        <>
            <CardGallery data={launches} ItemComponent={LaunchCard} />
        </>
    )
}

export default Launches