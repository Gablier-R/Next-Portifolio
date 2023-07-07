

import React from "react";

function Sobre() {
    return (

        <ol class="relative border-l border-purple-600">
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border border-purple-600 "></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500">Agosto 2017</time>
                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200 ">Instituto Federal Goiano - Campus Posse</h3>
                <p class="text-base font-normal text-gray-500">
                    <span className="italic">Estudande</span> do curso de Tecnico em Informatica, focado totalemente no mercado de trabalho, os estudos são aplicados essencialmente a programação e manutenção de maquinas.
                </p>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border border-purple-600"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500">Fevereiro 2019</time>
                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Universidade Estadual de Goiás - UnU Posse</h3>
                <p class="text-base font-normal text-gray-500">
                    <span className="italic">Estudande</span> do curso de Sistemas de Informação, aprofundando ainda mais nos conhecimentos em programação e uma experiencia magnifica nos estudos academicos.
                </p>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border border-purple-600"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500">Agosto 2022</time>
                <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Wom System</h3>
                <p class="text-base font-normal text-gray-500">
                    Atuando como <span className="italic">Programador junior</span>, tendo atividades como desenvolvimento, refatoração de codigos e documentações nos devidos padrões.
                </p>
            </li>

        </ol>


    )
}

export default Sobre

