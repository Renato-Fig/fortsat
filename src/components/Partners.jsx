import LogoTotalPass from "../assets/logo-partners-totalpass.svg"
import LogoFlash from "../assets/logo-partners-flash.svg"
import LogoMercadoPago from "../assets/logo-partners-mercadopago.svg"
import LogoUnifor from "../assets/logo-partners-unifor.svg"
import LogoElsys from "../assets/logo-partners-elsys.svg"
import LogoHughesNet from "../assets/logo-partners-hughesnet.svg"
import LogoConectaCargo from "../assets/logo-partners-conectacargo.svg"
import LogoJadlog from "../assets/logo-partners-jadlog.svg"

export function Partners() {
    return (
        <section className="p-0 sm:p-6 sm:pt-0">
            <div className="bg-[#30AADF] p-6 flex flex-col gap-6 align-center items-center sm:rounded-xl">
                <h6 className="text-sm uppercase text-[#FFF] font-lexend font-bold">
                    Nossos parceiros
                </h6>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 align-center items-center">
                    <li className="">
                        <img src={LogoHughesNet} alt="" />
                    </li>
                    <li className="">
                        <img src={LogoFlash} alt="" />
                    </li>
                    <li className="">
                        <img src={LogoMercadoPago} alt="" />
                    </li>
                    <li className="">
                        <img src={LogoUnifor} alt="" />
                    </li>
                </ul>
            </div>
        </section>
    )
}