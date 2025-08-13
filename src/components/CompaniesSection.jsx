import CardPlaceholder from "../assets/card-4.png";
import { useState } from "react";

export function CompaniesSection() {
  // Estado que armazena quais cards estão virados
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  // Função para alternar o card clicado
  const toggleCard = (index) => {
    setFlippedCards((prev) =>
      prev.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  // Dados dos cards
  const cards = [
    {
      title: "Título 1",
      description:
        "Responsável pelo comércio e distribuição, conectamos produtos ao mercado certo com agilidade, eficiência e qualidade, transformando oportunidades em negócios sólidos.",
    },
    {
      title: "Título 2",
      description:
        "Atuamos com inovação e tecnologia, trazendo soluções personalizadas para cada cliente.",
    },
    {
      title: "Título 3",
      description:
        "Transformamos ideias em resultados concretos, com foco em crescimento e sustentabilidade.",
    },
  ];

  return (
    <section className="w-full p-6 bg-[#F0F9FD]">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 items-center text-center">
        <h2 className="text-4xl sm:text-6xl font-lexend font-bold uppercase">
          Um grupo. Três forças
        </h2>
        <p className="text-base">
          Conheça como nossas empresas estão segmentadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-40 w-full perspective cursor-pointer"
              onClick={() => toggleCard(index)}
            >
              <div
                className={`relative w-full h-full duration-500  transform-style-preserve-3d ${
                  flippedCards[index] ? "rotate-y-180" : ""
                }`}
              >
                {/* Frente */}
                <div className="absolute w-full h-full bg-white rounded-xl backface-hidden flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={CardPlaceholder}
                      alt="Imagem"
                      className="w-full h-24 object-cover rounded-t-xl"
                    />
                    <h3 className="p-2 font-bold">{card.title}</h3>
                  </div>
                </div>

                {/* Verso */}
                <div className="absolute w-full h-full bg-gray-100 rounded-xl border backface-hidden rotate-y-180 flex flex-col items-center justify-center p-4">
                  <p className="text-base text-gray-700">{card.description}</p>
                  <a href="/" className="mt-2 text-blue-500 font-bold">
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
