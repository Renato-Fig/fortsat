import CardPlaceholder from "../assets/card-2.png"

export function FlipCard({ frontBg, backBg, logo, title, description, backContent, href }) {
  return (
    <a className="group [perspective:1000px] w-full aspect-square" href={href}>
      <div className="relative  w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* Frente */}
        <div
          className={`absolute inset-0 ${frontBg} overflow-hidden rounded-3xl p-6 flex flex-col justify-between [backface-visibility:hidden]`}
        >
          <img src={logo} alt={title} className="w-fit" />
          <div className="flex flex-col gap-3 text-[#FFF]">
            <img src={CardPlaceholder} alt="" className="absolute top-0 left-0 h-full z-[-1]" />
            <h3 className="text-2xl uppercase font-lexend font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        {/* Verso */}
        <div
          className={`absolute inset-0 ${backBg} rounded-3xl p-6 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        >
          <p className="text-[#FFF] text-lg">
            {backContent}
          </p>
        </div>

      </div>
    </a>
  );
}
