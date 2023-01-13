// class Person {
//     constructor(_name, _age) {
//         // this.name=_name
//         // this.age=_age
//         // it changes the name which souldnt happen so we will be suing
//         this.name = _name
//         this.age = _age

//         this.getName = function () {
//             return this.name
//         }
//     }
// }

// let person1=new Person('gayatri', 22)
// console.log(person1.getName());

// person1.name="aishwarya"

class myDetails{
    constructor(_name, _color){
        this.name=_name,
        this.color=_color,

        this.getDetails=function(){
            console.log(`${this.name} & ${this.color}`);
        }
    }
}
let myDetails1=new myDetails('gayatri', 'black' )
console.log(myDetails1.getDetails());