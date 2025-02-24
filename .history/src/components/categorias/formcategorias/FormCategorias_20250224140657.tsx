import { useState } from "react";
import Categoria from "../../../model/Categoria";
import { useParams } from "react-router-dom";
import { buscar } from "../../../service/Service";

function FormCategorias(){

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
     
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();


    async function buscarPorId(id: string){
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            alert("erro ao buscar por id")
        }
    }
}
