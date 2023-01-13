{/* <span class='mins'>00</span>:<span class='seconds'>00</span>:<span class='tens'>00</span> */}


let seconds=00
let mins=00
let tens=00

let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');

let interval;

btnStart.addEventListener('click', ()=>{
    clearInterval(interval)
    interval=setInterval(startTimer, 1000)
} )

btnStop.addEventListener('click', ()=>{
    clearInterval(interval)
})


btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    seconds="00"
    mins="00"
    tens="00"
    getSeconds.innerHTML=seconds
    getMins.innerHTML=mins
    getTens.innerHTML=tens

})

function startTimer(){
   tens++
   if(tens<=9){
       getTens.innerHTML='0'+tens
   }
   if(tens>9){
       getTens.innerHTML=tens
   }

   if(tens>99){
       seconds++
       getSeconds.innerHTML=seconds
       tens=0
       getTens.innerHTML='0'+0
    }
    if(seconds>9){
        getSeconds.innerHTML=seconds
    }
    if(seconds>59){
        mins++
        getMins.innerHTML='0'+mins
        seconds=0
        getSeconds.innerHTML='0'+0
    }
    if(mins>9){
        getSeconds.innerHTML=mins
    }
}