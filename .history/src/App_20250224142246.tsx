import './App.css';
import Home from './pages/home/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';  

function App() {
  return (
    <Router> 
     
      <Route path="/home" element={<Home/>} />
      
    </Router>
  );
}

export default App;
