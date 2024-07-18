// HOOKS
import useGetData from '../../hooks/useGetData'

function Launches() {
    const url = import.meta.env.VITE_APP_BASE_URL

    const { launches, loading, error } = useGetData(url)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.name}</p>

    return (
        <body>
            {launches.map(launch => <p key={launch.id}>{launch.name}</p>)}
        </body>
    )
}

export default Launches