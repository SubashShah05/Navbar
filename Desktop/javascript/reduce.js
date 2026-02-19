//sum
// let arr=[1,2,3,4];
// const  newarr=arr.reduce((pre,curr)=>{
//     return pre + curr;
// });
// console.log(newarr);


//largest
// let arr=[1,2,102,3,4];
// const  newarr=arr.reduce((pre,curr)=>{
//     return pre > curr ? pre: curr;
// });
// console.log(newarr);

let n= prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
     arr[i-1]=i;
}
console.log(arr);
