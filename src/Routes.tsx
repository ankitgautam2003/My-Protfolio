import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import PortfolioPage from './pages/Portfolio';
import AllProjects from './pages/Portfolio/AllProjects';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;