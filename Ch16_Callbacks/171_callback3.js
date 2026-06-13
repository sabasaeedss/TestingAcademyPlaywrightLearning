function cafe(item, callYouWhenTableIsReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    callYouWhenTableIsReady();
}

function callYouWhenTableIsReady() {
    console.log("Calling 334234234")
}

cafe("Burger", callYouWhenTableIsReady);

cafe("Pizza", function () {
    console.log("calling 34234234");
})

cafe("Pizza", () => {
    console.log("calling 34234234");
})