var f=(c)=>c*9/5+32;
var c=(f)=>(f-32)*5/9;

function temperature(c,degree){
    return degree(c);
}
console.log(temperature(32,f));
console.log(temperature(32,c));