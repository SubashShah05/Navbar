function sayhello(){
    console.log("hello");
}

function sayhi(){
    console.log("hi");
}


function add(num1,num2,callback){
    console.log(num1+num2);
    callback();
}

let a=9;
let b=10;
add(a,b,sayhello);
add(30,5,sayhi);

add(40,5, function(){   //anonymous function
console.log("byee");
})