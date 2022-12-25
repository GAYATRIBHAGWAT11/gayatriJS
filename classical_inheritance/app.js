class Person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
}

class Teacher extends Person{
    constructor(_name,_age, _classStrength){
        super(_name, _age)
        this.classStrength=_classStrength
    }
}
class Student extends Person{
    constructor(_name,_age, _cgpa){
        super(_name, _age)
        this.classStrength=_cgpa
    }
}

let person1=new Person('gayatri', 22)
let teacher= new Teacher('Aishwarya', 40, 60)
let student=new Student('rythem', 8, 7.7)

console.log(teacher);
console.log(student);