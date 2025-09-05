import React from "react";
import "./Footer.scss";
import { ArrowDownCircle } from "../../assets/images/ArrowDown";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="links">
        <a href="http://github.com/agucamejo" target="_blank" rel="noopener noreferrer" className="link">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/agucamejo" target="_blank" rel="noopener noreferrer" className="link">
          LinkedIn
        </a>
        <a href="mailto:agustincamejo03@gmail.com" className="link">
          Gmail
        </a>
      </div>
      <div className="arrow-container">
        <button onClick={scrollToTop} className="arrow-button" title="Ir hacia arriba">
          <ArrowDownCircle />
        </button>
      </div>
      <p className="copyright">
        Copyright © {currentYear} - Made with <span className="heart">❤️</span> by Agustín Camejo
      </p>
    </footer>
  )
}

export default Footer
