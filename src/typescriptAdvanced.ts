// interface User{
//     name: string;
//     age: number;
// }

// function sumOfAge(user1:User, user2: User):number{
//     return user1.age + user2.age
// }

// let result = sumOfAge({name: "Alfed",age: 23},{name: "Faisal", age: 20})
// console.log(result)

// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//     password: number;
// }

// //Pick lets you choose a set of properties from an existing type or interface
// type updatedUser = Pick<User,"id"|"email">

// // Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
// type updatedUserPartial = Partial<updatedUser>

// function userProfile(userCredentials: updatedUserPartial){
//     //database query
// }
// userProfile({})


// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.
// #1
// interface Config {
//     readonly endpoint: string;
//     readonly apiKey: string;
// }

// let config: Config = {
//     endpoint: "https://api/v1/netflix/home.com",
//     apiKey: "abcdefg@12345678"
// }

// #2
// interface Config {
//     endpoint: string;
//     apiKey: string;
// }

// let config: Readonly<Config> = {
//     endpoint: "https://api/v1/netflix/home.com",
//     apiKey: "abcdefg@12345678"
// }
// config.endpoint="hjhsfskf"



// type User = {
//     name: string;
//     email: string;
// }

// // type Users = {[key:string]:User}
// type Users = Record<string,User>
// //Record is typescript concept
// const users: Users = {
//     "raq@ds1": {
//         name: "Alfed",
//         email: "alfedkhan@2002"
//     },
//     "raq@ds2": {
//         name: "Elon Musk",
//         email: "elonmusk@1967"
//     }
// }
// console.log(users["raq@ds1"])



type User = {
    name: string;
    email: string;
}


//Maps is a js thing , maps are also available in languages like C++
//You can use maps like as below to give cleaner type to objects
const map = new Map<string,User>()
map.set("abc123",{name: "Alfed", email: "alfedkhan@2020"})
map.set("xyz789",{name: "Aamir", email: "aamirbhai@2024"})
console.log(map.get("xyz789"))

//Preferrably use maps because of get , set , delete etc. functionalities provided to you by maps



// Exlude is used somewhere when you have a function that can accept several types of inputs but you want to exclude specific types from being passed to it
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// handleEvent('scroll'); //NOT OK SINCE YOU HAVE EXLUDED 'scroll' FROM TYPE EXCLUDEEVENT


//Type inference in zod

import { number, z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type finalUserData = z.infer<typeof userProfileSchema>
app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: finalUserData = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  console.log(updateBody)
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);















