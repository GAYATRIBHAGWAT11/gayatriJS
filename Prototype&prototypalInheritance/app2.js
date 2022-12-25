// class Person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;


//         // this.getNameAndAge = function () {
//         //     console.log(`im ${this.name} and my age is ${this.age}`);
//         // }
//     }
//     getNameAndAge() {
//         console.log(`im ${this.name} and my age is ${this.age}`);
//     }
// }


// let Person1=new Person('adam',25)
// let Person2=new Person('steve',30)
// console.log(Person1.getNameAndAge(), Person2.getNameAndAge());


function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);
