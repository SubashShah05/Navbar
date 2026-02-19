function isUsernameAvailable(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.toLowerCase() === "admin") {
        reject("Name taken");
      } else {
        resolve(true);
      }
    }, 1000); 
  });
}

async function checkAvailability(name) {
  try {
    await isUsernameAvailable(name);
    console.log("Available");
  } catch (error) {
    console.log("Error:", error);
  }
}


checkAvailability("admin"); 
checkAvailability("john");  
