/*import LogoTotalPass from "../assets/logo-partners-totalpass.svg"
import LogoFlash from "../assets/logo-partners-flash.svg"
import LogoMercadoPago from "../assets/logo-partners-mercadopago.svg"
import LogoUnifor from "../assets/logo-partners-unifor.svg"

export function Partners() {
    return (
        <section className="p-0 sm:p-6 sm:pt-0">
            <div className="bg-blue-500 p-6 flex flex-col gap-8 align-center items-center rounded-xl">
                <h6 className="">
                    Nossos parceiros
                </h6>
                <ul className="grid grid-cols-4 gap-20 align-center items-center">
                    <li className="">
                        <img src={LogoTotalPass} alt="" />
                    </li>
                    <li className="">
                        <img src={LogoFlash} alt="" />
                    </li>
                    <li className="">
                        <img src={LogoMercadoPago} alt="" />
                    </li>
                    <li className="">
                        <img src={LogoUnifor} alt="" />
                    </li>
                </ul>
            </div>
        </section>
    )
}*/

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import LogoTotalPass from "../assets/logo-partners-totalpass.svg";
import LogoFlash from "../assets/logo-partners-flash.svg";
import LogoMercadoPago from "../assets/logo-partners-mercadopago.svg";
import LogoUnifor from "../assets/logo-partners-unifor.svg";

export function Partners() {
  const groupsRef = useRef([]);

  // 4 blocos de logos
  const logoGroups = [
    [LogoTotalPass, LogoFlash],
    [LogoMercadoPago, LogoUnifor],
    [LogoFlash, LogoTotalPass],
    [LogoUnifor, LogoMercadoPago],
  ];

  // Função para definir direção de entrada/saída
  const getFromPosition = (index) => {
    const directions = [
      { y: "-100%" }, // de cima
      { y: "100%" }, // de baixo
      { x: "-100%" }, // da esquerda
      { x: "100%" }, // da direita
    ];
    return directions[index % directions.length];
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

      logoGroups.forEach((group, groupIndex) => {
        const currentGroup = groupsRef.current[groupIndex];
        const logos = currentGroup.querySelectorAll("li");

        // Entrada de cada logo com delay pequeno
        logos.forEach((logo, logoIndex) => {
          tl.fromTo(
            logo,
            { ...getFromPosition(logoIndex), opacity: 0 },
            { x: "0%", y: "0%", opacity: 1, duration: 0.8 },
            groupIndex === 0 && logoIndex === 0 ? 0 : "+=0" // inicia logo de cara para o primeiro
          );
        });

        // Fica visível por 3s
        tl.to({}, { duration: 3 });

        // Saída de cada logo
        logos.forEach((logo, logoIndex) => {
          tl.to(
            logo,
            { ...getFromPosition(logoIndex), opacity: 0, duration: 0.8 },
            "+=0"
          );
        });

        // Reset de posições para próxima vez
        logos.forEach((logo, logoIndex) => {
          tl.set(logo, { ...getFromPosition(logoIndex), opacity: 0 });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="p-0 sm:p-6 sm:pt-0">
      <div className="bg-blue-500 p-6 flex flex-col gap-8 items-center rounded-xl overflow-hidden relative">
        <h6 className="">Nossos parceiros</h6>

        {/* Container fixo */}
        <div className="relative w-full h-24 flex justify-center items-center overflow-hidden">
          {logoGroups.map((group, i) => (
            <ul
              key={i}
              ref={(el) => (groupsRef.current[i] = el)}
              className="absolute flex justify-center items-center gap-20"
              style={{ opacity: 1 }}
            >
              {group.map((logo, idx) => (
                <li key={idx}>
                  <img
                    src={logo}
                    alt={`Logo ${idx}`}
                    className="h-12 object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
