import Placeholder from "../assets/card-1.png"

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

import { FooterSection } from "../components/FooterSection"

export function BlogPost() {
    const { id } = useParams(); // Aqui, `id` será o `documentId`
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${id}&populate=*`) // Filtra pelo `documentId`
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.length > 0) {
                    setArticle(data.data[0]); // Pega o primeiro item do array resultante
                    console.log("Artigo recebido", data)
                } else {
                    setArticle(null); // Se não encontrar o artigo
                }
            })
            .catch(error => {
                console.error("Erro ao buscar o artigo:", error);
            });
    }, [id]);

    if (!article) return <p>Carregando...</p>;

    return (
        <>
            <section className="max-w-7xl p-6 flex flex-col gap-6 mx-auto">
                <div className="flex flex-col text-center items-center gap-6">
                    <h2 className="text-3xl font-medium">
                        {article.title}
                    </h2>
                    <p className="text-base">
                        {moment(article.date).format('D [de] MMMM [de] YYYY')}
                    </p>
                </div>
                <div className="rounded-xl overflow-hidden aspect-2/1">
                    <img src={`http://localhost:1337${article.cover?.url}`} alt="" className="w-full" />
                </div>
            </section>
            <div className="max-w-2xl mx-auto p-6">
                <BlocksRenderer
                    content={article.content}
                    blocks={{
                        paragraph: ({ children }) => <p className="text-md">{children}</p>,
                        heading: ({ children, level }) => {
                            switch (level) {
                                case 1:
                                    return <h4 className='text-xl'>{children}</h4>
                                case 2:
                                    return <h5 className='text-lg'>{children}</h5>
                                case 3:
                                    return <h6 className='text-xs'>{children}</h6>
                                default:
                                    return <p className='text-base'>{children}</p>
                            }
                        },
                        link: ({ children, url }) => <Link to={url}>{children}</Link>,
                        list: ({ children }) => <p className='text-md'>{children}</p>,
                    }}
                    modifiers={{
                        bold: ({ children }) => <strong>{children}</strong>,
                        italic: ({ children }) => <span className="italic">{children}</span>,
                    }}
                />
            </div>
            <FooterSection />
        </>
    )
}