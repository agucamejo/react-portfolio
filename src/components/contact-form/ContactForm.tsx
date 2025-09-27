import React, { useState } from "react"
import "./ContactForm.scss"
import handsForm from "../../assets/images/hands-form.svg"
import { At } from "../../assets/images/At"
import { UserCircle } from "../../assets/images/User"
import { RoundSubject } from "../../assets/images/Subject"
import Swal from "sweetalert2"
import Button from "../button/Button"

interface ContactFormProps {
  theme: string
  language: 'es' | 'en'
}

export const ContactForm: React.FC<ContactFormProps> = ({ theme, language }) => {
  const translations = {
    es: {
      title: "Hablemos pronto",
      name: "Nombre",
      email: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      placeholder: "Escribe brevemente tu propuesta aquí...",
      submit: "Enviar",
      successTitle: "¡Enviado!",
      successText: "Tu mensaje ha sido enviado exitosamente.",
      errorTitle: "Oops...",
      errorText: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde."
    },
    en: {
      title: "Let's talk soon",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      placeholder: "Write your proposal briefly here...",
      submit: "Send",
      successTitle: "Sent!",
      successText: "Your message has been sent successfully.",
      errorTitle: "Oops...",
      errorText: "There was a problem sending your message. Please try again later."
    }
  }

  const t = translations[language as "es" | "en"]

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
          title: t.successTitle,
          text: t.successText,
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
          title: t.errorTitle,
          text: t.errorText,
        });
      });
  }

  return (
    <div className={`contact-container contact-container--${theme}`} id="contact">
      <div className={`contact-image contact-image--${theme}`}>
        <img src={handsForm} alt="handshake" />
      </div>
      <form className="contact-form" autoComplete="on" onSubmit={(e) => Submit(e)}>
        <h2>{t.title}</h2>
        <div className="form-group">
          <div className="form-item">
            <label htmlFor="name" className={`label label--${theme}`}>{t.name}</label>
            <div className={`input-container input-container--${theme}`}>
              <UserCircle />
              <input
                type="text"
                id="name"
                name="name"
                className={`input input--${theme}`}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="email" className={`label label--${theme}`}>{t.email}</label>
            <div className={`input-container input-container--${theme}`}>
              <At />
              <input
                  type="email"
                  id="email"
                  name="email"
                  className={`input input--${theme}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>
          </div>
        </div>
        <div className="form-item full-width">
          <label htmlFor="subject" className={`label label--${theme}`}>{t.subject}</label>
          <div className={`input-container input-container--${theme}`}>
            <RoundSubject />
            <input
              type="text"
              id="subject"
              name="subject"
              className={`input input--${theme}`}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-item full-width">
          <label htmlFor="message" className={`label label--${theme}`}>{t.message}</label>
          <textarea
            id="message"
            name="message"
            className={`textarea textarea--${theme}`}
            placeholder={t.placeholder}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button title={t.submit} type="submit" theme={theme}></Button>
      </form>
    </div>
  )
}

export default ContactForm
