import React, { useState } from 'react';
import NavLink from '../navlink/NavLink';
import './Header.scss';
import { Twirl as Hamburger } from 'hamburger-react';

type ActiveLink = 'about' | 'projects' | 'contact';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<ActiveLink>('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (link: ActiveLink) => {
    setActiveLink(link);
    setIsMenuOpen(false); 
  };

  return (
    <div className="header">
      <header className="header__title">
        <h1>&lt; Agu Camejo /&gt;</h1>
        <div className='header__hamburger'>
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </div>
      </header>
      <nav className={`header__navbar ${isMenuOpen ? 'header__navbar--open' : ''}`}>
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
  );
};

export default Header;
