import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Nav from './Nav';
import Projects from './Projects';

export default function PortfolioContainer() {
    return (
        <div>
          <Nav />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      );
}