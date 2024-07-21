// AXIOS
import axios from 'axios'

export default function getData(url) {
    const response = axios.get(url).then(
        response => response.data
    ).catch(
        error => error
    )
    
    return response
}