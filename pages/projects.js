import React, { useState } from "react"
import Modal from "../components/Modal"

const Projects = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <section className="mt-16 ">
            <div className=" font-bold hover:text-purple-600 dark:hover:text-purple-600 text-center  mt-20 text-2xl cursor-pointer text-gray-900 dark:text-gray-200" onClick={() => setIsModalVisible(true)}>Loading...</div>
            {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}></Modal> : null}
        </section>

    )
}

export default Projects	