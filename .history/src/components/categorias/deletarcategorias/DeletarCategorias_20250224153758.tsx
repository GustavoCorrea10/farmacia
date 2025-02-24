import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { deletar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";


function DeletarCategorias(){

    const navigate = useNavigate()
 
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{id: string}>()



    async function deletarCategoria(){
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert("Erro ao deletar")
            }
        }

        setIsLoading(false)
        retornar()
        
    }

    function retornar() {
        navigate("/home")
    }



    return (
        return (
            <div className='container w-1/3 mx-auto'>
                <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
                <p className='text-center font-semibold mb-4'>
                    Você tem certeza de que deseja apagar o tema a seguir?</p>
                <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                    <header 
                        className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                        Tema
                    </header>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>tema</p>
                    <div className="flex">
                        <button 
                            className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'>
                            Não
                        </button>
                        <button 
                            className='w-full text-slate-100 bg-indigo-400 
                                       hover:bg-indigo-600 flex items-center justify-center'>
                            Sim
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default DeletarCategorias;

