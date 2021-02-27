//declaring Employee to use the js for employee
const Employee = require("./Employee.js");

//Intern class which uses the employee constructor to build an Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
    
}

module.exports = Intern;