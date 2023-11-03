
import React from "react";

function LineStudy() {
    return (

        <div>
            <div class="container max-w-5xl py-12 mx-auto">
                <div class="grid gap-4 mx-4 sm:grid-cols-12">
                    <div class="col-span-12 sm:col-span-3">
                        <div class="text-lg font-bold text-gray-900 dark:text-gray-200 ">
                        <h3 class=" ">Minha <span className="text-gray-100 dark:box-decoration-slice bg-gradient-to-r from-purple-900 to-purple-600">educação</span> </h3>
                            <span class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Onde estudei</span>
                        </div>
                    </div>
                    <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-500">
                            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Agosto 2017 - Abril 2019</time>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200 ">Instituto Federal Goiano - Campus Posse</h3>
                                <p class="text-base font-normal text-gray-600 dark:text-gray-400">
                                    <span className="font-bold">Estudande</span> do curso de Tecnico em Informatica, focado totalmente no mercado de trabalho, os estudos são aplicados essencialmente a programação e manutenção de maquinas.
                                </p>
                            </div>
                            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Fevereiro 2019 -<span class="bg-purple-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-600 ml-3">Now</span></time>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Universidade Estadual de Goiás - UnU Posse</h3>
                                <p class="text-base font-normal text-gray-600 dark:text-gray-400">
                                    <span className="font-bold">Estudande</span> do curso de Sistemas de Informação, aprofundando ainda mais nos conhecimentos em programação e uma experiencia magnifica nos estudos academicos.
                                </p>
                            </div>
                            <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                <time class="mb-1 text-sm font-normal leading-none text-gray-400"> <span class="bg-purple-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-600 ml-3">Now</span></time>
                                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Estudante em tempo integral</h3>
                                <p class="text-base font-normal text-gray-600 dark:text-gray-400">
                                    <span className="font-bold">Estudante</span> a qualquer momento, sempre tento me atualizar e profissionalizar, afinal a tecnologia nunca para, e <span className="font-bold">nem eu</span> !
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default LineStudy

