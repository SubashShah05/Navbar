let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");

const gencompchoice =()=>{
    const option= ["rock","paper","scissors"];
    Math.random()
}

const playgame =(userchoice) =>{
    console.log("user choice=",userchoice)
    //generate computer choice ->modular
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id")
console.log("choice was clicked",userchoice);
playgame(userchoice);
    })
    })
