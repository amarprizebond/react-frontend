import axios from 'axios'

export const setTokenHeader = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        axios.defaults.headers.common['Authorization'] = ''
    }
}