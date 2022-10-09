
import Button from "../components/Button"

import React,{useState} from "react"
import Modal from "../components/Modal"

const Hero = () => {

    const[showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (
        
        <section className="mt-16">

            <h1 className="text-7xl font-bold">Sou 
            <span className="dark:text-purple-600"> Gabriel</span>
            </h1>
      
            <h3 className="text-4xl my-3 blinking-cursor">Sou um desenvolvedor web</h3>

            <p className="text-gray-500 mb-8 ">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <Button className="bg-purple-600 text-white px-6" onClick={openModal}> 
                Clique!
            </Button>

            <Modal showModal={showModal} setShowModal={setShowModal}/>

        </section>
    )
}
export default Hero