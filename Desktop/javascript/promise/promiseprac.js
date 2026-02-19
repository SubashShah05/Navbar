//✅ Creating a Promise

const myPromise = new Promise((resolve, reject) => {
    let success = false;
  
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Something went wrong.");
    }
  });
  
  //Using .then() and .catch()
  myPromise
  .then((result) => {
    console.log(result); // "Operation successful!"
  })
  .catch((error) => {
    console.log(error); // "Something went wrong."
  });





//Example: Simulating async API call
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received!");
      }, 2000); // simulate 2 seconds delay
    });
  }
  
  fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));


//     fetchData()
//   .then((data) => {
//     console.log(data);
//     return "Processing data...";
//   })
//   .then((msg) => {
//     console.log(msg);
//   });


function fetch(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("data succesd");
    },2000)
  })
}

fetch().then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})
.finally((data)=>{
  console.log("data fetch")
})
  