// REACT
import { useState, useEffect } from 'react'
import React from 'react'

// UTILITY
import getData from '../utility/data/getData'
import getEndpoint from '../utility/url/getEndpoint'

import process from 'process'

interface DataState {
    data: any
    loading: boolean
    error: any
}

const useGetData = (endpoint: string): DataState => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    const url = process.env.NEXT_PUBLIC_BASE_URL

    const urlEndpoint = getEndpoint(url, endpoint)

    useEffect(() => {
        const callGetData = async () => {
            try{
                const response = await getData(urlEndpoint)
                setState({data: response, loading: false, error: null})
            } catch(err) {
                setState({data: null, loading: false, error: err})
            }
        }

        callGetData()
    }, [urlEndpoint])

    return state
}

export default useGetData
