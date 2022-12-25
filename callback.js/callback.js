function multiplication(result){
    alert('hello ' +result)
}

function processResult(callback){
var  result=prompt('please enter value')
callback(result)
}
processResult(multiplication)