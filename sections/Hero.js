
import Button from "../components/Button"

import React,{useState} from "react"
import Modal from "../components/Modal"

const Hero = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        
        <section className="mt-16">
            <h1 className="text-7xl font-bold">Eu sou o 
            <span className="dark:text-purple-600"> Gabriel</span>
            </h1>
            <h3 className="text-4xl my-3"> um desenvolvedor web</h3>
            <p className="text-gray-500 mb-8 "> Sou um grande apaixonado por tecnologia e esse mundo fascinante,
            sou vidrado em resolver problemas e descobrir novas tecnologias ou novos jeitos de fazer coisas simples."
            </p>
            <Button className="bg-purple-600 text-white px-6" onClick={() => setIsModalVisible(true)}> 
                Contato
            </Button>
            {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)}></Modal> :null} 
        
        </section>
    )
}
export default Hero