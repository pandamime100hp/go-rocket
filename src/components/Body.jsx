// HOOKS
import useGetData from '../hooks/useGetData'

export default function Body() {

    const url = import.meta.env.VITE_APP_BASE_URL

    console.log(url)

    const { data, loading, error } = useGetData(url)

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.name}</p>

    console.log(data)
    return (
        <body>
            {data.map(user => <p key={user.id}>{user.name}</p>)}
        </body>
    )
}