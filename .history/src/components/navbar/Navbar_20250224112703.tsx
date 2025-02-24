import { Link } from "react-router-dom"

function Navbar() {
  
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

        <div className='flex gap-4'>
          cadastrar categoria
          listar categorias
        </div>
      </div>
    </div>
  
}

export default Navbar;
