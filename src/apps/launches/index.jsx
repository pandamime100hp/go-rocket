// COMPONENTS
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import CardGallery from '../../components/CardGallery'
import LaunchCard from './components/LaunchCard'

// HOOKS
import useGetData from '../../hooks/useGetData'

export default function Launches() {
    const { data: launches, loading, error } = useGetData('launches')

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <>
            <CardGallery data={launches} ItemComponent={LaunchCard} />
        </>
    )
}