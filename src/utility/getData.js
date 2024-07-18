// AXIOS
import axios from 'axios'

const getData = async (url) => {
    const response = await axios.get(url)
    const data = await response.json()
    return data
}

export default getData