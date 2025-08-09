export function Hero() {
    return (
        <section className="w-full h-screen mx-auto p-0 sm:p-6 ">
            <div className=" w-full h-full mx-auto flex flex-col align-center items-center rounded-xl overflow-hidden justify-between bg-[url('/images/bg.jpg')] p-8 bg-no-repeat bg-cover bg-center">
                <p className="">
                    Menu
                </p>
                <div className="text-center flex flex-col max-w-4xl">
                    <p className="text-sm uppercase text-[#FFF]">
                        FortSat
                    </p>
                    <h1 className="text-6xl font-lexend font-bold text-[#FFF]">
                        Conectando negócios, Movendo Resultados, Transformando Histórias
                    </h1>
                    <p className="text-lg text-[#FFF] max-w-3xl">
                        Somos um grupo formado por três forças — FORTSAT, FORTLOG e FORTSUN — que unem pessoas, processos e soluções para gerar resultados e transformar vidas. Nosso propósito é construir, junto com você, o futuro que merece.
                    </p>
                </div>
                <p className="">
                    Conheça Mais
                </p>
            </div>
        </section>
    )
}