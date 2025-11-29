import React from 'react';
import { Whatsapp } from '../../assets/images/WhatsApp';
import './WhatsAppButton.scss';

interface WhatsAppButtonProps {
  theme?: 'light' | 'dark'
  language?: 'es' | 'en'
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ theme = 'dark', language = 'es' }) => {
  const messages = {
    es: "Hola Agustín, me gustaría colaborar contigo. A continuación te comento mi idea.",
    en: "Hi Agustin, I would love to collaborate with you. Here’s my idea."
  }

  const message = messages[language]
  const whatsappUrl = `https://wa.me/5493562409599?text=${encodeURIComponent(message)}`

    return(
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title='WhatsApp' className='whatsapp-button'>
            <Whatsapp fill={theme === 'light' ? '#FBFBFB' : '#1A1A1A'} />
        </a>
    );
}
