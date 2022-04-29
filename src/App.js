import React from "react";
import NavTabs from './components/NavTabs';
import Icons from './components/Icons';
import PortfolioContainer from "./components/PortfolioContainer";
import MobileContainer from "./components/MobileContainer";

const App = () => {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 576;
  
    /* If the viewport is more narrow than the breakpoint render the
     mobile component, else render the desktop component */
  if (width > breakpoint) {
    return(
    <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs/>
        <Icons className="col-md-2"/>
        {/* currentPage={currentPage} handlePageChange={handlePageChange} */}
        <PortfolioContainer className="col-md-10"/>
    </div>
    )
  } else {
    return(
    <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs/>
        {/* currentPage={currentPage} handlePageChange={handlePageChange} */}
        <MobileContainer/>
    </div>
    )
  }
};

export default App;
