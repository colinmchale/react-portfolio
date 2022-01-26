import React from 'react';

const styles = {
  bgColor: {
    background: '#c8e0f4',
  },
  nameColor: {
    color: '#508AA8',
  }
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={styles.bgColor}>
        <h4 style={styles.nameColor}>Colin McHale</h4>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "About"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'About' ? 'nav-item nav-link active' : 'nav-item nav-link'}
        >
          About Me
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-item nav-link active' : 'nav-item nav-link'}
        >
          Portfolio
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-item nav-link active' : 'nav-item nav-link'}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-item nav-link active' : 'nav-item nav-link'}
        >
          Contact
        </a>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
