# ALL THE THINGS Assignment!

Lets recap the past 4 weeks!

In this assignment, you will use:
Heroku
Node / Express
jQuery 
Bootstrap
HTML / CSS / Javascript

First, set up a new project as we have been doing the past couple days. Start with the NPM init process, add a gitignore, and Procfile. Make sure to set the ‘start’ alias as Heroku will need that as the entry point (in addition to the Procfile). Then set up your file structure:

Main_Project_File
  - node_modules
    - (whatever node modules you pull in through NPM)
  - server
    - public
    - assets
      - scripts
        (your personal client scripts)
      - styles
        (your personal style sheets)
      - vendors
        (your vendor files)
    - views
      - (your view files)
    - app.js (server-side app.js obviously)

Your server side app.js should serve back:
A personal site about you. This can be the resume you created for your application if you wish, however there are some additional upgrades we would like to see. Keep in mind this is not your ‘Personal Project’ that we will start working on in Week 13 (Week 7 in-class). This is just a demonstration that you understand how all the technology works and communicates with each other. 
The personal site should use both jQuery and Bootstrap. This means that you will need to bring those technologies in. However you can do this with NPM (npm install jquery is a thing). This will bring those technologies into your node_modules folder. You will need to move / copy those technologies into your vendors file however.

There will not be a ton of constraints around what your Web experience needs to be, just that it it something about you, that it uses the technologies listed.
Finally, before you get started, you will need to create a light Scope of Work discussing what it is that you are going to build. This is once again to practice your writing ability as well as flex how you think about interactive experiences. 

Once you are complete,  Copy what you have written for your scope into a Markdown file and include that in your project as well. Make sure that you not only check in the final project Heroku, but also that you check in your project to GitHub.

##Hard Mode
Take what you know about Grunt from the MEAN stack lecture and rework it to move Bootstrap and jQuery into your Vendors file when Grunt is run. 

##Pro Mode
Animate the reveal of some information with the use of jQuery in some manner.