from setuptools import setup

setup(
    name="piplog",
    version="0.1.0",
    py_modules=["piplog"],  # The name of the .py file
    install_requires=[],        # No external libraries (only stdlib used)
    entry_points={
        "console_scripts": [
            # This line tells setuptools to create a command "piphistory" 
            # pointing to the main() function in piphistory.py
            "piplog = piplog:main",
        ],
    },
    description="Track pip package history and revert to previous states.",
    author="Alicia Sun",
    author_email="asun0102@gmail.com",
    url="https://github.com/Alicia-Sun/piphistory",  # or your actual URL
)

