// function countdown(number){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve(number)
//       },1000)  
//     })
// }

// countdown(3)
// .then((res)=>{
//     console.log("number is 3")
//     return countdown(2)
// })
// .then(()=>{
//     console.log("number is 2")
//     return countdown(1)
// })
// .then(()=>{
//     console.log("Lift off!")
// })


function countdown(number){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(number)
    },1000)
  })
}

countdown(3)
.then((res)=>{
  console.log("number is 3")
  return countdown(2)
})
.then(()=>{
  console.log("number is 2")
  return countdown(1)
})
.then(()=>{
  console.log("Lift off!")
})