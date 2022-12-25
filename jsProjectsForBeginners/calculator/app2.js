let string=""
let buttons=document.querySelectorAll('.button')
console.log(buttons);

Array.from(buttons).forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener('click',(e)=>{
        console.log("this is inner HTML",e.target.innerHTML);
        if(e.target.innerHTML=='='){
            string=eval(string)
            document.querySelector('input').value=string
        }else if(e.target.innerHTML=='c'){
            string=""
            document.querySelector('input').value=string
        }else{
            string=string+e.target.innerHTML;
            console.log(string);
            document.querySelector('input').value=string
        }
    })
})