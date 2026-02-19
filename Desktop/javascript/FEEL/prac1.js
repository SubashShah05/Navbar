// function wait(ms){
//     return new Promise((resolve,reject)=>{
//      setTimeout(resolve,ms)   
//     })
// }

// wait(2000)
// .then(()=>{
//     console.log("Waited for 2 minute")
// })
// .catch((e)=>{
//     console.log(e);
// })


function wait(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms)
    })
}

wait(2000)
.then((mess)=>{
    console.log("Waited for 2 second")
})
.then((erro)=>{
    console.log("error",erro)
})
.finally((mess)=>{
    console.log("number")
})