import React from "react";

const styles = {
  bgColor: {
    background: "#A0C5F8",
  },
  nameColor: {
    color: "#FFFFFF",
  },
  navFixed: {
    position: "fixed",
  },
  navSpot: {
    top: 0,
  },
  buttonRight: {
    marginRight: 15,
  },
  navWidth: {
    width: "100%",
  },
  navFront: {
    zIndex: 2,
  },
  navLeft: {
    marginLeft: 15,
  },
  navTop: {
    paddingTop: 10,
  },
  navRight: {
    marginRight: 15,
  },
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow shadow-intensity-xl"
      style={{
        ...styles.bgColor,
        ...styles.navFixed,
        ...styles.navSpot,
        ...styles.navWidth,
        ...styles.navFront,
      }}
    >
      <h3 style={{ ...styles.nameColor, ...styles.navLeft, ...styles.navTop }}>
        CM
      </h3>
      <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={styles.navRight}>
    <span className="navbar-toggler-icon"></span>
  </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown" aria-expanded="false">
        <ul className="nav navbar-nav">
        <li className="nav-item">
        <a
          href="#home"
          className='nav-link'
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about" className='nav-link'
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#works" className='nav-link'>
          Work
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#skills" className='nav-link'>
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact" className='nav-link'>
          Contact
        </a>
      </li>
      </ul>
        </div>
    </nav>
  );
}

export default NavTabs;
