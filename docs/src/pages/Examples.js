import React from 'react';

// Reusable CommandBlock component
const CommandBlock = ({ children }) => (
    <pre className="command-block">
        <code>{children}</code>
    </pre>
);

const Examples = () => {
    const exampleSteps = [
        { command: '$ piplog save', output: 'Saved current package list as version 2025-01-18T23:08:46.384920.' },
        { command: '$ piplog pip install psycopg', output: 'Successfully installed psycopg-3.2.4' },
        {
            command: '$ piplog diff',
            output: `Differences between versions '2025-01-18T23:08:46.384920' and '2025-01-18T23:09:01.446825':

Added packages:
  + psycopg==3.2.4`,
        },
        {
            command: '$ piplog restore 2025-01-18T23:08:46.384920',
            output: `Are you sure you want to restore to version '2025-01-18T23:08:46.384920'? This will delete all history entries after this version. (y/N): y

Packages to uninstall:
  - psycopg==3.2.4

Uninstalling packages...
Found existing installation: psycopg 3.2.4
Uninstalling psycopg-3.2.4:
  Successfully uninstalled psycopg-3.2.4
Uninstallation completed.

Restored to version '2025-01-18T23:08:46.384920'. All subsequent history entries have been deleted.`,
        },
    ];

    return (
        <div className="middle-container">
            <div>
                <h1>Examples</h1>
                <p>
                    Here is a practical example of how to use piplog:
                </p>
                <h2>Save the Current Package List</h2>
                {exampleSteps.map((step, index) => (
                    <div key={index}>
                        <CommandBlock>{step.command}</CommandBlock>
                        {step.output && <CommandBlock>{step.output}</CommandBlock>}
                    </div>
                ))}
                
            </div>
        </div>
        
    );
};

export default Examples;
