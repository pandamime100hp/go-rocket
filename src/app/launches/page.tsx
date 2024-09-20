// REACT
import React from 'react'
import { use } from 'react'

// COMPONENTS
import CardGallery from '../../components/CardGallery'
import LaunchCard from './components/LaunchCard'

// Utility
import getEndpoint from '../../utility/url/getEndpoint'
import getData from '../../utility/data/getData'

export default function Launches(): React.ReactNode {
    const url = process.env.NEXT_PUBLIC_BASE_URL
    const urlEndpoint = getEndpoint(url, 'launches')

    const launches = use(getData(urlEndpoint))

    return (
        <CardGallery data={launches} ItemComponent={LaunchCard} />
    )
}
