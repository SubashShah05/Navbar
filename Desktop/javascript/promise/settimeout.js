// function hello(){
//     console.log("Hello");
// }

// setTimeout(hello,4000); // 1second = 1000 millisecond


// setTimeout(() => {
//    console.log("Hello World") ;
// }, 3000);  //timeout


// const hello = () =>{
//     console.log("hello")
// }

// setTimeout(hello,3000);



function getData(dataId, getNextData){
    ///2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}
//callbackhell
getData(1,()=>{
    getData(2,() =>{
        getData(3,()=>{
         getData(4);    
        })
    })
})