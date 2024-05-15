const timer = document.getElementById('timer')

function mypromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            timer.innerText = "Hello world"
        }, 1000)
        resolve()
    })

}

promise = mypromise()
async function myfunc(){
    try{
        const data = await promise
        console.log("Done")
    }catch(error){
        console.log("Opps some error", error)
    }
}
myfunc()