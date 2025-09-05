import React, { useState } from "react"
import "./ContactForm.scss"
import handsForm from "../../assets/images/hands-form.svg"
import { At } from "../../assets/images/At"
import { UserCircle } from "../../assets/images/User"
import { RoundSubject } from "../../assets/images/Subject"
import Swal from "sweetalert2"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function Submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    const formEle = event.currentTarget
    const formDatab = new FormData(formEle)
    await fetch(
      "https://script.google.com/macros/s/AKfycbwaku7H1-YLK7zkNKh8wbH3NoaQy6UH01sr6XNQ8lD92H7swIB8Iwdql85__lryTZVJ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos enviados exitosamente:", data);

        Swal.fire({
          icon: 'success',
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado exitosamente.',
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        });
      });
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-image">
        <img src={handsForm} alt="handshake" />
      </div>
      <form className="contact-form" autoComplete="on" onSubmit={(e) => Submit(e)}>
        <h2>Hablemos pronto</h2>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="name">Nombre</label>
            <div className="input-container">
                <UserCircle />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="email">Correo</label>
            <div className="input-container">
                <At />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
          </div>
        </div>
        <div className="form-item full-width">
          <label htmlFor="subject">Asunto</label>
          <div className="input-container">
            <RoundSubject />
            <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
          </div>
        </div>
        <div className="form-item full-width">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu propuesta aquí..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm
