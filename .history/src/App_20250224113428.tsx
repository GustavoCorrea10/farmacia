import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router } from 'react-router-dom';  // Importe o BrowserRouter

function App() {
  return (
    <Router> 
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;
