import LogoFooter from "../assets/logo-fortsat-footer.svg"

export function Footer() {
    const titleGroup = "text-sm font-lexend font-bold uppercase"
    const link = ""

    return (
        <footer className="bg-[#0098DA] text-[#FFF] p-6 flex flex-col items-center gap-6">
            <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full">
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
                </div>
                <div className="w-fit flex flex-col gap-2">
                    <h4 className={titleGroup}>
                        Navegação
                    </h4>
                    <a href="" className="">
                        Nosso Blog
                    </a>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-6 max-w-7xl w-full">
                <p className="">
                    © 2025 FORTSUN Brasil. Todos os direitos reservados.
                </p>
                <a href="" className="">
                    Ir para o topo
                </a>
            </div>
        </footer>
    )
}