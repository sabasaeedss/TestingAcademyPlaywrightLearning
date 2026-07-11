class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        }
        else {
            console.log("Not allowed");
        }
    }
}

let saba = new ICICI("sabaa", 1000);
console.log(saba.getBalance());
saba.setBalance(1000000, false);

let cashier = new ICICI("Cashier", 2000);
console.log(cashier.getBalance());
cashier.setBalance(200000, true);
console.log(cashier.getBalance());
