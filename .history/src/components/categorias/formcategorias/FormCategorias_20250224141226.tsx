import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar } from "../../../service/Service";

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


    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() // evita que o formulario reinicie a pagina toda ao ser enviado
        setIsLoading(true)


          //aqui ele faz:
         //Se id existir → Significa que já existe um tema, então ele atualiza usando a função atualizar().
        //Se id não existir → Significa que é um novo tema, então ele cria usando a função cadastrar().
        if (id !== undefined) {
             try {
                await atualizar(`/categorias`, categoria, setCategoria {
                })
                alert("Tema foi atualizado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert("Erro ao atualizar o tema!")
                }

            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria {
                })
                alert("Tema cadastrado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                      alert("erro ao cadastrar")
                } else {
                    alert("Erro ao cadastrar o tema!")
                }

            }
        }















}
