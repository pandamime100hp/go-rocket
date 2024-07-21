// EXPRESS
import express from 'express'

// CORS
import cors from 'cors'

// UTILITY
import getEndpoint from './src/utility/services/url/getEndpoint.js'
import getData from './src/utility/services/data/getData.js'
import * as constants from './src/utility/constants/constants.server.js'

// VARIABLES
const app = express()
const port = 3000
const baseApiUrl = constants.SPACEX_BASE_API_URL
const baseApiVersion = constants.SPACEX_BASE_API_VERSION
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