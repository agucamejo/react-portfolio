import React, { useState, useEffect, useRef } from 'react';
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import NavLink from '../navlink/NavLink';
import { Twirl as Hamburger } from 'hamburger-react';
import './Header.scss';
import { ProfileToggle } from '../profile-toggle/ProfileToggle';
import Toggle from '../toggle/Toggle';

type ActiveLink = 'about' | 'projects' | 'services' | 'workflow' | 'testimonials' | 'experience' | 'contact';

interface HeaderProps {
  theme: string
  language: string
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
  setLanguage: React.Dispatch<React.SetStateAction<"es" | "en">>
  profile: 'particular' | 'empresa'
  setProfile: (profile: 'particular' | 'empresa') => void
}

export const Header: React.FC<HeaderProps> = ({ theme, language, setTheme, setLanguage, profile, setProfile }) => {
  const translations = {
    es: {
      about: "Sobre mi",
      projects: "Proyectos",
      services: "Servicios",
      workflow: "Proceso",
      testimonials: "Testimonios",
      experience: "Experiencia",
      contact: "Contacto"
    },
    en: {
      about: "About me",
      projects: "Projects",
      services: "Services",
      workflow: "Workflow",
      testimonials: "Testimonials",
      experience: "Experience",
      contact: "Contact"
    }
  }

  const t = translations[language as "es" | "en"]

  const [activeLink, setActiveLink] = useState<ActiveLink>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionsRef = useRef<Record<string, HTMLElement | null>>({
    about: null,
    projects: null,
    services: null,
    workflow: null,
    testimonials: null,
    experience: null,
    contact: null,
  });

  useEffect(() => {
    sectionsRef.current.about = document.querySelector('#about');
    sectionsRef.current.projects = document.querySelector('#projects');
    sectionsRef.current.services = document.querySelector('#services');
    sectionsRef.current.workflow = document.querySelector('#workflow');
    sectionsRef.current.testimonials = document.querySelector('#testimonials');
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
        threshold: 0,
        rootMargin: "-150px 0px -50% 0px"
      }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [profile]);

  const handleClick = (link: ActiveLink) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <header className={`header header--${theme}`}>
      <div className='header__inner'>
        <div className="header__title">
          <button aria-label="Toggle theme" title="Toggle theme" className={`header__theme-icon header__theme-icon--${theme}`} onClick={handleToggleTheme}>
            <Expand
              duration={750}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </button>
          <div className="header__hamburger">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={18} />
          </div>
        </div>
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
          {profile === 'particular' && (
            <>
              <NavLink
                label={t.services}
                isActive={activeLink === 'services'}
                onClick={() => handleClick('services')}
                navigateTo="#services"
              />
              <NavLink
                label={t.workflow}
                isActive={activeLink === 'workflow'}
                onClick={() => handleClick('workflow')}
                navigateTo="#workflow"
              />
              <NavLink
                label={t.testimonials}
                isActive={activeLink === 'testimonials'}
                onClick={() => handleClick('testimonials')}
                navigateTo="#testimonials"
              />
            </>
          )}
          {profile !== 'particular' && (
            <NavLink
              label={t.experience}
              isActive={activeLink === 'experience'}
              onClick={() => handleClick('experience')}
              navigateTo="#experience"
            />
          )}
          <NavLink
            label={t.contact}
            isActive={activeLink === 'contact'}
            onClick={() => handleClick('contact')}
            navigateTo="#contact"
          />
          <div className="header__profile-toggle-mobile">
            <ProfileToggle
              profile={profile}
              setProfile={setProfile}
              language={language as 'es' | 'en'}
              theme={theme}
              variant="mobile"
            />
          </div>
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
    </header>
  );
};

export default Header;