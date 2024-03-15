function doSomeHeavyTask(){
    const ms = getRandomValue([100,250,150,200,300,600,500,1000,1400,2500]);
    const throwError = getRandomValue([1,2,3,4,5,6,7,8]) === 8;

    if(throwError){
        const randomError = getRandomValue([
            "DB Payment Failure",
            "DB Server is Down",
            "Reading Properties of Undefined",
            "Bad request",
            "Not found error"
        ])
        throw new Error(randomError);
    }
    return new Promise((resolve,reject)=>setTimeout(()=> resolve(ms)))
}

function getRandomValue(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
module.exports= {doSomeHeavyTask}