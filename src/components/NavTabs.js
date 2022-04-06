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
          About
        </a>
        <a
          href="#works"
          onClick={() => handlePageChange('Works')}
          // Check to see if the currentPage is `Works`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Works' ? 'nav-item nav-link active' : 'nav-item nav-link'}
        >
          Works
        </a>
        <a
          href="#skills"
          onClick={() => handlePageChange('Skills')}
          // Check to see if the currentPage is `Skills`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Skills' ? 'nav-item nav-link active' : 'nav-item nav-link'}
        >
          Skills
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
