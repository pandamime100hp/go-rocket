// EXPRESS
import express from 'express'

// CORS
import cors from 'cors'

// UTILITY
import getEndpoint from '../shared/utility/services/url/getEndpoint.js'
import getData from '../shared/utility/services/data/getData.js'

// JS
import process from 'process'
import dotenv from 'dotenv'

// VARIABLES
dotenv.config()
const app = express()
const port = process.env.VITE_PORT || 3000
const baseApiUrl = process.env.VITE_SPACEX_BASE_API_URL
const baseApiVersion = process.env.VITE_SPACEX_BASE_API_VERSION
const apiUrl = `${baseApiUrl}/${baseApiVersion}`

// ENABLE MIDDLEWARE
app.use(cors())

// GET /
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// GET /launches
app.get('/launches', async (req, res) => {
    const launchesUrl = getEndpoint(apiUrl, 'launches')
    const response = await getData(launchesUrl)
    res.json(response)
})

// INITIALISE SERVER
app.listen(port, () => console.log(`Example app listening on port ${port}!`))