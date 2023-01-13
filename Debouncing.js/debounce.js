let counter=0
function getData(){
    console.log('fetch data....'+counter++);
}
function debounceFun(callFun, delay){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer) //timer agar kuch hai to clear krdo
        setTimeout(() => {
            callFun();
        }, delay); //1 sec ke bad firse user ne kuch type kiya to use pehle clear krdo
    }
}

const improvePerformance=debounceFun(getData, 1000)