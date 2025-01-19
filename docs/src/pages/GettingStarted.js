import React from 'react';
import './GettingStarted.css';

const GettingStarted = () => (
    <div className="middle-container">
        <div>
            <h1>Getting Started</h1>
            <h2>Installation</h2>
            <p>Install using pip:</p>
            <pre className="command-block">
            <code>$ pip install piplog</code>
            </pre>
            <p>
            To ensure that piplog was installed correctly, run:
            </p>
            <pre className="command-block">
            <code>$ pip show piplog</code>
            </pre>
            <p>
            Once the setup is complete, you can run piplog through the command line. 
            </p>
        </div>
    </div>
  
);

export default GettingStarted;
