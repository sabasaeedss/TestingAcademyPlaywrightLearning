class BaseTest {
    setup() {
        console.log("Base: open browserr");
    }
}

class APIPage extends BaseTest {
    setup() {
        console.log("API")
    }
}

let test = new APIPage();
test.setup();