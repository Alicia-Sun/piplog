import React from 'react';
import './Home.css';
import snakeImage from '../images/snake.png';

const Home = () => (
  <div>
    <h1>
        <img 
            src={snakeImage}
            className="logo" 
        /> 
        piplog
    </h1>
    <p>Welcome to piplog's documentation. piplog is an easy to use version control for your Python packages. Explore guides, examples, and API references to get started.</p>
  </div>
);

export default Home;
