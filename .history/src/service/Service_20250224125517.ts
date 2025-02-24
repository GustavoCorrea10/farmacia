import axios from "axios";


const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com/swagger-ui/index.html#/'
})

export const cadastrarCategoria = async(url: string, dados: object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
}