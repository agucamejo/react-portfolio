import { AboutMe } from "./components/about/AboutMe"
import { Header } from "./components/header/Header"
import './app.scss'
import AutoPlay from "./components/carrousel/Carrousel"
import { Cards } from "./components/card/Cards"
import ContactForm from "./components/contact-form/ContactForm"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react"
import { EducationAndExperience } from "./components/education-experience/EducationAndExperience"
import { WhatsAppButton } from "./components/whatsapp-button/WhatsAppButton"
import { ProfileToggle } from "./components/profile-toggle/ProfileToggle"
import { Services } from "./components/services/Services"
import { Workflow } from "./components/workflow/Workflow"
import { Testimonials } from "./components/testimonials/Testimonials"

function App() {
  const [profile, setProfile] = useState<"particular" | "empresa">("particular");
  const [language, setLanguage] = useState<"en" | "es">(() => {
    const stored = localStorage.getItem("language") as "en" | "es" | null;
    if (stored) return stored;

    return "es";
  });

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    if (stored) return stored

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
    if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light"

    return "dark"
  })

  useEffect(() => {
    if (localStorage.getItem("language")) return;

    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const countryCode = data.country_code;
        if (countryCode === "ES" || countryCode === "AR" || countryCode === "UY" || countryCode === "MX") {
          setLanguage("es");
        } else {
          setLanguage("en");
        }
      })
      .catch(() => {
        setLanguage("es");
      });
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("language", language);
    document.documentElement.setAttribute("lang", language);
  }, [theme, language]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} profile={profile} setProfile={setProfile} />
      <div className="layout">
        <AboutMe theme={theme} language={language} profile={profile} />
        <Cards theme={theme} language={language} profile={profile} />
        {profile === "particular" && (
          <>
            <Services theme={theme} language={language} />
            <Workflow theme={theme} language={language} />
            <Testimonials theme={theme} language={language} />
          </>
        )}
        {profile !== "particular" && (
          <EducationAndExperience theme={theme} language={language} />
        )}
      </div>
      {profile !== "particular" && (
        <AutoPlay />
      )}
      <div className="layout">
        <ContactForm theme={theme} language={language} />
        <Footer theme={theme} language={language} />
      </div>
      <WhatsAppButton language={language} theme={theme} />
      <ProfileToggle profile={profile} setProfile={setProfile} language={language} theme={theme} />
    </>
  )
}

export default App
