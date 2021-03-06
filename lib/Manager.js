//declaring Employee to use the js for employee
const Employee = require("./Employee.js")

//Manager class which uses the employee constructor to build a Manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
    
}

module.exports = Manager;