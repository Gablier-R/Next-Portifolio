import { useState } from "react"
import emailjs from '@emailjs/browser'
import Button from "./Button"

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
            .then((response) => {console.log("email enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
    
    }, (err) => {
        console.log("Erro:",err)
    })
        
    }
    
return(

    
        <div id={id} onClick={handleOutsideClick} className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center flex-col ">
        <div className=" bg-black dark:bg-gray-50 justify-center items-center p-10 flex flex-col rounded-md">
        <h3 className="text-4xl my-3 text-gray-400 text-center">Contato</h3>
        <section className="mt-16 ">
            
            <form className=' w-80 flex flex-col space-y-12 text-gray-400 bg-transparent font-semibold' onSubmit={sendEmail}>
                <input 
                    className="py-1 outline-none bg-transparent border-gray-600 border-b-2 focus:border-purple-600 duration-300 focus:outline-none"
                    type="text"
                    placeholder="seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input 
                    className="py-1 outline-none bg-transparent border-gray-600  border-b-2 focus:border-purple-600 duration-300 focus:outline-none"
                    type="text"
                    placeholder="seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <textarea 
                    className=" outline-none bg-transparent border-gray-600  border-b-2 focus:border-purple-600 duration-300 focus:outline-none "
                    placeholder="sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <Button className="bg-purple-600  text-white m-48 w-32 px-8 grid grid-cols-2 " type="submit" value="Enviar"> 
                Enviar
                <svg className=" w-14 h-4 m-1.5 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 
                00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
                </Button>

            </form>
        </section>
        </div>
    </div>

    )
}

export default Modal	