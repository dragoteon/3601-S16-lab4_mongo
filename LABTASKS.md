#Lab Tasks

## Part 1: Exploring the project

- Set up this project to use Travis CI, and add your build status icon to the README.

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server-side routing specific to the database, and the client folder contains the client-side portion of the project.

> Has API folder instead of assets, and public is changed to client. and config is added containing mongo stuff.

##### How is app.js (at the project root) different from the ones in the previous two labs? Give examples of the kinds of urls that app.js handles, and describe where each case will be routed.

> App.js now contains server information including port and address......may need to be updated.

##### The project is connected to the database via mongoose. Where is this connection set?

> The connection is set in app.js. mongoose.connect('mongodb://127.0.0.1:27017/pets');

##### Explain how api/pets/pets.controller.js gets added to app.js (remember this is all server-side).

> App.js uses app.use to show dependancy.

##### Study the file api/pets/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the model?

> pet documents containing strings

-  What functions are defined in the controller? How do they change the database data?

> index, create , and destroy. index finds at an idex, create creates at an index, destroy...well....destroys at an index.

-  How does one get or delete elements in the database?

> index gets, and delete destroys.

##### What is the purpose of index.js in the api/pets? Where is it referenced?

> Index.js redirects traffic

##### What views are used in the project?

> 404, about, and main

##### We've seen a few different ways to display HTML in the last couple labs (straight, individual HTML pages and components being added to HTML). How are HTML files combined and displayed in this lab? 

>Protip: main.html isn't a full HTML document, so how does it get displayed?

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

##### client/app.js performs client-side routing. How do you think it works?

## Part 2: Add another field to pet data.

- Add a numeric field to the pet model (say, for example, weight). Add a field to enter weight when a new pet document is created. Add a field in the main page to show the heaviest of all pets and its weight. Remember to practice TDD and perform frequent commits.

>Protip: Make sure to separate business logic functions from functions that make http calls. That is, don't have a function that performs both. This alows for optimal testing conditions.

## Part 3: Add a GPA calculator

- Add a view to enter courses and display the GPA. Add a link on the navigation bar that leads to it; add the corresponding route. Entered courses (name, credits, letter grade) must be stored in the database. Practice TDD and perform frequent commits. Don't forget to add new files to git before committing. Use the refactoring menu when renaming files (this will rename then in the git repo as well). Remember to check out you test coverage, and watch your build history on Travis-CI.
