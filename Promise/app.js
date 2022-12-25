let myPromise=new Promise(function(resolve, reject){
    let a=4;
    let b=4;
    setTimeout(()=>{
        if(a==b){
            resolve('equal')
        }else{
            reject('not equal')
        }
        
    })
})

// console.log(myPromise); //pending state

myPromise.then(function(resolveResult){
console.log(resolveResult);
}) //fullfilled state

myPromise.catch(function(RejectedResult){
    console.log(RejectedResult);
}) //rejected state