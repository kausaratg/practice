const myarr = [
    {
        name: "jacob",
        age: 15
    },
    {
        name: "Mehul",
        age: 23
    },
    {
        name: "Faridat",
        age: 24
    }
]
// mapfunction
const mapArr = myarr.map(element => element.age+5)
console.log(mapArr)

//filter
const filtArr = myarr.filter(element => element.age > 15)
console.log(filtArr)

// For Each
const myarrEach = myarr.forEach(element =>{
    console.log(element.name)
    console.log(element.age)
})
myarrEach

//find
const findArr = myarr.find(friend => friend.name === 'Mehul'
)
console.log(findArr)