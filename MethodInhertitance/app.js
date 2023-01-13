class Person{
    constructor(_name,_age){
        this.name=_name
        this.age=_age
    }
    welcome(){
        console.log(`welcome ${this.name}`);
    }
}

class Teacher extends Person{
    constructor(_name,_age, _classStrength){
        super(_name, _age)
        this.classStrength=_classStrength
    }

    test(){
        super.welcome()
    }
}
class Student extends Person{
    constructor(_name,_age, _cgpa){
        super(_name, _age)
        this.classStrength=_cgpa
    }
}

// let person1=new Person('gayatri', 22)
// let teacher= new Teacher('Aishwarya', 40, 60)
// let student=new Student('rythem', 8, 7.7)

// console.log(teacher);
// console.log(student);

let teacher1=new Teacher('Aish', 45, 70)
teacher1.test()  
// welcome Aish



