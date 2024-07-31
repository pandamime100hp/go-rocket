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
console.log(process.env)
const app = express()
const port = process.env.PORT || 3000
const baseApiUrl = process.env.SPACEX_BASE_API_URL || "https://api.spacexdata.com/"
const baseApiVersion = process.env.SPACEX_BASE_API_VERSION || "v4"
const apiUrl = `${baseApiUrl}/${baseApiVersion}`

// ENABLE MIDDLEWARE
app.use(cors())

// GET /
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// GET /launches
app.get('/launches', async (req, res) => {
    console.log(apiUrl, 'GET /launches')
    const launchesUrl = getEndpoint(apiUrl, 'launches')
    const response = await getData(launchesUrl)
    res.json(response)
})

// INITIALISE SERVER
app.listen(port, () => console.log(`Go-Rocket API is live!`))