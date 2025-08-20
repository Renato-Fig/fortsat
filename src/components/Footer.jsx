import LogoFooter from "../assets/logo-fortsat-footer.svg"
import ArrowUp from "../assets/icons/arrow-up.svg"

export function Footer() {
    const titleGroup = "text-sm font-lexend font-bold uppercase"
    const link = ""

    return (
        <footer className="bg-[#0098DA] text-[#FFF] p-6 flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full pb-6">
                <div className="w-full flex flex-col gap-2">
                    <img src={LogoFooter} alt="" className="w-fit" />
                    <p className="">
                        Há mais de X anos distribuindo tecnologia e inovação!
                    </p>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h4 className={titleGroup}>
                        Navegação
                    </h4>
                    <a href="" className="">
                        Nosso Blog
                    </a>
                    <a href="" className="">
                        Fortsat
                    </a>
                    <a href="" className="">
                        Fortsun
                    </a>
                    <a href="" className="">
                        Fortlog
                    </a>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <h4 className={titleGroup}>
                        Contato
                    </h4>
                    <a href="" className="">
                        (85) 90000 0000
                    </a>
                    <a href="" className="">
                        nome@fortsun.com
                    </a>
                    <h4 className={`${titleGroup} mt-6`}>
                        Localização
                    </h4>
                    <a href="" className="">
                        R. Augusta Benevides, 1304 | Parque Santa Maria <br /> Fortaleza/CE, 60873-065
                    </a>
                </div>
                <div className="w-fit flex flex-col gap-2">
                    <h4 className={`${titleGroup} w-max`}>
                        Redes Sociais
                    </h4>
                    <a href="" className="">
                        LinkedIn
                    </a>
                    <a href="" className="">
                        Instagram
                    </a>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-6 max-w-7xl w-full border-t pt-6">
                <p className="">
                    © 2025 FORTSUN Brasil. Todos os direitos reservados.
                </p>
                <a href="#hero" className="text-[#FFF] flex flex-row gap-3 items-center uppercase font-lexend font-medium">
                    Ir para o topo
                    <img src={ArrowUp} alt="" className="" />
                </a>
            </div>
        </footer>
    )
}