import Button from "../button/Button";
import { FilePdf } from "../../assets/images/FilePdf.tsx";
import aboutImage from '../../assets/images/about.svg';
import './AboutMe.scss'
import { Github } from "../../assets/images/Github.tsx";
import { Linkedin } from "../../assets/images/Linkedin.tsx";

interface AboutMeProps {
  theme: string
  language: string
  profile: 'particular' | 'empresa'
}

export const AboutMe: React.FC<AboutMeProps> = ({ theme, language, profile }) => {
  const translations = {
    es: {
      hello: "Hola, mi nombre es",
      role: "Soy desarrollador frontend.",
      roleParticular: "Creo sitios web que ayudan a tu negocio a crecer.",
      resume: "Currículum Vitae"
    },
    en: {
      hello: "Hello, my name is",
      role: "I'm a frontend developer.",
      roleParticular: "I build websites that help your business grow.",
      resume: "Resume"
    }
  }

  const t = translations[language as "es" | "en"]

  const resumeFile = language === "es" ? '/cv-es.pdf' : '/cv-en.pdf'
  const resumeFileName = language === "es"
    ? "Agustin Camejo - Curriculum Vitae.pdf"
    : "Agustin Camejo - Resume.pdf"

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeFile
    link.download = resumeFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div className="about" id="about">
        <div className={`about__text about__text--${theme}`}>
          <span>{t.hello} </span>
          <h1 className={`about__text-name about__text-name--${theme}`}>Agustín Camejo</h1>
          <span>{profile === 'particular' ? t.roleParticular : t.role}</span>
          {profile !== 'particular' && (
            <Button title={t.resume} icon={<FilePdf />} theme={theme} onClick={handleDownload} />
          )}
        </div>
        <img src={aboutImage} alt="Animated picture of a dev" title="Developer working" className="about__img" />
      </div>

      <div className="divider">
        <div className={`divider__line divider__line--${theme}`}></div>
        <a href="http://github.com/agucamejo" target="_blank" rel="noopener" title="Github" className="divider__logo"><Github fill={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'} /></a>
        <a href="https://www.linkedin.com/in/agucamejo" target="_blank" rel="noopener" title="LinkedIn" className="divider__logo"><Linkedin fill={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'} /></a>
        <div className={`divider__line divider__line--${theme}`}></div>
      </div>
    </>
  )
}
