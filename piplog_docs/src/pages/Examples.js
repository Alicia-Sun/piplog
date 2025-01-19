import React from 'react';
import './Examples.css';

const Examples = () => (
    <div className="middle-container">
        <div>
            <h1>Examples</h1>
            <p>Here are some practical examples of how to use PipLog:</p>
            <h2>Save the Current Package List</h2>
            <pre>
            <code>python piplog.py save</code>
            </pre>
            <p>This command creates a timestamped record of all installed packages.</p>
            <h2>Compare Package Versions</h2>
            <pre>
            <code>python piplog.py diff 2023-01-01T12:00:00 2023-02-01T12:00:00</code>
            </pre>
            <p>
            View differences between two saved versions, including added and removed packages.
            </p>
            <h2>Restore to a Previous Version</h2>
            <pre>
            <code>python piplog.py restore 2023-01-01T12:00:00</code>
            </pre>
            <p>
            This command uninstalls and installs packages to match the saved state from the specified timestamp.
            </p>
            <h2>Execute a Pip Command with History</h2>
            <pre>
            <code>python piplog.py pip install pandas</code>
            </pre>
            <p>This installs pandas and automatically saves the new package state.</p>
        </div>
    </div>
);

export default Examples;
