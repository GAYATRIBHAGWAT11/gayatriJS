class Person {
    constructor(_name, _age) {
        // this.name=_name
        // this.age=_age
        // it changes the name which souldnt happen so we will be suing
        name = _name
        age = _age

        this.getName = function () {
            return name
        }
    }
}

let person1=new Person('gayatri', 22)
console.log(person1.getName());

// person1.name="aishwarya"
