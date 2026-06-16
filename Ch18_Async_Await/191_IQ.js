//1st

// async function sayHello() {
//     return "Hello QA";
// }

// sayHello().then(function (res) {
//     console.log(res);
// })

//2nd
// async function getStatus() {
//     let status = await Promise.resolve(200);
//     console.log("Status code:", status);
// }
// getStatus();

//3rd
async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked Login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified Dashboard");
    console.log(step3);

}

testFlow();