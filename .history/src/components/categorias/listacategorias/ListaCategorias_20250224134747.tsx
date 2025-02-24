import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../model/Categoria";


function ListaCategorias(){

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([])

async function() {
    
    try{
        await buscar(`/categorias`, setCategoria)
    }
}

}