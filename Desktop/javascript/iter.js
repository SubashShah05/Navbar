// let arr1=[1,2,3,4,5];
// let arr2 =arr1.filter(function(value,index,array){
//    if(value % 2 ==0){
//     return value
//    }
// })

// console.log(arr2)


let arr=[1,2,[3,4],5,6,[7,8],9];
arr.forEach(function(value ,index,array){
    arr.pop(arr[2]);
    arr.pop(arr[5]);

})
console.log(arr)