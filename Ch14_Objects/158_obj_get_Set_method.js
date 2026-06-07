const user = {
    firstName: "Saba",
    lastName: "Saeed",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Sana SAeed";
console.log(user.fullName);
