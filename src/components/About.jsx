import Card1 from "../assets/card-1.png"
import Card2 from "../assets/card-2.png"
import Card3 from "../assets/card-3.png"

import LogoFortSat from "../assets/logo-fortsat.svg"

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
    const pointRef = useRef()


    return (
        <section className="w-full mx-auto p-8">
            <div className="max-w-7xl w-full mx-auto flex flex-col items-center gap-12">
                <div className="max-w-3xl w-full text-center flex flex-col gap-8">
                    <h6 className="text-sm uppercase font-lexend font-bold text-[#0098DA]">
                        Somos o Grupo FORTSAT
                    </h6>
                    <h2 className="text-3xl sm:text-5xl font-lexend font-bold text-[#002B3D]">
                        Formado por três empresas independentes e líderes em seus segmentos
                    </h2>
                    <p className="text-base text-[#606062]">
                        Cada uma atua de forma separada, com operações próprias e especializadas, mas compartilhando a mesma essência: excelência, inovação e compromisso com resultados.
                    </p>
                </div>
                <div className="flex flex-col gap-16 w-full">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-full flex flex-col gap-6">
                            <img src={LogoFortSat} alt="" className="w-fit"/>
                            <p className="text-lg sm:text-xl">
                                Responsável pelo comércio e distribuição, conectamos produtos ao mercado certo com agilidade, eficiência e qualidade, transformando oportunidades em negócios sólidos.
                            </p>
                        </div>
                        <div className="w-full flex items-center rounded-xl overflow-hidden">
                            <img src={Card1} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-full flex flex-col gap-6">
                            <img src={LogoFortSat} alt="" className="w-fit"/>
                            <p className="text-lg sm:text-xl">
                                Especialista em logística, armazenagem, logística reversa, cross docking e cargas aéreas, garantimos que cada operação seja ágil, segura e totalmente rastreável.
                            </p>
                        </div>
                        <div className="w-full flex items-center rounded-xl overflow-hidden">
                            <img src={Card2} alt="" />
                        </div>
                    </div>
                    <div className=" flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-full flex flex-col gap-6 ">
                            <img src={LogoFortSat} alt="" className="w-fit"/>
                            <p className="text-lg sm:text-xl">
                                Prestadora de serviços com uma parceria sólida e reconhecida nacionalmente com o Mercado Pago. Atuamos de forma simples e descomplicada em meios de pagamento, oferecendo soluções que impulsionam vendas e fortalecem empreendedores.
                            </p>
                        </div>
                        <div className="w-full flex items-center rounded-xl overflow-hidden">
                            <img src={Card3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}