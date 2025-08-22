import LogoNavBar from "../assets/logo-fortsat-navbar.svg"
import Whatsapp from "../assets/icons/whatsapp-white.svg"

import { useState } from "react"

export function NavigationBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }


    return (
        <nav className="sm:p-8 absolute w-full fixed z-2">
            <div className="flex flex-row items-center justify-between border border-[#FFF]/30 bg-[#000]/50 sm:rounded-2xl backdrop-blur-2xl px-6 py-2">
                <img src={LogoNavBar} alt="" />
                <ul className="sm:flex flex-row hidden text-[#FFF] h-fit gap-6">
                    <li className="uppercase font-medium">
                        <a href="/" className="">
                            O grupo
                        </a>
                    </li>
                    <li className="uppercase font-medium relative cursor-pointer" onClick={toggleDropdown}>
                            As empresas
                        {isDropdownOpen && (
                            <ul className="absolute top-full left-0 mt-2 bg-[#000]/80 rounded-lg shadow-lg p-2 space-y-2">
                                <li>
                                    <a href="" className="block px-4 py-2 hover:bg-[#222] rounded">
                                        Fortlog
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="block px-4 py-2 hover:bg-[#222] rounded">
                                        Fortsun
                                    </a>
                                </li>
                            </ul>
                        )}

                    </li>
                    <li className="uppercase font-medium">
                        <a href="/blog" className="">
                            Nosso Blog
                        </a>
                    </li>
                </ul>
                <button className="bg-[#0098DA] border-[#84CDEC] border text-[#FFF] hidden sm:flex flex-row gap-3 uppercase font-lexend bg-[#000] px-6 py-3 rounded-lg  ">
                    Fale conosco
                    <img src={Whatsapp} alt="" />
                </button>
            </div>
        </nav>
    )
}