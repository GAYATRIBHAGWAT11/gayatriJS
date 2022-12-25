let a=2
let b='2'
console.log(a==b);
// it will check for value not for type=>loose checking
console.log(a===b); //strict checking

// truthy and falsu vallues


let a1="0"
// let a2=undefined
if(a1){
    console.log('im truthy');
}else{
    console.log('im falsy');
}



// console.log([]===true || 0);


let firstPerson={
    name:'adam',
    age:23,

    address:{
        city: 'lucknow',
        state:'up'
    }
}

let secondPerson={...firstPerson}  //shallow copy
console.log(firstPerson);
console.log(secondPerson);

secondPerson.address.city='delhi'




let firstPerson1={
    name:'adam',
    age:23,

    address:{
        city: 'lucknow',
        state:'up'
    }
}
let secondPerson2=JSON.parse(JSON.stringify(firstPerson1))

secondPerson2.address.city='delhi'
console.log(firstPerson1);
console.log(secondPerson2);


// closures


function test(){
    let a=2

    function test1(){
        console.log(a);
    }
    return test1
}
let fun=test()
console.log(fun);
fun()


