//# private feidls

class Credentials {
    #apiKey;
    user;

    constructor(user, key) {
        this.user = user;
        this.#apiKey = key;
    }

    authHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("Admin", "scret_123");
console.log(cred.user);
//console.log(cred.apiKey); // undefined since private

console.log(cred.authHeader());