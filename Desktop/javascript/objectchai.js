//object literals
const mysum = Symbol("key1")

 
const jsUser ={
    name:"subash",
    age:18,
    location:"biratnagar",
    email:"subash@gmail.com",
    isLoggedIn:false,
    [mysum] :"mykey1",
    lastlogindays : ["monday","saturday"]
}
console.log(jsUser);
console.log(jsUser[mysum])


jsUser.name = "Roshan"
//Object.freeze(jsUser)
jsUser.name = "jenish" 
console.log(jsUser)

jsUser.gretting = function(){
    console.log("hello js user");
}

jsUser.grettingtwo = function(){
    console.log(`Hellojs usser,${this.name}`);
}
console.log(jsUser.gretting())
console.log(jsUser.grettingtwo());