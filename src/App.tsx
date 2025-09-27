import { AboutMe } from "./components/about/AboutMe"
import { Header } from "./components/header/Header"
import './app.scss'
import AutoPlay from "./components/carrousel/Carrousel"
import { Cards } from "./components/card/Cards"
import ContactForm from "./components/contact-form/ContactForm"
import Footer from "./components/footer/Footer"
import { useEffect, useState } from "react"

function App() {
  const language = "en"
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null
    if (stored) return stored

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
    if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light"

    return "dark"
  })

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("lang", language)
  }, [theme, language])

  return (
    <>
      <Header theme={theme} setTheme={setTheme} language={language}/>
      <div className="layout">
        <AboutMe theme={theme} language={language}/>
        <Cards theme={theme} language={language}/>
      </div>
        <AutoPlay />
      <div className="layout">
        <ContactForm theme={theme} language={language}/>
        <Footer theme={theme} language={language}/>
      </div>
    </>
  )
}

export default App
