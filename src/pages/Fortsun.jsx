import { Footer } from "../components/Footer"
import { NavigationBar } from "../components/NavigationBar"
import Placeholder from "../assets/card-3.png"

export function Fortsun() {
    const headline = "font-lexend font-medium text-2xl sm:text-3xl max-w-2xl"
    const paragraph = "text-base max-w-2xl"
    const textContainer = "flex flex-col gap-6 w-full"

    return (
        <>
            <NavigationBar />

            <section className="p-6 h-160">
                <div className="bg-[#001B3A] w-full h-full text-[#FFF] flex flex-col p-6 rounded-3xl items-center justify-end">
                    <div className="text-center flex flex-col gap-6">
                        <h1 className="font-lexend font-bold text-5xl sm:text-7xl">
                            FORTSUN Brasil
                        </h1>
                        <p className="">
                            Inovando, Conectando e Transformando
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6 flex flex-col items-center">
                <div className="flex flex-col gap-6 max-w-3xl items-center">
                    <div className="w-full aspect-3/1 rounded-3xl overflow-hidden">
                        <img src={Placeholder} alt="" className="w-full" />
                    </div>
                    <div className={`${textContainer} text-center`}>
                        <h3 className={headline}>
                            A FORTSUN Brasil nasceu com um propósito claro: tornar a tecnologia e as soluções financeiras mais simples, acessíveis e transformadoras.
                        </h3>
                        <p className={paragraph}>
                            Em parceria estratégica com o Mercado Pago, conectamos milhares de empreendedores e empresas ao maior ecossistema de pagamentos da América Latina, levando inovação de forma descomplicada e dinâmica aos estados do Ceará, Piauí e Maranhão.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6">
                <div className="bg-[#AFB4B4] flex flex-col sm:flex-row p-6 items-center rounded-3xl">
                    <div className={textContainer}>
                        <h3 className={headline}>
                            Em pouco tempo, conquistamos o posto de número 1 no Brasil, resultado da nossa dedicação, excelência e compromisso com quem confia na nossa marca.
                        </h3>
                        <p className={paragraph}>
                            Em parceria estratégica com o Mercado Pago, conectamos milhares de empreendedores e empresas ao maior ecossistema de pagamentos da América Latina, levando inovação de forma descomplicada e dinâmica aos estados do Ceará, Piauí e Maranhão.
                        </p>
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden">
                        <img src={Placeholder} alt="" className="w-full" />
                    </div>
                </div>
            </section>

            <section className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="w-full rounded-3xl overflow-hidden">
                        <img src={Placeholder} alt="" className="w-full" />
                    </div>
                    <div className={textContainer}>
                        <h3 className={headline}>
                            Em pouco tempo, conquistamos o posto de número 1 no Brasil, resultado da nossa dedicação, excelência e compromisso com quem confia na nossa marca.
                        </h3>
                        <p className={paragraph}>
                            Em parceria estratégica com o Mercado Pago, conectamos milhares de empreendedores e empresas ao maior ecossistema de pagamentos da América Latina, levando inovação de forma descomplicada e dinâmica aos estados do Ceará, Piauí e Maranhão.
                        </p>
                    </div>
                </div>
            </section>

            <section className="p-6">
                <div className="bg-[#001B3A] rounded-3xl flex flex-col sm:flex-row gap-6 p-6 items-center">
                    <div className={`${textContainer} text-[#FFF]`}>
                        <h3 className={headline}>
                            O que nos move é o EMPOWER, a cultura que sustenta e inspira cada passo da FORTSUN Brasil
                        </h3>
                        <p className="text-xl max-w-2xl">
                            EMPOWER é superação, inovação, compromisso com a excelência, cultura de confiança e lealdade. Mas, acima de tudo, é cuidar das pessoas, colocando-as no centro de tudo.
                        </p>
                        <p className={paragraph}>
                            Acreditamos que o verdadeiro impacto acontece quando empoderamos uns aos outros, criando um ambiente onde todos crescem juntos e multiplicam resultados.
                        </p>
                    </div>
                    <div className="w-full rounded-2xl overflow-hidden">
                        <img src={Placeholder} alt="" className="w-full" />
                    </div>
                </div>
            </section>

            <section className="p-6">
                <div className="flex flex-row gap-6">
                    <div className="w-full hidden md:flex flex-col items-center rounded-3xl overflow-hidden">
                        <img src={Placeholder} alt="" className="h-full" />
                    </div>
                    <div className="w-full flex flex-col gap-6">
                        <div className={`${textContainer} text-center`}>
                            <h3 className={headline}>
                                Somos mais que uma empresa de soluções financeiras: somos um movimento de transformação.
                            </h3>
                            <p className="">
                                Investimos em capacitação, construímos parcerias sólidas e criamos oportunidades que fortalecem negócios, impulsionam a economia e inspiram pessoas.
                            </p>
                        </div>
                        <div className="flex aspect-5/2 rounded-3xl overflow-hidden">
                            <img src={Placeholder} alt="" className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="w-full hidden md:flex flex-col items-center rounded-3xl overflow-hidden">
                        <img src={Placeholder} alt="" className="h-full" />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}