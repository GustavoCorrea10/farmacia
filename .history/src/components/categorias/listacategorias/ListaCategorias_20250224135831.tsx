import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";


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
    {categoria.length === 0 && ( //se o array for igual a 0, ele mostra o carregamento de DNA infinitamente, pois não vai ter item no array para mostar 
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
                   {categoria.map((categoria) => ( //usamos o map, para mapear cada tema, um por vez
                        <CardCategorias key={categoria.id} item={categoria} /> // o key, serve para mostrar a unica informação que não se repete, no caso é o ID. 
                                                               //o item={tema} vai trazer as informações do tema cadastrado, como o ID e descrição
                                                               //que vão ficar dentro do <CardTemas/>, para serem exibidas de forma estilizada
                    ))}                                           
                </div>
            </div>
        </div>
    </>
)
}