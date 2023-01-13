

var div=document.querySelector('div')
var likeBtn=document.querySelector('.like')
// arrow fun
// bubbling=> child to parent

div.addEventListener('click', ()=>{
    console.log('div')

})


likeBtn.addEventListener('click', (event)=>{
    event.stopPropagation() //it will stop propagetting
    console.log('btn')

})  //if we want cpturing we can introduce it(true)
