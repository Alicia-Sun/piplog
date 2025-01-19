import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import About from './pages/About';
import "./App.css";

const App = () => (
  <Router>
    <div>
      <div className="d-flex">
        <Sidebar />
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
