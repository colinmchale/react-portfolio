import React from "react";
import NavTabs from './components/NavTabs';
import Icons from './components/Icons';
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <NavTabs/>
    <Icons className="col-md-1"/>
    {/* currentPage={currentPage} handlePageChange={handlePageChange} */}
    <PortfolioContainer className="col-md-11"/>
    </div>;

export default App;
