const Engineer = require("../lib/Engineer.js");

//Test to check the get method which retrieves the role of the employee
test("getRole returning the engineer role", () => {
    let id = 1;
    const testValue = "Engineer";
    const engineerActualValue = new Engineer("Alper", id, "Alper101@hotmail.com", "AlperGithub");
    expect(engineerActualValue.getRole()).toBe(testValue);
});

//Test to return the name of the employee
test("returning the engineer name", () => {
    let id = 1;
    const testValue = "Alper";
    const engineerActualValue = new Engineer("Alper", id, "Alper101@hotmail.com", "AlperGithub");
    expect(engineerActualValue.name).toBe(testValue);
});

//Test to return the github of the employee
test("returning the engineer github", () => {
    let id = 1;
    const testValue = "AlperGithub";
    const engineerActualValue = new Engineer("Alper", id, "Alper101@hotmail.com", "AlperGithub");
    expect(engineerActualValue.github).toBe(testValue);
});

//Test to return the github of the employee using the method
test("getGithub returning the engineer github", () => {
    let id = 1;
    const testValue = "AlperGithub";
    const engineerActualValue = new Engineer("Alper", id, "Alper101@hotmail.com", "AlperGithub");
    expect(engineerActualValue.getGithub()).toBe(testValue);
});