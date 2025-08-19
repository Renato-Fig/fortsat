export function FlipCard({ frontBg, backBg, logo, title, description, backContent }) {
  return (
    <div className="group [perspective:1000px] w-full aspect-square">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Frente */}
        <div
          className={`absolute inset-0 ${frontBg} rounded-3xl p-6 flex flex-col justify-between [backface-visibility:hidden]`}
        >
          <img src={logo} alt={title} className="w-fit" />
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl uppercase font-lexend font-bold">{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        {/* Verso */}
        <div
          className={`absolute inset-0 ${backBg} rounded-3xl p-6 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}
        >
          {backContent}
        </div>

      </div>
    </div>
  );
}
