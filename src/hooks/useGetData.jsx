// REACT
import { useState, useEffect } from 'react'

// UTILITY
import getData from '../utility/data/getData'
import getEndpoint from '../utility/url/getEndpoint'

import process from 'process'

export default function useGetData(endpoint) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const url = import.meta.env.VITE_GO_ROCKET_BASE_URL || process.env.GO_ROCKET_BASE_URL

    const urlEndpoint = getEndpoint(url, endpoint)

    useEffect(() => {
        const callGetData = async () => {
            try{
                const response = await getData(urlEndpoint)
                setData(response)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        callGetData()
    }, [urlEndpoint])

    return { data, loading, error }
}