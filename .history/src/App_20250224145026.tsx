import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, BrowserRouter as Routes } from 'react-router-dom';

function App() {
  return (

    < BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />

        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
