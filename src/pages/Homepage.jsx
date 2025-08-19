import { Footer } from "../components/Footer"
import { NavigationBar } from "../components/NavigationBar"
import { LogoAnimation } from "../components/LogoAnimation"
import { FlipCard } from "../components/FlipCard"
import { ListBlogPost } from "../components/ListBlogPost"

import LogoFortsatSymbol from "../assets/logo-fortsat-symbol.svg"
import LogoFortsunSymbol from "../assets/logo-fortsun-symbol.svg"
import LogoFortlogSymbol from "../assets/logo-fortlog-symbol.svg"
import CardPlaceholder from "../assets/card-2.png"

import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);

export function Homepage() {
    const card = "relative p-6 text-[#FFF] aspect-square w-full flex flex-col justify-between rounded-3xl overflow-hidden"
    const headline = "font-lexend font-bold text-4xl sm:text-6xl uppercase "
    const subheadline = "text-xl"
    const textContainer = "flex flex-col gap-6 max-w-4xl w-full text-center"

    return (
        <>
            <NavigationBar />

            <section className="sm:p-6 h-screen">
                <div className="bg-[url('/images/bg.jpg')] bg-cover p-6 sm:rounded-3xl h-full flex flex-col items-center justify-between">
                    <div></div>
                    <div className={`${textContainer} items-center`}>
                        <h2 className="px-6 py-2 rounded-full uppercase text-[#FFF] font-medium bg-[#000]/50 backdrop-blur-md w-fit">
                            Grupo Fortsat
                        </h2>
                        <h1 className="font-lexend font-bold text-4xl sm:text-7xl text-[#FFF]">
                            Conectando negócios, movendo resultados, transformando histórias
                        </h1>
                        <p className={`${subheadline} text-[#FFF]`}>
                            Somos um grupo formado por três forças — FORTSAT, FORTLOG e FORTSUN — que unem pessoas, processos e soluções para gerar resultados e transformar vidas.
                        </p>
                    </div>
                    <a href="" className="">
                        Saiba Mais
                    </a>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center w-full mx-auto">
                <div className={textContainer}>
                    <h2 className={headline}>
                        Somos o <br />grupo fortsat
                    </h2>
                    <p className={subheadline}>
                        Cada uma das nossos segmentos atuam de forma especializada, mas compartilham a mesma essência: excelência, inovação e resultados.
                    </p>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row gap-6 max-w-7xl items-center w-full">
                    <div className={`${card} bg-gradient-to-r from-[#047EB3] to-[#0598D8]/25`}>
                        <img src={CardPlaceholder} alt="" className="absolute top-0 left-0 h-full z-[-1]" />
                        <div className="flex flex-col justify-between h-full">
                            <img src={LogoFortsatSymbol} alt="" className="w-fit" />
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl uppercase font-lexend font-bold">
                                    Fortsat
                                </h3>
                                <p className="">
                                    Laore et, et porttitor odio tincidunt
                                </p>
                            </div>
                        </div>
                    </div>

                    <FlipCard
      frontBg="bg-gradient-to-r from-[#047EB3] to-[#0598D8]/25"
      backBg="bg-[#0598D8]"
      logo={LogoFortsatSymbol}
      title="Fortsat"
      description="Laore et, et porttitor odio tincidunt"
      backContent={<p>Mais informações sobre a Fortsat...</p>}
    />
                    <div className={`${card} bg-gradient-to-r from-[#C79D00] to-[#F4C100]/25`}>
                        <img src={CardPlaceholder} alt="" className="absolute top-0 left-0 h-full z-[-1]" />
                        <div className="flex flex-col justify-between h-full">
                            <img src={LogoFortlogSymbol} alt="" className="w-fit" />
                            <div className="flex flex-col gap-3">
                                <h3 className="text-2xl uppercase font-lexend font-bold">
                                    Fortlog
                                </h3>
                                <p className="">
                                    Laore et, et porttitor odio tincidunt
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative p-6 flex flex-col items-center">

                <div className="flex border flex-col sm:text-left text-center sm:flex-row gap-6 items-center p-6 max-w-7xl bg-[#FFF] rounded-3xl w-full sm:h-[300px]">
                    <div className="w-full">
                        <h3 className="font-lexend font-bold uppercase text-2xl">
                            Confira alguns de nossos números
                        </h3>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center text-center">
                        <h3 className="font-lexend font-bold text-6xl">
                            +50
                        </h3>
                        <p className="">
                            Lorem ipsum dolor
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center text-center">
                        <h3 className="font-lexend font-bold text-6xl">
                            +10mi
                        </h3>
                        <p className="">
                            Lorem ipsum dolor
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center text-center">
                        <h3 className="font-lexend font-bold text-6xl">
                            8.5
                        </h3>
                        <p className="">
                            Lorem ipsum dolor
                        </p>
                    </div>
                </div>
            </section>

            <section className="sm:p-6">
                <div className="relative p-6 overflow-hidden object-fit h-full aspect-square sm:aspect-3/1 rounded-3xl flex items-center justify-center">
                    <video
                        className="w-fit sm:w-full absolute h-full sm:h-fit z-[-1]"
                        src="/bg-video.mp4" // caminho direto a partir de public
                        autoPlay
                        loop
                        muted
                    />
                    <div className={`${textContainer} text-[#FFF]`}>
                        <h2 className={headline}>
                            Mais do que um grupo de empresas
                        </h2>
                        <p className={subheadline}>
                            Somos um ecossistema de soluções.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center">
                <div className="bg-[#0598D8] flex flex-col text-center gap-6 items-center py-[48px] px-[24px] max-w-7xl rounded-3xl w-full">
                    <h3 className="font-lexend font-bold uppercase text-2xl text-[#FFF]">
                        Nossos parceiros
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <LogoAnimation
                            FirstLogo="/images/logo-partners-unifor.svg"
                            SecondLogo="/images/logo-partners-jadlog.svg"
                            openingFirstLogo="top"
                            outFirstLogo="left"
                            openingSecondLogo="top"
                            outSecondLogo="left"
                        />
                        <LogoAnimation
                            FirstLogo="/images/logo-partners-conectacargo.svg"
                            SecondLogo="/images/logo-partners-elsys.svg"
                            openingFirstLogo="right"
                            outFirstLogo="bottom"
                            openingSecondLogo="right"
                            outSecondLogo="bottom"
                        />
                        <LogoAnimation
                            FirstLogo="/images/logo-partners-hughesnet.svg"
                            SecondLogo="/images/logo-partners-totalpass.svg"
                            openingFirstLogo="bottom"
                            outFirstLogo="right"
                            openingSecondLogo="bottom"
                            outSecondLogo="right"
                        />
                        <LogoAnimation
                            FirstLogo="/images/logo-partners-mercadopago.svg"
                            SecondLogo="/images/logo-partners-flash.svg"
                            openingFirstLogo="left"
                            outFirstLogo="top"
                            openingSecondLogo="left"
                            outSecondLogo="top"
                        />
                    </div>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center">
                <div className="w-full max-w-7xl flex flex-col gap-6 items-center ">
                    <div className={textContainer}>
                        <h2 className={headline}>
                            Notícias da FortSat
                        </h2>
                    </div>
                    <div className="w-full">
                        <ListBlogPost />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}