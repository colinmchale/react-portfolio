import React, { useState, useEffect } from "react";
import NavTabs from "./components/NavTabs";
import MobileNav from "./components/MobileNav";
import Icons from "./components/Icons";
import PortfolioContainer from "./components/PortfolioContainer";
import MobileContainer from "./components/MobileContainer";

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 769);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div>
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs />
          <Icons className="col-md-2" />
          {/* currentPage={currentPage} handlePageChange={handlePageChange} */}
          <PortfolioContainer className="col-md-10" />
        </div>
      ) : (
        <div>
          {/* We are passing the currentPage from state and the function to update it */}
          <MobileNav />
          {/* currentPage={currentPage} handlePageChange={handlePageChange} */}
          <MobileContainer />
        </div>
      )}
    </div>
  );
};

export default App;
