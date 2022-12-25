// let inputField=document.querySelector('input')
let addBtn=document.querySelector(".addtask")
addBtn.addEventListener('click', function(){
    // document.querySelector('.input').value=emptyStr;
console.log("hello");
    let input=document.querySelector('.input').value   ;
    console.log(input); 
let container=document.querySelector('.container')
let ptag=document.createElement('p')
let clickBtn=document.createElement('button')
clickBtn.innerHTML=`click me`
let editBtn=document.createElement('button')
editBtn.innerHTML=`edit`
let saveBtn=document.createElement('button')
saveBtn.innerHTML=`save`
// let dltbtn=document.createElement('button')
// dltbtn.innerHTML=`<button>Delete</button>`
ptag.innerHTML=`<p>${input}</p>`
container.append(ptag, clickBtn, editBtn, saveBtn)

clickBtn.addEventListener('click', function(){
    ptag.innerHTML=""
})
editBtn.addEventListener('click', function(){
    console.log("edit btn");
    console.log("input=ptag",input=ptag)
})
saveBtn.addEventListener('click', function(){
    
})
})




