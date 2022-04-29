import React from 'react';
import Footer from './Footer';
import Home from './pages/Home';
import Works from './pages/Works';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === 'About') {
//         return <About />;
//     } else if (currentPage === 'Works') {
//         return <Works />;
//     } else if (currentPage === 'Skills') {
//         return <Skills />;
//     } else {
//         return <Contact />;
//     }
// };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={{background: '#3A5169'}}>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className='container mt-3 p-5'>
      {/* {renderPage()} */}
      <Home/>
      <About/>
      <Works/>
      <Skills/>
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
}
