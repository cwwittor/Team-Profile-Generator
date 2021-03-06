const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const engineerBlock = require("./html/engineerBlock.js");
const internBlock = require("./html/internBlock.js");
const managerBlock = require("./html/managerBlock.js");
let nameOfTeam;
let html;
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
        console.log(response);
        let userResponse = JSON.stringify(response);
        console.log(userResponse);
        console.log(userResponse.includes("intern"));



        if (userResponse.includes("engineer")) {
            addEngineer();
        } else if (userResponse.includes("intern")) {
            console.log("made it inside of if statement")
            addIntern();
        } else if (userResponse.includes("Complete")) {
            generateHTML();
            fs.writeFile("MyTeam.html", html, function(err) {
                if (err) throw err;
            });
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
        name: "university"
    }]).then(function ({name, id, email, university}) {
        let newIntern = new Intern(name, id, email, university);
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

    const generateHTML = () => {
        let currentEmployees = "";
        for (let i = 0; i < listOfEmployees.length; i++) {
            if (listOfEmployees[i].getRole() === "Engineer") {
                currentEmployees += engineerBlock(listOfEmployees[i]);
            } else if (listOfEmployees[i].getRole() === "Intern") {
                currentEmployees += internBlock(listOfEmployees[i]);
            } else if (listOfEmployees[i].getRole() === "Manager") {
                currentEmployees += managerBlock(listOfEmployees[i]);
            }
        }

        html =`
        <!DOCTYPE html>
        <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0" />
            <title>${nameOfTeam}</title>
    
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
            <link rel="stylesheet" href="html/style.css">
        </head>
    
        <body>
            <div class="container col-lg-12">
    
                ${currentEmployees}
    
            </div>
    
        </body>
        `
        

    }

