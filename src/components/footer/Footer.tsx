import React from "react";
import "./Footer.scss";
import { ArrowDownCircle } from "../../assets/images/ArrowDown";

interface FooterProps {
  theme: string
  language: 'es' | 'en'
}

export const Footer: React.FC<FooterProps> = ({ theme, language }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`footer footer--${theme}`}>
      <div className="links">
        <a href="http://github.com/agucamejo" target="_blank" rel="noopener noreferrer" className={`link link--${theme}`}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/agucamejo" target="_blank" rel="noopener noreferrer" className={`link link--${theme}`}>
          LinkedIn
        </a>
        <a href="mailto:agustincamejo03@gmail.com" className={`link link--${theme}`}>
          Gmail
        </a>
      </div>
      <div className="arrow-container">
        <button onClick={scrollToTop} className={`arrow-button arrow-button--${theme}`} title="Ir hacia arriba">
          <ArrowDownCircle />
        </button>
      </div>
      {language === 'en' ? 
          <p className="copyright">
            Copyright © {currentYear} - Made with <span className="heart">❤️</span> by Agustín Camejo
          </p>
        :
          <p className="copyright">
            Derechos reservados © {currentYear} - Hecho con <span className="heart">❤️</span> por Agustín Camejo
          </p>
      }
    </footer>
  )
}

export default Footer
