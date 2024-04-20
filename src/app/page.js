import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';

function page() {
  return (
    <div>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
    </div>
  )
}

export default page