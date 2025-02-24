import './App.css';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';  

function App() {
  return (

    < BrowserRouter>
    <Navbar />

      <Routes/>
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
