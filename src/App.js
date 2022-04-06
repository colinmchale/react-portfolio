import React from "react";
import NavTabs from './components/NavTabs';
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <NavTabs/>
    {/* currentPage={currentPage} handlePageChange={handlePageChange} */}
    <PortfolioContainer/>
    </div>;

export default App;
