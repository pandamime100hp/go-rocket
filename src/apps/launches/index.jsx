// HOOKS
import useGetData from '../../utility/hooks/useGetData'

function Launches() {
    const url = import.meta.env.VITE_APP_BASE_URL
    const endpoint = `${url}/launches`

    const { launches, loading, error } = useGetData(endpoint)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.stack}</p>

    console.log(launches)

    return (
        <>
            {!loading && launches?.map(launch => <p key={launch.id}>{launch.name}</p>)}
        </>
    )
}

export default Launches