export function CTA() {
    return (
        <section className="h-screen sm:p-6  ">
            <div className="relative h-full overflow-hidden sm:rounded-xl p-6 flex items-center flex-col justify-center align-center">
                <div className="z-1 flex flex-col items-center max-w-3xl gap-6">
                    <p className="text-xl sm:text-3xl text-center text-[#FFF] ">
                        Mais do que um grupo de empresas, somos um ecossistema de soluções capazes de transformar negócios e impactar positivamente pessoas e mercados.
                    </p>
                    <button>
                        CTA
                    </button>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/images/bg-cta.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}