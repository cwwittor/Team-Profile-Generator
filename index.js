const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const engineerBlock = require("./html/engineerBlock.js");
const internBlock = require("./html/internBlock.js");
const managerBlock = require("./html/managerBlock.js");
let nameOfTeam;
const listOfEmployees = [];


    inquirer.prompt([
        {
            type: "input",
            message: "Hello user, what is your team's name?",
            name: "nameOfTeam"
        }
    ]).then((data) => {
        nameOfTeam = data.nameOfTeam;
        addManager();
    });


const jobAdd = () => {
    inquirer.prompt([{
        type: "list",
        message: "Do you need to add another member to your team?",
        name: "jobAdder",
        choices: [
            "Add an engineer",
            "Add an intern",
            "Team Building Complete"
    ]
    }]).then(function (response) {
        const userResponse = response;
        if (userResponse === "Add an engineer") {
            addEngineer();
        } else if (userResponse === "Add an intern") {
            addIntern();
        } else if (userResponse === "Team Building Complete") {
            //write the file
        }
    });
}

const addManager = () => {
    inquirer.prompt([{
        type: "input",
        message: "What is the name of the Manager?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the id of the Manager?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the email of the Manager?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the office number for the manager?",
        name: "officeNumber"
    }]).then(function ({name, id, email, officeNumber}) {
        let newManager = new Manager(name, id, email, officeNumber);
        listOfEmployees.push(newManager);
        jobAdd();
    });
}

const addIntern = () => {
    inquirer.prompt([{
        type: "input",
        message: "What is the name of the Intern?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the id of the Intern?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the email of the Intern?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the university of the Intern?",
        name: "officeNumber"
    }]).then(function ({name, id, email, officeNumber}) {
        let newIntern = new Intern(name, id, email, officeNumber);
        listOfEmployees.push(newIntern);
        jobAdd();
    });
    }

    const addEngineer = () => {
        inquirer.prompt([{
            type: "input",
            message: "What is the name of the Engineer?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the id of the Engineer?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the email of the Engineer?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Github username of the Engineer?",
            name: "officeNumber"
        }]).then(function ({name, id, email, officeNumber}) {
            let newEngineer = new Engineer(name, id, email, officeNumber);
            listOfEmployees.push(newEngineer);
            jobAdd();
        });
    }

