//real QA case scenario

//openbrowser()
// goToLoginPage()
// enterCredentials()
// Click Login()

function openBrowser(callback) {
    console.log("opening browser");
    setTimeout(function () {
        callback();
    }, 1000);
}

function gotoLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3:  Credentials Entered");
        callback();
    }, 1000);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 1000);
}

// this is callback hell
openBrowser(function () {
    gotoLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test completed");
            })
        })
    })
})