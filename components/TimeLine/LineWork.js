
import React from "react";

function LineWork() {
    return (

        <div>
        <div class="container max-w-5xl py-12 mx-auto">
            <div class="grid gap-4 mx-4 sm:grid-cols-12">
                <div class="col-span-12 sm:col-span-3">
                    <div class="text-lg font-bold text-gray-900 dark:text-gray-200 ">
                    <h3 class=" ">Meus <span className="text-gray-100 dark:box-decoration-slice bg-gradient-to-r from-purple-900 to-purple-600">trabalhos</span> </h3>
                        <span class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Onde trabalhei</span>
                    </div>
                </div>
                <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-500">
                        <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                            <time class="mb-1 text-sm font-normal leading-none text-white"> <span class="bg-purple-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-600  ml-3">Now</span></time>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Freelancer</h3>
                            <p class="text-base font-normal text-gray-600 dark:text-gray-400">
                                <span className="font-bold">Freelancer</span> na contrução de aplicações com <span className="font-bold">JavaScript(React, NextJs)</span>, <span className="font-bold">PHP</span> e <span className="font-bold">Java (Servlet, JSP)</span> entre outras
                            </p>
                        </div>
                        <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Junho 2022 - Março 2023 </time>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Wom System</h3>
                            <p class="text-base font-normal text-gray-600 dark:text-gray-400">
                                Atuando como <span className="font-bold">Programador junior</span>, tendo atividades como desenvolvimento, refatoração de codigos e documentações nos devidos padrões.
                            </p>
                        </div>
                        <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                            <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-400">Junho 2023 -<span class="bg-purple-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-600  ml-3">Now</span> </time>
                            <h3 class="text-lg font-bold text-gray-900 dark:text-gray-200">Compass.uol</h3>
                            <p class="text-base font-normal text-gray-600 dark:text-gray-400">
                                Inserido no projeto de programa de bolsas, com a trilha de aprendizado Back-end Journey (Spring Boot) - AWS Cloud Context.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>

    )
}

export default LineWork

