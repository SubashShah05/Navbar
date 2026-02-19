// function delayedMessage(message, ms, shouldCancel) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldCancel) {
//         reject("Operation cancelled");
//       } else {
//         resolve(message);
//       }
//     }, ms);
//   });
// }

// delayedMessage("cancel due to fake",2000,false)
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//     console.log(e);
// })

// delayedMessage("This wont show",2000,true)
// .then((res)=>{
//     console.log(res)
// })
// .catch((e)=>{
//     console.log(e);
// })


function delayedMessage(message,ms,shouldCancel){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(shouldCancel){
        reject("Operation cancelled")
      }
      else{
        resolve(message)
      }
    },ms)
  })
}

delayedMessage("fake news",1000,false)
.then((mess)=>{
  console.log(mess)
})
.catch((err)=>{
  console.log(err)
})