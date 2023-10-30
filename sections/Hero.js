
import Button from "../components/Button"

import React, { useState } from "react"
import Modal from "../components/Modal"

const Hero = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (

        <section className="mt-16">
            <h1 className="text-7xl font-bold">
                <span className="dark:text-purple-600"> Gabriel </span>
                aqui 👋
            </h1>
            <h3 className="text-4xl my-3"> desenvolvedor web</h3>
            <p className="text-gray-500 dark:text-gray-400  mb-8"> "Iae tudo, eu sei eu sei. Parece um pouco simples, mas bro eu to trabalhando com java. Sem sanidade."
            </p>
            <Button className="bg-purple-600 text-white px-6" onClick={() => setIsModalVisible(true)}>
                Contato
            </Button>

            {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}></Modal> : null}

        </section>
    )
}
export default Hero