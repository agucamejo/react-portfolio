import AboutMe from "./components/about/AboutMe"
import Header from "./components/header/Header"
import './app.scss'
import AutoPlay from "./components/carrousel/Carrousel"
import Cards from "./components/card/Cards"
import ContactForm from "./components/contact-form/ContactForm"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <div className="layout">
        <Header />
        <AboutMe />
        <Cards />
      </div>
        <AutoPlay />
      <div className="layout">
        <ContactForm />
        <Footer />
      </div>
    </>
  )
}

export default App
