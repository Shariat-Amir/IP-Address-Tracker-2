import axios from "axios"

const baseUrl= 'http://ip-api.com/'
export default axios.create({
    baseUrl: baseUrl
})
