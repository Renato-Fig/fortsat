import Image from "../assets/image-placeholder-1.png"

export function EcosystemSection() {
    return (

        <section className="w-full p-6 bg-[#002B3D]">
            <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full">
                    <img src={Image} alt="" />
                </div>
                <div className="w-full flex flex-col gap-6 text-[#FFF]">
                    <h2 className="text-4xl sm:text-6xl font-lexend font-bold uppercase">
                        Mais do que um grupo de empresas. Somos um ecossistema
                    </h2>
                </div>
            </div>
        </section>
    )
}