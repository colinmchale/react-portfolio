import React from "react";
import MobileFooter from "./MobileFooter";
import MobileHome from "./pages/MobileHome";
import Works from "./pages/Works";
import MobileAbout from "./pages/MobileAbout";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  return (
    <div style={{ background: "#3A5169" }}>
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="container mt-3 p-5">
        {/* {renderPage()} */}
        <MobileHome />
        <MobileAbout />
        <Works />
        <Skills />
        <Contact />
      </div>
      <MobileFooter />
    </div>
  );
}
