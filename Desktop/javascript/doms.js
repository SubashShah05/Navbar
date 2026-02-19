// accessing html element/tag

// let head = document.querySelector("h1");
// console.log(head)
// console.dir(head)
// head.innerText = "Document Object model"



// let head = document.querySelectorAll("h1")
// console.log(head)  // all element


//document.getElementById("")   on the basis of id
//document.getElementsByClassName("") on the baiss of class
//document.getElementsByTagName("")  on the basis of tagname


//innerText and InnerHtml

//let div = document.getElementById("container")
//console.log(div)

//textual content + tags
//console.log(div.innerHTML);
//textual content
//console.log(div.innerText);

//div.innerHTML += "<button>click</button>"



//changing attribute
// let div = document.getElementById("container")
// div.setAttribute("class","box");



// chnaging style
// let div = document.getElementById("container")
// console.dir(div)
// div.style.color ="red"
// div.style.backgroundColor = "purple"


let para = document.querySelectorAll("p")
let head = document.querySelectorAll("h1")
    console.log(para)
    let sum =0;

    for(let value of para){
        sum +=parseInt(value.innerText)
    }
    console.log(sum);
    head.innerText = sum
  