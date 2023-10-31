import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";

const Modal = ({ id = "modal", onClose = () => {} }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  /* Send Email */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please enter a name or email address");
      return;
    }

    const templateParameters = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_lmuxran",
        "template_2g1bav3",
        templateParameters,
        "1f1zX7HUeLnEUmdq5"
      )
      .then(
        (response) => {
          alert("Enviado");
          onClose();
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro:", err);
        }
      );
  }

  return (
    <div
      id={id}
      onClick={handleOutsideClick}
      className=" fixed inset-0  bg-black bg-opacity-50 backdrop-blur-2xl flex justify-center items-center 
                                                            "
    >
      <div className="p-10 rounded-md w-custom space-y-10 grid-cols-3   ">
        <div className="space-y-0">
          <p class="text-white font-bold text-3xl">
            Envie uma proposta, ou apenas um feedback...
          </p>
        </div>

        <form
          className=" flex flex-col space-y-8 text-white bg-transparent font-semibold"
          onSubmit={sendEmail}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0 ">
              <input
                id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-600  focus:outline-none focus:ring-0  peer"
                type="text"
                placeholder=" "
                onChange={(e) => setName(e.target.value)}
                value={name}
                required="required"
              />
              <label
                for="floating_standard"
                class="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Seu nome
              </label>
            </div>

            <div class="relative z-0">
              <input
                id="floating_standard"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-600  focus:outline-none focus:ring-0  peer"
                type="email"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required="required"
              />
              <label
                for="floating_standard"
                class="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Seu email
              </label>
            </div>
          </div>

          <div class="relative z-0">
            <textarea
              id="floating_standard"
              class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:border-gray-600  focus:outline-none focus:ring-0  peer"
              type="text"
              placeholder=" "
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required="required"
            />
            <label
              for="floating_standard"
              class="absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Sua mensagem
            </label>
          </div>

          <Button
            className="bg-purple-600  text-white w-28 px-8 flex ml-auto"
            type="submit"
            value="Enviar"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
