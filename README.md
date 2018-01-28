# Poker Helper



## Clone Project
`git clone https://github.com/larfoley/poker-helper.git`

### Install Project Dependencies

The project contains two apps, one for the front-end and one for the back-end each of which have separate dependencies that need to be installed.

To install the dependencies for the back-end navigate to the root of the project and run the command `npm install` then navigate to `/client/` and again run the command `npm install`

### Running the App

To run the app locally first make sure you have installed all the latest dependencies, then navigate to the root of the project and run the command `npm start` this will run the back-end, after the backend is up and running you will now need to launch the front-end development server by navigating to `/client/` and running `npm start`.

The app should now be running at http://localhost:3000

## Github Workflow

The first step to contributing is to clone the project if you haven't already by running the command `git clone https://github.com/larfoley/poker-helper.git` if you have already cloned the project run the command `git pull origin master` this will ensure that the codebase you cloned is up to date with the remote master branch.

### Creating a Branch
Now that you are ready to work on the project the first thing you need to do is create a branch and name it after the feature you are working. For example let's say you wanted to create a button you would create a branch by running the command `git branch create-button`. This will create a copy of the codebase that you can work on without having to worry about messing up the master branch.  

After you create a branch you can move in to it with `git checkout create-button`. You can check what branch you are currently in by running `git status`

### Commiting your Changes
Once you have finnished working on the feature you need to commit your changes locally, to this you need to firts add the file you modified to the staging area using the command `git add path/to/file`. Once the file is added to the staging area you can now commit your changes using the command `git commit path/to/file -m"detailed description of what you changed"`.

To confirm you have commited all your changes localy run `git status`.

### Push Changes to Github
After you have confimed that you have commited everything you are now ready to push your branch to github, to do this you need to run the command `git push origin name-of-branch`.

## Github Cheatsheet
https://education.github.com/git-cheat-sheet-education.pdf
