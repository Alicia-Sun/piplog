import React from 'react';

const Installation = () => (
    <div className="middle-container">
        <div>
            <h1>Getting Started</h1>
            <h2>Installation</h2>
            <p>Install using pip:</p>
            <pre className="command-block">
            <code>$ pip install piplog</code>
            </pre>
            <p>
                You may need to install with user permissions in order to download the executable. Additionally, it is recommended to restart your editor such as VSCode.
            </p>
            <p>
            To ensure that piplog was installed correctly, run:
            </p>
            <pre className="command-block">
            <code>$ pip show piplog</code>
            </pre>
            <p>
                or
            </p>
            <pre className="command-block">
            <code>$ piplog</code>
            </pre>
            <p>
            Once the setup is complete, you are ready to start running piplog through the command line.
            </p>
        </div>
    </div>
  
);

export default Installation;
