import LogoFooter from "../assets/logo-fortsat.svg"

export function Footer() {
    return (
        <footer className="p-6 w-full items-center flex flex-col gap-12 max-w-7xl items-center m-auto">
            <ul className=" w-full flex flex-col sm:flex-row gap-6">
                <li className="flex flex-col gap-3 w-full">
                    <img src={LogoFooter} alt="" className="w-fit" />
                    <p className="max-w-md">
                        Nulla facilisi. In eu pulvinar leo, ultricies auctor purus. Curabitur varius enim non hendrerit rutrum.
                    </p>
                </li>
                <li className="flex flex-col gap-3 w-full">
                    <h6 className="text-sm uppercase font-lexend font-bold">
                        Links
                    </h6>
                    <a href="">
                        Fortsun
                    </a>
                </li>
                <li className="flex flex-col gap-3 w-full">
                    <h6 className="text-sm uppercase font-lexend font-bold">
                        Contato
                    </h6>
                    <a href="">
                        (85) 90000 0000
                    </a>
                    <a href="">
                        nome@fortsun.com
                    </a>
                </li>
                <li className="flex flex-col gap-3 w-full">
                    <h6 className="text-sm uppercase font-lexend font-bold">
                        Localização
                    </h6>
                    <a href="">
                        Rua Augusta Benevides, 1304, Parque Santa Maria - Fortaleza-CE, 60873-065
                    </a>
                </li>
            </ul>
            <div className="w-full h-[1px]  bg-[#000]"></div>
            <p className="text-center text-sm uppercase">
                © 2025 FORTSUN Brasil. Todos os direitos reservados.
            </p>
        </footer>
    )
}