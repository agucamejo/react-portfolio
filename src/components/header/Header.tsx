import React, { useState, useEffect, useRef } from 'react';
import NavLink from '../navlink/NavLink';
import './Header.scss';
import { Twirl as Hamburger } from 'hamburger-react';

type ActiveLink = 'about' | 'projects' | 'contact';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<ActiveLink>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionsRef = useRef<Record<ActiveLink, HTMLElement | null>>({
    about: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    // Guardamos las referencias a los elementos
    sectionsRef.current.about = document.querySelector('#about');
    sectionsRef.current.projects = document.querySelector('#projects');
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
        threshold: 0.5, // se considera visible si el 50% del section está en pantalla
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

  return (
    <div className="header">
      <div className='header__inner'>
        <header className="header__title">
          <h1>&lt; Agu Camejo /&gt;</h1>
          <div className="header__hamburger">
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
          </div>
        </header>
        <nav
          className={`header__navbar ${
            isMenuOpen ? 'header__navbar--open' : ''
          }`}
        >
          <NavLink
            label="About Me"
            isActive={activeLink === 'about'}
            onClick={() => handleClick('about')}
            navigateTo="#about"
          />
          <NavLink
            label="Projects"
            isActive={activeLink === 'projects'}
            onClick={() => handleClick('projects')}
            navigateTo="#projects"
          />
          <NavLink
            label="Contact"
            isActive={activeLink === 'contact'}
            onClick={() => handleClick('contact')}
            navigateTo="#contact"
          />
        </nav>
      </div>
    </div>
  );
};

export default Header;