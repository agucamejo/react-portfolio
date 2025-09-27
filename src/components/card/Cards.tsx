import { useState, useEffect } from 'react'
import { Github } from '../../assets/images/Github'
import { Link } from '../../assets/images/Link'
import './Cards.scss'
import AOS from 'aos'
import "aos/dist/aos.css";

interface Project {
  name: string
  description: {
    es: string,
    en: string
  }
  tags: string[]
  repository: string
  deploy: string
  image: string
}

interface CardsProps {
  theme: string
  language: 'es' | 'en'
}

export const Cards: React.FC<CardsProps> = ({ theme, language }) => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);

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
          const formattedImage = image ? image.replace(/^"|"$/g, '').trim() : ''

          return { name, description: { es: description_es, en: description_en }, tags: formattedTags, repository, deploy, image: formattedImage }
        })

      setProjects(projects)
    }

    fetchData()
  }, [])

  return (
    <div className="cards__container" id='projects'>
      {projects.map((project, index) => (
        <div
          className={`cards__item ${index % 2 === 0 ? '' : 'cards__item--reverse'}`}
          key={index}
          data-aos="fade-up"     
          data-aos-delay={index * 100}
        >
          {project.image && (
            <img 
              src={project.image.startsWith('http') ? project.image : `https://www.imghippo.com/i/${project.image}`} 
              alt={project.name} 
              className="cards__item-image" 
            />
          )}
          <div className="cards__item-info">
            <h4 className="cards__item-name">{project.name}</h4>
            <span className={`cards__item-description cards__item-description--${theme}`}>{project.description[language] || project.description.es}</span>
            <div className="cards__item-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="cards__item-tag">{tag}</span>
              ))}
            </div>
            <div className="cards__item-links">
              {project.repository && (
                <a href={project.repository} target="_blank" rel="noopener noreferrer" title='Github'>
                  <Github fill={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'}/>
                </a>
              )}
              {project.deploy && (
                <a href={project.deploy} target="_blank" rel="noopener noreferrer" title='Deploy'>
                  <Link stroke={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'}/>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
