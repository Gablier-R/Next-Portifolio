import { useState } from "react"
import emailjs from '@emailjs/browser'
import Button from "./Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ id='modal',onClose = () => {} }) => {

        const handleOutsideClick = (e) => {
            if(e.target.id === id) onClose();
        }


     /* Send Email */
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault()

        if(name === '' || email === '' || message === ''){
            alert('Please enter a name or email address')
            return
        }

        const templateParameters = {from_name: name, message: message, email: email}
        
        emailjs.send("service_lmuxran", "template_2g1bav3", templateParameters, "1f1zX7HUeLnEUmdq5")
            .then((response) => { alert('Enviado')
            onClose()
        setName('')
        setEmail('')
        setMessage('')
        
    
    }, (err) => {
        console.log("Erro:",err)
    })
        
    }
    
return(

    
        <div id={id} onClick={handleOutsideClick} className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center">
            
        <div className=" bg-black dark:bg-gray-50 p-10 rounded-md w-128">
        <h3 className="text-4xl my-3  text-white dark:text-gray-900 font-bold">Contato</h3>
        <p class="mt-3  text-white dark:text-gray-900 font-semibold">Mande uma proposta, ou apenas um feedback</p>
        <section className="mt-16">
            
            <form className=' flex flex-col space-y-12 text-white dark:text-gray-900 bg-transparent font-semibold' onSubmit={sendEmail}>

            <div className="grid gap-6 sm:grid-cols-2">
                <div class="relative z-0">
                        <input id="floating_standard" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-600 dark:focus:border-purple-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                        type="text"
                        placeholder=" "
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required="required"
                        />
                        <label for="floating_standard" class="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</label>
                    </div>

                    <div class="relative z-0">
                        <input id="floating_standard" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-600 dark:focus:border-purple-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                        type="text" 
                        placeholder=" "  
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email}
                        required="required"
                        />
                        <label for="floating_standard" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
            </div>

                <div class="relative z-0">
                    <textarea id="floating_standard" class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-600 dark:focus:border-purple-600 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    type="text"
                    placeholder=" "
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required="required"
                    />
                    <label for="floating_standard" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mensagem</label>
                </div>
                
                <Button className="bg-purple-600  text-white w-28 px-8 flex" 
                type="submit" 
                value="Enviar"> 
                Enviar
                </Button>

            </form>

        </section>
        </div>
    </div>

    )
}

export default Modal	