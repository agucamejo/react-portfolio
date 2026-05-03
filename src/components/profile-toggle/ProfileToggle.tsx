import React, { useState, useEffect } from 'react';
import './ProfileToggle.scss';

interface ProfileToggleProps {
  profile: 'particular' | 'empresa';
  setProfile: (profile: 'particular' | 'empresa') => void;
  language: 'es' | 'en';
  theme: string;
  variant?: 'default' | 'mobile';
}

export const ProfileToggle: React.FC<ProfileToggleProps> = ({ profile, setProfile, language, theme, variant = 'default' }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (variant === 'mobile') return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  const t = {
    es: { particular: 'Particular', empresa: 'Empresa' },
    en: { particular: 'Freelance', empresa: 'Company' }
  };

  return (
    <div className={`profile-toggle profile-toggle--${theme} profile-toggle--${variant} ${isScrolled ? 'profile-toggle--scrolled' : ''}`}>
      <div className="profile-toggle__inner">
        <div 
          className="profile-toggle__indicator" 
          style={{ transform: profile === 'particular' ? 'translateX(0)' : 'translateX(100%)' }}
        />
        <button 
          className={`profile-toggle__btn ${profile === 'particular' ? 'profile-toggle__btn--active' : ''} profile-toggle__btn--${theme}`}
          onClick={() => setProfile('particular')}
        >
          {t[language].particular}
        </button>
        <button 
          className={`profile-toggle__btn ${profile === 'empresa' ? 'profile-toggle__btn--active' : ''} profile-toggle__btn--${theme}`}
          onClick={() => setProfile('empresa')}
        >
          {t[language].empresa}
        </button>
      </div>
    </div>
  );
};
