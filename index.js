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
//each employee is pushed into this array
const listOfEmployees = [];


    //initial inquirer that prompts user for team info and directs them to the adding of a manager
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

//Hub for the user to add a new employee or finish the list
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
        //If/Else tree which will add an intern, engineer, or finish the program based on user choice
        let userResponse = JSON.stringify(response);
        if (userResponse.includes("engineer")) {
            addEngineer();
        } else if (userResponse.includes("intern")) {
            console.log("made it inside of if statement")
            addIntern();
        } else if (userResponse.includes("Complete")) {
            //calls for the generation of the html info
            generateHTML();
            //writes the html file
            fs.writeFile("MyTeam.html", html, function(err) {
                if (err) throw err;
            });
        }
    });
}

//Adds a manager and asks for input on manager
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

//Adds a intern and asks for input on intern
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

    //Adds an engineer and asks for input on engineer
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

    //adds all html blocks to the currentEmployees array so they can be added to the final html later before its written
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

