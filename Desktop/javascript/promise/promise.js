// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     //resolve("success")
//     reject("Some error Occured")
// });


// function getData(dataId, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            // console.log("data",dataId);
//            // resolve("Success")
//            reject("ERROr")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }


const getPromise = () =>{
   return new Promise((resolve,reject)=>{
         console.log("I am a promise");
         resolve("success")
        // reject("Some error Occured")
})
}

let promise =getPromise();
promise.then((res)  => {
    console.log("Promise fulfilled")
})

promise.catch((err)  => {
    console.log("Promise fulfilled")
})


