import axios from 'axios';

const ROOT_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY='5dmeEHmId7Phl2iLJrfluEI6BUth7C2QpczadxYr'

export function getAPOD(date = '') {
    return axios.get(`${ROOT_URL}?api_key=${API_KEY}&date=${date}`);
}