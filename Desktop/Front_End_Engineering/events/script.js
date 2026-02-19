// function doSomething(){
//   const head=document.querySelector("h1")
//   head.innerText="Document Object Model"
//   head.style.color="red"
//   head.setAttribute("id","heading")
// }

//It is better not to use attributes for handling events
//It is better to handle all the functionalities in javascript files

const head=document.querySelector("h1")

//Binding function to the html tag on the basis of particular event in js
// head.onclick=function(){
//   const head=document.querySelector("h1")
//   head.innerText="Document Object Model"
//   head.style.color="red"
//   head.setAttribute("id","heading")
// }

//addEventListener listens to the events applied to the particular instance and runs the callback function
head.addEventListener("mouseenter",function(){
  const head=document.querySelector("h1")
  head.innerText="Document Object Model"
  head.style.color="red"
  head.setAttribute("id","heading")

  console.log('mouseenter')

})

//Callback function takes event object as the parameter
//Event object contains information about the event like:which key is pressed
//For eg we want to submit the form when enter key is pressed
const input=document.querySelector("input")
input.addEventListener("keypress",function(event){
   //console.log(event)
   console.log(event.target) //gives the element on which event is applied
   console.log(event.key)
   if((event.key)=="A"){
    console.log("A key is pressed")
   }
   else console.log("A key is not pressed")
})

//creating elements dynamically
// const para=document.createElement("p")
// para.innerText="Document Object Model"
// para.setAttribute("class","para")
// para.style.color="red"

//this tag is created but not visible in the html page now we need to append it inside the DOM as a children of body
/*
           HTML

Head                   Body

                     h1      input    append in the body
*/

// document.body.appendChild(para)

// head.addEventListener("click",(event)=>{
// const para=document.createElement("p")
// para.innerText="Document Object Model"
// para.setAttribute("class","para")
// para.style.color="red"

// document.body.appendChild(para)
// })


head.addEventListener("click",(event)=>{

  const div=document.querySelector("div")
  const para=document.createElement("p")
  para.innerText="Document Object Model"
  para.setAttribute("class","para")
  para.style.color="red"
  div.appendChild(para) //element selected by query selector and appending the child in that 
  })


let count=0
let sumCount=0
const sum=document.querySelector("div.sum>h1")
head.addEventListener("click",(e)=>{
  const div=document.querySelector("div.question")
  const para=document.createElement("p")
  para.innerText=`${count+=10}`
  sumCount+=count
  sum.innerText=`Sum:${sumCount}`

  div.appendChild(para)
})