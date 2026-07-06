class Student {
    static name = "Playwright2X";
    static mentor_name = "Pramod Dutta";
    constructor(name_student, age, phone) {
        this.name_student = name_student;
        this.age = age;
        this.phoneNo = phone;
    }

    static disply() {
        console.log("hi this is common method");
    }
}

const s1 = new Student("Yasho", 35, "903472389");
const s2 = new Student("Sharad", 30, "21103472389");

console.log(Student.name);
console.log(Student.mentor_name);
console.log(s1.name_student);
console.log(s2.name_student);
