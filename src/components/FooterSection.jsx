import LogoFooter from "../assets/logo-fortsat.svg"

export function FooterSection() {
    return (
        <footer className="w-full mx-auto p-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <div className=" w-full flex flex-col sm:flex-row gap-6">
                    <div className="w-full">
                        <div className="">
                            <img src={LogoFooter} alt="" />
                            <p className="">
                                Há x anos distribuindos tecnologia e inovação!
                            </p>
                        </div>
                    </div>
                    <ul className="w-full">
                        <li className="">
                            Explorar
                        </li>
                        <li className="">
                            <a href="" className="">
                                FortSat
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                FortSun
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                FortLog
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                Nosso Blog
                            </a>
                        </li>
                    </ul>
                    <ul className="w-full">
                        <li className="">
                            Contato
                        </li>
                        <li className="">
                            <a href="" className="">
                                (85) 90000 0000
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                nome@fortsun.com
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                Redes Sociais
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                Instagram
                            </a>
                        </li>
                        <li className="">
                            <a href="" className="">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                    <ul className="w-full">
                        <li className="">
                            Localização
                        </li>
                        <li className="">
                            <a href="" className="">
                                Rua Augusta Benevides, 1304 <br />
                                Parque Santa Maria - Fortaleza/CE 60873-065
                            </a>
                        </li>
                    </ul>
                </div>
                <p className="text-sm uppercase text-center">
                    © 2025 FORTSUN Brasil. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}