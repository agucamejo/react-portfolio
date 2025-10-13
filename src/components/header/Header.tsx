import React, { useState, useEffect, useRef } from 'react';
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import NavLink from '../navlink/NavLink';
import { Twirl as Hamburger } from 'hamburger-react';
import './Header.scss';
import Toggle from '../toggle/Toggle';

type ActiveLink = 'about' | 'projects' | 'experience' | 'contact';

interface HeaderProps {
  theme: string
  language: string
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
  setLanguage: React.Dispatch<React.SetStateAction<"es" | "en">>
}

export const Header: React.FC<HeaderProps> = ({ theme, language, setTheme, setLanguage }) => {
  const translations = {
    es: {
      about: "Sobre mi",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto"
    },
    en: {
      about: "About me",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    }
  }

  const t = translations[language as "es" | "en"]

  const [activeLink, setActiveLink] = useState<ActiveLink>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionsRef = useRef<Record<ActiveLink, HTMLElement | null>>({
    about: null,
    projects: null,
    experience: null,
    contact: null,
  });

  useEffect(() => {
    sectionsRef.current.about = document.querySelector('#about');
    sectionsRef.current.projects = document.querySelector('#projects');
    sectionsRef.current.experience = document.querySelector('#experience');
    sectionsRef.current.contact = document.querySelector('#contact');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id') as ActiveLink;
            setActiveLink(id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (link: ActiveLink) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const handleToggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div className={`header header--${theme}`}>
      <div className='header__inner'>
        <header className="header__title">
          <div className={`header__theme-icon header__theme-icon--${theme}`} onClick={handleToggleTheme}>
            <Expand 
              duration={750} 
              placeholder={undefined} 
              onPointerEnterCapture={undefined} 
              onPointerLeaveCapture={undefined} 
            />
          </div>
          <div className="header__hamburger">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={18}/>
          </div>
        </header>
        <nav className={`header__navbar ${isMenuOpen ? `header__navbar--open header__navbar--open--${theme}` : ''}`}>
          <NavLink
            label={t.about}
            isActive={activeLink === 'about'}
            onClick={() => handleClick('about')}
            navigateTo="#about"
          />
          <NavLink
            label={t.projects}
            isActive={activeLink === 'projects'}
            onClick={() => handleClick('projects')}
            navigateTo="#projects"
          />
          <NavLink
            label={t.experience}
            isActive={activeLink === 'experience'}
            onClick={() => handleClick('experience')}
            navigateTo="#experience"
          />
          <NavLink
            label={t.contact}
            isActive={activeLink === 'contact'}
            onClick={() => handleClick('contact')}
            navigateTo="#contact"
          />
          <div className="header__language-toggle-mobile">
            <Toggle
              value={language as "en" | "es"} 
              onToggle={handleLanguageToggle}
              rightContent={<img src="https://flagcdn.com/gb.svg" alt="English" width={24} />}
              leftContent={<img src="https://flagcdn.com/es.svg" alt="Spanish" width={24} />}
            />
          </div>
        </nav>
        <div className="header__language-toggle">
          <Toggle
            value={language as "en" | "es"} 
            onToggle={handleLanguageToggle}
            rightContent={<img src="https://flagcdn.com/gb.svg" alt="English" width={24} />}
            leftContent={<img src="https://flagcdn.com/es.svg" alt="Spanish" width={24} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;