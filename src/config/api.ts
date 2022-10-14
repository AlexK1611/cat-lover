import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
    }
})