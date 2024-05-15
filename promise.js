// Basic example on Promise

// function getMeAPromise(){
//     return fetch('/data.json')
// }
// const promise = getMeAPromise()

// promise.then(result =>{
//     console.log(result)
// }).catch((error) =>{
//     console.log("There is an error in the promise", error)
// })
// console.log(promise)

// Nesting promise

function getMeAPromise(){
    return fetch('/data.json')
}
const promise = getMeAPromise()

promise.then(result =>{
    console.log(result)
    return result.json()
}).then((data2) =>{
    console.log("The data values from Json: ", data2)
}).then(() =>{
    console.log("It will be executed")
})
console.log(promise)