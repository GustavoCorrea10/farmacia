import { Link } from "react-router-dom";

function App() {
    return (
      <>
        <div className="min-h-screen">
          {/* Layout flex para dividir o conteúdo e a imagem */}
          <div className="flex">
            {/* Lado esquerdo com conteúdo */}
            <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
                Sua saúde em boas mãos.
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Encontre tudo o que você precisa em nossa farmácia online, com entrega rápida e segura.
              </p>
              <Link to={'/listarcategorias'}>
              <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none transition duration-300">
                Ver Categorias
              </button>
              </Link>
            </div>
  
            {/* Lado direito com a imagem */}
            <div className="w-full md:w-1/2">
              <img
                src="https://image.freepik.com/vetores-gratis/projeto-do-fundo-da-farmacia_1212-351.jpg"
                alt="Imagem Página Home"
                className="w-full h-screen object-cover"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default App;