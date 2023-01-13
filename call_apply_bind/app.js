let person1={
    firstname:'steve',
    lastname:'jobs',
    age:102,
}
let printDetails=function(city, power){
    console.log(`hi im ${this.firstname} ${this.lastname} and im ${this.age} years old and im from ${city} and my power is ${power}`);
}
let person2={
    firstname:'marks',
    lastname:'zukerberg',
    age:41,
}
// call
printDetails.call(person2, 'newyork')
// apply
printDetails.apply(person2, ['london','iron man armour'])

// bind
let myFun=printDetails.bind(person2, ['london','iron man armour'])
myFun()


