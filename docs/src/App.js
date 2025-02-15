import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Installation from './pages/Installation';
import Examples from './pages/Examples';
import Usage from './pages/Usage';

import "./App.css";

const App = () => (
  <Router>
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/usage" element={<Usage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
