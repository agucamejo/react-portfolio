import React, { useEffect } from 'react';
import './Services.scss';
import { SectionTitle } from '../section-title/SectionTitle';
import AOS from 'aos';

interface ServicesProps {
  theme: string;
  language: 'es' | 'en';
}

const servicesData = {
  es: [
    {
      title: 'Desarrollo web',
      description: 'Sitios y aplicaciones web a medida. Rápidos, responsivos y listos para escalar con tu negocio.',
      icon: '⚙️',
    },
    {
      title: 'Tiendas online y paneles de administración',
      description: 'E-commerce y paneles de administración para gestionar productos, clientes y ventas desde un solo lugar.',
      icon: '🛒',
    },
    {
      title: 'Mantenimiento web',
      description: 'Actualizaciones, mejoras de performance y corrección de errores para que tu sitio siempre esté en su mejor versión.',
      icon: '🔧',
    },
    {
      title: 'Diseño UI',
      description: 'Interfaces limpias y atractivas, pensadas para que tus usuarios naveguen sin fricción y tu marca cause buena impresión.',
      icon: '🎨',
    },
  ],
  en: [
    {
      title: 'Web development',
      description: 'Custom websites and web apps. Fast, responsive, and ready to scale with your business.',
      icon: '⚙️',
    },
    {
      title: 'Online stores and admin dashboards',
      description: 'E-commerce and admin dashboards to manage products, customers and sales.',
      icon: '🛒',
    },
    {
      title: 'Web maintenance',
      description: 'Updates, performance improvements, and bug fixes to keep your site running at its best.',
      icon: '🔧',
    },
    {
      title: 'UI design',
      description: 'Clean, attractive interfaces designed for smooth navigation and a strong first impression of your brand.',
      icon: '🎨',
    },
  ],
};

export const Services: React.FC<ServicesProps> = ({ theme, language }) => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <SectionTitle
        title={language === 'es' ? 'Servicios' : 'Services'}
        subtitle={language === 'es' ? 'Lo que puedo hacer por tu negocio' : 'What I can do for your business'}
        theme={theme}
      />
      <div className='services' id="services">
        <div className="services__content">
          <div className={`services__container services__container--${theme}`} data-aos="fade-up" data-aos-delay="200">
            {servicesData[language].map((service, index) => (
              <div
                key={index}
                className={`services__card services__card--${theme}`}
              >
                <div className="services__card-icon">{service.icon}</div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
