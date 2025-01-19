from setuptools import setup, find_packages

setup(
    name='piplog',
    version='0.1.0',
    description='A tool to track and manage pip package history.',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    author='Your Name',
    author_email='your.email@example.com',
    url='https://github.com/yourusername/piplog',
    license='MIT',
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
    ],
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    python_requires='>=3.6',
    entry_points={
        'console_scripts': [
            'piplog=piplog.piplog:main',  # CLI command
        ],
    },
)
