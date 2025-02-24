function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center p-4">
                <div className="container grid grid-cols-1 md:grid-cols-2 text-white gap-4 w-full">
                    <div className="flex flex-col gap-4 items-center justify-center text-center py-4">
                        <h2 className='text-3xl md:text-5xl font-bold'>
                            Seja Bem-Vindo!
                        </h2>
                        <p className='text-lg md:text-xl'>
                            Explore nosso conteúdo e aproveite a experiência!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {/* Adicione botões ou outros elementos aqui */}
                        </div>
                    </div>

                    <div className="flex justify-center md:w-1/2 w-full">
                        <img
                            src="https://image.freepik.com/vetores-gratis/projeto-do-fundo-da-farmacia_1212-351.jpg"
                            alt="Imagem Página Home"
                            className="w-full h-full object-cover"  // Faz a imagem cobrir toda a área
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
