let browsers = ["chrome", "firefox", "safari", "opera", "edge"];
console.log(browsers.length);
console.log(browsers);

browsers.pop();
console.log(browsers);

let removed = browsers.shift();
console.log(removed);
console.log(browsers);

for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
    if (browsers[i] === "opera") {
        console.log("opera is removed from the selenium");
    }

}