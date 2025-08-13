import Bg from "../assets/bg.jpg"

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
    const bgRef = useRef(null);

    useEffect(() => {
        gsap.to(".bgRef", {
            y: 500, // movimento do parallax
            
            ease: "power3",
            duration: 1,
            scrollTrigger: {
                trigger: ".hero",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

    }, []);

    return (
        <section className="w-full p-6 h-screen hero">
            <div className="relative h-full overflow-hidden p-6 rounded-xl flex flex-col items-center justify-around">
                <img
                    src={Bg}
                    alt="Background"
                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                />
                <ul className="w-fit flex flex-row gap-6 items-center">
                    <li className="">
                        <a href="" className="">O Grupo</a>
                    </li>
                    <li className="">
                        <a href="" className="">As Empresas</a>
                    </li>
                    <li className="">
                        <a href="" className="">Blog</a>
                    </li>
                </ul>
                <div className="max-w-4xl flex flex-col gap-6 text-center text-[#FFF]">
                    <h1 className="text-3xl sm:text-7xl font-lexend font-bold">
                        Conectando negócios, movendo resultados, transformando histórias
                    </h1>
                    <p className="text-base sm:text-xl">
                        Somos um grupo formado por três forças — FORTSAT, FORTLOG e FORTSUN — que unem pessoas, processos e soluções para gerar resultados e transformar vidas. Nosso propósito é construir, junto com você, o futuro que merece.
                    </p>
                </div>
                <div className="hero">
                    Saiba Maiks
                </div>
            </div>
        </section>
    )
}