import { Link } from "react-router-dom"

function Navbar() {
  return(
<div className="w-full bg-[rgb(60,59,77)] text-white flex justify-center py-4">
<div className="container flex justify-between text-lg">
        <Link to='/home' className="text-2xl font-bold">Saúde Total</Link>

        <div className='flex gap-4'>
          <p>Cadastrar Categoria</p>
          <p>listar categorias</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
