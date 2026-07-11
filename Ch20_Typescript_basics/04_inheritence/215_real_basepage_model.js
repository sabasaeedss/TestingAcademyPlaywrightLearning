class BasePage {
    verify() {
        console.log("verifying the basepage");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}

class DashboardPage extends BasePage {
    verify() {
        console.log("Verify: welcome message shown");
        console.log("Verify: Sidebar menu loaded");
    }

}

class CartPage extends BasePage {
    verify() {
        console.log("Verify: Cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let pages = [new LoginPage(), new DashboardPage(), new CartPage()];

pages.forEach(function (page) {
    page.verify();
    console.log("___");
});