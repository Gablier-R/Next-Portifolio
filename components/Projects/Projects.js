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
      description:
        "Eu passei um tempo pra bolar como eu iria criar esses elementos(card e modal). Então não criei uma descrição ainda. Mas acessa la:",
      repoLink: "https://github.com/Gablier-R/api-collections-movies",
      imageLink:
        "https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-youthful-pals-enjoying-a-movie-night-in-3d-glasses-at-home-image_13589294.png",
    },
    {
      id: 2,
      title: "Email microservice",
      description: "É poise, ainda não, so clica ai: ",
      repoLink: "https://github.com/Gablier-R/email-microservice",
      imageLink:
        "https://files.tecnoblog.net/wp-content/uploads/2021/01/como-enviar-mensagem-telegram1.jpg",
    },
    {
      id: 3,
      title: "Compass.UOL Challenger",
      description: "...: ",
      repoLink: "https://github.com/Gablier-R/consumer-api-challenge",
      imageLink:
        "https://www.unijui.edu.br/arquivos/tinyMCE4/comunica1/WhatsApp%20Image%202022-08-10%20at%2016.11.56.jpeg",
    },
    // Add more backend projects as needed
  ];

  const frontendProjects = [
    {
      id: 3,
      title: "Portifolio",
      description: "...: ",
      repoLink: "https://github.com/Gablier-R/Next-Portifolio",
      imageLink:
        "https://braziljournal.com/wp-content/uploads/2023/08/2023-Brazil-Journal_Capa.png",
    },
  ];

  return (
    <div className="mt-16">
      <h1 className="text-custom text-xl font-semibold flex items-center justify-center dark:text-gray-100 mt-16">
        Projetos&nbsp;
        <span className="text-purple-500">Backend</span>
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
        <span className="text-purple-500">Frontends</span>&nbsp; que por acaso
        podem ser meus
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
