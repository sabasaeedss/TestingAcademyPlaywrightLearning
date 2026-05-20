/*Question 1 — HTTP Status Code Categorizer

Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid*/

let statusCode = 200;
if (statusCode >= 200 && statusCode < 300) {
    console.log("Success");
}
else if (statusCode >= 300 && statusCode < 400) {
    console.log("Redirection");
}
else if (statusCode >= 400 && statusCode < 500) {
    console.log("Client Error");
}
else if (statusCode >= 500 && statusCode < 600) {
    console.log("Server Error");
}
else {
    console.log("Invalid Status Code");
}