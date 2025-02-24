import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-green-500 text-white flex justify-center py-4"> {/* Mudança aqui */}
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold">
          Saúde Total
        </Link>

        <div className="flex gap-4">
          <p >Cadastrar Categoria</p>
          <p>Listar Categorias</p> {/* Adicionado Listar Categorias */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;