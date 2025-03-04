import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';  

function App() {
  return (
    <Router> 
      <Navbar />
      <Route patch="/home" element={<Home/>} />
      <Footer/>
    </Router>
  );
}

export default App;
