const Intern = require("../lib/Intern.js");

//Test to check the get method which retrieves the role of the employee
test("getRole returning the intern role", () => {
    const testValue = "Intern";
    const internActualValue = new Intern("Alper", 1, "Alper101@hotmail.com", "NC State");
    expect(internActualValue.getRole()).toBe(testValue);
});

//Test to return the name of the employee
test("returning the intern name", () => {
    const testValue = "Alper";
    const internActualValue = new Intern("Alper", 1, "Alper101@hotmail.com", "NC State");
    expect(internActualValue.name).toBe(testValue);
});

//Test to return the OfficeNumber of the employee
test("returning the intern's school", () => {
    const testValue = "NC State";
    const internActualValue = new Intern("Alper", 1, "Alper101@hotmail.com", "NC State");
    expect(internActualValue.school).toBe(testValue);
});

//Test to return the OfficeNumber of the employee using the method
test("getSchool returning the intern's school", () => {
    const testValue = "NC State";
    const internActualValue = new Intern("Alper", 1, "Alper101@hotmail.com", "NC State");
    expect(internActualValue.getSchool()).toBe(testValue);
});