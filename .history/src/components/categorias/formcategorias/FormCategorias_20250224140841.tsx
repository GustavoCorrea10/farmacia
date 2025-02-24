import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { useParams } from "react-router-dom";
import { buscar } from "../../../service/Service";

function FormCategorias(){

    const navigate = useNavigate();


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

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/home")
    }















}
