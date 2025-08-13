import Image from "../assets/image-placeholder-1.png"

export function AboutSection() {
    return (
        <section className="w-full p-6">
            <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full flex flex-col gap-6">
                    <h2 className="text-4xl sm:text-6xl font-lexend font-bold">
                        Somos o <br /> Grupo Fortsat
                    </h2>
                    <p className="text-base sm:text-xl">
                        Formado por três empresas independentes e líderes em seus segmentos. Cada uma atuando de forma separada, com operações próprias e especializadas, mas compartilhando a mesma essência: excelência, inovação e compromisso com resultados.
                    </p>
                </div>
                <div className="w-full">
                    <img src={Image} alt="" />
                </div>
            </div>
        </section>
    )
}