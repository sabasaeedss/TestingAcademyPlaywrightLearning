let age = 18;
let goToLahore = age >= 18 ? "You can go to Lahore." : "You cannot go to Lahore.";

console.log(goToLahore); // Output: You can go to Lahore.   

let env = "staging";
let apiUrl = env === "production" ? "https://api.production.com" : "https://api.staging.com";

console.log("API URL:", apiUrl); // Output: API URL: https://api.staging.com

let isCI = true;
let browserMode = isCI ? "headless" : "headed";

console.log("Browser Mode:", browserMode); // Output: Browser Mode: headless    


let responseTime = 850; // in milliseconds
let sla = 1000; // Service Level Agreement in milliseconds
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA Breached";

console.log(`Response : ${responseTime} ms - ${slaStatus}`); // Output: Response : 850 ms - Within SLA  


//nested ternary operator
let age2 = 25;
let shouldGo = age2 <= 18 ? "Too young to go." : age2 >= 18 && age2 < 60 ? "You can go." : "You are a senior, consider your health before going.";

console.log(shouldGo); // Output: You can go.

let ageSaba = 45;
let is_saba_eligible = ageSaba >= 18 ? ageSaba < 60 ? "Saba is eligible to go." : "Saba is not eligible to go." : "Saba is not eligible to go.";


console.log(is_saba_eligible); // Output: Saba is eligible to go.   

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirection" :
            statusCode < 500 ? "Client Error" :
                statusCode < 600 ? "Server Error" :
                    "Unknown Status";

console.log(`Status Code: ${statusCode} - Category: ${category}`); // Output: Status Code: 404 - Category: Client Error