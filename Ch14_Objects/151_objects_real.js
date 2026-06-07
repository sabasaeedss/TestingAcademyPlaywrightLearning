let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testName = "login test";

delete config.browser;

console.log(config);


if (config.browser === "chrome") {
    console.log("I will execute TC");
}