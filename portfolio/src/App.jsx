import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function App() {

  useEffect(()=>{
        AOS.init({once: false, mirror: true, duration: 600, offset: 100})
  },[])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}


