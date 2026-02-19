// Promise.resolve(10)
// .then((num)=>{
//    return  num * 3
// })
// .then((num)=>{
//    return   num + 4
// })
// .then((num)=>{
//   return  num / 2
// })
// .then((result)=>{
//     console.log(result);
// })


Promise.resolve(10)
.then((num)=>{
   return num *3
})
.then((num)=>{
   return num + 4
})
.then((num)=>{
   return num / 2
})
.then((res)=>{
   console.log("res:",res)
})