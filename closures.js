function myfunct(){
    let count = 0;
    function getcount(){
        return count;
    }
    function increaseCount(){
        count++;
    }
    function decreaseCount(){
        count--;
    }
    return{
        getcount,
        increaseCount,
        decreaseCount
    }
}

let module1 = myfunct()
console.log(module1.getcount())
module1.increaseCount()
module1.increaseCount()
console.log(module1.getcount())
module1.decreaseCount()
console.log(module1.getcount())