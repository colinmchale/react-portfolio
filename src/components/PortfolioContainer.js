import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
        return <About />;
    } else if (currentPage === 'Portfolio') {
        return <Portfolio />;
    } else if (currentPage === 'Resume') {
        return <Resume />;
    } else {
        return <Contact />;
    }
};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className='container mt-3'>
      {renderPage()}
      </div>
      <Footer/>
    </div>
  );
}
