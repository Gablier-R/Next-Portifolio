import { useState } from "react"
import emailjs from '@emailjs/browser'

const Modal = ({showModal, setShowModal}) => {


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

        <> 
        { showModal ?
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center">
        <section className="mt-16">


            <form className='w-56 flex flex-col space-y-10 mx-2 text-gray-600 ' onSubmit={sendEmail}>

                <input 
                className="  placeholder: border-b-4 border-gray-600 bg-transparent outline-none rounded-md hover:ring-2 hover:ring-gray-300"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                
                <input 
                className="placeholder: border-b-4 border-gray-600 bg-transparent outline-none"
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />

                <textarea 
                className="placeholder: border-b-4 border-gray-600 bg-transparent outline-none"
                placeholder="Digite sua mensagem..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />


                <input className="bg-purple-600 text-white px-6 p-2 rounded-md hover:ring-2 hover:ring-gray-300 cursor-pointer" 
                type="submit" value="Enviar" />

            </form>



        </section>
        </div>

    :null    }
      </> 
    )
}

export default Modal	