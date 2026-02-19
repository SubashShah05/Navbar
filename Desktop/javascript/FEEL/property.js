function getSumOfProperty(arr, property){
    return new Promise((resolve,reject)=>{
        let sum=0;
        for(let i=0;i<arr.length;i++){
            if(!(property in arr[i])){
                reject("Property not found in all objects")
                return
            }
            sum=sum + arr[i][property]
        }
        resolve(sum);
    })
}

getSumOfProperty([{ x: 1 }, { x: 2 }, { x: 3 }], "x")
  .then(result => console.log("Sum:", result))  // Output: Sum: 6
  .catch(err => console.error("Error:", err));
