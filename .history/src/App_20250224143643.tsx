import './App.css';
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias';
import Home from './pages/home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';  

function App() {
  return (
    <Router> 
     
      <Home/>
      <Route path="/listar" element={<ListaCategorias />} />
      
    </Router>
  );
}

export default App;
