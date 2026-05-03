import { useState, useEffect } from 'react'
import { Github } from '../../assets/images/Github'
import { Link } from '../../assets/images/Link'
import './Cards.scss'
import AOS from 'aos'
import "aos/dist/aos.css";
import { SectionTitle } from '../section-title/SectionTitle'
import { ImageCarousel } from './ImageCarousel'

interface Project {
  name: string
  description: {
    es: string,
    en: string
  }
  tags: string[]
  repository: string
  deploy: string
  images: string[]
}

interface CardsProps {
  theme: string
  language: 'es' | 'en'
  profile: 'particular' | 'empresa'
}

export const Cards: React.FC<CardsProps> = ({ theme, language, profile }) => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
      window.dispatchEvent(new Event('scroll'));
    }, 100);
  }, [theme, language, projects]);

  useEffect(() => {
    async function fetchData() {
      const csv = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRo_f5cAA9iImppAllrQOy8kitjl84fW79i2eH4j6nYdXNL0a7sVn5IXn8hs988WL2D15QuGB3QnDPw/pub?gid=0&single=true&output=csv')
        .then((res) => res.text())

      const projects = csv
        .split('\n')
        .slice(1)
        .map((row) => {
          const [name, description_es, description_en, tags, repository, deploy, image] = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)

          const formattedTags = tags ? tags.replace(/^"|"$/g, '').split(',').map(tag => tag.trim()) : []
          const formattedImages = image ? image.replace(/^"|"$/g, '').split(',').map(img => img.trim()) : []

          return { name, description: { es: description_es, en: description_en }, tags: formattedTags, repository, deploy, images: formattedImages }
        })

      setProjects(projects)
    }

    fetchData()
  }, [])

  return (
    <>
      <SectionTitle title={language === 'es' ? 'Proyectos' : 'Projects'} subtitle={language === 'es' ? 'Algunos de los proyectos en los que trabajé' : 'Some of the projects I\'ve worked on'} theme={theme} />
      <div className="cards__container" id='projects'>
        {projects.map((project, index) => (
          <div
            className={`cards__item ${index % 2 === 0 ? '' : 'cards__item--reverse'}`}
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {project.images && project.images.length > 0 && (
              <ImageCarousel images={project.images} alt={project.name} className="cards__item-image" />
            )}
            <div className="cards__item-info">
              <h4 className={`cards__item-name cards__item-name--${theme}`}>{project.name}</h4>
              <span className={`cards__item-description cards__item-description--${theme}`}>{project.description[language] || project.description.es}</span>
              {profile !== 'particular' && (
                <div className="cards__item-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="cards__item-tag">{tag}</span>
                  ))}
                </div>
              )}
              <div className="cards__item-links">
                {project.repository && profile !== 'particular' && (
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" title='Github'>
                    <Github fill={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'} />
                  </a>
                )}
                {project.deploy && (
                  <a href={project.deploy} target="_blank" rel="noopener noreferrer" title='Deploy' className={profile === 'particular' ? 'cards__item-link--particular' : ''}>
                    {profile === 'particular' && (
                      <span className={`cards__item-link-text cards__item-link-text--${theme}`}>
                        {language === 'es' ? 'Visita el sitio!' : 'Visit site!'}
                      </span>
                    )}
                    <Link stroke={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards
