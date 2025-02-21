enum ResponseStatusCode{
    Success = 200,
    failure,
    not_failure="Not failure"
}
console.log(ResponseStatusCode.not_failure)


function getArg<Generic>(arg: Generic): Generic{
    return arg
}

const result = getArg<string>("harkirat")
const result2 = getArg<number>(100)
console.log(result)
console.log(result2)

function getFirstElement<T>(arr: T[]):T {
    return arr[0];
}
//users cannot send different types of values in inputs it will type errors
// const el = getFirstElement<string>(["harkiratSingh", 1])


const el = getFirstElement<string>(["harkiratSingh", "1"])
// typescript is able to infer the right type of the return type 
el.toLowerCase()