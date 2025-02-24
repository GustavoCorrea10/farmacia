import './App.css';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import Home from './pages/home/Home';
import { BrowserRouter, Route, BrowserRouter as Router } from 'react-router-dom';  

function App() {
  return (

    < BrowserRouter>
    <Router> 
     
      <Home/>
      
    </Router>
    </BrowserRouter>
  );
}

export default App;
