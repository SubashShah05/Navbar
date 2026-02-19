function stepOne(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Step 1 done")
        },1000)
    })
}

function stepTwo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Step 2 done")
        },1000)
    })
}


function stepThree(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Step 3 done")
        })
    })
}

async function runSteps(){
    let res1 = await stepOne();
    console.log(res1);

    let res2 = await stepTwo();
    console.log(res2);

    let res3 = await stepThree();
    console.log(res3);
}

runSteps();