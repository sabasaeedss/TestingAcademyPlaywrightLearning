function openBrowser() {
    return new Promise(function (resolve) {
        resolve("open the browser");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    })
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("credentials entered");
    })
}
function loginClicked() {
    return new Promise(function (resolve) {
        resolve("login clicked");
    })
}

openBrowser()
    .then(function (msg) {
        console.log("step 1: " + msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("step 2: " + msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("step 3: " + msg);
        return loginClicked();
    }).then(function (msg) {
        console.log("step 4: " + msg);
    }).catch(function (error) {
        console.log("Error: " + error);
    }).finally(function () {
        console.log("done execution");
    })