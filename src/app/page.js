import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Certificates from './Components/Certificates';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function page() {
  return (
    <div>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <Certificates/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default page