function App() {
    return (
        <>
        <div className="min-h-screen">
            {/* Layout flex para dividir o conteúdo e a imagem */}
            <div className="flex">
                {/* Lado esquerdo com conteúdo */}
                <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-black">
                    Cuidando da sua saúde com confiança e qualidade, sempre perto de você.
                    </h2>
                    <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none transition duration-300">
                        Ver Categorias
                    </button>
                </div>

                {/* Lado direito com a imagem */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://image.freepik.com/vetores-gratis/projeto-do-fundo-da-farmacia_1212-351.jpg"
                        alt="Imagem Página Home"
                        className="w-full h-screen object-cover" />
                </div>
            </div>
        </div>
        </>
    );
}

export default App;
