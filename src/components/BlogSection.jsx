import Placeholder from "../assets/card-1.png"
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

export function BlogSection() {
    const [articles, setArticles] = useState([]);
    const [startIndex, setStartIndex] = useState(0); // Índice inicial do "slide"
    const visibleCount = 3; // Quantos artigos aparecem por vez

    useEffect(() => {
        fetch('http://localhost:1337/api/articles?populate=*')
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    setArticles(data.data);       
                } else {
                    setArticles([]);
                }
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
                setArticles([]);
            });
    }, [])

    const next = () => {
        if (startIndex < articles.length - visibleCount) {
            setStartIndex(startIndex + 1);
        }
    }

    const prev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    }

    const visibleArticles = articles.slice(startIndex, startIndex + visibleCount);

    return (
        <section className="w-full p-6 mx-auto">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-6 text-center">
                    <h2 className="text-4xl sm:text-6xl font-lexend font-bold">
                        Acompanhe nosso Blog
                    </h2>
                    <p className="text-base">
                        Confira as últimas notícias sobre a FortSat
                    </p>
                </div>

                <div className="relative">
                    <div className="flex gap-6 overflow-hidden">
                        {visibleArticles.map(article => (
                            <Link key={article.id} to={`/postagem/${article.slug}`} className='flex flex-col gap-6 w-full'>
                                <div className="rounded-xl overflow-hidden">
                                    <img 
                                        src={article.cover?.url ? `http://localhost:1337${article.cover.url}` : Placeholder} 
                                        alt={article.title} 
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-xs uppercase'>
                                        {moment(article.date).format('D [de] MMMM [de] YYYY')}
                                    </p>
                                    <h5 className="text-xl font-lexend font-bold">{article.title}</h5>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Botões de navegação */}
                    <button 
                        onClick={prev} 
                        disabled={startIndex === 0}
                        className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 disabled:opacity-50"
                    >
                        &#8592;
                    </button>
                    <button 
                        onClick={next} 
                        disabled={startIndex >= articles.length - visibleCount}
                        className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 disabled:opacity-50"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    )
}
