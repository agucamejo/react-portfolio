import React from 'react';
import { Whatsapp } from '../../assets/images/WhatsApp';
import './WhatsAppButton.scss';

interface WhatsAppButtonProps {
  language?: 'es' | 'en'
  theme: string
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ language = 'es', theme }) => {
  const messages = {
    es: "Hola Agustín, me gustaría colaborar contigo. A continuación te comento mi idea.",
    en: "Hi Agustin, I would love to collaborate with you. Here’s my idea."
  }

  const message = messages[language]
  const whatsappUrl = `https://wa.me/5493562409599?text=${encodeURIComponent(message)}`

    const tooltipText = {
        es: "Contame tu idea",
        en: "Tell me your idea"
    }

    return(
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title='WhatsApp' className={`whatsapp-button whatsapp-button--${theme}`}>
            <span className="whatsapp-button__tooltip">{tooltipText[language]}</span>
            <Whatsapp />
        </a>
    );
}
