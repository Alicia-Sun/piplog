import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="bg-light border-end" id="sidebar-wrapper">
    <div className="sidebar-heading">Contents
    </div>
    <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item">Home</Link>
        <Link to="/docs/getting-started" className="list-group-item">Getting Started</Link>
        <Link to="/docs/api-reference" className="list-group-item">API Reference</Link>
        <Link to="/docs/examples" className="list-group-item">Examples</Link>
    </div>
  </div>
);

export default Sidebar;
