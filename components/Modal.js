import { useState } from "react"
import emailjs from '@emailjs/browser'

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

        <h3 className="text-4xl my-3 text-gray-400 text-center">Mande alguma proposta, ou apenas um feedback</h3>
            
        <section className="mt-16 ">
            
 

            <form className=' w-96 flex flex-col space-y-12 text-gray-400 bg-transparent font-semibold' onSubmit={sendEmail}>

                <input 
                className="py-1 outline-none bg-transparent border-gray-600 border-b-2 focus:border-purple-600 duration-300 focus:outline-none"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                
                <input 
                className="py-1 outline-none bg-transparent border-gray-600  border-b-2 focus:border-purple-600 duration-300 focus:outline-none"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

                <textarea 
                className="py-0 outline-none bg-transparent border-gray-600  border-b-2 focus:border-purple-600 duration-300 focus:outline-none "
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />


                <input className=" bg-gray-400 text-white px-6 p-2 rounded-md hover:ring-2 hover:ring-gray-300 cursor-pointer" 
                type="submit" value="Enviar" />

            </form>

          

        </section>
        </div>

    )
}

export default Modal	