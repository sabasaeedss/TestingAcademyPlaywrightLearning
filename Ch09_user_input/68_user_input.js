let num = prompt("Enter a number: ");
num = Number(num); // Convert the input to a number

if (num % 2 === 0)
    console.log(num + " is even.");
else
    console.log(num + " is odd.");
// prompt gives error in node, it is a browser function. You can run this code in browser console.