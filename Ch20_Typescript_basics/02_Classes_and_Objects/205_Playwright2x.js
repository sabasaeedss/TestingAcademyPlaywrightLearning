/*You need to create a class with the static and non-static methods 
as well as variables. It will be a simple class of our Playwright 
2x batch. You will be also printing out the students. Create 10 objects 
of students and print them. Also create a print method. Also sahi baasai. 
*/

class Playwright2XBatch {
    static batchName = "Playwright2X";
    static mentorName = "Pramod";

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const s1 = new Playwright2XBatch("Saba", 12);
const s2 = new Playwright2XBatch("Sana", 13);
const s3 = new Playwright2XBatch("Umber", 14);
const s4 = new Playwright2XBatch("Madiha", 15);
const s5 = new Playwright2XBatch("Irha", 16);
const s6 = new Playwright2XBatch("Arham", 17);
const s7 = new Playwright2XBatch("Musa", 18);
const s8 = new Playwright2XBatch("Zahra", 19);
const s9 = new Playwright2XBatch("Uswa", 20);
const s10 = new Playwright2XBatch("Seerat", 21);

s1.print();
s2.print();
s3.print();
s4.print();
s5.print();
s6.print();
s7.print();
s8.print();
s9.print();
s10.print();


