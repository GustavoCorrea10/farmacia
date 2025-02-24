import './App.css';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';  

function App() {
  return (

    < BrowserRouter>
    <Navbar />
    <div className='min-h-[80vh]'>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/' element={<Home />}/>

</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
