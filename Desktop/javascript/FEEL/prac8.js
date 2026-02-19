
function wait(ms) {
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,ms)     
  })
}

async function logTimeWithDelay() {
  console.log("Start Time:", new Date().toLocaleTimeString());
  await wait(2000); 
  console.log("End Time:", new Date().toLocaleTimeString());
}

logTimeWithDelay();

