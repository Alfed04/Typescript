abstract class Person{
    name: string;
    age: number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    abstract greet(): string;
    hello():string{
        return "HI"
    }
}

class Employee extends Person{
    name: string;
    age: number;
    constructor(name: string,age: number){
        super(name,age)
        this.name=name;
        this.age=age;
    }
    greet():string{
        return "Hi "+this.name;
    }
}


const e1 = new Employee("Harkirat",23)
console.log(e1.hello())
