import { useRef, useEffect } from "react";
import gsap from "gsap";

import LogoTotalPass from "../assets/logo-partners-totalpass.svg";
import LogoFlash from "../assets/logo-partners-flash.svg";
import LogoMercadoPago from "../assets/logo-partners-mercadopago.svg";
import LogoUnifor from "../assets/logo-partners-unifor.svg";
import LogoElsys from "../assets/logo-partners-elsys.svg";
import LogoHughesNet from "../assets/logo-partners-hughesnet.svg";
import LogoConectaCargo from "../assets/logo-partners-conectacargo.svg";
import LogoJadlog from "../assets/logo-partners-jadlog.svg";

export function PartnersSection() {
  const containerRef = useRef(null);

  const logoBlocks = [
    [LogoElsys, LogoMercadoPago, LogoConectaCargo, LogoTotalPass],
    [LogoFlash, LogoHughesNet, LogoJadlog, LogoUnifor],
  ];

  const entryDirs = [
    ['left', 'right', 'left', 'top'],
    ['top', 'bottom', 'bottom', 'right'],
  ];

  const exitDirs = [
    ['top', 'bottom', 'bottom', 'left'],
    ['left', 'right', 'bottom', 'top'],
  ];

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 0.8, ease: "power2.inOut" } });

    logoBlocks.forEach((block, index) => {
      // criar elementos dinamicamente dentro do container
      const blockDiv = document.createElement("div");
      blockDiv.className = "flex justify-center items-center gap-6 absolute w-full top-0 left-0 opacity-0";
      block.forEach((logo) => {
        const img = document.createElement("img");
        img.src = logo;
        img.className = "max-h-16 object-contain";
        blockDiv.appendChild(img);
      });
      containerRef.current.appendChild(blockDiv);

      // entrada
      timeline.fromTo(
        blockDiv.children,
        {
          x: (i) => {
            if (entryDirs[index][i] === 'left') return -200;
            if (entryDirs[index][i] === 'right') return 200;
            return 0;
          },
          y: (i) => {
            if (entryDirs[index][i] === 'top') return -100;
            if (entryDirs[index][i] === 'bottom') return 100;
            return 0;
          },
        },
        {
          x: 0,
          y: 0,
          stagger: 0.2
        }
      );

      // manter visível 2s
      timeline.to(blockDiv, { opacity: 1, duration: 2 });

      // saída
      timeline.to(
        blockDiv.children,
        {
          x: (i) => {
            if (exitDirs[index][i] === 'left') return -200;
            if (exitDirs[index][i] === 'right') return 200;
            return 0;
          },
          y: (i) => {
            if (exitDirs[index][i] === 'top') return -100;
            if (exitDirs[index][i] === 'bottom') return 100;
            return 0;
          },
          opacity: 0,
          stagger: 0.2
        },
        "+=0" // começa imediatamente após o delay
      );
    });
  }, []);

  return (
    <section className="w-full mx-auto p-6 relative h-full">
      <div className="max-w-7xl bg-[#0598D8] p-6 rounded-xl flex flex-col gap-6 mx-auto items-center relative overflow-hidden">
        <h2 className="text-xl font-lexend font-bold text-[#FFF] mb-4">
          Nossos Parceiros
        </h2>
        <div ref={containerRef} className="relative w-full h-24"></div>
      </div>
    </section>
  );
}