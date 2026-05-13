let firstname = "John";
let fullname = `My name is ${firstname} Doe.`;
console.log(fullname); // Output: My name is John Doe.

const env = "production";
const apiUrl = `https://api.example.com/${env}/data`;
console.log(apiUrl); // Output: https://api.example.com/production/data     

//Logs
const testName = "Login Test";
const status = "passed";
console.log(`Test: ${testName} - Status: ${status}`); // Output: Test: Login Test - Status: passed

const testcase = "TC001";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testcase}_${timestamp}.png` });

const payload = `{
    "username": "${testuser}",
    "password": "${testpass}"
}`;
console.log(payload); // Output: JSON string with username and password     
