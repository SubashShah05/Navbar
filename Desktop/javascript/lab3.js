const s1 =document.querySelector('.container')
const s3 =document.querySelector(".div1")
const s4 =document.querySelector(".div2")
const s5 =document.querySelector(".div3")
const s6 =document.querySelector(".div4")

s3.addEventListener("click",function(e){
    console.log(e.target.innerText)
    s1.style.backgroundColor="red"
})


s4.addEventListener("click",function(e){
    console.log(e.target.innerText)
    s1.style.backgroundColor="green"
})


s5.addEventListener("click",function(e){
    console.log(e.target.innerText)
    s1.style.backgroundColor="blue"
})

s6.addEventListener("click",function(e){
    console.log(e.target.innerText)
    s1.style.backgroundColor="yellow"
})




