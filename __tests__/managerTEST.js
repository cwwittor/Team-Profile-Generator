const Manager = require("../lib/manager.js");

//Test to check the get method which retrieves the role of the employee
test("getRole returning the manager role", () => {
    const testValue = "Manager";
    const managerActualValue = new Manager("Alper", 1, "Alper101@hotmail.com", "001");
    expect(managerActualValue.getRole()).toBe(testValue);
});

//Test to return the name of the employee
test("returning the manager name", () => {
    const testValue = "Alper";
    const managerActualValue = new Manager("Alper", 1, "Alper101@hotmail.com", "001");
    expect(managerActualValue.name).toBe(testValue);
});

//Test to return the OfficeNumber of the employee
test("returning the office number", () => {
    const testValue = "001";
    const managerActualValue = new Manager("Alper", 1, "Alper101@hotmail.com", "001");
    expect(managerActualValue.officeNumber).toBe(testValue);
});

//Test to return the OfficeNumber of the employee using the method
test("getOfficeNumber returning the manager office number", () => {
    const testValue = "001";
    const managerActualValue = new Manager("Alper", 1, "Alper101@hotmail.com", "001");
    expect(managerActualValue.getOfficeNumber()).toBe(testValue);
});