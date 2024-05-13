function getMeAPromise(){
    return fetch('/data.json')
}
const promise = getMeAPromise()

promise.then(result =>{
    console.log(result)
}).catch((error) =>{
    console.log("There is an error in the promise", error)
})
console.log(promise)