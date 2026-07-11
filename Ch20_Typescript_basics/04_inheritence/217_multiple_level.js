class BasePage {
    constructor(name) {
        this.name = name;
    }
    open() {
        console.log("[open] " + this.name);
    }

}

class AuthPage extends BasePage {
    login(user) {
        console.log("[login] " + user);
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("admin portal");
    }

    manageUsers() {
        console.log("[Admin] managing users");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("SuperAdmin");
admin.manageUsers();