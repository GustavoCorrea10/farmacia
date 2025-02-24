import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../model/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrarCategoria } from "../../../service/Service";

function FormCategorias() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();






  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar por id");
    }
  }





  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);






  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }





  function retornar() {
    navigate("/categorias");
  }




  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("Tema foi atualizado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          // Tratar erro 403, se necessário
        } else {
          alert("Erro ao atualizar o catergoria!");
        }
      }
    } else {
      try {
        await cadastrarCategoria(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao cadastrar");
        } else {
          alert("Erro ao cadastrar o Categoria!");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id ? "Atualizar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form
        onSubmit={gerarNovoTema}
        className="w-1/2 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            name="descricao"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
            placeholder="Descreva aqui seu tema"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? "Carregando..." : id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategorias;
