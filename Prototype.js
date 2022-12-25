// import { func } from "prop-types"

let obj={
   name:"gayatri",
    age:23 
}

class obj123 {
    constructor(getName) {
        this.name = getName
    }
    getName() {
        return this.name
    }
}
let obj2=new obj123('xyz')
console.log(obj2)