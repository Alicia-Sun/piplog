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
            <pre className="command-block">
            <code>$ piplog diff [version1] [version2]</code>
            </pre>
            <p>Similar to git diff, you can view package discrepencies between versions with piplog diff. [version1] and [version2] are optional arguments that can be passed in. If no additional arguments are given, it automatically compares the differences between the current and previous version. If only [version1] is given, it prints the package differences between [version1] and the current version. If both are given, it prints the differences between the two. 
            </p>
            <h2>Restore to a Previous Version</h2>
            <pre className="command-block">
            <code>$ python piplog.py restore [version]</code>
            </pre>
            <p>
            This command restores the packages and versions to the specified version. [version] is optional and if not specified, simply reverts one version back.
            </p>
            <h2>Execute a Pip Command with History</h2>
            <pre>
            <code>$ piplog pip ...</code>
            </pre>
            <p>This is a wrapper for pip. It executes the pip command but saves a snapshot of the packages after the pip operation in the version history.</p>
            <h2>Clear piplog History</h2>
            <pre>
            <code>$ piplog clear</code>
            </pre>
            <p>Clears the file that piplog uses to track version history.</p>
        </div>
    </div>
);

export default Examples;
