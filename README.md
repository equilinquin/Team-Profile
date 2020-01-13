# Team-Profile
This project generates a web page for a team of people, displaying very basic information.

As a manager overlooking many employees
I want to create a web page to display my teams basic information
So that I can have quick access to emails and github information.

The assignment started with the tests in the test file.  I created a lib folder with js files that pass the tests.  Then working around that, I was able to build the main js called `app.js`.  Using the guidelines of the README.md file from the homework, I was able to make a skeleton html to generate at the end of the command line.

When `node app.js` is prompted in the command line, a series of questions will appear and the user will input their information for: name, ID, email, and Office Number.  Once they are done, a `managerCard` will be created and will be prompted to add a team member.  The choices are: Engineer, Intern, or No More.  When selecting Engineer or Intern, the user will be prompted to fill in their information: name, ID, email, github username/school, and will be prompted again to add a team member.  When No More is selected, the team.html file will be created and will have the information taken by the user input in a nice, clean and simple web page.

Dependencies used: inquirer (prompts), fs(create HTML), and jest(test).

The `lib` folder consists of all js files that connects to the `app.js` file.  The `manager`, `engineer`, `intern`, and `employee` js were tested and passed, but are the base of creating new team members in the code.  `genereateHTML.js` is the skeleton output of what the web page is going to look like.  It is inside of a function that plugs in the missing cards of all the employees.  `generateCards` is where the different card styles are made for each of the following employees above.

The `output` folder is where the generated HTML is put after the user builds their team.  Inside you will find a sample `team.html` file.

The `templates` folder contains the sample HTML outline of what the html is going to look like.  After many adjustments, I'm able to copy and paste the templates into the generate js files in the `lib` folder.

The `test` folder contains all the tests that was given at the start of the assignment.  By running `npm test`, I was able to test the basic js files in the `lib` folder and debug all errors that occured in the test.  Most errors came from letter case senesitivity.

The `app` js contains the questions for `manager`, `engineer`, `intern`, and `add to your team`.  It also contains the commands to create new employees and inquirer prompts.  This is also where the web page html is created and pushed into the `output` folder.

I was not able to create validations of the user inputs.