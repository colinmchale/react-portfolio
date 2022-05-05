import React from "react";

const styles = {
  fontColor: {
    color: "#031927",
  },
  linkColor: {
    color: "#F96900",
  },
  bgColor: {
    background: "#3A5169",
  },
};

function Footer() {
  return (
    <footer className="site-footer" style={{ background: "#A0C5F8" }}>
      <div className="d-flex flex-wrap justify-content-center align-items-center py-4">
        <div>
          <span style={styles.fontColor}>© 2022 Colin McHale</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
