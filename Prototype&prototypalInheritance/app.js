let myObj = {}
console.log(myObj);


let person1 = {
    name: "gayatri",
    age: 22
}
console.log(person1);

console.log(person1.hasOwnProperty('gender'));

// constructor fun

class Person {
    constructor(_name) {
        this.name = _name;
        // this.age = _age
    }
}
let person2=new Person('ekta', 59)
console.log(person2);



