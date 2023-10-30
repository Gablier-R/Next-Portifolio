import React, { useState } from "react";

export default function ModalCollections({ closeModal, project }) {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
    closeModal();
  };

  return (
    <>
      {showModal && (
        <section className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={handleCloseModal}></div>
          <div className="relative dark:bg-custom bg-gray-50 rounded-lg overflow-hidden shadow-xl max-w-screen-md p-6">
            <div className="flex justify-end">
              <button type="button" onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700 focus:outline-none mt-[-10px]">
                <span className="text-3xl">&times;</span>
              </button>
            </div>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              {project.description}  
              
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <span className="font-semibold text-custom dark:text-gray-50 hover:text-purple-500 dark:hover:text-purple-500"> repo Github </span>
              </a> 
            </p>
          </div>
        </section>
      )}
    </>
  );
}
