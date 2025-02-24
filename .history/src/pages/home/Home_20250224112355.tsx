import Navbar from "../../components/navbar/Navbar";

function App() {
    return (
        <><Navbar />
        <div className="min-h-screen">
            {/* Layout flex para dividir o conteúdo e a imagem */}
            <div className="flex">
                {/* Lado esquerdo com conteúdo */}
                <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-black"> {/* Adicionado text-black aqui */}
                        Seja Bem-Vindo!
                    </h2>
                    <p className="text-lg md:text-xl text-black mt-4"> {/* Adicionado text-black aqui */}
                        Explore nosso conteúdo e aproveite a experiência!
                    </p>
                </div>

                {/* Lado direito com a imagem */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://image.freepik.com/vetores-gratis/projeto-do-fundo-da-farmacia_1212-351.jpg"
                        alt="Imagem Página Home"
                        className="w-full h-screen object-cover" />
                </div>
            </div>
        </div></>
    );
  }
  
  export default App;