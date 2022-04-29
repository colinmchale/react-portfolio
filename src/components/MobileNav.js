import React from 'react';

const styles = {
  bgColor: {
    background: '#A0C5F8',
  },
  nameColor: {
    color: '#FFFFFF',
  },
  navFixed: {
    position: "fixed"
  },
  navSpot: {
    top: 0
  },
  navWidth: {
    width: "100%"
  },
  navFront: {
    zIndex: 2
  },
  navLeft: {
    marginLeft: 15
  },
  navTop: {
    paddingTop: 5
  },
  navRight: {
    marginRight: 15
  }
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow shadow-intensity-xl" style={{...styles.bgColor, ...styles.navFixed, ...styles.navSpot, ...styles.navWidth, ...styles.navFront}}>
        <h3 style={{...styles.nameColor, ...styles.navLeft, ...styles.navTop}}>CM</h3>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="btn-group">
  <button
    type="button"
    class="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown"
  >
    Dropdown
  </button>
  <div class="dropdown-menu">
    <a
      href="#home"
      className={
        currentPage === "Home"
          ? "nav-item nav-link active"
          : "nav-item nav-link"
      }
    >
      Home
    </a>
    <a
      href="#about"
      // This is a conditional (ternary) operator that checks to see if the current page is "About"
      // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
      className={
        currentPage === "About"
          ? "nav-item nav-link active"
          : "nav-item nav-link"
      }
    >
      About
    </a>
    <a
      href="#works"
      // Check to see if the currentPage is `Works`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
      className={
        currentPage === "Works"
          ? "nav-item nav-link active"
          : "nav-item nav-link"
      }
    >
      Works
    </a>
    <a
      href="#skills"
      // Check to see if the currentPage is `Skills`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
      className={
        currentPage === "Skills"
          ? "nav-item nav-link active"
          : "nav-item nav-link"
      }
    >
      Skills
    </a>
    <a
      href="#contact"
      // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
      className={
        currentPage === "Contact"
          ? "nav-item nav-link active"
          : "nav-item nav-link"
      }
    >
      Contact
    </a>
  </div>
</div>
      </div>
    </nav>
  );
}

export default NavTabs;