
import './App.css'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact/Contact'

import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      
      <Footer></Footer>
    </>
  )
}

export default App
