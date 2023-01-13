// function multiplication(result){
//     alert('hello ' +result)
// }

// function processResult(callback){
// var  result=prompt('please enter value')
// callback(result)
// }
// processResult(multiplication)


function greeting(name){
alert('hello ' +name)
}

function processDetails(callback){
    var name=prompt('please enter your name')
   callback(name)
}
let result=processDetails(greeting)
console.log(result);
