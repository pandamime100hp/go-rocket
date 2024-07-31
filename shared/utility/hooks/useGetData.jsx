// REACT
import { useState, useEffect } from 'react'

// UTILITY
import getData from '../services/data/getData'

export default function useGetData(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const callGetData = async () => {
            try{
                const response = await getData(url)
                setData(response)
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