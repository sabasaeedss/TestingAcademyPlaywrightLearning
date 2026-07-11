class BaseTest {
    setup() {
        console.log("Base: open browser");
    }
    tearDown() {
        console.log("Base: close Browser");
    }
}

class UITest extends BaseTest {

    setup() {
        super.setup();
        console.log("UI: maximize window");
    }
    tearDown() {
        console.log("UI: take screenshot");
        super.tearDown();
    }

}

let test = new UITest();
test.setup();