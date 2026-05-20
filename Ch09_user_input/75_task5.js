/*
Question 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful*/

let attempts = 1;
if (attempts === 0) {
    console.log("Login successful");
}
else if (attempts < 3) {
    console.log(`${3 - attempts} attempt${attempts === 2 ? '' : 's'} left before lockout`);
}
else {
    console.log("🔒 Account Locked — Contact support");
}