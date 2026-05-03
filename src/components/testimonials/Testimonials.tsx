import React, { useEffect } from 'react';
import './Testimonials.scss';
import { SectionTitle } from '../section-title/SectionTitle';
import AOS from 'aos';
import mateoAvatar from '../../assets/images/avatars/Mateo.png';
import carlaAvatar from '../../assets/images/avatars/Carla.png';
import noraAvatar from '../../assets/images/avatars/Nora.png';

interface TestimonialsProps {
  theme: string;
  language: 'es' | 'en';
}

const testimonialsData = {
  es: [
    { name: 'Mateo', role: 'Dueño de Yerbateo', avatar: mateoAvatar, quote: 'Pasé de manejar todo en una planilla a tener un sistema propio donde veo mi stock, mis clientes y las ventas del mes en un solo lugar. El salto fue enorme y el proceso fue muy claro de principio a fin.' },
    { name: 'Carla', role: 'Co-fundadora de Variable X', avatar: carlaAvatar, quote: 'Necesitábamos una página que transmitiera nuestra propuesta educativa sin perder la energía y el juego que nos caracteriza. El resultado superó lo que teníamos en mente, y los papás nos lo mencionan seguido.' },
    { name: 'Nora', role: 'Miembro de SOS Animal', avatar: noraAvatar, quote: 'Como organización de voluntarios no teníamos presencia digital real. Ahora tenemos un lugar donde mostrar lo que hacemos, sumar gente y llegar a más personas que quieran ayudar.' },
  ],
  en: [
    { name: 'Mateo', role: 'Owner of Yerbateo', avatar: mateoAvatar, quote: 'I went from managing everything in a spreadsheet to having my own system where I can see my stock, my customers, and monthly sales all in one place. A huge step forward, and the whole process was clear from start to finish.' },
    { name: 'Carla', role: 'Co-founder of Variable X', avatar: carlaAvatar, quote: 'We needed a site that conveyed our educational approach without losing the playful energy that defines us. The result exceeded what we had in mind — and parents bring it up all the time.' },
    { name: 'Nora', role: 'Member of the SOS Animal', avatar: noraAvatar, quote: 'As a volunteer organization, we had no real digital presence. Now we have a place to show what we do, grow our community, and reach more people who want to help.' },
  ]
};

export const Testimonials: React.FC<TestimonialsProps> = ({ theme, language }) => {
  useEffect(() => {
    AOS.refreshHard();
  }, []);

  return (
    <>
      <SectionTitle
        title={language === 'es' ? 'Testimonios' : 'Testimonials'}
        subtitle={language === 'es' ? 'Ellos ya dieron el paso — esto nos dijeron' : 'They already took the step — this is what they told us'}
        theme={theme}
      />
      <div className='testimonials' id="testimonials">
        <div className="testimonials__content">
          <div className="testimonials__container" data-aos="fade-up" data-aos-delay="200">
            {testimonialsData[language].map((testimonial, index) => (
              <div
                key={index}
                className={`testimonials__card ${index === 1 ? 'testimonials__card--active' : ''} testimonials__card--${theme}`}
              >
                <div className="testimonials__card-stars">★★★★★</div>
                <p className="testimonials__card-quote">"{testimonial.quote}"</p>
                <div className="testimonials__card-author">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="testimonials__card-avatar"
                  />
                  <div>
                    <h4 className="testimonials__card-name">{testimonial.name}</h4>
                    <span className="testimonials__card-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};