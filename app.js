const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const createCards = require("./lib/generateCards");
const manArr = [];
const engArr = [];
const intArr = [];

const questionsManager = [
  {
    type: "input",
    name: "name",
    message: "Enter your Manager's name."
  },
  {
    type: "input",
    name: "id",
    message: "Enter your Manager's ID number."
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Manager's email."
  },
  {
    type: "input",
    name: "officenumber",
    message: "Enter you Manager's Office Number."
  }
];

const questionsEngineer = [
  {
    type: "input",
    name: "name",
    message: "Enter their name."
  },
  {
    type: "input",
    name: "id",
    message: "Enter their ID number."
  },
  {
    type: "input",
    name: "email",
    message: "Enter their Email."
  },
  {
    type: "type",
    name: "github",
    message: "Enter their GitHub username."
  }
];
const questionsIntern = [
  {
    type: "input",
    name: "name",
    message: "Enter their name."
  },
  {
    type: "input",
    name: "id",
    message: "Enter their id number."
  },
  {
    type: "input",
    name: "email",
    message: "Enter their email."
  },
  {
    type: "type",
    name: "school",
    message: "Enter their school."
  }
];
const questionsTeam = [
  {
    type: "list",
    name: "employee",
    message: "Please add your Team.",
    choices: ["Engineer", "Intern", "No More"]
  }
];

function promptManager() {
  return inquirer.prompt(questionsManager);
}
function promptEngineer() {
  return inquirer.prompt(questionsEngineer);
}
function promptIntern() {
  return inquirer.prompt(questionsIntern);
}
function promptEmployee() {
  return inquirer.prompt(questionsTeam).then(emp => {
    if (emp.employee === "Engineer") {
      promptEngineer().then(res => {
        const eng = new Engineer(res.name, res.id, res.email, res.github);
        engArr.push(eng);
        promptEmployee();
      });
    } else if (emp.employee === "Intern") {
      promptIntern().then(res => {
        const int = new Intern(res.name, res.id, res.email, res.github);
        intArr.push(int);
        promptEmployee();
      });
    } else {
      createCards(manArr, engArr, intArr);
    }
  });
}

promptManager()
  .then(res => {
    const man = new Manager(res.name, res.id, res.email, res.officenumber);
    manArr.push(man);
  })
  .then(() => {
    promptEmployee();
  });
