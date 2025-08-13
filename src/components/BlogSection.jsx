import Placeholder from "../assets/card-1.png"
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

export function BlogSection() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/articles?populate=*')
            .then(response => response.json())
            .then(data => {
                console.log("Dados recebidos da API:", data); // Verifique a estrutura dos dados
                if (data && data.data) {
                    setArticles(data.data); // Ajuste conforme a estrutura de `data`       
                } else {
                    setArticles([]); // Garante que `articles` seja um array vazio se `data.data` estiver ausente
                }
            })
            .catch(error => {
                console.error("Erro ao buscar dados:", error);
                setArticles([]); // Define um array vazio em caso de erro na requisição
            });
    }, [])

    return (
        <section className="w-full p-6 mx-auto">
            <div className="max-w-7xl mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-6 text-center">
                    <h2 className="text-4xl sm:text-6xl font-lexend font-bold">
                        Acompanhe nosso Blog
                    </h2>
                    <p className="text-base">
                        Confira as últimas notícias e  sobre a FortSat
                    </p>
                </div>

                <div className="flex flex-row gap-6">
                    {
                        articles.map(article => (
                            <Link key={article.id} to={`/postagem/${article.slug}`} className='flex flex-col gap-6'>

                                <div className="rounded-xl overflow-hidden">
                                    <img src={`http://localhost:1337${article.cover?.url}`} alt="" className="w-fit"/>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-xs uppercase'>{moment(article.date).format('D [de] MMMM [de] YYYY')}</p>
                                    <h5 className="text-xl font-lexend font-bold">{article.title}</h5>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}