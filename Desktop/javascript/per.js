const pi=3.14;
 let rectangle=(l,b)=>{
   var p= l+b
     var a= l*b
     console.log("perimeter of rectangle is",p)
     console.log("Area of rectangle is",a)

}
let circle=(r)=>{
   const p=  2*pi*r
     const a=pi*r*r
     console.log("perimeter of circle is",p)
     console.log("Area of circle is",a)
}

let Triangle=(a,b,h)=>{
   var p=  a+b+h 
     var a=0.5*b*h
     console.log("perimeter of triangle is",p)
     console.log("Area of triangle is",a)
}

function measure(shape,n1,n2,n3){
 var res= shape(n1,n2,n3);
 return res;
}
console.log (measure(rectangle,2,5))
console.log (measure(Triangle,2,5,4))
console.log (measure(circle,2))