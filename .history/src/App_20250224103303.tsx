import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

function App() {


  return (
    <>
    <div className='min-h-[80vh]'></div>
    <Routes>
        <Route path='/home' element={<Home/>}


      
    </Routes>
       
    </>
  )
}

export default App
