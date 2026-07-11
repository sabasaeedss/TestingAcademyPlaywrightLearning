class BankAccount {
    #balance = 0; //javascript in case of javascript

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(1000);
//console.log(account.balance); //this is not allowed to be accessed, as it is encapsulated private variable.
console.log(account.getBalance());