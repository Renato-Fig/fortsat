import { Footer } from "../components/Footer"
import { NavigationBar } from "../components/NavigationBar"
import { LogoAnimation } from "../components/LogoAnimation"
import { FlipCard } from "../components/FlipCard"
import { ListBlogPost } from "../components/ListBlogPost"

import LogoFortsatSymbol from "../assets/logo-fortsat-symbol.svg"
import LogoFortsunSymbol from "../assets/logo-fortsun-symbol.svg"
import LogoFortlogSymbol from "../assets/logo-fortlog-symbol.svg"
import CardPlaceholder from "../assets/card-2.png"
import ArrowDown from "../assets/icons/arrow-down.svg"

import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(SplitText);

export function Homepage() {
    const card = "relative p-6 text-[#FFF] aspect-square w-full flex flex-col justify-between rounded-3xl overflow-hidden"
    const headline = "font-lexend font-bold text-4xl sm:text-6xl uppercase "
    const subheadline = "text-xl"
    const textContainer = "flex flex-col gap-6 max-w-4xl w-full text-center"



    return (
        <>
            <NavigationBar />

            <section id="hero" className="sm:p-6 h-screen">
                <div className="bg-[url('/images/bg.jpg')] bg-cover p-6 sm:rounded-3xl h-full flex flex-col items-center justify-between">
                    <div></div>
                    <div className={`${textContainer} items-center`}>
                        <h2 className="px-6 py-2 rounded-full font-bold font-lexend uppercase text-[#099BD9] font-medium bg-[#FFF]/25 border border-[#FFF]/50 backdrop-blur-md w-fit">
                            Grupo Fortsat
                        </h2>
                        <h1 className="font-lexend font-bold text-4xl sm:text-7xl text-[#FFF]">
                            Conectando negócios, movendo resultados, transformando histórias
                        </h1>
                        <p className={`${subheadline} text-[#FFF]`}>
                            Somos um grupo formado por três forças — FORTSAT, FORTLOG e FORTSUN — que unem pessoas, processos e soluções para gerar resultados e transformar vidas.
                        </p>
                    </div>
                    <a href="#intro" className="text-[#FFF] flex flex-row gap-3 items-center uppercase font-lexend font-medium">
                        Saiba Mais
                        <img src={ArrowDown} alt="" />
                    </a>
                </div>
            </section>

            <section id="intro" className="p-6 pt-[144px] flex flex-col items-center w-full mx-auto">
                <div className={textContainer}>
                    <h2 className={headline}
                        data-scroll data-scroll-speed="0.5"
                    >
                        Somos o <br /><span className="text-[#0598D8] font-lexend font-bold"> grupo fortsat</span>
                    </h2>
                    <p className={`${subheadline} text-[#606062]`}>
                        Cada uma das nossos segmentos atuam de forma especializada, mas compartilham a mesma essência: excelência, inovação e resultados.
                    </p>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row gap-6 max-w-7xl items-center w-full">

                    <FlipCard
                        frontBg="bg-gradient-to-r from-[#047EB3] to-[#0598D8]/25"
                        backBg="bg-[#0598D8]"
                        logo={LogoFortsatSymbol}
                        title="Fortsat"
                        description="Laore et, et porttitor odio tincidunt"
                        backContent={<p>Responsável pelo comércio e distribuição, conectamos produtos ao mercado certo com agilidade, eficiência e qualidade, transformando oportunidades em negócios sólidos.</p>}
                        href="/"
                    />

                    <FlipCard
                        frontBg="bg-gradient-to-r from-[#001B3A] to-[#001B3A]/25"
                        backBg="bg-[#001B3A]"
                        logo={LogoFortsunSymbol}
                        title="Fortsun"
                        description="Laore et, et porttitor odio tincidunt"
                        backContent={<p>Prestadora de serviços com uma parceria sólida e reconhecida nacionalmente com o Mercado Pago. Atuamos de forma simples e descomplicada em meios de pagamento, oferecendo soluções que impulsionam vendas e fortalecem empreendedores.</p>}
                        href="/fortsun"
                    />

                    <FlipCard
                        frontBg="bg-gradient-to-r from-[#C79D00] to-[#F4C100]/25"
                        backBg="bg-[#C79D00]"
                        logo={LogoFortlogSymbol}
                        title="Fortlog"
                        description="Laore et, et porttitor odio tincidunt"
                        backContent={"Especialista em logística, armazenagem, logística reversa, cross docking e cargas aéreas, garantimos que cada operação seja ágil, segura e totalmente rastreável."}
                        href="/fortlog"
                    />

                </div>
            </section>

            <section className="relative p-6 flex flex-col items-center">

                <div className="flex border flex-col sm:text-left text-center sm:flex-row gap-6 items-center p-6 max-w-7xl bg-[#FFF] rounded-3xl w-full sm:h-[300px]">
                    <div className="w-full">
                        <h3 className="font-lexend font-bold uppercase text-2xl text-[#0598D8]">
                            Confira alguns de nossos números
                        </h3>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center text-center">
                        <h3 className="font-lexend font-bold text-6xl text-[#0598D8]">
                            +50
                        </h3>
                        <p className="text-[#606062]">
                            Lorem ipsum dolor
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center text-center">
                        <h3 className="font-lexend font-bold text-6xl text-[#0598D8]">
                            +10mi
                        </h3>
                        <p className="text-[#606062]">
                            Lorem ipsum dolor
                        </p>
                    </div>
                    <div className="w-full flex flex-col gap-3 items-center text-center">
                        <h3 className="font-lexend font-bold text-6xl text-[#0598D8]">
                            8.5
                        </h3>
                        <p className="text-[#606062]">
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
                            <span className="text-[#0598D8] font-lexend font-bold"> Notícias</span> da FortSat
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