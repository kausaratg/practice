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
    await promise
    console.log("Done")
}
myfunc()