
Array.prototype.mymap=function(callback){
 let newArr=[]
 for(let i=0;i<this.length;i++){
     newArr.push(callback(this[i]))
 }
console.log(newArr); 
}

const sample=[1,2,3]
var output=sample.mymap(function(val, index, array){
    return val*2
})