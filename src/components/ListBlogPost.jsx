import ChevronLeft from "../assets/icons/arrow-left.svg"
import ChevronRight from "../assets/icons/arrow-right.svg"
import ArrowUpRight from "../assets/icons/arrow-narrow-up-right.svg"

import Placeholder from "../assets/card-1.png"

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

export function ListBlogPost() {
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
        <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-6 overflow-hidden">
                {visibleArticles.map(article => (
                    <Link
                        key={article.id}
                        to={`/postagem/${article.slug}`}
                        className='flex flex-col w-full border rounded-2xl'
                    >
                        <div className="rounded-2xl overflow-hidden w-full">
                            <img
                                src={article.cover?.url ? `http://localhost:1337${article.cover.url}` : Placeholder}
                                alt={article.title}
                                className="w-full aspect-2/1 object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full text-left p-6">
                            <div className="flex flex-col gap-3">
                                <p className='text-xs uppercase'>
                                    {moment(article.date).format('D [de] MMMM [de] YYYY')}
                                </p>
                                <h5 className="text-xl font-lexend font-bold h-40">{article.title}</h5>
                            </div>
                            <p className="flex flex-row gap-3 items-center uppercase font-medium">
                                Leia Mais
                                <img src={ArrowUpRight} alt="" />
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="w-fit flex flex-row gap-3">
                <button
                    onClick={prev}
                    disabled={startIndex === 0}
                    className="disabled:opacity-50 cursor-pointer"
                >
                    <img src={ChevronLeft} alt="" />
                </button>
                <button
                    onClick={next}
                    disabled={startIndex >= articles.length - visibleCount}
                    className=" disabled:opacity-50  cursor-pointer"
                >
                    <img src={ChevronRight} alt="" />
                </button>
            </div>
        </div>

    )
}