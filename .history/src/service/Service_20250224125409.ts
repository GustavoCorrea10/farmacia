import axios from "axios";


const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com/swagger-ui/index.html#/'
})

export const cadastrarCategoria = async()