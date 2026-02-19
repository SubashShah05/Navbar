var stat = document.querySelector("h5")
var addfriend = document.querySelector("#add")
var remove = document.querySelector("#remove")
addfriend.addEventListener("click",function(){
    stat.innerHTML='Friends'
    stat.style.color="green"
})

remove.addEventListener("click",function(){
    stat.innerHTML='Stranger'
    stat.style.color="red"
})