import React from 'react';
import './Examples.css';

const Examples = () => (
    <div className="middle-container">
        <div>
            <h1>Examples</h1>
            <p>Here is a practical example of how to use piplog:</p>
            <h2>Save the Current Package List</h2>
            <pre className="command-block">
            <code>$ python piplog.py save</code>
            </pre>
            <p>This command creates a timestamped record of all installed packages at the current moment. It writes this record to a file called ".piplog" where it can be viewed.</p>
            <h2>Compare Package Versions</h2>
            <p>Similar to git diff, you can view package discrepencies between versions with piplog diff. [version1] and [version2] are optional arguments that can be passed in. If no additional arguments are given, it automatically compares the differences between the current and previous version. If only [version1] is given, it prints the package differences between [version1] and the current version. If both are given, it prints the differences between the two. 
            </p>
            <pre className="command-block">
            <code>$ piplog diff [version1] [version2]</code>
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
