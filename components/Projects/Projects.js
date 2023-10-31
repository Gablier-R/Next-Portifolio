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

  const projects = [
    { id: 1, title: "Api collections movies 🍿", description: "Eu passei um tempo pra bolar como eu iria criar esses elementos(card e modal). Então não criei uma descrição ainda. Mas acessa la:", repoLink: "https://github.com/Gablier-R/api-collections-movies" },
    { id: 2, title: "Email microservice 📬", description: "É poise, ainda não, so clica ai: ", repoLink: "https://github.com/Gablier-R/email-microservice" },
    // Add more projects as needed
  ];

  return (
    <section className="mt-16">
      <h1 className="text-custom text-xl font-semibold flex items-center justify-center dark:text-gray-100">
        Projetos de um mano:  
        <span className="dark:text-purple-500 text-purple-600  block "> Backend</span> 
      </h1>

      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} />
          ))}
        </div>
      </div>

      {modalVisible && <ModalCollections project={selectedProject} closeModal={closeModal} />}
    </section>
  );
}

function ProjectCard({ project, openModal }) {
  const { title } = project;

  return (
    <div className="bg-gray-300 dark:bg-black/40 p-6 rounded-md shadow-xl cursor-pointer hover:border-gray-500 hover:border-2 transition-colors duration-300 dark:hover:border-white" onClick={() => openModal(project)}>
      <div>
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">{title}</h2>
      </div>
    </div>
  );
}

export default CardProjects;
