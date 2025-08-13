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

export function PartnersSection() {
  return (
    <section className="w-full mx-auto p-6 relative">
      <div className="w-full h-[50%] bg-[#002B3D] absolute top-0 left-0 z-[-1]"></div>
      <div className="max-w-7xl bg-[#0598D8] p-6 rounded-xl flex flex-col gap-6 mx-auto items-center">
        <h2 className="text-xl font-lexend font-bold text-[#FFF]">
          Nossos Parceiros
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <li className="">
            <img src={LogoElsys} alt="" />
          </li>
          <li className="">
            <img src={LogoMercadoPago} alt="" />
          </li>
          <li className="">
            <img src={LogoFlash} alt="" />
          </li>
          <li className="">
            <img src={LogoHughesNet} alt="" />
          </li>
        </ul>
      </div>
    </section>
  )
}
