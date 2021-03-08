const Employee = require("../lib/Employee.js");

//Test to return the name of the employee
test("returning the manager name", () => {
    const testValue = "Christian";
    const employeeActualValue = new Employee("Christian", 17, "cwwittor@ncsu.edu");
    expect(employeeActualValue.name).toBe(testValue);
});

//Test to check the get method which retrieves the role of the employee
test("getRole returning the employee role", () => {
    const testValue = "Employee";
    const employeeActualValue = new Employee("Christian", 17, "cwwittor@ncsu.edu");
    expect(employeeActualValue.getRole()).toBe(testValue);
});

//Test to check the get method which retrieves the id of the employee
test("getId returning the employee id", () => {
    const testValue = 17;
    const employeeActualValue = new Employee("Christian", 17, "cwwittor@ncsu.edu");
    expect(employeeActualValue.getId()).toBe(testValue);
});

//Test to check the get method which retrieves the name of the employee
test("getName returning the employee name", () => {
    const testValue = "Christian";
    const employeeActualValue = new Employee("Christian", 17, "cwwittor@ncsu.edu");
    expect(employeeActualValue.getName()).toBe(testValue);
});

//Test to check the get method which retrieves the email of the employee
test("getEmail returning the employee email", () => {
    const testValue = "cwwittor@ncsu.edu";
    const employeeActualValue = new Employee("Christian", 17, "cwwittor@ncsu.edu");
    expect(employeeActualValue.getEmail()).toBe(testValue);
});