// REACT
import { useState, useEffect } from 'react'

// UTILITY
import getData from '../utility/getData'

function useGetData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const callGetData = async () => {
            try{
                const response = await getData(url)
                setData(response.data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        callGetData()
    }, [url])

    return { data, loading, error }
}

export default useGetData