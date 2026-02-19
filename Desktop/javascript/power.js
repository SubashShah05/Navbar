
var circle=(r)=>(3.14*r*r);
var rectangle=(l,b)=>(l*b)
var triangle=(b,h)=>(1/2)*b*h
function area(cbFunc,l,b){
  return cbFunc(l,b);
}

console.log(area(circle,5))
console.log(area(rectangle,4,5));
console.log(area(triangle,4,5));