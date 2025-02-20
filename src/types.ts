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
//     age:number,
//     startDate:Date
// }
// interface Employee2{
//     name:string,
//     age:number,
//     department:string
// }
// type TeamLead = Manager & Employee2
// let teamLead:TeamLead={
//     name:"Alfed",
//     age:23,
//     startDate:new Date(),
//     department:"IT"
// }