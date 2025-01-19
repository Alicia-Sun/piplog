import React from 'react';
import './Usage.css';

const Usage = () => (
    <div className="middle-container">
        <div>
            <h1>Usage</h1>
            <p>
            PipLog supports various commands to manage package versions. Below are the available commands and their functions:
            </p>
            <h2>Commands</h2>
            <ul>
            <li>
                <strong>save:</strong> Save the current list of installed packages with a timestamp.
                <pre>
                <code>python piplog.py save</code>
                </pre>
            </li>
            <li>
                <strong>diff:</strong> Compare two versions or a version against the current state.
                <pre>
                <code>python piplog.py diff &lt;version1&gt; &lt;version2&gt;</code>
                </pre>
                <p>Example:</p>
                <pre>
                <code>python piplog.py diff 2023-01-01T12:00:00</code>
                </pre>
            </li>
            <li>
                <strong>restore:</strong> Restore packages to a specified version.
                <pre>
                <code>python piplog.py restore &lt;version&gt;</code>
                </pre>
            </li>
            <li>
                <strong>clear:</strong> Clear the entire package history.
                <pre>
                <code>python piplog.py clear</code>
                </pre>
            </li>
            <li>
                <strong>pip:</strong> Execute a pip command while saving the new package state.
                <pre>
                <code>python piplog.py pip install numpy</code>
                </pre>
            </li>
            </ul>
        </div>
    </div>
);

export default Usage;
