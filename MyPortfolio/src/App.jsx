import {Heading} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import './App.css'
import Herosection from './components/Herosection'
import About from './components/About'
import Project from './components/Project'
import TeckStack from './components/TeckStack'
import GihubCountributor from './components/GihubCountributor'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Navbar />
      <Herosection/>
      <About/>
      <Project/>
      <TeckStack/>
      <GihubCountributor/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
