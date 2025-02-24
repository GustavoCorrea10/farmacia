import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-green-500 text-white flex justify-center py-6"> 
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold">
          Saúde Total
        </Link>

        <div className="flex gap-4">
          <Link to='/cadastrarcategoria'>Cadastrar Categoria</Link> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;