/*import LogoTotalPass from "../assets/logo-partners-totalpass.svg"
import LogoFlash from "../assets/logo-partners-flash.svg"
import LogoMercadoPago from "../assets/logo-partners-mercadopago.svg"
import LogoUnifor from "../assets/logo-partners-unifor.svg"
import LogoElsys from "../assets/logo-partners-elsys.svg"
import LogoHughesNet from "../assets/logo-partners-hughesnet.svg"
import LogoConectaCargo from "../assets/logo-partners-conectacargo.svg"
import LogoJadlog from "../assets/logo-partners-jadlog.svg"

export function Partners() {
    return (
        <section className="p-0 sm:p-6 sm:pt-0">
            <div className="bg-[#30AADF] p-6 flex flex-col gap-6 align-center items-center sm:rounded-xl">
                <h6 className="text-sm uppercase text-[#FFF] font-lexend font-bold">
                    Nossos parceiros
                </h6>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 align-center items-center">
                    <li className="">
                        <img src={LogoHughesNet} alt="" />
                        <img src={LogoHughesNet} alt="" />
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

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import LogoTotalPass from "../assets/logo-partners-totalpass.svg";
import LogoFlash from "../assets/logo-partners-flash.svg";
import LogoMercadoPago from "../assets/logo-partners-mercadopago.svg";
import LogoUnifor from "../assets/logo-partners-unifor.svg";
import LogoElsys from "../assets/logo-partners-elsys.svg";
import LogoHughesNet from "../assets/logo-partners-hughesnet.svg";
import LogoConectaCargo from "../assets/logo-partners-conectacargo.svg";
import LogoJadlog from "../assets/logo-partners-jadlog.svg";

export function Partners() {
  const logoPairs = [
    [LogoHughesNet, LogoElsys],
    [LogoFlash, LogoTotalPass],
    [LogoMercadoPago, LogoConectaCargo],
    [LogoUnifor, LogoJadlog],
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Array(logoPairs.length).fill(0)
  );

  const imgRefs = useRef([]);
  const directions = ["left", "top", "right", "bottom"]; // alterna direção

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return prev.map((idx, i) => (idx + 1) % logoPairs[i].length);
      });

      imgRefs.current.forEach((img, i) => {
        if (img) {
          const dir = directions[(currentIndex[i] + 1) % directions.length];
          const dist = 100; // pixels

          let fromVars = {};
          let toVars = { x: 0, y: 0, duration: 0.6, ease: "power2.inOut" };

          // define posição inicial da nova logo
          switch (dir) {
            case "left":
              fromVars = { x: -dist, y: 0 };
              break;
            case "right":
              fromVars = { x: dist, y: 0 };
              break;
            case "top":
              fromVars = { x: 0, y: -dist };
              break;
            case "bottom":
              fromVars = { x: 0, y: dist };
              break;
          }

          gsap.fromTo(img, fromVars, toVars);
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="p-0 sm:p-6 sm:pt-0">
      <div className="bg-[#30AADF] p-6 flex flex-col gap-6 align-center items-center sm:rounded-xl">
        <h6 className="text-sm uppercase text-[#FFF] font-lexend font-bold">
          Nossos parceiros
        </h6>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 align-center items-center">
          {logoPairs.map((pair, i) => (
            <li key={i} className="flex justify-center items-center overflow-hidden">
              <img
                ref={(el) => (imgRefs.current[i] = el)}
                src={pair[currentIndex[i]]}
                alt={`Logo ${i}`}
                className="max-h-16"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
