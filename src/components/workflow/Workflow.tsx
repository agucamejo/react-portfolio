import React, { useEffect } from 'react';
import './Workflow.scss';
import { SectionTitle } from '../section-title/SectionTitle';
import AOS from 'aos';

interface WorkflowProps {
  theme: string;
  language: 'es' | 'en';
}

const workflowSteps = {
  es: [
    { number: '01', title: 'Descubrir', description: 'Analizo tu negocio, tu competencia y tus usuarios para entender qué necesita tu proyecto.' },
    { number: '02', title: 'Planificar', description: 'Definimos juntos los objetivos, las funcionalidades clave y la arquitectura del sitio.' },
    { number: '03', title: 'Diseñar', description: 'Creo interfaces atractivas y funcionales pensadas para convertir visitantes en clientes, con foco en la experiencia del usuario.' },
    { number: '04', title: 'Desarrollar', description: 'Construyo el sitio rápido, accesible, optimizado para SEO y listo para escalar con tu negocio.' },
    { number: '05', title: 'Lanzar', description: 'Revisamos cada detalle antes de publicar (animaciones, performance, etc.) y cuando está todo afinado para una primera impresión impecable, publicamos el sitio.' },
  ],
  en: [
    { number: '01', title: 'Discover', description: 'I dive into your business, your competitors, and your users to understand what your project truly needs.' },
    { number: '02', title: 'Plan', description: 'We define goals, key features, and site architecture together. Clear roadmap.' },
    { number: '03', title: 'Design', description: 'I craft attractive, functional interfaces built to turn visitors into customers, with a sharp focus on user experience.' },
    { number: '04', title: 'Develop', description: 'I build fast, accessible, SEO-ready, and scalable as your business grows.' },
    { number: '05', title: 'Launch', description: 'Every detail reviewed before going live (animations, performance, etc.) and when everything is polished for a flawless first impression, we launch the site.' },
  ],
};

export const Workflow: React.FC<WorkflowProps> = ({ theme, language }) => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <SectionTitle
        title={language === 'es' ? 'Cómo trabajo' : 'How I work'}
        subtitle={language === 'es' ? 'Así transformo tu idea en un sitio funcional' : 'How I turn your idea into a functional site'}
        theme={theme}
      />
      <div className='workflow' id="workflow">
        <div className="workflow__content">
          <div className="workflow__container" data-aos="fade-up" data-aos-delay="200">
            {workflowSteps[language].map((step, index) => (
              <div key={index} className={`workflow__step workflow__step--${theme}`}>
                <div className="workflow__step-number">{step.number}</div>
                <h3 className="workflow__step-title">{step.title}</h3>
                <p className="workflow__step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
