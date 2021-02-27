//declaring Employee to use the js for employee
const Employee = require("./Employee.js");

//Engineer class which uses the employee constructor to build an engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
    
}

module.exports = Engineer;