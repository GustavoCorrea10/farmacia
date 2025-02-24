import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { buscar } from "../../../service/Service";


function ListaCategorias(){

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([])

async function listarCategorias() {
    
    try{
        await buscar(`/categorias`, setCategoria)
    } catch(error: any){
        if (error.toString().includes('403')) { // se receber um erro 403, chamamos a função hadleLogout para deslogar o usuario
            alert("erro ao listar categorias")
        }
    }
}



useEffect(( =>{
    listarCategorias()
}, [categoria.length]))

}