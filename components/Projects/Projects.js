import React, { useState } from "react";
import ModalCollections from "./ModalCollections";

function CardProjects() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalVisible(false);
  };

  const backendProjects = [
    {
      id: 1,
      title: "Api collections movies",
      description: (
        <div>
          <p className="font-bold">
            Bem-vindo ao repositório API Collections Movies!
          </p>
          <br />
          <p>O projeto utiliza tecnologias como:</p>
          <ul className="list-disc ml-6">
            <li>
              {" "}
              <span className="font-bold"> Java </span> linguagem do projeto
            </li>
            <li>
              {" "}
              <span className="font-bold"> Spring boot</span> framework para
              otimizar o desenvolvimento
            </li>
            <li>
              {" "}
              <span className="font-bold"> MongoDB</span> banco de dados noSQL,
              para o registros de todos os dados
            </li>
            <li>
              {" "}
              <span className="font-bold"> Spring security</span> para
              acrescentar uma camada a mais de segurança a aplicação
            </li>
            <li>
              {" "}
              <span className="font-bold"> Emai microservice</span> foi
              integrado ao sistema para enviar notificações a usuarios
              cadastrados
            </li>
          </ul>
          <br />
          <p>
            Bem eu precisava de um app que fizesse o controle de usuarios e de
            certos recursoso para a faculdade. Então queria algo
            basico como consumir a API de filmes. Mas o controle de usuarios dela, 
            era uma pouco dificil, então fiz o meu. Acessa la

          </p>
          <br />
        </div>
      ),
      repoLink: "https://github.com/Gablier-R/api-collections-movies",
      imageLink:
        "https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-youthful-pals-enjoying-a-movie-night-in-3d-glasses-at-home-image_13589294.png",
    },
    {
      
      id: 2,
      title: "Email microservice",   
      description: (
        <div>
          <p className="font-bold">Bem-vindo ao Microservice email</p>
          <br />
          <p>O projeto utiliza tecnologias como:</p>
          <ul className="list-disc ml-6">
            <li>
              {" "}
              <span className="font-bold"> Java </span> linguagem do projeto
            </li>
            <li>
              {" "}
              <span className="font-bold"> Spring boot</span> framework para
              otimizar o desenvolvimento
            </li>
            <li>
              {" "}
              <span className="font-bold"> RabbitMQ</span> para ter acessos a
              menssageria e tambem as configurações do broker
            </li>
            <li>
              {" "}
              <span className="font-bold"> PostgreSQL</span> para salvar dados
              semelhantes a logs. Usuarios e emails que as mensagens são
              enviadas
            </li>
          </ul>
          <br />
          <p>
             Com o
            intutito de cuspir mensagens para os clientes da plataforma. No
            momemto ele so informa a mensagem de cadastro do cliente. Mas ja
            esta em desenvolvimento uma forma de generalização, para ser integrado a qualquer sistema.
          </p>
          <br />
          <br />
        </div>
      ),
      repoLink: "https://github.com/Gablier-R/email-microservice",
      imageLink:
        "https://files.tecnoblog.net/wp-content/uploads/2021/01/como-enviar-mensagem-telegram1.jpg",
    },
    {
      id: 3,
      title: "Compass.UOL Challenger",
      description: (
        <div>
          <p className="font-bold">Bem-vindo ao Teste de sanidade</p>
          <br />
          <p>O projeto utiliza tecnologias como:</p>
          <ul className="list-disc ml-6">
            <li>
              {" "}
              <span className="font-bold"> Java </span> linguagem do projeto
            </li>
            <li>
              {" "}
              <span className="font-bold"> Spring boot</span> framework para
              otimizar o desenvolvimento
            </li>
            <li>
              {" "}
              <span className="font-bold"> H2 database</span> para simular uma
              banco relacional, mas de forma simploria
            </li>
          </ul>
          <br />
          <p>
            Foi desenvolvido enquanto eu fazia parte do programa de bolsas da{" "}
            <span className="font-bold">Compass.UOL</span>. E existiam alguns
            desafio a serem realizados esse foi um deles:
          </p>
          <br />
          <p>
            Consiste no consumo de uma api externa{" "}
              <span className="font-bold text-custom dark:text-gray-50 hover:text-purple-500 dark:hover:text-purple-500">
                jsonplaceholder
              </span>{" "}
            e inserir todos os dados em uma base de dados local, que são post e
            comentarios é realizar um fluxo de dados muito especifico. Para ver
            mais acesse o repositorio la existe uma descrição mais detalhada:
          </p>
          <br />
        </div>
      ),
      repoLink: "https://github.com/Gablier-R/consumer-api-challenge",
      imageLink:
        "https://www.unijui.edu.br/arquivos/tinyMCE4/comunica1/WhatsApp%20Image%202022-08-10%20at%2016.11.56.jpeg",
    },
    // Add more backend projects as needed
  ];

  const frontendProjects = [
    {
      id: 4,
      title: "Portifolio",
      description: (
        <div>
          <p className="font-bold">
            Sim exatamente, esse site é exatamente oque voce esta vendo.
          </p>
          <br />
          <p>O projeto utiliza tecnologias como:</p>
          <ul className="list-disc ml-6">
            <li>
              {" "}
              <span className="font-bold"> Next.js</span> para a construção da
              interface e interação das screens
            </li>
            <li>
              {" "}
              <span className="font-bold"> Tailwindcss</span> para a estilização
              dos elementos
            </li>
            <li>
              {" "}
              <span className="font-bold"> JavaScript</span> é usado para
              adicionar interatividade ao site
            </li>
          </ul>
          <br />
          <p>
            Além disso, todo o portifolio esta sempre em desenvolvimento, eu não
            sou muito bom em criar elementos. Então quando eu tenho um faniquito
            de criatividade vai tudo mudar. Você querendo ou não...
          </p>
          <br />
          <p>
            Modéstia parte existe algumas coisas bem legais aqui. Como o jeito
            de definir o tipo <span className="font-bold"> Theme</span>. O envio
            de email com o <span className="font-bold"> EmailJS</span> (não
            parece grande coisa mas quando eu fiz eu fiquei bem feliz). E mais
            recentemente esse elemento que voce esta vendo, se quiser ver mais
            acessa la, e olhe em{" "}
            <span className="font-bold"> components/projects</span>
          </p>
          <br />
        </div>
      ),
      repoLink: "https://github.com/Gablier-R/Next-Portifolio",
      imageLink:
        "https://braziljournal.com/wp-content/uploads/2023/08/2023-Brazil-Journal_Capa.png",
    },
  ];

  return (
    <div className="mt-16">
      <h1 className="text-custom text-xl font-semibold flex items-center justify-center dark:text-gray-100 mt-16">
        Projetos&nbsp;
        <span className="text-purple-600 dark:text-purple-500">Backend</span>
        &nbsp;do parceiro aqui
      </h1>

      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {backendProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
            />
          ))}
        </div>
      </div>

      <h1 className="text-custom text-xl font-semibold flex items-center justify-center dark:text-gray-100 mt-16">
        <span className="text-purple-500">Frontends</span>&nbsp; que podem ser
        meus
      </h1>

      <div className="mt-20">
        <div className=" gap-10">
          {frontendProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
            />
          ))}
        </div>
      </div>

      {modalVisible && (
        <ModalCollections project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
}

function ProjectCard({ project, openModal }) {
  const { title, imageLink } = project;

  return (
    <>
      <div
        className="p-14 rounded-md shadow-xl cursor-pointer relative overflow-hidden hover:border-gray-500 hover:border-2 transition-colors duration-300 dark:hover:border-white"
        onClick={() => openModal(project)}
      >
        <div
          className="w-full h-full absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageLink})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        </div>
      </div>
    </>
  );
}

export default CardProjects;
