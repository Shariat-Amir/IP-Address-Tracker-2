import axios from "axios"

const baseUrl= 'https://ip-api.com/'
export default axios.create({
    baseUrl: baseUrl
})
