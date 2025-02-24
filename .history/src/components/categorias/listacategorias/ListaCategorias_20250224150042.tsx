import { useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { buscar } from "../../../service/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import { DNA } from "react-loader-spinner";


function ListaCategorias(){

    

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



useEffect(()=> {
    listarCategorias()
}, [categoria.length])


return (
    <>
        {categoria.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categoria.map((tema) => (
                            <CardCategorias key={tema.id} tema={tema} />
                        ))}
                    </div>
                </div>
            </div>
        </>
)
}

export default ListaCategorias;