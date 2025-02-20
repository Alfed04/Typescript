// // //#1
// // function geetUser(message:string):void{
// //     console.log("Hello ",message)
// // }
// // geetUser("Alfed")

// // //#2
// // function sum(a: number,b: number):number{
// //     return a+b
// // }

// // console.log(sum(1,2))

// // //#3
// // function isLegal(age:number):boolean{
// //     if(age>=18)
// //         return true
// //     else
// //         return false
// // }

// // console.log(isLegal(14))

// // //#4
// // function delayedCall(anotherFn:()=>void){
// //     setTimeout(anotherFn,1000)
// // }

// // const fn=()=>{
// //     console.log("hello")
// // }
// // delayedCall(fn)


// // how can you assign types to objects --by simply using either interface or type

// //# interface
// interface User{
//     firstName:string,
//     age:number,
//     address:string
// }
// let user:User={
//     firstName:"Alfed",
//     age:22,
//     address:"Padla Shahpuri",
// }
// function isLegal(user:User){
//         if(user.age>=18)
//             return true
//         else
//             return false
//     }

// console.log(isLegal(user))



// //# type
// type Id =string | number

// let id: Id =3
// id="3"

// //type is similar to the interface but it lets you do few other things
// //i. union
// type empId =  string | number
// let emp1: empId =3
// id="3"
// //ii. intersection
// //What if you want to create a type that has every property of multiple types/ interfaces --you can do this by using the type

// interface Manager{
//     name:string,
//     startDate:Date
// }
// interface Employee{
//     name:string,
//     department:string
// }
// type TeamLead = Manager & Employee
// let teamLead:TeamLead={
//     name:'Alfed',
//     startDate:new Date(),
//     department:"Software Developer"
// }