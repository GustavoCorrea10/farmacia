import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";

function DeletarCategorias(){

    const navigate = useNavigate
 
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{id: string}>()
}