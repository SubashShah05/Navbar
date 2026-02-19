
// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("my name is love bubber");

//     },1000)
// })


// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// })

// promise1.then((message)=>{
//     console.log("the ka message" + message);
// })
// .catch((error)=>{
//     console.log("Error:"+ error)
// }) 
// .finally((message)=>{
//     console.log("finally run this statement")
// })


let promise2 = new Promise ((resolve,reject)=>{
    let success = false;
    if(success){
        resolve("promise fullfilled")
    }
    else{
        reject("promise reject")
    }
})

promise2.then((message)=>{
    console.log(message)
})
.catch((error)=>{
    console.log(error)
})
.finally((message)=>{
    console.log("finally run")
})