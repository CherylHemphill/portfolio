import React, { useState } from 'react';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';
import Resume from '../components/pages/Resume';
import Nav from './Nav';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
    return <Contact />;
  }
  return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <div>
           <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
        </div>
      );
}