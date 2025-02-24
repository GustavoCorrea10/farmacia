import './App.css';
import FormCategorias from './components/categorias/formcategorias/FormCategorias';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    < BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastrarcategoria" element={<FormCategorias />} />
          <Route path="/editarcategoria/:id" element={<FormCategorias />} />
          <Route path="/deletarcategoria/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
