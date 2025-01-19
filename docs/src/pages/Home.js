import React from 'react';
import './Home.css';
import snakeImage from '../images/snake.png';

const Home = () => (
  <div className="middle-container">
  <div>
    <h1>
        <img 
            src={snakeImage}
            className="logo" 
        /> 
        piplog
    </h1>
    <p>Welcome to piplog's documentation. piplog is an easy to use version control for your Python packages. Explore installation, usage, and examples to get started.</p>
    <p>
    View our source code <a href="https://github.com/Alicia-Sun/piplog" target="_blank" rel="noopener noreferrer" style={{ color: '#abdbe3' }}>here</a>.
    </p>
  </div>
  </div>
);

export default Home;
