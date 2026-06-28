/*
Test Data Generator
As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).

Input
Generate 8 users
Output
USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com | editor | ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | INACTIVE
*/
const roles = ["admin", "editor", "viewer", "tester", "manager"];
function questionName(input) {
  let users = [];
  let user = {};
  let roleCounter = 0;
  for (let i = 1; i <= input; i++) {
    user = { ID: `USR-000${i}`, name: `TestUser_${i}`, email: `testuser${i}@testingacademy.com`, role: roles[roleCounter], status: `${i % 3 === 0 ? "INACTIVE" : "ACTIVE"}` };
    ++roleCounter;

    users.push(user);
    if (roleCounter === roles.length) {
      roleCounter = 0;
    }
  }
  return users;
}
console.log(questionName(9))