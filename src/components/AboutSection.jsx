import Image from "../assets/image-placeholder-1.png"

import { useRef, useEffect } from "react";
import gsap from "gsap";

export function AboutSection() {
    const imageRef = useRef(null);

   

    return (
        <section className="w-full p-6">
            <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full flex flex-col gap-6 text-center">
                    <h2 className="text-3xl sm:text-6xl font-lexend font-bold uppercase">
                        Somos o <br /> <span className="0598D8">Grupo Fortsat </span>
                    </h2>
                    <p className="text-base sm:text-xl">
                        Formado por três empresas independentes e líderes em seus segmentos. Cada uma atuando de forma separada, com operações próprias e especializadas, mas compartilhando a mesma essência: excelência, inovação e compromisso com resultados.
                    </p>
                </div>
            </div>
        </section>
    )
}