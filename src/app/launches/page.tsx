// REACT
import React from 'react'
import { use } from 'react'

// COMPONENTS
import CardGallery from '../../components/CardGallery'
import LaunchCard from './components/LaunchCard'

// TYPES
import { Launch } from '../../types/launches'
import { CardGalleryType } from '../../types/card_galleries'

// Utility
import getEndpoint from '../../utility/url/getEndpoint'
import getData from '../../utility/data/getData'

export default function Launches(): React.ReactElement<CardGalleryType> {
    const url: string = process.env.BASE_URL!
    const urlEndpoint: string = getEndpoint(url, 'launches')

    const launches: Launch[] = use(getData(urlEndpoint))

    return (
        <CardGallery data={launches} ItemComponent={LaunchCard} />
    )
}
