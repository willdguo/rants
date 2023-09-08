import axios from 'axios'
// const baseUrl = "/api/login"
const baseUrl = "https://rants-backend.vercel.app/api/login"


const login = async (credentials) => {
    // console.log("attempting login login.js")
    // console.log(credentials)
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {login}