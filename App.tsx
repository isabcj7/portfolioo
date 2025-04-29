// src/App.tsx
import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import Colors from './Colors';
import Cats from './Cats'
import './index.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Cats />
      <Projects />
      <Skills />
      <Colors />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;