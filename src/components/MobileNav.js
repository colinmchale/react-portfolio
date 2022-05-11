import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

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

      <Dropdown style={styles.navRight}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#home">Home</Dropdown.Item>
          <Dropdown.Item href="#about">About</Dropdown.Item>
          <Dropdown.Item href="#works">Work</Dropdown.Item>
          <Dropdown.Item href="#skills">Skills</Dropdown.Item>
          <Dropdown.Item href="#contact">Contact</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default NavTabs;
