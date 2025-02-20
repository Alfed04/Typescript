// Basic Types
let id:number=5
let studentName:string="ALFED"
let isGood:boolean=true
let param:any="Hello"
param=66755

//Arrays
let ids:number[]=[2,4,45,345,24]
let arr:any[]=[true,56,"Alfed Khan"]

//Tuple
let person:[number,string,number]=[2,"SURAJ A TRUE BUT NON BELIEVER FRIEND",1]

//Tuple Arrays
let employees:[number,string][]=[[2,"Alfed"],[5,"Mera True Friend"]]

//Unions
let prodId:string|number
prodId=22
prodId='22'

//Enums
enum Direction4{
    up=4,
    down,//5
    left,//6
    right//7
}

//Objects
type User={
    id:number,
    name:string
}
const user:User={
    id:4,
    name:"John"
}

//Type Assertion
let cid:number=3
// let customerId=<number>cid
let customerId=cid as number
customerId=44



//Functions
function addNumbers(x:number,y:number):number{
    return x+y
}
addNumbers(45,656)

//Void
function log(message:string|number):void{
    console.log("You are Welcomed , your message : ");
}
// log(true)


//Interfaces
interface UserInterface{
    readonly id:number,
    name:string,
    age?:number
}
const user1:UserInterface={
    id:4,
    name:"John"
}
// user1.id=5


//Interfaces with Funcions
interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc=(x:number,y:number):number=>{
    return x+y
}

interface PersonInterface{
    id:number,
    name:string,
    register():string
}

//Classes
class Person implements PersonInterface{
    id:number
    name:string
    constructor(id:number,name:string){
        this.id=id
        this.name=name
    }
    register(){
        return `${this.name} is registered`
    }
}

const alfed=new Person(2,"Alfed Programmer")
const mike=new Person(7,"mike Programmer")

//Subclasses

class Employee extends Person{
    position:string
    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position=position
    }
}

const emp1=new Employee(5,"HelloMan","Developer")

//Generics
function getArray<T>( items:T[]):T[]{
    return new Array().concat(items)
}

// let numArray=getArray<number>([1,3,4,6,4])
// let strArray=getArray<string>(['Alfed','Suraj','Good'])

// numArray.push(56)
// strArray.push('Hello')
