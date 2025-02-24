import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrarCategoria } from "../../../service/Service";

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
                await atualizar(`/categorias`, categoria, setCategoria)
                alert("Tema foi atualizado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                } else {
                    alert("Erro ao atualizar o tema!")
                }

            }
        } else {
            try {
                await cadastrarCategoria(`/categorias`, categoria, setCategoria)
                alert("Tema cadastrado com sucesso!")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                      alert("erro ao cadastrar")
                } else {
                    alert("Erro ao cadastrar o tema!")
                }

            }
        }

        setIsLoading(false)
        retornar()
}

return (
    <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
            {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
            <div className="flex flex-col gap-2">
                <label htmlFor="descricao">Descrição do Tema</label>
                <input
                    type="text"
                    placeholder="Descreva aqui seu tema"
                    name='descricao'
                    className="border-2 border-slate-700 rounded p-2"
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
            </div>
            <button
                className="rounded text-slate-100 bg-indigo-400 
                           hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                type="submit">
                {isLoading ?
                    <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                    /> :
                    <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span> 
                    // se o id não existe, o botão vira de cadastrar
                    // se o id existe, ele entende que é para atualizar, e para ele saber a rota, chamamos la no app.tsx
                }
            </button>
        </form>
    </div>
);


















}
