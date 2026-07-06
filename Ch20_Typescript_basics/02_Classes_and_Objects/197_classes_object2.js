class Person {
    constructor() {
        console.log("i wwill be created whenever an object is created");
    }

    //Attributes
    name;
    email;
    salary;
    address;
    //Behaviour
    sleep() { }
    eat() { }
    walk() { }
}

const obj_ref = new Person();
//console.log(obj_ref);