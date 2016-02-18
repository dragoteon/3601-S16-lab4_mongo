# CSCI 3601 Lab #4 - Adding Mongo
During this lab, we will introduce you to the idea of client-side routing. Additionally, you will complete your training in the use of the MEAN stack by adding MongoDB to it. To interface with the database, you will use Mongoose. Specifically, you will create another GPA calculator that is backed by a database and uses a (simple) API that you create to access it.

Your specific tasks for this lab can be found in the [LABTASKS.md](LABTASKS.md) file in this repository.

# Setup:
Install dependancies by running:

````
npm install && bower install
````

# Adding mongo.js
Connecting to a mongo database requires specifying a user name, a password, and a few other parameters. This information is stored in a file mongo.js in the config directory. Such files are stored locally on the server and are excluded from git commits (added to .gitignore). This project contains a sample mongo.js file (mongo.example.js). However, it connects to a test database which doesn't store data between project runs. 

> If you're interested in why it is **VERY VERY IMPORTANT** to make sure that the mongo.js file is in the .gitignore, give this a read: https://github.com/ChALkeR/notes/blob/master/Do-not-underestimate-credentials-leaks.md

Since mongo.js is required (but currently not used), just copy mongo.example.js into mongo.js in the same directory to avoid a run-time error. It will not be added to the repository since it is listed in .gitignore. 

# Running the project
To serve the project, run:

````
grunt serve
````

# Testing the project
To run automated testing on the project, run:
````
grunt test
````
Or run karma through the Webstorm GUI.

# Travis-CI

By now, you should know the drill. Set up Travis as you did in Lab 3, and refer back to that if you have forgotten how to.

> If there are issues, let the lab assistants know.

## Resources
Bootstrap Components:
http://getbootstrap.com/components/

Getting started with mongo:
http://mongly.openmymind.net/tutorial/index


travis

[![Build Status](https://travis-ci.org/dragoteon/3601-S16-lab4_mongo.svg?branch=master)](https://travis-ci.org/dragoteon/3601-S16-lab4_mongo)



