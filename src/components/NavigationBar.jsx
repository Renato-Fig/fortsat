import LogoNavBar from "../assets/logo-fortsat-navbar.svg"
export function NavigationBar() {
    return (
        <nav className="sm:p-6 absolute w-full fixed z-2">
            <div className="flex flex-row items-center justify-between bg-[#000]/50 sm:rounded-3xl backdrop-blur-2xl px-6 py-2">
                <img src={LogoNavBar} alt="" />
                <ul className="sm:flex flex-row hidden text-[#FFF] h-fit gap-6">
                    <li className="uppercase font-medium">
                        <a href="" className="">
                            O grupo
                        </a>
                    </li>
                    <li className="uppercase font-medium">
                        <a href="" className="">
                            As empresas
                        </a>
                    </li>
                    <li className="uppercase font-medium">
                        <a href="" className="">
                            Nosso Blog
                        </a>
                    </li>
                </ul>
                <button className="text-[#FFF]">
                    Fale conosco
                </button>
            </div>
        </nav>
    )
}