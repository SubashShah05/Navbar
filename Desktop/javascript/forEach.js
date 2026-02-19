//important arrray method

const numbers = [4,2 ,5,8];

//function multiplyby2(number , index){
   // console.log("index is ",index);
   // console.log(number*2);
   //console.log(`${number}*2 =${number*2}`);
  // console.log(`index is ${index} number is ${number}`)
//}

//for(let i=0;i<numbers.length;i++){
   // multiplyby2(numbers[i],i);
//}


// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)  
// })

// numbers.forEach(function(number,index){
//     console.log(number*2,index);
// })

const users = [
    {firstName:"subash",age:27},
    {firstName:"suba",age:7},
    {firstName:"subas",age:47},
]
// users.forEach(function(number){
//     console.log(number.firstName);
// });

users.forEach((user,index)=>{ 
    console.log(user.firstName,index); 
})


