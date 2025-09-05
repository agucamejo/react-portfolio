import Button from "../button/Button";
import { FilePdf } from "../../assets/images/FilePdf.tsx";
import aboutImage from '../../assets/images/about.svg';
import './AboutMe.scss'
import { Github } from "../../assets/images/Github.tsx";
import { Linkedin } from "../../assets/images/Linkedin.tsx";
import resumePDF from '../../assets/files/Agustin Camejo - CV - Spanish.pdf'

export default function AboutMe() {
  return (
    <>
      <div className="about" id="about">
        <div className="about__text">
          <span>Hello, my name is </span>
          <span className="about__text-name">Agustín Camejo </span>
          <span>I'm a frontend developer.</span>
          <a href={resumePDF} download="Agustin Camejo-CV.pdf" title="Download CV">
            <Button title="Resume" icon={<FilePdf />} />
          </a>
        </div>
        <img src={aboutImage} alt="Animated picture of a dev" title="Developer working" className="about__img"/>
      </div>
      <div className="divider">
        <div className="divider__line"></div>
        <a href="http://github.com/agucamejo" target="_blank" rel="noopener" title="Github" className="divider__logo"><Github /></a>
        <a href="https://www.linkedin.com/in/agucamejo" target="_blank" rel="noopener" title="LinkedIn" className="divider__logo"><Linkedin /></a>
        <div className="divider__line"></div>
      </div>
    </>
  );
}
