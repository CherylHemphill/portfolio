import React, { useState } from 'react';
import Contact from '../components/pages/Contact';
import Home from '../components/pages/Home';
import Projects from '../components/pages/Projects';
import Resume from '../components/pages/Resume';
import Nav from './Nav';
import Footer from './pages/Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
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
    <Footer />
        </div>
      );
}