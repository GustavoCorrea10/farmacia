import axios from "axios";


const api = axios.create({
    baseURL: 'https://farmacia-jjxo.onrender.com/swagger-ui/index.html#/'
})

export const cadastrarCategoria = async(url: string, dados: object, setDados: Function)=>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}


export const listarCategoria = async(url: string, setDados: Function) =>{
const resposta = await api.get(url)
setDados(resposta.data)
}

export const atualizar = async(url: string, dados: object, setDados: Function) =>{
    const resposta = await api.put(url, dados)
}
    
