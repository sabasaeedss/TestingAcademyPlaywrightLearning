const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (num) {
    num = Number(num); // Convert the input to a number
    if (num % 2 === 0)
        console.log(num + " is even.");
    else
        console.log(num + " is odd.");
    rl.close();
});

// Note: The above code uses the readline module to take user input in a Node.js environment.
// You can run this code in a Node.js environment, and it will prompt you to enter a number, then it will determine if the number is even or odd.