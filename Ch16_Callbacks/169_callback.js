function print() {
    console.log("Normal Function");
}

function placeOrder(item, callback) {
    console.log("Hi, your order is placed" + item);
    callback();
}

//first way
placeOrder("Burger", function () {
    console.log("Hi, how are you?");
});

//second way
placeOrder("Pizza", print);

//third way
placeOrder("Nuggets", () => {
    console.log("Arrow callback function");
})