import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='min-h-[80vh]'>
        <Routes>
          <Route 
            path='/home' 
            element={
              <div className="flex min-h-screen">
                {/* Lado esquerdo com conteúdo */}
                <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Seja Bem-Vindo!
                  </h2>
                  <p className="text-lg md:text-xl text-white mt-4">
                    Explore nosso conteúdo e aproveite a experiência!
                  </p>
                </div>
                
                {/* Lado direito com a imagem */}
                <div className="w-full md:w-1/2">
                  <img
                    src="https://image.freepik.com/vetores-gratis/projeto-do-fundo-da-farmacia_1212-351.jpg"
                    alt="Imagem Página Home"
                    className="w-full h-full object-cover"  // A imagem vai cobrir toda a área
                  />
                </div>
              </div>
            } 
          />
        </Routes>
      </div>
    </>
  )
}

export default App
