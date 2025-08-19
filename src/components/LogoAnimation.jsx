import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import LogoUnifor from "../assets/logo-partners-unifor.svg"

export function LogoAnimation({
    FirstLogo,
    SecondLogo,
    openingFirstLogo = "left",
    outFirstLogo = "right",
    openingSecondLogo = "right",
    outSecondLogo = "left"
}) {

    const directions = {
        left: { x: "-100%", y: "0%" },
        right: { x: "100%", y: "0%" },
        top: { x: "0%", y: "-100%" },
        bottom: { x: "0%", y: "100%" }
    };
    const logo1Ref = useRef(null);
    const logo2Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

        // Logo 1 entra
        tl.fromTo(
            logo1Ref.current,
            { ...directions[openingFirstLogo], opacity: 0 },
            { x: "0%", y: "0%", opacity: 1, duration: 0.6 }
        )
            .to(logo1Ref.current, { duration: 4 }) // espera 4s
            .to(logo1Ref.current, {
                ...directions[outFirstLogo],
                opacity: 0,
                duration: 0.6
            });

        // Logo 2 entra
        tl.fromTo(
            logo2Ref.current,
            { ...directions[openingSecondLogo], opacity: 0 },
            { x: "0%", y: "0%", opacity: 1, duration: 0.6 }
        )
            .to(logo2Ref.current, { duration: 4 })
            .to(logo2Ref.current, {
                ...directions[outSecondLogo],
                opacity: 0,
                duration: 0.6
            });

        return () => tl.kill();
    }, [openingFirstLogo, outFirstLogo, openingSecondLogo, outSecondLogo]);

    return (
        <div className="relative w-[150px] h-[60px] overflow-hidden">
            <img ref={logo1Ref} src={FirstLogo} alt="Logo 1" className="absolute w-full h-full" />
            <img ref={logo2Ref} src={SecondLogo} alt="Logo 2" className="absolute w-full h-full" />
        </div>
    );
}
