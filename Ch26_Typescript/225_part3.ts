function sayHello(msg: string): void {
    console.log(msg);
}

function greet(name: string): string {
    return `Hell0, ${name}`;
}

//never - funcction nerver returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}