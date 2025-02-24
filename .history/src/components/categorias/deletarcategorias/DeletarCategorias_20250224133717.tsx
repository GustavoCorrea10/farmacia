import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { deletar } from "../../../service/Service";


function DeletarCategorias(){

    const navigate = useNavigate
 
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{id: string}>()



    async function deletarCategoria(){
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar o tema!", "erro")
            }
        }
        
    }
}