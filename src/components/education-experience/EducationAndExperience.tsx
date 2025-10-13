import React, { useState } from "react"
import "./EducationAndExperience.scss"
import { SectionTitle } from "../section-title/SectionTitle"
import { Work } from "../../assets/images/Work"
import { Study } from "../../assets/images/Study"

interface EducationAndExperienceProps {
  theme: string
  language: 'es' | 'en'
}

export const EducationAndExperience: React.FC<EducationAndExperienceProps> = ({ theme, language }) => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const translations = {
    es: {
      sectionTitle: "Educación y experiencia",
      educationCard: {
        title: "Educación",
        educations: [
          { 
            institution: "Instituto Secundario Manuel Belgrano", 
            degree: "Bachiller en Economía y Administración", 
            period: "Marzo 2015 -  Diciembre 2020" 
          },
          { 
            institution: "Universidad Tecnológica Nacional - Facultad Regional San Francisco", 
            degree: "Tecnicatura Universitaria en Programación", 
            period: "Febrero 2022 - Julio 2025" 
          }
        ]
      },
      workCard: {
        title: "Experiencia laboral",
        works: [
          { 
            company: "Freelance",
            position: "Desarrollador web", 
            description: "Los proyectos realizados como freelance son el de Variable X y SOS Animal Fray Bentos que están expuestos en la sección de proyectos.", 
            period: "Marzo 2024 - Actualidad" 
          },
          { 
            company: "Certant S.A",
            companyUrl: "https://www.certant.com/",
            client: "Gire S.A & Certant S.A", 
            clientUrl: "https://www.gire.com/",
            position: "Desarrollador web frontend",
            description: "Trabajo en el desarrollo y mejora continua de una plataforma de cobranza y flujo de fondos para el producto general de Certant relacionado al ecosistema eCashaManagement / Backoffice y sus respectivas adaptaciones para Gire S.A. Esta plataforma permite que empresas gestionen sus cobranzas multicanal, conciliaciones, presentación de deudas, integraciones bancarias y visualización consolidada de recaudaciones en tiempo real.", 
            period: "Julio 2024 - Actualidad" 
          },
          { 
            company: "Certant S.A",
            companyUrl: "https://www.certant.com/",
            client: "Master Bus S.A",
            clientUrl: "https://masterbus.net/",
            position: "Desarrollor móvil - Kotlin", 
            description: "Realicé aportes en el desarrollo de la aplicación para conductores de Master Bus, enfocándome en funciones de trazado de rutas, indicaciones para conductores, seguimiento en tiempo real de unidades, visualización de velocidad y control de pasajeros. Esta app permite mejorar la eficiencia del transporte, la seguridad y la coordinación logística del servicio.", 
            period: "Julio 2024 - Julio 2025" 
          },
          { 
            company: "Certant S.A",
            companyUrl: "https://www.certant.com/",
            client: "", 
            position: "Desarrollador móvil y web - Flutter",
            description: "Participo en el desarrollo de la aplicación de gestión interna de clientes corporativos, personal, sus horas trabajadas, licencias y beneficios. Esta herramienta sirve para centralizar el control de recursos humanos, mantener trazabilidad de registros laborales y optimizar los procesos internos administrativos.",
            period: "Julio 2025 - Actualidad" 
          }
        ]
      }
    },
    en: {
      sectionTitle: "Education and experience",
      educationCard: {
        title: "Education",
        educations: [
          { 
            institution: "Manuel Belgrano Secondary Institute", 
            degree: "Bachelor's Degree in Economics and Administration", 
            period: "March 2015 -  December 2020" 
          },
          { 
            institution: "National Technological University, San Francisco Campus", 
            degree: "Higher National Certificate in Programming", 
            period: "February 2022 - July 2025" 
          }
        ]
      },
      workCard: {
        title: "Work experience",
        works: [
          { 
            company: "Freelance",
            position: "Web developer", 
            description: "The projects carried out as a freelancer are those of Variable X and SOS Animal Fray Bentos, which are displayed in the projects section.", 
            period: "March 2024 - Present" 
          },
          { 
            company: "Certant S.A",
            companyUrl: "https://www.certant.com/",
            client: "Gire S.A & Certant S.A", 
            clientUrl: "https://www.gire.com/",
            position: "Frontend web developer",
            description: "I work on the development and continuous improvement of a collection and cash flow management platform for Certant’s eCashManagement / Backoffice ecosystem and its specific adaptations for Gire S.A. This platform enables companies to manage their multi-channel collections, reconciliations, debt presentation, banking integrations, and real-time visualization of collected funds in a centralized and efficient way.", 
            period: "July 2024 - Present" 
          },
          { 
            company: "Certant S.A",
            companyUrl: "https://www.certant.com/",
            client: "Master Bus S.A",
            clientUrl: "https://masterbus.net/",
            position: "Mobile developer - Kotlin", 
            description: "I contributed to the development of the drivers’ mobile application for Master Bus, focusing on route mapping, driving directions, real-time unit tracking, speed visualization, and passenger control. This app enhances transportation efficiency, safety, and logistical coordination across the service.", 
            period: "July 2024 - July 2025" 
          },
          { 
            company: "Certant S.A",
            companyUrl: "https://www.certant.com/",
            client: "", 
            position: "Mobile and web developer - Flutter",
            description: "I participate in the development of an internal management application for corporate clients, staff, working hours, leaves, and benefits. This tool helps centralize human resources management, maintain traceability of employee records, and optimize internal administrative processes.",
            period: "July 2025 - Present" 
          }
        ]
      }
    }
  }

  const t = translations[language as "es" | "en"]

  return (
    <div className={`experience experience--${theme}`} id="experience">
      <SectionTitle title={t.sectionTitle} theme={theme} />

      <div className="experience__cards">
        <h4 className={`experience__cards-title experience__cards-title--education experience__cards-title--${theme}`}><Study stroke={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'}/>{t.educationCard.title}</h4>
        {t.educationCard.educations.map((edu, index) => (
          <div
            className={`experience__cards-item experience__cards-item--${theme}`}
            key={`edu-${index}`}
            data-aos="fade-up"
            data-aos-delay={(Math.floor(index / 2)) * 200}
          >
            <div className="experience__cards-item-info">
              <h4 className={`experience__cards-item-name experience__cards-item-name--${theme}`}>{edu.degree}</h4>
              <span className={`experience__cards-item-tag experience__cards-item-tag--${theme}`}>{edu.period}</span>
              <span className={`experience__cards-item-description experience__cards-item-description--${theme}`}>
                {edu.institution}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="experience__cards">
        <h4 className={`experience__cards-title experience__cards-title--${theme}`}><Work fill={theme === 'dark' ? '#FBFBFB' : '#1A1A1A'}/>{t.workCard.title}</h4>
        {t.workCard.works.map((work, index) => {
          const isExpanded = expandedCards[index] || false
          const showMore = work.description.length > 180

          return (
            <div
              className={`experience__cards-item experience__cards-item--${theme}`}
              key={`work-${index}`}
              data-aos="fade-up"
              data-aos-delay={(Math.floor(index / 2)) * 200}
            >
              <div className="experience__cards-item-info">
                <h4 className={`experience__cards-item-name experience__cards-item-name--${theme}`}>
                  {work.position} 
                  {work.company && (
                    work.companyUrl ? (
                      <a
                        href={work.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="experience__cards-item-tag--company"
                      >
                        {work.company}
                      </a>
                    ) : (
                      <span className="experience__cards-item-tag--company">{work.company}</span>
                    )
                  )} 
                </h4>
                <span className={`experience__cards-item-tag experience__cards-item-tag--${theme}`}>{work.period}</span>
                <p className={`experience__cards-item-description experience__cards-item-description--${theme} ${isExpanded ? 'expanded' : ''}`}>
                  {isExpanded
                    ? work.description
                    : work.description.slice(0, 180) + (showMore ? '...' : '')}
                  {showMore && (
                    <button
                      className="experience__cards-item-more-inline"
                      onClick={() => toggleExpand(index)}
                    >
                      {isExpanded
                        ? language === 'es' ? 'Ver menos' : 'See less'
                        : language === 'es' ? 'Leer más' : 'Read more'}
                    </button>
                  )}
                </p>
                <div className="experience__cards-item-tags">
                  {work.client && (
                    work.clientUrl ? (
                      <a
                        href={work.clientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`experience__cards-item-tag experience__cards-item-tag--${theme}`}
                      >
                        Cliente: {work.client}
                      </a>
                    ) : (
                      <span className={`experience__cards-item-tag experience__cards-item-tag--${theme}`}>
                        Cliente: {work.client}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
