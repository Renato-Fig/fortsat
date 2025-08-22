import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br');

import { NavigationBar } from "../components/NavigationBar"
import { Footer } from "../components/Footer"

export function Blog() {
    return (
        <>
            <NavigationBar />

            <section className="p-6 h-160">
                <div className="bg-[#099BD9] w-full h-full text-[#FFF] flex flex-col p-6 rounded-3xl items-center justify-end">
                    <div className="text-center flex flex-col gap-6">
                        <h1 className="font-lexend font-bold text-5xl sm:text-7xl">
                            Blog da Fortsat
                        </h1>
                        <p className="">
                            Fique por dentro das últimas notícias e atualizações do Grupo Fortsat
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}