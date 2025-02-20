// // interface you can use to build key-value pairs(simple javascript objects not class based ojects)

// interface User {
//     name: string;
//     age: number;
//     greet:()=>void;
// }

// let user: User = {
//     name: "Alfed",
//     age: 23,
//     greet(){
//         return "hi"+this.name
//     }
// }

// console.log(user.greet())


// //interfaces can also be used to implement classes

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}