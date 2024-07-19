// HOOKS
import useGetData from '../../hooks/useGetData'

function Launches() {
    const url = import.meta.env.VITE_APP_BASE_URL
    const version = import.meta.env.VITE_APP_BASE_VERSION
    const endpoint = `${url}/${version}/launches`

    const { launches, loading, error } = useGetData(endpoint)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.stack}</p>

    return (
        <body>
            {launches.map(launch => <p key={launch.id}>{launch.name}</p>)}
        </body>
    )
}

export default Launches