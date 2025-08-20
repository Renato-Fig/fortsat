import { Footer } from "../components/Footer"
import { NavigationBar } from "../components/NavigationBar"
import Placeholder from "../assets/card-3.png"

import Photo1 from "../assets/fortlog-photo-1.png"
import Photo2 from "../assets/fortlog-photo-2.png"
import Photo3 from "../assets/fortlog-photo-3.png"

export function Fortlog() {
    const headline = "font-lexend font-medium text-2xl sm:text-3xl max-w-2xl"
    const paragraph = "text-base max-w-2xl"
    const textContainer = "flex flex-col  gap-6 w-full"

    return (
        <>
            <NavigationBar />

            <section className="p-6 h-160">
                <div className="bg-[#F4C100] w-full h-full text-[#FFF] flex flex-col p-6 rounded-3xl items-center justify-end">
                    <div className="text-center flex flex-col gap-6">
                        <h1 className="font-lexend font-bold text-5xl sm:text-7xl">
                            FORTLOG Brasil
                        </h1>
                        <p className="">
                            A logística na velocidade do seu negócio
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center">
                <div className="flex flex-col gap-6 max-w-3xl items-center">
                    <div className="w-full aspect-3/1 rounded-3xl overflow-hidden">
                        <img src={Photo1} alt="" className="w-full" />
                    </div>
                    <div className={`${textContainer} text-center items-center`}>
                        <h3 className={headline}>
                            Na FORTLOG Brasil, acreditamos que logística não é apenas transporte é o motor silencioso que mantém negócios vivos, conectados e crescendo.
                        </h3>
                        <p className={paragraph}>
                            Somos a força que impulsiona empresas em todo o Ceará, oferecendo soluções ágeis, precisas e escaláveis para quem não pode parar.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6">
                <div className="bg-[#1F1F1F] text-[#FFF] rounded-3xl flex flex-col sm:flex-row p-6 items-center gap-6">
                    <div className={textContainer}>
                        <h3 className={`${headline} text-[#F4C100]`}>
                            Criamos caminhos eficientes para que cada produto chegue ao destino certo, no tempo certo, com a qualidade que o mercado exige.
                        </h3>
                        <p className={paragraph}>
                            Com entregas dedicadas, logística reversa, cargas aéreas, armazenagem inteligente e operações de cross docking.
                            Nosso galpão verticalizado de 1.600 m² e capacidade para 1.200 pallets é mais que estrutura: é a garantia de segurança, organização e eficiência para os nossos clientes.
                        </p>
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden">
                        <img src={Photo2} alt="" className="w-full" />
                    </div>
                </div>
            </section>
            <section className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="w-full rounded-3xl overflow-hidden bg-[#CCC]">
                        <img src={Photo3} alt="" className="w-full" />
                    </div>
                    <div className={textContainer}>
                        <h3 className={headline}>
                            O que nos move é a FORTITUDE nossa essência de força, comprometimento e superação.
                        </h3>
                        <p className={paragraph}>
                            Operamos com integridade, evolução contínua e foco total no cliente, transformando desafios logísticos em oportunidades de crescimento.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6">

                <div className="flex flex-row items-center gap-6 bg-[#F4C100] rounded-3xl p-6">
                    <div className="w-full rounded-2xl overflow-hidden aspect-3/1">
                        <img src={Placeholder} alt="" className="w-full" />
                    </div>
                    <h3 className="text-2xl font-lexend text-center">
                        Do primeiro quilômetro ao último metro, a FORTLOG está presente para entregar mais do que cargas: entregamos confiança, velocidade e alta performance.
                    </h3>
                    <div className="w-full rounded-2xl overflow-hidden aspect-3/1">
                        <img src={Placeholder} alt="" className="w-full" />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}