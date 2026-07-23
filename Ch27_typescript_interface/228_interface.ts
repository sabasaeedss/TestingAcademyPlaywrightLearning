interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test: TestCase = {
    id: 1,
    name: "saba",
    status: "active",
    duration: 1500
}

console.log(test.id);