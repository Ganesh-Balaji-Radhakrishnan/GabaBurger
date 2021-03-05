import axios from "axios"

const instance = axios.create({
    baseURL : "https://gababurgers-default-rtdb.europe-west1.firebasedatabase.app/"
})

export default instance 